<?php
namespace App\Models;
use App\Models\Model;
class VpKnowledgeCourseTypeRs extends  Model
{
    protected $table='vip_knowledge_course_type_rs';
    protected $connection='mysql_kms';
    public $timestamps=false;

    public function getKnowledgeCourseTypeRs($courseTypeId)
    {
        return $this->findAll(['course_type_id'=>$courseTypeId],['id'=>'desc'],['knowledge_id']);
    }
}