<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/30
 * Time: 17:52
 */

namespace App\Models;

class VipDictSubject extends Model
{
    protected $table = "vip_dict_subject";
    protected $connection = "mysql_kms";
    public $timestamps = false;

    public function getDictSubject($condition=[])
    {
        $condition['status']=1;
        $result = $this->findAll($condition, $order=[], ['id', 'grade_id', 'title']);
        return $result;

    }
}