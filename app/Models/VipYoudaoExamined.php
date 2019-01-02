<?php

namespace App\Models;

use App\Http\Controllers\Common\CommonController;
use App\Models\Model;

class VipYoudaoExamined extends Model
{
    protected $table='vip_youdao_examined';
    protected $connection = "mysql_kms";
    public $timestamps = false;

    public function getPaperInfo($taskId){
        $condition = array(
            'task_id'=>$taskId
        );
        $paperInfo = $this->findOne($condition);
        if($paperInfo){
            $vipPaperImage = new VipPaperImage;
            $paperInfo['images'] = $vipPaperImage->findAll(array('task_id'=>$taskId,'is_delete'=>0), ['id'=>'asc']);
            if($paperInfo['subject_id']){
                $kmsSubject = new KmsSubjects;
                $paperInfo['subject_name'] = $kmsSubject->getSubjectName($paperInfo['subject_id']);
            }
            if($paperInfo['grade']){
                $vipDict = new VipDict;
                $gradeInfo = $vipDict->findOne(array('id'=>$paperInfo['grade'],'category'=>'GRADE'));
                $paperInfo['grade_name'] = $gradeInfo['title'];
            }
        }

        return $paperInfo;
    }


    /**
     * @param $formData
     * @return array
     */
    public function paperSearchArgs($formData){
        $searchArgs = array();
        if(isset($formData['subjectId'])){
            $searchArgs['subjectId'] = abs($formData['subjectId']);
        }
        if(isset($formData['gradeId'])){
            $searchArgs['gradeId'] = abs($formData['gradeId']);
        }
        if(isset($formData['province'])){
            $searchArgs['province'] = trim($formData['province']);
        }
        if(isset($formData['city'])){
            $searchArgs['city'] = trim($formData['city']);
        }
        //有道最终处理日期
        if (isset($formData['beginDate'])) {
            $searchArgs['beginDate'] = $formData['beginDate'];
        }
        if (isset($formData['endDate'])) {
            $searchArgs['endDate'] = $formData['endDate'];
        }
        if(isset($formData['status'])){
            $searchArgs['status'] = abs($formData['status']);
        }
        if(isset($formData['agencyId'])){
            $searchArgs['agencyId'] = abs($formData['agencyId']);
        }
        if(isset($formData['paperName'])){
            $searchArgs['paperName'] = trim($searchArgs['paperName']);
        }
        if(isset($formData['auditorId'])){//审核人
            $searchArgs['auditorId'] = abs($searchArgs['auditorId']);
        }
        //试卷审核日期
        if (isset($formData['auditBeginDate'])) {
            $searchArgs['auditBeginDate'] = $formData['auditBeginDate'];
        }
        if (isset($formData['auditEndDate'])) {
            $searchArgs['auditEndDate'] = $formData['auditEndDate'];
        }
        return $searchArgs;
    }


    /**
     * @param $searchArgs
     * @return array
     */
    public function paperCondition($searchArgs){
        $condition = [];
        //有道最终处理日期
        if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('lt' => strtotime ($searchArgs['endDate'].' 23:59:59'));
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('gt' => strtotime ($searchArgs['beginDate'].' 00:00:01'));
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('between' => array(strtotime ($searchArgs['beginDate'].' 00:00:01'),strtotime ($searchArgs['endDate'].' 23:59:59')));
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
            $condition['paper_examined_time'] = array('lt' => strtotime ($searchArgs['auditEndDate'].' 23:59:59'));
        }
        if (!empty($searchArgs['auditBeginDate']) && empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('gt' => strtotime ($searchArgs['auditBeginDate'].' 00:00:01'));
        }
        if (!empty($searchArgs['auditBeginDate']) && !empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('between' => array(strtotime ($searchArgs['auditBeginDate'].' 00:00:01'),strtotime ($searchArgs['auditEndDate'].' 23:59:59')));
        }
        return $condition;
    }

    public function paperList($searchArgs, $currentPage = 1, $pageSize = 20){
        $condition = $this->paperCondition($searchArgs);
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }

        $list = $this->findAll($condition, ['upload_time'=>'asc'], ['task_id','paper_name','agency_id','final_processing_time','paper_examined_time','paper_examined_status'], '',[],$currentPage,$pageSize);
        $list = $this->formatPaperList($list);
        return array('rows' => $list, 'total' => $recordCount);
    }


    public function paperStatistic($searchArgs){
        $condition = $this->paperCondition($searchArgs);
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $list = $this->findAll($condition, [], ['paper_examined_status'], '',[],null);
        $totalCount = $waitCount = $passCount = $returnCount = 0;
        if($list){
            foreach ($list as $row){
                $totalCount++;
                if($row['paper_examined_status'] == 2){
                    $waitCount++;
                }
                if($row['paper_examined_status'] == 3){
                    $passCount++;
                }
                if($row['paper_examined_status'] == 4){
                    $returnCount++;
                }
            }
        }
        return array(
                'totalCount'=>$totalCount,
                'waitCount'=>$waitCount,
                'passCount'=>$passCount,
                'returnCount'=>$returnCount
            );
    }


    /**
     * 获取试卷辅助信息
     * @param $list
     * @return mixed
     */
    public function formatPaperList($list){
        if($list){
            $vipYoudaoAgency = new VipYoudaoAgency;
            foreach ($list as &$row){
                //获取机构名称
                if($row['agency_id']){
                    $agencyInfo = $vipYoudaoAgency->findOne(array('agency_id'=>$row['agency_id']),[],['agency_name']);
                    $row['agency_name'] = $agencyInfo['agency_name'];
                }

            }
        }
        return $list;
    }
}
