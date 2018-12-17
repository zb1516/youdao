<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/30
 * Time: 17:51
 */

namespace App\Models;

class VipDictGrade extends Model
{
    protected $table = "vip_dict_grade";
    protected $connection = "mysql_kms";
    public $timestamps = false;

    /**
     * 获取年级
     * @param $searchArgs
     */
    public function getDictGrade()
    {
        $condition = array(
            'status' => 1
        );
        $result = $this->findAll($condition, $order=[], ['id', 'title']);
        return $result;

    }

}