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
    public function repeatPaperRecord($taskId, $paperId,$userKey)
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
            $data = [
                'mage_examined_status' => 4,
                'image_examined_time' => $date,
                'image_examined_auditor_id' => $userInfo['id'],
            ];
            $result = $vipYoudaoExamined->edit($data,$condition);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('试卷退回失败');
            }
        }
        $result = $this->findOne($condition);
        if(!empty($result)){
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
        }
        $this->commit();
        return true;
    }

}
