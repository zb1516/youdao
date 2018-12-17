<?php

namespace App\Models;

use App\Models\Model;

class VpDictKnowledgeType extends Model
{
    protected $table='vip_dict_knowledge_type';
    protected $connection='mysql_kms';
    public $timestamps=false;

    /**
     * 获取知识点类型
     * @param $subjectId
     * @return mixed
     */
    public function getKnowledgeType($subjectId)
    {
        return $this->findOne(['subject_id'=>$subjectId,'title'=>'通用版','status'=>1,'is_gaosi'=>1]);
    }
}
