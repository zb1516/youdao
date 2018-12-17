<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/24
 * Time: 10:34
 */

namespace App\Models;

class Grade extends Model
{
    protected $connection = 'mysql_kms';
    protected $table = "vip_dict_grade";
    public $timestamps = false;

    public function getGradeArray()
    {
        $condition = array(
            'status' => 1
        );
        $gradeList = $this->findAll($condition);
        $grades = array();
        foreach ($gradeList as $grade) {
            $grades[$grade['id']] = $grade['title'];
        }
        return $grades;
    }
}
