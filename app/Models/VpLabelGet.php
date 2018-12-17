<?php

namespace App\Models;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;

class VpLabelGet extends Model
{
    protected $table = "vip_label_get";
    protected $connection = "mysql_kms";
    public $timestamps = false;

    public function getUserKeyByQuestionIds($questionIds)
    {
        $condition = array(
            'get_type' => 'paper'
        );
        $condition['task_id'] = array('in' => $questionIds);
        $result = $this->findAll($condition, [['task_id', 'asc']], ['user_key']);
        $res = array_unique($result, SORT_REGULAR);//对二维数组去重处理
        $userKeys = [];
        foreach ($res as $v) {
            $userKeys[] = $v['user_key'];
        }
        $user = new User();
        $listUserKeyNames = $user->getUserNamesByUserKeys($userKeys);
        return $listUserKeyNames;

    }

    public function getPeoplesByQuestionIds($listUserKeyNames, $questionIds)
    {
        $condition = array(
            'get_type' => 'paper'
        );
        $condition['task_id'] = array('in' => $questionIds);
        $result = $this->findAll($condition, [['task_id', 'asc']], ['task_id', 'user_key', 'create_time']);
        $paperIdNames = [];
//        foreach ($result as $v){
//            if(array_key_exists($v['task_id'],$paperIdNames)){
//                $str = '<td class="t-person">'.$listUserKeyNames[$v['user_key']].'</td>'.'<td class="t-time">'.$v['create_time'].'</td>';
//                $paperIdNames[$v['task_id']] = $paperIdNames[$v['task_id']].$str;
//            }else{
//                $str = '<td class="t-person">'.$listUserKeyNames[$v['user_key']].'</td>'.'<td class="t-time">'.$v['create_time'].'</td>';
//                $paperIdNames[$v['task_id']] = $str;
//            }
//        }
        foreach ($result as $v) {
            if (array_key_exists($v['task_id'], $paperIdNames)) {
                $paperIdNames[$v['task_id']][] = [
                    'user_name' => $listUserKeyNames[$v['user_key']],
                    'create_time' => $v['create_time']
                ];
            } else {
                $paperIdNames[$v['task_id']][] = [
                    'user_name' => $listUserKeyNames[$v['user_key']],
                    'create_time' => $v['create_time']
                ];
            }
        }
        $intersection = array_diff($questionIds, array_keys($paperIdNames));
        $noHaveUserKeyPaperIds = [];
        foreach ($intersection as $v) {
            $noHaveUserKeyPaperIds[$v] = '';
        }
        $paperIdNames = $paperIdNames + $noHaveUserKeyPaperIds;
        return $paperIdNames;

    }


    /**
     * 添加贴标签单题
     * @param $data
     * @throws \Exception
     */
    public function addPaperQuestion($searchArgs)
    {
        $this->beginTransaction();
        try{
            //如果套卷存在
            if ($searchArgs['paperCount'] > 0) {
                //查询套卷
                $model = new Paper();
                $model->getLabelPaperList($searchArgs);
            }
            //如果单题存在
            if ($searchArgs['questionCount'] > 0) {
                //查询单题
                $model = new Question();
                $model->getLabelQuestionList($searchArgs);
            }
            $this->commit();
            return true;
        }catch (\Exception $e){
            $this->rollback();
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * 统计可退回任务数
     * @param $searchArgs
     * @return array
     */
    public function getReturnCountByUserKey($searchArgs)
    {
        $condition = ['subject_id' => $searchArgs['subjectId'], 'user_key' => $searchArgs['userKey'],'get_type' => 'question', 'is_finish' => 0, 'is_return' => 0];
        $questionCount = $this->count($condition);
        $condition = ['subject_id' => $searchArgs['subjectId'], 'user_key' => $searchArgs['userKey'], 'get_type' => 'paper', 'is_finish' => 0, 'is_return' => 0];
        $paperCount = $this->count($condition);
        return [
            'questionCount' => $questionCount,
            'paperCount' => $paperCount
        ];
    }

    /**
     * 删除未完成任务
     * @param $searchArgs
     */
    public function removePaperQuestion($searchArgs)
    {
        $this->beginTransaction();
        $condition = ['subject_id'=>$searchArgs['subjectId'],'user_key' => $searchArgs['userKey'], 'is_finish' => 0, 'is_return' => 0];
        $vipGetJudgeQuestion=new VipGetJudgeQuestion();
        foreach ($searchArgs['taskCheck'] as $val) {
            //判断退回类型 question 单题,paper 套卷
            if($val == 'question')
            {
                $questionModel=new Question();
                $teacherLabelTagModel=new VpTeacherLabelTag();
                $labelContentModel=new VipLabelTagContent();
                $condition['get_type']='question';
                $list=$this->findAll($condition,['id'=>'desc'],['id','task_id','user_key']);
                foreach($list as $k => $v)
                {
                    //批量更新
                    $result = $this->edit(['is_return' => 1], ['id' => $v['id']]);
                    if ($result === false) {
                        $this->rollback();
                        throw new \Exception('删除任务失败');
                    }
                    //查询单题信息
                    $info=$questionModel->findOne(['id'=>$v['task_id']],['id'=>'desc'],['id','is_get','is_label']);
                    if($info['is_get'] > 0){
                        //更新单题表
                        $result = $questionModel->edit(['is_get' => $info['is_get'] - 1], ['id' => $info['id']]);
                        if ($result === false) {
                            $this->rollback();
                            throw new \Exception('删除任务失败');
                        }
                    }
                    if($info['is_label'] > 0){
                        $result=$questionModel->edit(['is_label'=>$info['is_label']-1], ['id' => $info['id']]);
                        if($result === false){
                            $this->rollback();
                            throw new \Exception('删除任务失败');
                        }
                        //更新贴标签表
                        $result=$teacherLabelTagModel->edit(['is_remove'=>1],['question_id'=>$v['task_id'],'user_key'=>$v['user_key'],'user_type'=>'teacher']);
                        if($result === false)
                        {
                            $this->rollback();
                            throw new \Exception('删除任务失败');
                        }
                    }
                    //删除贴标签内容表
                    $result=$labelContentModel->edit(['is_remove'=>1],['question_id'=>$v['task_id'],'user_key'=>$v['user_key'],'user_type'=>'teacher']);
                    if($result === false)
                    {
                        $this->rollback();
                        throw new \Exception('删除任务失败');
                    }
                }
            }
            if($val == 'paper')
            {
                $paperModel=new Paper();
                $questionModel=new Question();
                $teacherLabelTagModel=new VpTeacherLabelTag();
                $labelContentModel=new VipLabelTagContent();
                $vpJudgeSourceQuestionModel=new VpJudgeSourceQuestion();
                $condition['get_type']='paper';
                $list=$this->findAll($condition,['id'=>'desc'],['id','task_id','user_key']);
                foreach($list as $k => $v)
                {
                    //批量更新
                    $result = $this->edit(['is_return' => 1], ['id' => $v['id']]);
                    if ($result === false) {
                        $this->rollback();
                        throw new \Exception('删除任务失败');
                    }
                    //查询
                    $info=$paperModel->findOne(['id'=>$v['task_id']],['id'=>'desc'],['id','is_get','is_label']);
                    if($info['is_get'] > 0){
                        //更新套卷表领取状态
                        $result=$paperModel->edit(['is_get'=>$info['is_get']-1],['id'=>$info['id']]);
                        if($result === false)
                        {
                            $this->rollback();
                            throw new \Exception('删除任务失败');
                        }
                    }
                    if($info['is_label'] > 0){
                        //更新套卷表贴标签状态
                        $result=$paperModel->edit(['is_label'=>$info['is_label']-1],['id'=>$info['id']]);
                        if($result === false)
                        {
                            $this->rollback();
                            throw new \Exception('删除任务失败');
                        }
                    }
                    //查询套卷下所有单题
                    $questionList=$questionModel->getQuestionByPaperId($info['id'],['id'=>'desc']);
                    foreach($questionList as $row)
                    {
                        if($row['is_get'] > 0){
                            //更新单题领取状态
                            $result = $questionModel->edit(['is_get' => $row['is_get'] - 1], ['id' => $row['id']]);
                            if ($result === false) {
                                $this->rollback();
                                throw new \Exception('删除任务失败');
                            }
                        }
                        //判断是否贴过标签，如果贴过标签，把贴过标签-1
                        if($row['is_label'] > 0){
                            $result = $questionModel->edit([ 'is_label'=>$row['is_label']-1], ['id' => $row['id']]);
                            if ($result === false) {
                                $this->rollback();
                                throw new \Exception('删除任务失败');
                            }
                        }
                        //查看套卷下单题是否在判定池
                        $result=$vpJudgeSourceQuestionModel->edit(['is_remove'=>1],['question_id'=>$row['id'],'is_remove'=>0]);
                        if($result === false){
                            $this->rollback();
                            throw new \Exception('删除任务失败');
                        }
                        $result=$vipGetJudgeQuestion->edit(['is_return'=>1],['question_id'=>$row['id'],'is_finish'=>0,'is_return'=>0]);
                        if($result === false){
                            $this->rollback();
                            throw new \Exception('删除任务失败');
                        }
                    }
                    //更新贴标签表
                    $result=$teacherLabelTagModel->edit(['is_remove'=>1],['paper_id'=>$v['task_id'],'user_key'=>$v['user_key'],'user_type'=>'teacher']);
                    if($result === false)
                    {
                        $this->rollback();
                        throw new \Exception('删除任务失败');
                    }
                    //删除贴标签内容表
                    $result=$labelContentModel->edit(['is_remove'=>1],['paper_id'=>$v['task_id'],'user_key'=>$v['user_key'],'user_type'=>'teacher']);
                    if($result === false)
                    {
                        $this->rollback();
                        throw new \Exception('删除任务失败');
                    }
                }
            }
        }
        $this->commit();
        return true;
    }

    /**
     * 获取领取的userKey
     * @param array
     * @return array
     */
    public function getUserKeys($condition)
    {
        $result = $this->findAll($condition, ['task_id' => 'asc'], ['task_id', 'user_key', 'create_time']);
        return $result;
    }


    /**
     * 获取套卷试题列表
     * @param $searchArgs
     */
    public function getLabelPaperList($searchArgs)
    {
        $condition = [];
        if (isset($searchArgs['subjectId']) && $searchArgs['subjectId'] > 0) {
            $condition[$this->table.'.subject_id'] = $searchArgs['subjectId'];
        }
        $condition[$this->table.'.user_key'] = $searchArgs['userKey'];
        $condition[$this->table.'.get_type'] = 'paper';
        $condition[$this->table.'.is_return'] = 0;
        if (isset($searchArgs['is_finish']) && intval($searchArgs['is_finish']) >= 0) {
            $condition[$this->table.'.is_finish'] = $searchArgs['is_finish'];
        }
        $join = [
            [
                'type' => 'left',
                'table' => 'vip_paper as b',
                'on' => ['b.id' => $this->table.'.task_id']
            ]
        ];
        $result = $this->findAll($condition, [ $this->table.'.id' => 'asc'], [ $this->table.'.*', 'b.file_name', 'b.province', 'b.year', 'b.grades', 'b.source'], '', $join, $searchArgs['currentPage'], $searchArgs['pageSize']);
        return $result;
    }


    /**
     * 获取试题内容
     * @param $searchArgs
     */
    public function getLabelQuestionInfo($searchArgs)
    {
        $condition = [
            'user_key' => $searchArgs['userKey'],
            'get_type' => 'question',
            'is_finish' => 0,
            'is_return' => 0
        ];
        //判断是否存在学科id
        if ($searchArgs['subjectId'] > 0) {
            $condition['subject_id'] = $searchArgs['subjectId'];
        }
        $questionInfo=$this->findOne($condition,['id'=>'desc'],['*'],'',[]);
        return $questionInfo;
    }

    /**
     * 跳过试题信息
     * @param $searchArgs
     * @return mixed
     */
    public function getJumpLabelQuestionInfo($searchArgs)
    {
        //如果跳过试题存在
        $condition = [
            'task_id'=>['gt'=>$searchArgs['questionId']],
            'user_key' => $searchArgs['userKey'],
            'get_type' => 'question',
            'is_finish' => 0,
            'is_return' => 0
        ];
        //判断是否存在学科id
        if ($searchArgs['subjectId'] > 0) {
            $condition['subject_id'] = $searchArgs['subjectId'];
        }
        $questionInfo=$this->findOne($condition,['id'=>'desc'],['*'],'',[]);
        if(empty($questionInfo)){
            $condition = [
                'user_key' => $searchArgs['userKey'],
                'get_type' => 'question',
                'is_finish' => 0,
                'is_return' => 0
            ];
            //判断是否存在学科id
            if ($searchArgs['subjectId'] > 0) {
                $condition['subject_id'] = $searchArgs['subjectId'];
            }
            $questionInfo=$this->findOne($condition,['id'=>'desc'],['*'],'',[]);
        }
        return $questionInfo;
    }

    /**
     * 通过userKey统计套卷
     * @param $searchArgs
     */
    public function getPaperCountByUserKey($userKey)
    {
        //统计未完成数
        $condition=['user_key'=>$userKey,'get_type'=>'paper','is_return'=>0,'is_finish'=>0];
        $questionNoFinishCount=$this->count($condition);
        //统计已完成数
        $condition=['user_key'=>$userKey,'get_type'=>'paper','is_return'=>0,'is_finish'=>1];
        $questionFinishCount=$this->count($condition);
        return [
            'questionNoFinishCount'=>$questionNoFinishCount,
            'questionFinishCount'=>$questionFinishCount
        ];
    }

    /**
     * 通过userKey统计试题
     * @param $userKey
     * @return array
     */
    public function getQuestionCountByUserKey($userKey)
    {
        //查询教师贴标签表
        $vpTeacherLabelTagModel=new VpTeacherLabelTag();
        $paperQuestionList=$vpTeacherLabelTagModel->findAll(['paper_id'=>['gt'=>0],'user_key'=>$userKey,'user_type'=>'teacher','is_remove'=>0,'status'=>0],['id'=>'asc'],'question_id','question_id');
        $labelQuesIds=[];
        foreach($paperQuestionList as $key => $val){
            $labelQuesIds[]=$val['question_id'];
        }
        //查询未完成的套卷
        $paperNoFinishList=$this->findAll(['user_key'=>$userKey,'get_type'=>'paper','is_return'=>0,'is_finish'=>0]);
        $paperIds=[];
        foreach($paperNoFinishList as $key => $val){
            $paperIds[]=$val['task_id'];
        }
        //查询未完成的套卷下单题数
        $questionModel=new Question();
        $questionCount=$questionModel->count(['id'=>['not in'=>$labelQuesIds],'paper_id'=>['in'=>$paperIds]]);
        //统计未完成数
        $condition=['user_key'=>$userKey,'get_type'=>'question','is_return'=>0,'is_finish'=>0];
        $questionNoFinishCount=$this->count($condition);
        //统计已完成数
        $condition=['user_key'=>$userKey,'get_type'=>'question','is_return'=>0,'is_finish'=>1];
        $questionFinishCount=$this->count($condition);
        return [
            'questionNoFinishCount' => $questionNoFinishCount+$questionCount,
            'questionFinishCount' => $questionFinishCount+count($labelQuesIds)
        ];
    }

    /**
     * 获取教师的userKey对应的已领取数目
     * @param array
     * @return array
     */
    public function getTeacherUserKeyReceiveNum($userKeys)
    {
        $questionResult = $this->getQuestionOrPaperNum($userKeys,$type = 'question');
        $list = [];
        foreach ($questionResult as $v) {
            $list[$v['user_key']] = $v['total'];
        }
        $result = $this->getQuestionOrPaperNum($userKeys,$type = 'paper');
        $userKeyPaperIds = [];
        foreach ($result as $v) {
            if (array_key_exists($v['user_key'], $userKeyPaperIds)) {
                $userKeyPaperIds[$v['user_key']][] = [
                    'paperId' => $v['task_id']
                ];

            } else {
                $userKeyPaperIds[$v['user_key']][] = [
                    'paperId' => $v['task_id']
                ];
            }
        }
        $paperIds = [];
        foreach ($result as $v) {
            $paperIds[] = $v['task_id'];
        }
        $question = new Question();
        $paperResult = $question->getPaperReceiveNum($paperIds);
        $paperQuestionNum = [];
        foreach ($userKeyPaperIds as $k => $v) {
            $count = 0;
            foreach ($v as $item) {
                $count += isset($paperResult[$item['paperId']]) ? $paperResult[$item['paperId']] : 0;
                $paperQuestionNum[$k] = $count;
            }
        }
        $receiveNum = [];
        foreach ($userKeys as $v) {
            $questionNum = isset($list[$v]) ? $list[$v] : 0;
            $paperNum = isset($paperQuestionNum[$v]) ? $paperQuestionNum[$v] : 0;
            $receiveNum[$v] = $questionNum + $paperNum;
        }
        return $receiveNum;
    }

    /**
     * 获取套卷领取信息
     * @param $userKey
     * @return mixed
     */
    public function getPaperByUserKey($userKey)
    {
        $condition=['user_key'=>$userKey,'get_type'=>'paper','is_return'=>0,'is_finish'=>0];
        $this->beginQueryLog();
        $result=$this->findOne($condition);
        return $result;
    }

    /**
     * 获取单题领取信息
     * @param $userKey
     * @return mixed
     */
    public function getQuestionByUserKey($userKey)
    {
        $condition=['user_key'=>$userKey,'get_type'=>'question','is_return'=>0,'is_finish'=>0];
        $result=$this->findOne($condition);
        return $result;
    }
    /**
     * 教师清空任务
     * @param $userKey
     * @return boolean
     */
    public function teacherEmptyingTask($userKey)
    {
        $this->beginTransaction();
        $vpTeacherLabelTag = new VpTeacherLabelTag();
        $vipLabelTagContent = new VipLabelTagContent();
        $result = $this->getTeacherEmptyingQuestionIds($userKey);
        $resultPaper = $this->getTeacherEmptyingPaperIds($userKey);
        if(empty($result) && empty($resultPaper)){
            throw new \Exception('暂时没有可以清空的试题id或者套卷id');
        }
        //单题
        $ids = isset($result['id']) ? $result['id'] : [];
        $questionIds = isset($result['question_id']) ? $result['question_id'] : [];
        if(!empty($ids)){
            $this->updateTeacherEmptyingQuestionIds($ids,$userKey);
        }
        if(!empty($questionIds)){
            $question = new Question();
            $question->updateQuestionIds($questionIds,$type='question');
//            $vpTeacherLabelTag->updateTeacherLabelTag($questionIds,$userKey,$userType='teacher',$flag='question');
//            $vipLabelTagContent->updateLabelTagContent($questionIds,$userKey,$userType='teacher',$flag='question');
        }
        //套卷
        $pids = isset($resultPaper['id']) ? $resultPaper['id'] : [];
        $paperIds = isset($resultPaper['paper_id']) ? $resultPaper['paper_id'] : [];
        if(!empty($pids)){
            $this->updateTeacherEmptyingPaperIds($pids,$userKey);
        }
        if(!empty($paperIds)){
            $paper = new Paper();
            $vpJudgeSourceQuestion = new VpJudgeSourceQuestion();
            $vipGetJudgeQuestion = new VipGetJudgeQuestion();
            $paper->updatePaperIds($paperIds);
            $vpJudgeSourceQuestion->updateJudgeSourceQuestion($paperIds);
            $vpTeacherLabelTag->updateTeacherLabelTag($paperIds,$userKey,$userType='teacher',$flag='paper');
            $vipLabelTagContent->updateLabelTagContent($paperIds,$userKey,$userType='teacher',$flag='paper');
            $vipGetJudgeQuestion->updateGetJudgeQuestion($paperIds);
        }
        $this->commit();
        return true;
    }
    /**
     * 获取教师可以清空的试题id（单题）
     * @param $searchArgs
     */
    public function getTeacherEmptyingQuestionIds($userKey)
    {
        $condition = array(
            'user_key' => $userKey,
            'is_finish' => 0,
            'is_return' => 0,
            'get_type' => 'question'
        );
        $result = $this->findAll($condition, $order=['id' => 'asc'], ['id','task_id']);
        $ids = [];
        foreach ($result as $item) {
            $ids['id'][] = $item['id'];
            $ids['question_id'][] = $item['task_id'];
        }
        return $ids;
    }
    /**
     * 获取教师可以清空的试题套卷id（套卷）
     * @param $searchArgs
     */
    public function getTeacherEmptyingPaperIds($userKey)
    {
        $condition = array(
            'user_key' => $userKey,
            'is_finish' => 0,
            'is_return' => 0,
            'get_type' => 'paper'
        );
        $result = $this->findAll($condition, $order=['id' => 'asc'], ['id','task_id']);
        $ids = [];
        foreach ($result as $item) {
            $ids['id'][] = $item['id'];
            $ids['paper_id'][] = $item['task_id'];
        }
        return $ids;
    }
    /**
     * 退掉教师领取表的试题id（单题）
     * @param $searchArgs
     */
    public function updateTeacherEmptyingQuestionIds($ids,$userKey)
    {
        $condition = array(
            'id' => array('in' => $ids),
            'user_key' => $userKey
        );
        $result = $this->edit(['is_return' => 1], $condition);
        if(false === $result){
            $this->rollback();
            throw new \Exception('清空任务失败');
        }

    }

    /**
     * 退掉教师领取表的套卷id（套卷）
     * @param $ids
     */
    public function updateTeacherEmptyingPaperIds($ids,$userKey)
    {
        $condition = array(
            'id' => array('in' => $ids),
            'user_key' => $userKey
        );
        $result = $this->edit(['is_return' => 1], $condition);
        if(false === $result){
            $this->rollback();
            throw new \Exception('清空任务失败');
        }
    }

    /**
     * 完成套卷贴标签
     * @param $searchArgs
     * @return bool
     * @throws \Exception
     */
    public function updateLabelFinish($searchArgs)
    {
        $condition=[
            'task_id'=>$searchArgs['paperId'],
            'user_key'=>$searchArgs['userKey']
        ];
        //查询教师贴标签表
        $vpTeacherLabelTagModel=new VpTeacherLabelTag();
        $vpTeacherLabelTagList=$vpTeacherLabelTagModel->findAll(['paper_id'=>$searchArgs['paperId'],'user_key'=>$searchArgs['userKey'],'is_remove'=>0,'status'=>0]);
        $ids=[];
        foreach($vpTeacherLabelTagList as $key => $val){
            $ids[]=$val['question_id'];
        }
        //查询套卷下单题是否全部贴完
        $questionModel=new Question();
        $questionList=$questionModel->findAll(['id'=>['not in'=>$ids],'paper_id'=>$searchArgs['paperId']]);
        if(!empty($questionList)){
            throw new \Exception('存在未贴标签试题');
        }
        $result=$this->edit(['is_finish'=>1],$condition);
        if($result === false){
            throw new \Exception('操作失败');
        }
        //更新套卷表贴标签状态
        $paperModel=new Paper();
        $result=$paperModel->edit(['is_label'=>1],['id'=>$searchArgs['paperId']]);
        if($result === false){
            throw new \Exception('操作失败');
        }
        return true;
    }
    /**
     * 获取领取数目
     */
    public function getQuestionOrPaperNum($userKeys,$type = 'question')
    {
        $condition = [
            'user_key' => ['in' => $userKeys],
            'get_type' => $type,
            'is_return' => 0
        ];
        if($type == 'question'){
            $questionResult = $this->groupCount($condition, $order = [], ['user_key'], $group = 'user_key');
            return $questionResult;
        }
        if($type == 'paper'){
            $result = $this->findAll($condition, ['id' => 'asc'], ['task_id', 'user_key']);
            return $result;
        }

    }
}
