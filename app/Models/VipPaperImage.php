<?php

namespace App\Models;

use App\Models\Model;

class VipPaperImage extends Model
{
    protected $table='vip_paper_image';
    protected $connection = "mysql_kms";
    public $timestamps=false;
    /**
     * 图片审核列表详情
     */
    public function getImagePaperDetail($taskId, $paperType)
    {
        if($paperType == 1){
            $condition = array(
                'task_id' => $taskId,
                'image_type' => 3,
            );
            $result = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            return $result;
        }else{
            $condition = array(
                'task_id' => $taskId,
                'image_type' => 1,
            );
            $question = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            $condition = array(
                'task_id' => $taskId,
                'image_type' => 2,
            );
            $answer = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            return ['question' => $question, 'answer' => $answer];
        }

    }
}
