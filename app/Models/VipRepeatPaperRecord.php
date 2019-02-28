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
            $vipYoudaoWorkingWeekendDays = new VipYoudaoWorkingWeekendDays();
            $diffDays = $vipYoudaoWorkingWeekendDays->getDiffDaysCount($result['upload_time'],$date);
            $data = [
                'image_examined_status' => 4,
                'image_examined_time' => $date,
                'image_examined_auditor_id' => $userInfo['id'],
                'image_processing_days' => $diffDays,
            ];
            $result = $vipYoudaoExamined->edit($data, $condition);
            if($result === false)
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
            $result = $this->add($data);
            if($result === false)
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
            $resultEdit = $this->edit($data, $condition);
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
