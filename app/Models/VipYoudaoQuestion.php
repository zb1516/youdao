<?php

namespace App\Models;

use App\Models\Model;

class VipYoudaoQuestion extends Model
{
    protected $table='vip_youdao_question';
    protected $connection = "mysql_kms";
    public $timestamps=false;


    /**
     * @param $searchArgs
     * @return array
     */
    public function questionCondition($searchArgs){
        $condition = [];
        //有道最终处理日期
        if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('lt' => $searchArgs['endDate'].' 23:59:59');
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('gt' => $searchArgs['beginDate'].' 00:00:01');
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('between' => array($searchArgs['beginDate'].' 00:00:01',$searchArgs['endDate'].' 23:59:59'));
        }
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['gradeId'])) {
            $condition['grade'] = array('eq' => $searchArgs['gradeId']);
        }
        if (!empty($searchArgs['province'])) {
            $condition['province'] = array('eq' => $searchArgs['province']);
        }
        if (!empty($searchArgs['city'])) {
            $condition['city'] = array('eq' => $searchArgs['city']);
        }
        if (!empty($searchArgs['status'])) {
            $condition['paper_examined_status'] = array('eq' => $searchArgs['status']);
        }
        if (!empty($searchArgs['agencyId'])) {
            $condition['agency_id'] = array('eq' => $searchArgs['agencyId']);
        }
        if (!empty($searchArgs['paperName'])) {
            $condition['paper_name'] = array('like' => "%" . $searchArgs['paperName'] . "%");
        }
        if (!empty($searchArgs['auditorId'])) {
            $condition['paper_examined_auditor_id'] = $searchArgs['auditorId'];
        }
        //试卷最终审核日期
        if (empty($searchArgs['auditBeginDate']) && !empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('lt' => $searchArgs['auditEndDate'].' 23:59:59');
        }
        if (!empty($searchArgs['auditBeginDate']) && empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('gt' => $searchArgs['auditBeginDate'].' 00:00:01');
        }
        if (!empty($searchArgs['auditBeginDate']) && !empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('between' => array($searchArgs['auditBeginDate'].' 00:00:01',$searchArgs['auditEndDate'].' 23:59:59'));
        }
        return $condition;
    }

    /**
     * 获取所有符合条件试题
     * @param $searchArgs
     * @return array
     */
    public function questionAll($searchArgs){
        $list = [];
        $condition = $this->questionCondition($searchArgs);
        $join = array(
            array('type'=>'left','table'=>'vip_youdao_examined','on'=>array($this->table.'.task_id'=>'vip_youdao_examined.task_id')),
            array('type'=>'inner','table'=>'vip_youdao_question_details','on'=>array($this->table.'.task_id'=>'vip_youdao_question_details.task_id',$this->table.'.quesNumber'=>'vip_youdao_question_details.quesNumber')),
        );
        $recordCount = $this->count($condition,$join);
        $limit = 1000;
        $max = ceil($recordCount/$limit);
        for($i=1;$i<=$max;$i++) {
            $result = $this->findAll($condition, ['id' => 'asc'], ['vip_youdao_question.id','vip_youdao_question.quesNumber','vip_youdao_examined.paper_id','vip_youdao_examined.paper_name','vip_youdao_question_details.question_id','vip_youdao_question.many_times','vip_youdao_question.youdao_receive_time','vip_youdao_question.youdao_processing_time','vip_youdao_question.processing_days','vip_youdao_examined.paper_examined_time','vip_youdao_question.return_reason_content1','vip_youdao_question.return_reason_content2','vip_youdao_question.return_reason_answer1','vip_youdao_question.return_reason_answer2','vip_youdao_question.return_reason_analysis1','vip_youdao_question.return_reason_analysis2'], '', $join, $i, $limit);
            $result = json_decode(json_encode($result), true);
            if($result['data']){
                foreach ($result['data'] as $key=>$row){
                    $list[] = $row;
                }
            }
        }
        return $list;
    }
}
