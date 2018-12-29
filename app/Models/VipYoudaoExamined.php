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


    public function paperSearchArgs($formData){
        $searchArgs = array();
        if(isset($formData['subjectId'])){
            $searchArgs['subject_id'] = abs($formData['subjectId']);
        }
        if(isset($formData['grade'])){
            $searchArgs['grade'] = abs($formData['gradeId']);
        }
        if(isset($formData['province'])){
            $searchArgs['province'] = trim($formData['province']);
        }
        if(isset($formData['city'])){
            $searchArgs['city'] = trim($formData['city']);
        }
        if(isset($formData['status'])){
            $searchArgs['paper_examined_status'] = abs($formData['status']);
        }
        if(isset($formData['agencyId'])){
            $searchArgs['agency_id'] = abs($formData['agencyId']);
        }
        if(isset($formData['paperName'])){
            $searchArgs['paper_name'] = array('like' => "%" . $searchArgs['paperName'] . "%");
        }
        return $searchArgs;
    }


    public function paperList($searchArgs, $currentPage = 1, $pageSize = 20){

    }
}

