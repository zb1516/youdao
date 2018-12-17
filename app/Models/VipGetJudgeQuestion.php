<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/9/6
 * Time: 15:53
 */

namespace App\Models;

use Illuminate\Support\Facades\Cache;

class VipGetJudgeQuestion extends Model
{
    protected $table = "vip_get_judge_question";
    protected $connection = "mysql_kms";
    public $timestamps = false;
    /**
     * 获取判断人的userKey对应的已领取数目
     * @param array
     * @return array
     */
    public function getJudgeUserKeyReceiveNum($condition)
    {
        $result = $this->groupCount($condition, $order = ['id' => 'asc'], ['user_key'], $group = 'user_key');
        $list = [];
        foreach ($result as $v) {
            $list[$v['user_key']] = $v['total'];
        }
        return $list;
    }

    /**
     * 通过用户key查询信息
     * @param $userKey
     * @return mixed
     */
    public function getJudgeQuestionByUserKey($userKey)
    {
        $condition=['user_key'=>$userKey,'is_finish'=>0,'is_return'=>0];
        $result=$this->findOne($condition);
        return $result;
    }
    /**
     * 添加判定人领取任务
     * @param $data
     * @return bool
     * @throws \Exception
     */
    public function addGetJudgeQuestion($data)
    {
        if(is_array($data) && !empty($data))
        {
            $this->beginTransaction();
            foreach($data as $key => $val)
            {
                $result=$this->add($val);
                if($result === false)
                {
                    $this->rollBack();
                    throw new \Exception('判定人领取任务失败');
                }
                $vpJudgeSourceQuestionModel=new VpJudgeSourceQuestion();
                $judgeSourceQuestionInfo=$vpJudgeSourceQuestionModel->findOne(['question_id'=>$val['question_id'],'is_remove'=>0]);
                $result=$vpJudgeSourceQuestionModel->edit(['is_get'=>$judgeSourceQuestionInfo['is_get']+1],['question_id'=>$val['question_id'],'is_remove'=>0]);
                if($result === false)
                {
                    $this->rollBack();
                    throw new \Exception('判定人领取任务失败');
                }
            }
            $this->commit();
        }
        return true;
    }

    /**
     * 通过科目返回已领取但未贴完的任务
     * @param $subjectId
     * @return mixed
     */
    public function getJudgeQuesReturnCount($subjectId,$userKey)
    {
        $condition=['subject_id'=>$subjectId,'user_key'=>$userKey,'is_finish'=>0,'is_return'=>0];
        $result=$this->count($condition);
        return $result;
    }
    /**
     * 统计判定人领取试题
     * @param $userKey
     * @return mixed
     */
    public function getJudgeQuesCountByUserKey($userKey)
    {
        //统计未完成数
        $condition=['user_key'=>$userKey,'is_finish'=>0,'is_return'=>0];
        $questionNoFinishCount=$this->count($condition);
        //统计已完成数
        $condition=['user_key'=>$userKey,'is_finish'=>1,'is_return'=>0];
        $questionFinishCount=$this->count($condition);
        return [
            'questionNoFinishCount'=>$questionNoFinishCount,
            'questionFinishCount'=>$questionFinishCount
        ];
    }

    /**
     * 删除判定人领取任务
     * @param $searchArgs
     */
    public function removeJudgeQuestion($searchArgs)
    {
        $condition=['subject_id'=>$searchArgs['subjectId'],'user_key'=>$searchArgs['userKey'],'is_finish'=>0,'is_return'=>0];
        $questionList=$this->findAll($condition,['id'=>'desc']);
        $judgeQuestionModel=new VpJudgeSourceQuestion();
        $teacherLabelModel=new VpTeacherLabelTag();
        $labelContentModel=new VipLabelTagContent();
        $this->beginTransaction();
        foreach($questionList as $key => $val)
        {
            //更新已领取的任务的退回状态
            $result=$this->edit(['is_return'=>1],['id'=>$val['id']]);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('删除判定人任务失败');
            }
            //更新判定池的领取状态
            $result=$judgeQuestionModel->edit(['is_get'=>0],['question_id'=>$val['question_id'],'is_pass'=>0,'is_get'=>['gt'=>0],'is_remove'=>0]);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('删除判定人任务失败');
            }
            //更新领取的待判定试题贴标签
            $result=$teacherLabelModel->edit(['is_remove'=>1],['question_id'=>$val['question_id'],'paper_id'=>$val['paper_id'],'user_key'=>$val['user_key']]);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('删除判定人任务失败');
            }
            //更新领取的待判定的试题贴标签内容
            $result=$labelContentModel->edit(['is_remove'=>1],['question_id'=>$val['question_id'],'paper_id'=>$val['paper_id'],'user_key'=>$val['user_key']]);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('删除判定人任务失败');
            }
        }
        $this->commit();
        return true;
    }

    /**
     * 获取待判定试题
     * @param $searchArgs
     * @return mixed
     */
    public function getJudgeQuestion($searchArgs)
    {
        $condition=[];
        if(isset($searchArgs['userKey']))
        {
            $condition['user_key']=$searchArgs['userKey'];
        }
        if(isset($searchArgs['subjectId'])){
            $condition['subject_id']=$searchArgs['subjectId'];
        }
        if(isset($searchArgs['questionId'])){
            $condition['question_id']=$searchArgs['questionId'];
        }
        $condition['is_finish']=0;
        $condition['is_return']=0;
        $result=$this->findOne($condition,['id'=>'desc']);
        return $result;
    }

    /**
     * 跳过判定人试题
     * @param $searchArgs
     * @return mixed
     */
    public function getJumpJudgeQuestion($searchArgs)
    {
        //如果跳过试题存在
        $condition = [
            'question_id'=>['gt'=>$searchArgs['questionId']],
            'user_key' => $searchArgs['userKey'],
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









        $condition=[];
        if(isset($searchArgs['userKey']))
        {
            $condition['user_key']=$searchArgs['userKey'];
        }
        if(isset($searchArgs['subjectId'])){
            $condition['subject_id']=$searchArgs['subjectId'];
        }
        if(isset($searchArgs['questionId'])){
            $condition['question_id']=$searchArgs['questionId'];
        }
        $condition['is_finish']=0;
        $condition['is_return']=0;
        $result=$this->findOne($condition,['id'=>'desc']);
        return $result;
    }

    /**
     * 获取试题内容
     * @param $searchArgs
     */
    public function getJudgeQuestionInfo($searchArgs)
    {
        $condition = [];
        $condition['question_id']=['gt'=>$searchArgs['questionId']];
        //判断是否存在学科id
        if ($searchArgs['subjectId'] > 0) {
            $condition['subject_id'] = $searchArgs['subjectId'];
        }
        $condition['user_key'] = $searchArgs['userKey'];
        $condition['is_finish'] = 0;
        $condition['is_return'] = 0;
        $questionInfo=$this->findOne($condition,['id'=>'desc'],['*'],'',[]);
        if(empty($questionInfo)){
            //判断是否存在学科id
            if ($searchArgs['subjectId'] > 0) {
                $condition['subject_id'] = $searchArgs['subjectId'];
            }
            $condition = [
                'user_key' => $searchArgs['userKey'],
                'is_finish' => 0,
                'is_return' => 0
            ];
            $questionInfo=$this->findOne($condition,['id'=>'desc'],['*'],'',[]);
        }
        return $questionInfo;
    }
    /**
     * 获取判定人可以清空的试题id
     * @param $searchArgs
     */
    public function getJudgeEmptyingQuestionIds($userKey)
    {
        $condition = array(
            'user_key' => $userKey,
            'is_finish' => 0,
            'is_return' => 0,
        );
        $result = $this->findAll($condition, $order=['id' => 'asc'], ['id','question_id']);
        $ids = [];
        foreach ($result as $item) {
            $ids['id'][] = $item['id'];
            $ids['question_id'][] = $item['question_id'];
        }
        return $ids;
    }

    /**
     * 退掉判断人领取表的试题id
     * @param $searchArgs
     */
    public function updateJudgeEmptyingQuestionIds($ids,$userKey)
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
     * 判定人清空任务
     * @param $userKey
     * @return boolean
     */
    public function judgeEmptyingTask($userKey)
    {
        $this->beginTransaction();
        $vpJudgeSourceQuestion = new VpJudgeSourceQuestion();
        $result = $this->getJudgeEmptyingQuestionIds($userKey);
        if(empty($result)){
            throw new \Exception('暂时没有可以清空的试题id');
        }
        $ids = isset($result['id']) ? $result['id'] : [];
        $questionIds = isset($result['question_id']) ? $result['question_id'] : [];
        $this->updateJudgeEmptyingQuestionIds($ids,$userKey);
        if(empty($questionIds)){
            throw new \Exception('试题id不能为空');
        }
        $vpJudgeSourceQuestion->updateQuestionIds($questionIds,$userKey);
//        $vpTeacherLabelTag = new VpTeacherLabelTag();
//        $vipLabelTagContent = new VipLabelTagContent();
//        $vpTeacherLabelTag->updateJudgeTeacherLabelTag($questionIds,$userKey,$userType='judge',$flag='question');
//        $vipLabelTagContent->updateLabelTagContent($questionIds,$userKey,$userType='judge',$flag='question');
        $this->commit();
        return true;
    }
    /**
     * 更新vip_get_judge_question
     * @param boolean
     */
    public function updateGetJudgeQuestion($paperIds)
    {
        $condition = array(
            'paper_id' => array('in' => $paperIds),
            'is_finish' => 0,
            'is_return' => 0
        );
        $res = $this->findAll($condition);
        if($res){
            foreach ($res as $v) {
                $condition = array(
                    'id' => array('eq' => $v['id']),
                );
                $result = $this->edit(['is_return' => 1], $condition);
                if(false === $result){
                    $this->rollback();
                    throw new \Exception('清空任务失败');
                }
            }
        }

    }



}