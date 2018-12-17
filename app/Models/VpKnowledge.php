<?php

namespace App\Models;

use App\Models\Model;

class VpKnowledge extends Model
{
    protected $table = 'vip_knowledge';
    protected $connection = 'mysql_kms';
    public $timestamps = false;

    /**
     * 获取知识点
     * @param $knowledgeIds
     * @return array
     */
    public function getKnowledge($knowledgeIds)
    {
        $condition=[
            'id'=>['in'=>$knowledgeIds],
            'parent_id'=>0,
            'status'=>1
        ];
        $list=$this->findAll($condition,['sort'=>'asc'],['id','name','parent_id','level','sort']);
        return $list;
    }

    /**
     * 获取下级知识点
     * @param $parentId
     * @return mixed
     */
    public function getKnowledgeChildren($parentId)
    {
       $list=$this->findAll(['parent_id'=>$parentId,'status'=>1],['sort'=>'asc'],['id','name','parent_id','level','sort']);
       return $list;
    }
}