<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/30
 * Time: 16:47
 */

namespace App\Models;

class VipDict extends Model
{
    protected $table = "vip_dict";
    protected $connection = "mysql_kms";
    public $timestamps = false;

    public function getDictArrayByCodes($dictType, $codes)
    {
        $condition = array(
            'category' => $dictType,
            'code' => array('in' => $codes),
            'status' => 1
        );
        $dictList = $this->findAll($condition, $order=[], ['id', 'code', 'title']);
        $dictArray = array();
        foreach ($dictList as $row) {
            $code = $row['code'];
            $dictArray[$code] = $row;
        }
        return $dictArray;
    }

    /**
     * 获取所有年级
     * @param string
     * @return array
     */
    public function getAllGrade($category)
    {
        $condition = [
            'category' => $category,
        ];
        $result = $this->findAll($condition, $order=[], ['id', 'title']);
        $allGrade = [];
        foreach ($result as $value) {
            $allGrade[] = ['gradeId' => $value['id'], 'gradeName' => $value['title']];
        }
        return $allGrade;
    }

}