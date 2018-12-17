<?php

namespace App\Models;

use App\Clients\KlibQuestionClient;
use Illuminate\Support\Facades\Redis;

class Question extends Model
{

    protected $connection = 'mysql_kms';
    protected $table = "vip_question";
    public $timestamps = false;
    /**
     * 试题列表（试题管理）
     */
    public function getQuestionList($searchArgs, $currentPage = 1, $pageSize = 15)
    {
        $common = new Common();
        $allSubjectNames = $common->getAllSubjectNames();
        if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['created_time'] = array('lt' => strtotime ($searchArgs['endDate'].' 23:59:59'));
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['created_time'] = array('gt' => strtotime ($searchArgs['beginDate'].' 00:00:01'));
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['created_time'] = array('between' => array(strtotime ($searchArgs['beginDate'].' 00:00:01'),strtotime ($searchArgs['endDate'].' 23:59:59')));
        }
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['questionTypeId'])) {
            $condition['question_type_id'] = array('eq' => $searchArgs['questionTypeId']);
        }
        if (!empty($searchArgs['gradeNum'])) {
            $condition['grades'] = array('like' => "%" . $searchArgs['gradeNum'] . "%");
        }
        if ($searchArgs['isGet'] > 0) {
            $condition['is_get'] = array('gt' => 0);
        }
        if ($searchArgs['isGet'] == 0 && $searchArgs['isGet'] !== '') {
            $condition['is_get'] = array('eq' => $searchArgs['isGet']);
        }
        if ($searchArgs['isLabel'] > 0) {
            $condition['is_label'] = array('gt' => 0);
        }
        if ($searchArgs['isLabel'] == 0 && $searchArgs['isLabel'] !== '') {
            $condition['is_label'] = array('eq' => $searchArgs['isLabel']);
        }
//        if ($searchArgs['isLabel'] !== '') {
//            $condition['is_label'] = array('eq' => $searchArgs['isLabel']);
//        }
        if (!empty($searchArgs['questionId'])) {
            $condition['id'] = array('eq' => $searchArgs['questionId']);
        }
        $condition['status'] = array('eq' => 1);
        $condition['label_status'] = array('eq' => 0);
        if (empty($condition)) {
            $condition = [];
        }
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $result = $this->findAll($condition, ['created_time' => 'desc'], ['id', 'subject_id', 'is_get', 'is_label'], $group = "", $join = [], $page = $currentPage, $pageSize = $pageSize);
        $list = [];
        $i = 1;
        foreach ($result as $k => $item) {
            $list[] = [
                'number' => $i,
                'questionId' => $item['id'],
                'subjectId' => $item['subject_id'],
                'subjectName' => isset($allSubjectNames[$item['subject_id']]) ? $allSubjectNames[$item['subject_id']] : '',
                'isGet' => $item['is_get'],
                'isLabel' => $item['is_label'],
            ];
            $i++;
        }
        return array('rows' => $list, 'total' => $recordCount);
    }

    /**
     * 获取单题数
     * @param $searchArgs
     * @return mixed
     */
    public function getQuestionCount($subjectId, $userKey)
    {
        $condition = [$this->table.'.subject_id' => $subjectId,'paper_id'=>0,$this->table.'.status'=>1, $this->table.'.is_get' => ['lt' => 2], 'b.vip_label_get' => ['null' => 'b.id'] ,$this->table.'.label_status'=>0,$this->table.'.created_time'=>['gt'=>config('app.MIDDLE_TIME')]];
        $join = [
            [
                'type' => 'left',
                'table' => 'vip_label_get as b',
                'on' => ['b.task_id' => $this->table.'.id'],
                'where' => ['b.user_key' => $userKey, 'b.is_return' => 0]
            ]
        ];
        //获取剩余单题数
        $count = $this->count($condition, $join);
        return $count;
    }

    /**
     * 返回贴标签单题列表
     * @param $searchArgs
     * @return array
     */
    public function getLabelQuestionList($searchArgs)
    {
        //查询领取表记录
        $vpLabelGetModel=new VpLabelGet();
        $vpLabelGetList=$vpLabelGetModel->findAll(['user_key'=>$searchArgs['userKey'],'is_return'=>0]);
        $arr=[];
        foreach($vpLabelGetList as $key => $val){
            $arr[]=$val['task_id'];
        }
        $condition = ['id'=>['not in'=>$arr],'subject_id' => $searchArgs['subjectId'],'paper_id'=>0, 'status'=>1,'is_get' => ['lt' => 2],'label_status'=>0];
        //获取单题列表
        $questionList = $this->findLimit($condition, ['created_time'=>'desc'], ['id'],'',[], $searchArgs['questionCount']);
        $data = [];
        $vpLabelGetModel=new VpLabelGet();
        $createTime=date('Y-m-d H:i:s');
        foreach ($questionList as $key => $val) {
            $data['task_id'] = $val['id'];
            $data['subject_id'] = $searchArgs['subjectId'];
            $data['subject_name'] = $searchArgs['subjectName'];
            $data['user_key'] = $searchArgs['userKey'];
            $data['create_time'] = $createTime;
            $data['get_type'] = 'question';
            //添加领取单题记录
            $result = $vpLabelGetModel->add($data);
            if ($result === false) {
                throw new \Exception('领取失败');
            }
            //查询单题
            $info = $this->findOne(['id' => $val['id']], ['id' => 'desc'], ['id', 'is_get']);
            //如果领取成功，更新单题库领取状态
            $result = $this->edit(['is_get' => $info['is_get'] + 1], ['id' => $val['id']]);
            if ($result === false) {
                throw new \Exception('领取失败');
            }
        }
        return true;
    }
    /**
     * 转换试题查询参数
     * @param $formData array
     * @return array
     */
    public function questionSearchArgs($formData)
    {
        if (isset($formData['beginDate'])) {
            $searchArgs['beginDate'] = $formData['beginDate'];
        }
        if (isset($formData['endDate'])) {
            $searchArgs['endDate'] = $formData['endDate'];
        }
        if (isset($formData['subjectId'])) {
            $searchArgs['subjectId'] = $formData['subjectId'];
        }
        if (isset($formData['questionTypeId'])) {
            $searchArgs['questionTypeId'] = $formData['questionTypeId'];
        }
        if (isset($formData['gradeNum'])) {
            $searchArgs['gradeNum'] = $formData['gradeNum'];
        }
        if (isset($formData['isGet'])) {
            $searchArgs['isGet'] = $formData['isGet'];
        }
        if (isset($formData['isLabel'])) {
            $searchArgs['isLabel'] = $formData['isLabel'];
        }
        if (isset($formData['questionId'])) {
            $searchArgs['questionId'] = $formData['questionId'];
        }
        return $searchArgs;
    }

    /**
     * 获取试题领取信息
     * @param $questionId int
     * @return array
     */
    public function getQuestionInfo($questionId)
    {
        $condition = array(
            'id' => $questionId
        );
        $resultQuestion = $this->findOne($condition, $order=[], ['paper_id']);
        if($resultQuestion['paper_id']){
            $condition = array(
                'get_type' => 'paper',
                'task_id' => $resultQuestion['paper_id'],
                'is_return' => 0
            );
        }else{
            $condition = array(
                'get_type' => 'question',
                'task_id' => $questionId,
                'is_return' => 0
            );
        }
        $vplabelGet = new VpLabelGet();
        $result = $vplabelGet->getUserKeys($condition);
        if (empty($result)) {
            return [];
        }
        $userKeys = [];
        foreach ($result as $v) {
            $userKeys[] = $v['user_key'];
        }
        $condition = array(
            'question_id' => $questionId,
            //'paper' => 0,
            'user_type' => 'teacher'
        );
        $teacherLabelTag = new VpTeacherLabelTag();
        $resultLabel = $teacherLabelTag->getTeacherUserKeys($condition);
        $labelUserKeysTime = [];
        foreach ($resultLabel as $v) {
            $labelUserKeysTime[$v['user_key']] = $v['create_time'];
        }
        $user = new User();
        $listUserKeyNames = $user->getUserNamesByUserKeys($userKeys);
        $questionIdNames = [];
        foreach ($result as $v) {
            if (array_key_exists($v['task_id'], $questionIdNames)) {
                $questionIdNames[$v['task_id']][] = [
                    'user_name' => isset($listUserKeyNames[$v['user_key']]) ? $listUserKeyNames[$v['user_key']] : '',
                    'create_time' => $v['create_time'],
                    'tag_time' => isset($labelUserKeysTime[$v['user_key']]) ? $labelUserKeysTime[$v['user_key']] : ''
                ];
            } else {
                $questionIdNames[$v['task_id']][] = [
                    'user_name' => isset($listUserKeyNames[$v['user_key']]) ? $listUserKeyNames[$v['user_key']] : '',
                    'create_time' => $v['create_time'],
                    'tag_time' => isset($labelUserKeysTime[$v['user_key']]) ? $labelUserKeysTime[$v['user_key']] : ''
                ];
            }
        }
        $questionIdNames['paper_id'] = intval($resultQuestion['paper_id']);
        return $questionIdNames;

    }
    /**
     * 获取试题详情
     * @param int
     * @return array
     */
    public function getQuestionDetail($questionId)
    {
        $detail = [];
        $questionResult = KlibQuestionClient::getQuestion($questionId);
        $labelUserKeysContent = $this->getQuestionTagContent($questionId, 'teacher');
        $labelUserKeysContentJudge = $this->getQuestionTagContent($questionId, 'judge');
        $detail['answer'] = isset($questionResult['ques_answer']) ? $questionResult['ques_answer'] : '';
        $detail['content'] = isset($questionResult['ques_content']) ? $questionResult['ques_content'] : '';
        $detail['analysis'] = isset($questionResult['ques_analysis']) ? $questionResult['ques_analysis'] : '';
        $detail['tagContent'] = $labelUserKeysContent;
        $detail['judgeTagContent'] = $labelUserKeysContentJudge;
        return $detail;
    }
    /**
     * 获取试题标签内容
     * @param $questionId int
     * @param $userType string
     * @return array
     */
    public function getQuestionTagContent($questionId, $userType)
    {
        $condition = [
            'question_id' => $questionId,
            'user_type' => $userType,
            'is_remove' => 0
        ];
        $teacherLabelTag = new VpTeacherLabelTag();
        $result = $teacherLabelTag->getTeacherUserKeys($condition);
        $tagContent = new VipLabelTagContent();
        $teacherTag = $tagContent->questionTagContent($condition);
        $labelUserKeysContent = [];
        $userKeys = [];
        foreach ($result as $v) {
            $userKeys[] = $v['user_key'];
        }
        $user = new User();
        $listUserKeyNames = $user->getUserNamesByUserKeys($userKeys);
        foreach ($result as $v) {
            $tagValue = isset($teacherTag[$v['user_key']]) ? trim(implode(",", $teacherTag[$v['user_key']]['tag_content']), ",") : '';
            $labelUserKeysContent[] = [
                'user_name' => isset($listUserKeyNames[$v['user_key']]) ? $listUserKeyNames[$v['user_key']] : '',
                'tag_content' => $tagValue
            ];

        }
        return $labelUserKeysContent;
    }

    /**
     * 通过套卷id查询试题列表
     * @param $paperId
     */
    public function getQuestionByPaperId($paperId)
    {
        $condition=['paper_id'=>$paperId];
        $questionlist=$this->findAll($condition,['id'=>'desc']);
        return $questionlist;
    }

    /**
     * 通过试题id获取试题信息
     * @param $questionId
     * @return mixed
     */
    public function getQuestionInfoById($questionId)
    {
        $condition=['id'=>$questionId];
        $questionInfo=$this->findOne($condition);
        return $questionInfo;
    }
    /**
     * 通过套卷id分组获取试题个数
     * @param $paperIds
     * @return array
     */
    public function getPaperReceiveNum($paperIds)
    {
        $paperList = [];
        if(empty($paperIds)) return $paperList;
        $condition = [
            'paper_id' => ['in' => $paperIds],
        ];
        $paperResult = $this->groupCount($condition, $order=[], ['paper_id'],$group='paper_id');
        foreach ($paperResult as $v){
            $paperList[$v['paper_id']] = $v['total'];
        }
        return $paperList;
    }
    /**
     * 更新试题id
     * @param boolean
     */
    public function updateQuestionIds($taskIds,$type)
    {
        if($type == 'paper'){
            $condition = array(
                'paper_id' => array('in' => $taskIds),
                'status' => 1
            );
        }else{
            $condition = array(
                'id' => array('in' => $taskIds),
                'status' => 1
            );
        }
        $res = $this->findAll($condition, $order=[], ['id','is_get','is_label']);
        if($res){
            foreach ($res as $v) {
                $condition = array(
                    'id' => array('eq' => $v['id']),
                    'is_get' => array('gt' => 0),
                );
                $result = $this->edit(['is_get' => $v['is_get'] - 1], $condition);
                if(false === $result){
                    $this->rollback();
                    throw new \Exception('清空任务失败');
                }
                $condition = array(
                    'id' => array('eq' => $v['id']),
                    'is_label' => array('gt' => 0),
                );
                $result = $this->edit(['is_label' => $v['is_label'] - 1], $condition);
                if(false === $result){
                    $this->rollback();
                    throw new \Exception('清空任务失败');
                }
            }
        }


    }



}
