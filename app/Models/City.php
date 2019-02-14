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
        $result = $this->findAll($condition, $order=[], ['id', 'oneid', 'twoid', 'city']);
        $list = [];
        foreach ($result as $item) {
            $list[$item['id']]['id'] = $item['twoid'].'-'.$item['id'];
            $list[$item['id']]['oneid'] = $item['oneid'];
            $list[$item['id']]['twoid'] = $item['twoid'];
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
    /**
     * 获取区
     * @param $provinceIds
     * @return array
     */
    public function getIdAreas($provinceIds)
    {
        if(empty($provinceIds)) return [];
        $condition = array('id' => array('not in' => $provinceIds), 'oneid' => array('in' => $provinceIds), 'threeid' => array('neq' => 0));
        $result = $this->findAll($condition, $order=[], ['id', 'oneid', 'city']);
        $list = [];
        foreach ($result as $item) {
            $list[$item['id']] = $item['city'];
        }
        ksort($list);
        return $list;
    }

    /**
     * 获取区域area
     * @param $provinceId
     * @param $twoId
     * @return array
     */
    public function getAreaCitys($provinceId,$twoId)
    {
        $condition = array('id' => array('neq' => $provinceId), 'oneid' => array('eq' => $provinceId), 'twoid' => array('eq' => $twoId), 'threeid' => array('neq' => 0));
        $result = $this->findAll($condition, $order=[], ['id', 'oneid', 'city']);
        $list = [];
        foreach ($result as $item) {
            $list[$item['id']]['id'] = $item['id'];
            $list[$item['id']]['city'] = $item['city'];
        }
        return $list;
    }



    public function getCitysByIds($cityIds){
        $condition = array('id'=>array('in'=>$cityIds));
        return $this->findAll($condition, $order=[], ['id', 'oneid', 'city']);
    }
}