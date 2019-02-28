<?php

namespace App\Models;

class VipRepeatPaperRecord extends Model
{
    protected $table='vip_repeat_paper_record';
    protected $connection = "mysql_kms";
    public $timestamps=false;
    /**
     * 重复试卷记录表
     */
    public function repeatPaperRecord($taskId, $paperId, $userKey)
    {
        $this->beginTransaction();
        $condition = array(
            'task_id' => $taskId
        );
        $vipYoudaoExamined = new VipYoudaoExamined();
        $result = $vipYoudaoExamined->findOne($condition);
        $date = date("Y-m-d H:i:s",time());
        $userModel = new User();
        $userInfo = $userModel->getUserInfo($userKey);
        if($result){
            $vipPaper = new Paper();
            $conditionPaper = array(
                'id' => $paperId
            );
            $resultPaper = $vipPaper->findOne($conditionPaper)->toArray();
            unset($resultPaper['id']);
            $resultPaper['agency_id'] = $result['agency_id'];
            $resultPaper['created_time'] = time();
            $resultEditPaper = $vipPaper->add($resultPaper);
            if($resultEditPaper === false)
            {
                $this->rollback();
                throw new \Exception('保存试卷记录失败');
            }
            $conditionQuestion = array(
                'paper_id' => $paperId
            );
            $vipQuestion = new Question();
            $resultQuestion = $vipQuestion->findAll($conditionQuestion);
            foreach ($resultQuestion as $v){
                unset($v['id']);
                $v['agency_id'] = $result['agency_id'];
                $v['content_text'] = strip_tags($v['content_text']);
                $v['analysis_text'] = strip_tags($v['analysis_text']);
                $resultEditQuestion = $vipQuestion->add($v);
                if($resultEditQuestion === false)
                {
                    $this->rollback();
                    throw new \Exception('保存试题记录失败');
                }
            }
            $vipYoudaoWorkingWeekendDays = new VipYoudaoWorkingWeekendDays();
            $diffDays = $vipYoudaoWorkingWeekendDays->getDiffDaysCount($result['upload_time'],$date);
            $gradeName = config('app.GRADE_NAME_VALUE');
            $common = new Common();
            $allSubjectNames = $common->getAllSubjectNames();
            $subjectName = isset($allSubjectNames[$resultPaper['subject_id']]) ? $allSubjectNames[$resultPaper['subject_id']] : '';
            $str = '';
            if($subjectName){
                $str = $common->stringTransformation($subjectName);
            }
            $paperName = $result['agency_id'].'-'.'套卷VIP'.'-'.$str.'-'.$resultPaper['year'].'-'.$resultPaper['province'].'-'.$resultPaper['city'].'-'.$resultPaper['country'].'-'.$resultPaper['school'].'-'.$resultPaper['grades'].'-'.$resultPaper['term'].'-'.$resultPaper['source'].'-'.$resultPaper['other1'].'-'.$resultPaper['other2'].'-'.$resultPaper['duration'].'-'.$resultPaper['score'].'-'.$resultPaper['question_number'];
            $data = [
                'image_examined_status' => 4,
                'image_examined_time' => $date,
                'image_examined_auditor_id' => $userInfo['id'],
                'image_processing_days' => $diffDays,
                //'paper_examined_status' => 3,
                'paper_id' => $paperId,
                'subject_id' => $resultPaper['subject_id'],
                'grade' => $gradeName[$resultPaper['grades']],
                'province' => $resultPaper['province'],
                'city' => $resultPaper['city'],
                'area' => $resultPaper['country'],
                'school' => $resultPaper['school'],
                'year' => $resultPaper['year'],
                'semester' => $resultPaper['term'],
                'source' => $resultPaper['source'],
                'examination_length' => $resultPaper['duration'],
                'examination_score' => $resultPaper['score'],
                'question_number' => $resultPaper['question_number'],
                'other_information_one' => $resultPaper['other1'],
                'other_information_two' => $resultPaper['other2'],
                'paper_name' => $paperName,
                'image_error_type' => ''
            ];

            $resultEdit = $vipYoudaoExamined->edit($data, $condition);
            if($resultEdit === false)
            {
                $this->rollback();
                throw new \Exception('试卷退回失败');
            }
        }
        $result = $this->findOne($condition);
        if(empty($result)){
            $data = [
                'task_id' => $taskId,
                'paper_id' => $paperId,
                'create_time' => $date,
            ];
            $resultAdd = $this->add($data);
            if($resultAdd === false)
            {
                $this->rollback();
                throw new \Exception('保存试卷记录失败');
            }
        }else{
            $this->rollback();
            throw new \Exception('已经有重复记录了');
        }
        $vipPaperImage = new VipPaperImage();
        $resultAll = $vipPaperImage->findAll($condition);
        if($resultAll){
            $data = [
                'is_delete' => 1,
            ];
            $resultEdit = $vipPaperImage->edit($data, $condition);
            if($resultEdit === false)
            {
                $this->rollback();
                throw new \Exception('图片详情退回失败');
            }
        }
        $this->commit();
        return true;
    }

}
