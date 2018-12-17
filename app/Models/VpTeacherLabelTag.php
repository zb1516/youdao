<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/30
 * Time: 13:43
 */


namespace App\Models;

class VpTeacherLabelTag extends Model
{
    protected $table = "vip_teacher_label_tag";
    protected $connection = "mysql_kms";
    public $timestamps = false;

    /**
     * 获取贴标签的userKey
     * @param array
     * @return array
     */
    public function getTeacherUserKeys($condition)
    {
        $result = $this->findAll($condition, $order=['id' => 'asc'], ['user_key', 'create_time']);
        return $result;
    }
    /**
     * 获取判断人的userKey
     * @param array
     * @return array
     */
    public function getJudgeUserKey($condition)
    {
        $result = $this->findOne($condition, $order=['id' => 'asc'], ['question_id','user_key', 'create_time']);
        return $result;
    }
    /**
     * 获取userKey对应的已贴数目
     * @param array
     * @return array
     */
    public function getUserKeyTagNum($condition)
    {
        $result = $this->groupCount($condition, $order=['id' => 'asc'], ['user_key'],$group='user_key');
        $list = [];
        foreach ($result as $v){
            $list[$v['user_key']] = $v['total'];
        }
        return  $list;
    }
    /**
     * 获取已贴试题id数
     * @param array
     * @return array
     */
    public function getTagQuestionIds($userKeys)
    {
        if(empty($userKeys)) return [];
        $condition = array(
            'user_key' => array('in' => $userKeys),
            'user_type' => 'teacher',
            'is_remove' => 0,
            'status' => 0
        );
        $result = $this->findAll($condition, $order=['id' => 'asc'], ['question_id']);
        $ids = [];
        foreach ($result as $v){
            $ids[$v['question_id']] = $v['question_id'];
        }
        return  $ids;
    }
    /**
     * 获取每个老师通过的试题个数
     * @param array
     * @return array
     */
    public function getEveryTeacherPassIdsNum($userKeys,$passIds)
    {
        if(empty($userKeys) || empty($passIds)) return [];
        $condition = [
            'question_id' => array('in' => $passIds),
            'user_key' => array('in' => $userKeys),
            'user_type' => 'teacher',
            'is_remove' => 0,
            'status' => 0
        ];
        $result = $this->groupCount($condition, $order=[], ['user_key'],$group='user_key');
        $list = [];
        foreach ($result as $v){
            $list[$v['user_key']] = $v['total'];
        }
        return  $list;
    }
    /**
     * 获取贴过俩次试题id数
     * @param array
     * @return array
     */
    public function getTagNumTwoQuestionIds($userKeys)
    {
        if(empty($userKeys)) return [];
        $condition = array(
            'user_key' => array('in' => $userKeys),
            'user_type' => 'teacher',
            'is_remove' => 0,
            'status' => 0
        );
        $result = $this->groupCount($condition, $order=[], ['question_id'],$group='question_id',[],$having='count(id) > 1');
        $ids = [];
        foreach ($result as $v){
            $ids[] = $v['question_id'];
        }
        return  $ids;
    }
    /**
     * 获取userKey试题贴过俩次的总个数
     * @param array
     * @return array
     */
    public function getEveryTeacherTagTwoNum($userKeys,$twoTagIds)
    {
        if(empty($userKeys) || empty($twoTagIds)) return [];
        $condition = [
            'question_id' => array('in' => $twoTagIds),
            'user_key' => array('in' => $userKeys),
            'user_type' => 'teacher',
            'is_remove' => 0,
            'status' => 0
        ];
        $result = $this->groupCount($condition, $order=[], ['user_key'],$group='user_key');
        $list = [];
        foreach ($result as $v){
            $list[$v['user_key']] = $v['total'];
        }
        return  $list;
    }
    /**
     * 根据试题id和用户key获取贴标签信息
     * @param $questionId
     * @return mixed
     */
    public function getTeacherLabelByQuesId($questionId,$userKey)
    {
        $condition=['question_id'=>$questionId,'user_key'=>['neq'=>$userKey],'user_type'=>'teacher','is_remove'=>0];
        $info=$this->findOne($condition,[$this->table.'.id' => 'desc'], ['user_key'],'',[]);
        return $info;
    }

    /**
     * 添加教师标签
     * @param $searchArgs
     * @return bool
     * @throws \Exception
     */
    public function addTeacherLabel($searchArgs)
    {
        $kmsSubjectsModel=new KmsSubjects();
        $vipLabelTagContentModel=new VipLabelTagContent();
        $subjectName=$kmsSubjectsModel->getSubjectName($searchArgs['subjectId']);
        $data=[
            'paper_id'=>$searchArgs['paperId'],
            'question_id'=>$searchArgs['questionId'],
            'subject_id'=>$searchArgs['subjectId'],
            'subject_name'=>$subjectName,
            'user_key'=>$searchArgs['userKey'],
            'user_type'=>$searchArgs['userType'],
            'create_time'=>date('Y-m-d H:i:s')
        ];
        $this->beginTransaction();
        //查询教师是否贴过标签
        $teacherLabelInfo=$this->findOne(['question_id'=>$searchArgs['questionId'],'user_type'=>$searchArgs['userType'],'user_key'=>$searchArgs['userKey'],'is_remove'=>0]);
        if($teacherLabelInfo){
            throw new \Exception('该试题已经贴过标签，请勿重复贴标签');
        }else{
            $result=$this->add($data);      //添加贴标签记录
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('保存失败');
            }
            $labelContent=self::getKnowledgeLabelContent($searchArgs,$subjectName);
            if(!empty($labelContent)){
                foreach ($labelContent as $key => $val){
                    $labelData=[
                        'question_id'=>$searchArgs['questionId'],
                        'paper_id'=>$searchArgs['paperId'],
                        'user_key'=>$searchArgs['userKey'],
                        'user_type'=>$searchArgs['userType'],
                        'tag_id'=>$val['id'],
                        'tag_content'=>$val['content'],
                        'type'=>$val['questionType'],
                    ];
                    $result=$vipLabelTagContentModel->addLabelContent($labelData);
                    if($result === false)
                    {
                        throw new \Exception('保存失败');
                        $this->rollback();
                    }
                }
            }
            //判断是教师贴标签还是判定人贴标签
            if($searchArgs['userType'] == 'teacher')
            {
                //判断试题是否有人贴过
                $info=$this->getTeacherLabelByQuesId($searchArgs['questionId'],$searchArgs['userKey']);
                if($info){
                    $diffArray=self::judgeQuestionCompare($searchArgs,$info['user_key']);
                    $judgeSourceQuestionModel=new VpJudgeSourceQuestion();
                    $paperName='';
                    //判断是套卷 还是 单题
                    if($searchArgs['questionType'] == 'paper'){
                        $paperModel=new Paper();
                        //获取套卷信息
                        $paperInfo=$paperModel->findOne(['id'=>$searchArgs['paperId']],['id'=>'desc'],['file_name']);
                        $paperName=$paperInfo['file_name'];
                    }
                    $createTime=date('Y-m-d H:i:s');
                    //判断标签是否通过
                    if(!empty($diffArray)){
                        $vipGetJudgeQuestionModel=new VipGetJudgeQuestion();
                        //查询该试题是否被判定人领取
                        $vipGetJudgeQuestionInfo=$vipGetJudgeQuestionModel->findOne(['question_id'=>$searchArgs['questionId'],'is_finish'=>1,'is_return'=>0]);
                        if($vipGetJudgeQuestionInfo){
                            //如果存在不同标签，添加待判定记录
                             foreach($diffArray as $key => $val){
                                     //添加判定记录
                                     $result=$judgeSourceQuestionModel->add([
                                         'question_id'=>$searchArgs['questionId'],
                                         'paper_id'=>$searchArgs['paperId'],
                                         'paper_name'=>$paperName,
                                         'subject_id'=>$searchArgs['subjectId'],
                                         'subject_name'=>$subjectName,
                                         'user_key'=>$searchArgs['userKey'],
                                         'judge_type'=>$val,
                                         'is_pass'=>0,
                                         'is_get'=>1,
                                         'is_label'=>1,
                                         'create_time'=>$createTime
                                     ]);
                                     if($result === false){
                                         $this->rollback();
                                         throw new \Exception('保存失败');
                                     }
                             }
                         }else{
                            //如果存在不同标签，添加待判定记录
                            foreach($diffArray as $key => $val){
                                //添加判定记录
                                $result=$judgeSourceQuestionModel->add([
                                    'question_id'=>$searchArgs['questionId'],
                                    'paper_id'=>$searchArgs['paperId'],
                                    'paper_name'=>$paperName,
                                    'subject_id'=>$searchArgs['subjectId'],
                                    'subject_name'=>$subjectName,
                                    'user_key'=>$searchArgs['userKey'],
                                    'judge_type'=>$val,
                                    'is_pass'=>0,
                                    'is_get'=>0,
                                    'is_label'=>0,
                                    'create_time'=>$createTime
                                ]);
                                if($result === false){
                                    $this->rollback();
                                    throw new \Exception('保存失败');
                                }
                            }
                        }
                    }else{
                       //如果标签一致，添加一条通过记录
                        $result=$judgeSourceQuestionModel->add([
                            'question_id'=>$searchArgs['questionId'],
                            'paper_id'=>$searchArgs['paperId'],
                            'paper_name'=>$paperName,
                            'subject_id'=>$searchArgs['subjectId'],
                            'subject_name'=>$subjectName,
                            'user_key'=>$searchArgs['userKey'],
                            'judge_type'=>'all',
                            'is_pass'=>1,
                            'is_get'=>0,
                            'is_label'=>0,
                            'create_time'=>$createTime
                        ]);
                        if($result === false){
                            $this->rollback();
                            throw new \Exception('保存失败');
                        }
                    }
                }else{
                    //如果是第一个人贴标签，更新知识点id
                    $questionModel=new Question();
                    $result=$questionModel->edit([
                        'knowledge_id'=>$searchArgs['knowledgeId'],
                        'difficulty'=>$searchArgs['difficultyId'],
                        'question_type_id'=>$searchArgs['questionTypeId'],
                        'grades'=>$searchArgs['gradeId'],
                        'grade_id'=>$searchArgs['gradeId'],
                        'question_category'=>$searchArgs['questionCategoryName'],
                        'question_class'=>$searchArgs['type']
                    ],['id'=>$searchArgs['questionId']]);
                    if($result === false)
                    {
                        throw new \Exception('保存失败');
                        $this->rollback();
                    }
                }
                //更新已领取的试题贴标签状态
                $labelGetModel=new VpLabelGet();
                $result=$labelGetModel->edit(['is_finish'=>1],['task_id'=>$searchArgs['questionId'],'user_key'=>$searchArgs['userKey'],'is_return'=>0]);
                if($result === false)
                {
                    throw new \Exception('保存失败');
                    $this->rollback();
                }
                //更新单题贴标签状态
                $questionModel=new Question();
                $questionInfo=$questionModel->findOne(['id'=>$searchArgs['questionId']]);
                $result=$questionModel->edit(['is_label'=>$questionInfo['is_label']+1],['id'=>$searchArgs['questionId']]);
                if($result === false){
                    throw new \Exception('保存失败');
                    $this->rollback();
                }
            }else{
                //更新已领取的判定试题贴标签状态
                $vipGetJudgeQuestionModel=new VipGetJudgeQuestion();
                $result=$vipGetJudgeQuestionModel->edit(['is_finish'=>1],['question_id'=>$searchArgs['questionId'],'user_key'=>$searchArgs['userKey'],'is_return'=>0]);
                if($result === false)
                {
                    throw new \Exception('保存失败');
                    $this->rollback();
                }
                //更新待判定试题贴标签状态
                $vpJudgeSourceQuestionModel=new VpJudgeSourceQuestion();
                $vpJudgeSourceQuestionInfo=$vpJudgeSourceQuestionModel->findOne(['question_id'=>$searchArgs['questionId'],'is_remove'=>0],['id'=>'desc'],['is_label'],'question_id');
                $result=$vpJudgeSourceQuestionModel->edit(['is_label'=>$vpJudgeSourceQuestionInfo['is_label']+1],['question_id'=>$searchArgs['questionId'],'is_remove'=>0]);
                if($result === false)
                {
                    throw new \Exception('保存失败');
                    $this->rollback();
                }
                //更新单题知识点
                $questionModel=new Question();
                $result=$questionModel->edit([
                    'knowledge_id'=>$searchArgs['knowledgeId'],
                    'difficulty'=>$searchArgs['difficultyId'],
                    'question_type_id'=>$searchArgs['questionTypeId'],
                    'grades'=>$searchArgs['gradeId'],
                    'grade_id'=>$searchArgs['gradeId'],
                    'question_category'=>$searchArgs['questionCategoryName'],
                    'question_class'=>$searchArgs['type']
                ],['id'=>$searchArgs['questionId']]);
                if($result === false)
                {
                    throw new \Exception('保存失败');
                    $this->rollback();
                }
            }
            $this->commit();
            return true;
        }
    }

    /**
     * 获取贴标签内容
     * @param $searchArgs
     * @return array
     */
    protected static function getKnowledgeLabelContent($searchArgs,$subjectName){
        //贴标签内容
        $content=[
            'knowledge'=>[
                'id'=>$searchArgs['knowledgeId'],
                'content'=>$searchArgs['knowledgeName'],
                'questionType'=>'knowledge'
            ],
            'questionType'=>[
                'id'=>$searchArgs['questionTypeId'],
                'content'=>$searchArgs['questionTypeName'],
                'questionType'=>'questionType'
            ],
            'difficulty'=>[
                'id'=>$searchArgs['difficultyId'],
                'content'=>$searchArgs['difficultyName'],
                'questionType'=>'difficulty'
            ],
            'type'=>[
                'id'=>$searchArgs['typeId'],
                'content'=>$searchArgs['type'],
                'questionType'=>'type'
            ],
            'grade'=>[
                'id'=>$searchArgs['gradeId'],
                'content'=>$searchArgs['gradeName'],
                'questionType'=>'grade'
            ]
        ];
        //判断学科是否是科学
        if($subjectName == '初中科学'){
            //把标签放入循环的数组中
            $content['questionCategory']=[
                    'id'=>$searchArgs['questionCategoryId'],
                    'content'=>$searchArgs['questionCategoryName'],
                    'questionType'=>'questionCategory'
            ];
        }
        return $content;
    }

    /**
     * 对比贴标签是否一致
     * @param $searchArgs
     * @param $userKey
     * @return array
     */
    protected static function judgeQuestionCompare($searchArgs,$userKey)
    {
        //获取所贴标签内容
        $vipLabelTagContentModel=new VipLabelTagContent();
        $content=$vipLabelTagContentModel->findAll(['question_id'=>$searchArgs['questionId'],'user_key'=>$userKey,'user_type'=>$searchArgs['userType'],'is_remove'=>0],['id'=>'desc'],['*'],'type');
        $diffArray=[];
        //如果记录存在，则判断两人所贴标签是否一致
        foreach($content as $key => $val){
            switch ($val['type']){
                case 'knowledge':
                    if(intval($searchArgs['knowledgeId']) != intval($val['tag_id']))
                    {
                        array_push($diffArray,'knowledge');
                    }
                    break;
                case 'grade':
                    if(intval($searchArgs['gradeId']) != intval($val['tag_id']))
                    {
                        array_push($diffArray,'grade');
                    }
                    break;
                case 'questionType':
                    if(intval($searchArgs['questionTypeId']) != intval($val['tag_id']))
                    {
                        array_push($diffArray,'questionType');
                    }
                    break;
                case  'questionCategory':
                    if(intval($searchArgs['questionCategoryId']) != intval($val['tag_id']))
                    {
                        array_push($diffArray,'questionCategory');
                    }
                    break;
            }
        }
        return $diffArray;
    }

    /**
     * 通过试题id获取教师贴标签数
     * @param $questionId
     * @return mixed
     */
    public function getTeacherLabelCountByQuesId($questionId)
    {
        $condition=['question_id'=>$questionId,'user_type'=>'teacher','is_remove'=>0];
        $result=$this->count($condition);
        return $result;
    }

    /**
     * 更新vip_teacher_label_tag
     * @param boolean
     */
    public function updateTeacherLabelTag($ids,$userKey,$userType,$flag)
    {
        if($userType == 'teacher' && $flag == 'paper'){
            $condition = array(
                'paper_id' => array('in' => $ids),
                'user_key' => $userKey,
                'user_type' => $userType,
                'is_remove' => 0,
                'status' => 0,
            );
        }
        if(($userType == 'judge' && $flag == 'question') || ($userType == 'teacher' && $flag == 'question')){
            $condition = array(
                'question_id' => array('in' => $ids),
                'user_key' => $userKey,
                'user_type' => $userType,
                'is_remove' => 0,
                'status' => 0,
            );
        }
        $res = $this->findAll($condition);
        if($res){
            foreach ($res as $v) {
                $condition = array(
                    'id' => array('eq' => $v['id']),
                );
                $result = $this->edit(['is_remove' => 1], $condition);
                if(false === $result){
                    $this->rollback();
                    throw new \Exception('清空任务失败');
                }
            }
        }

    }
    /**
     * 获取判断人贴标签的userKey
     * @param array
     * @return array
     */
    public function getUserKeys($condition)
    {
        $result = $this->findAll($condition, ['id' => 'asc'], ['user_key', 'create_time']);
        return $result;
    }


}