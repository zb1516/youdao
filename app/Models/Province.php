<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/24
 * Time: 14:05
 */

namespace App\Models;

class Province extends Model
{

    protected $connection = 'mysql_kms';
    protected $table = "atf_citys";
    public $timestamps = false;
    /**
     * 获取省份
     * @param
     * @return array
     */
    public function getProvince()
    {
        $condition = array('oneid' => array('gt' => 0), 'twoid' => array('eq' => 0), 'threeid' => array('eq' => 0));
        $result = $this->findAll($condition, $order=[], ['id', 'city']);
        return $result;
    }

    /**
     * 获取所有数据
     * @return mixed
     */
    public function getCitys()
    {
        $condition = array('oneid' => ['gt' => 0],'twoid' =>['eq' => 0], 'threeid' =>['eq' => 0]);
        $list = $this->findAll($condition, $order=[], ['id','oneid', 'city']);
        foreach($list as $key => $val)
        {
            $list[$key]['children']=$this->findAll(['oneid'=>$val['id'],'twoid'=>['neq'=>0], 'threeid' => ['eq' => 0]]);
        }
        return $list;
    }

}