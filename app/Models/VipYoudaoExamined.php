<?php

namespace App\Models;

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
        return $searchArgs;
    }


    /**
     * @param $searchArgs
     * @return array
     */
    public function paperCondition($searchArgs){
        $condition = array();
        if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('lt' => strtotime ($searchArgs['endDate'].' 23:59:59'));
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('gt' => strtotime ($searchArgs['beginDate'].' 00:00:01'));
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('between' => array(strtotime ($searchArgs['beginDate'].' 00:00:01'),strtotime ($searchArgs['endDate'].' 23:59:59')));
        }
        if ($searchArgs['subjectId']) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if ($searchArgs['gradeId']) {
            $condition['grade'] = array('eq' => $searchArgs['gradeId']);
        }
        if ($searchArgs['province']) {
            $condition['province'] = array('eq' => $searchArgs['province']);
        }
        if ($searchArgs['city']) {
            $condition['city'] = array('eq' => $searchArgs['city']);
        }
        if ($searchArgs['status']) {
            $condition['paper_examined_status'] = array('eq' => $searchArgs['status']);
        }
        if ($searchArgs['agencyId']) {
            $condition['agency_id'] = array('eq' => $searchArgs['agencyId']);
        }
        if ($searchArgs['paperName']) {
            $condition['paper_name'] = array('like' => "%" . $searchArgs['paperName'] . "%");;
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

        return array('rows' => $list, 'total' => $recordCount);
    }


    public function paperStatistic($searchArgs){

    }
}

