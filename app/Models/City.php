<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/24
 * Time: 15:39
 */

namespace App\Models;

class City extends Model
{
    
    protected $connection = 'mysql_kms';
    protected $table = "atf_citys";
    public $timestamps = false;
    /**
     * 获取市
     * @param $provinceId
     * @return array
     */
    public function getAjaxCitys($provinceId)
    {
        $condition = array('id' => array('neq' => $provinceId), 'oneid' => array('eq' => $provinceId), 'threeid' => array('eq' => 0));
        $result = $this->findAll($condition, $order=[], ['id', 'oneid', 'city']);
        $list = [];
        foreach ($result as $item) {
            $list[$item['id']]['id'] = $item['id'];
            $list[$item['id']]['city'] = $item['city'];
        }
        return $list;
    }
    /**
     * 获取市
     * @param $provinceIds
     * @return array
     */
    public function getIdCountrys($provinceIds)
    {
        if(empty($provinceIds)) return [];
        $condition = array('id' => array('not in' => $provinceIds), 'oneid' => array('in' => $provinceIds), 'threeid' => array('eq' => 0));
        $result = $this->findAll($condition, $order=[], ['id', 'oneid', 'city']);
        $list = [];
        foreach ($result as $item) {
            $list[$item['id']] = $item['city'];
        }
        ksort($list);
        return $list;
    }
}