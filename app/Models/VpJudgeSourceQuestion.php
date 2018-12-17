<?php
namespace App\Models;

class VpJudgeSourceQuestion extends Model
{
    protected $table='vip_judge_source_question';
    protected $connection='mysql_kms';
    public $timestamps=false;

    /**
     * 返回待领取单题数
     * @return mixed
     */
    public function getJudgeQuestionCountBySubjectId($searchArgs,$judgeIds)
    {
        $condition=['question_id'=>['not in'=>$judgeIds],'subject_id'=>$searchArgs['subjectId'],'is_pass'=>0,'is_label'=>0,'is_remove'=>0];
        $result=$this->groupCount($condition,['id'=>'desc'],['*'],'question_id');
        return count($result);
    }

    /**
     * 通过学科获取指定条数的单题
     * @param $searchArgs
     * @return mixed
     */
    public function getJudgeQuestionBySubjectId($searchArgs,$judgeIds)
    {
        $condition=['question_id'=>['not in'=>$judgeIds],'subject_id'=>$searchArgs['subjectId'],'judge_type'=>['neq'=>'all'],'is_pass'=>0,'is_label'=>0,'is_remove'=>0];
        //取出学科下没被判定人领取的指定试题条数
        $questionList=$this->findLimit($condition,['id'=>'desc'],['*'],'question_id',[],$searchArgs['questionCount']);
        return $questionList;
    }

    /**
     * 获取通过的试题id
     * @param array
     * @return array
     */
    public function getPassIds($ids)
    {
        if(empty($ids)) return [];
        $condition = array(
            'question_id' => array('in' => $ids),
            'judge_type' => 'all',
            'is_pass' => 1,
            'is_remove' => 0
        );
        $result = $this->findAll($condition,['id'=>'asc'],['question_id']);
        $questionIds = [];
        foreach ($result as $v){
            $questionIds[] = $v['question_id'];
        }
        return $questionIds;
    }
    /**
     * 更新试题id
     * @param boolean
     */
    public function updateQuestionIds($questionIds,$userKey)
    {
        $condition = array(
            'question_id' => array('in' => $questionIds),
            'user_key' => $userKey,
            'is_get' => array('gt' => 0),
            'is_remove'=> 0
        );
        $result = $this->edit(['is_get' => 0], $condition);
        if(false === $result){
            $this->rollback();
            throw new \Exception('清空任务失败');
        }
    }
    /**
     * 更新vip_judge_source_question
     * @param boolean
     */
    public function updateJudgeSourceQuestion($paperIds)
    {
        $condition = array(
            'paper_id' => array('in' => $paperIds),
        );
        $res = $this->findAll($condition, $order=[], ['id']);
        if($res){
            foreach ($res as $v) {
                $condition = array(
                    'id' => array('eq' => $v['id']),
                    'is_remove' => 0
                );
                $result = $this->edit(['is_remove' => 1], $condition);
                if(false === $result){
                    $this->rollback();
                    throw new \Exception('清空任务失败');
                }
            }
        }

    }

}