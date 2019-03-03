<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/24
 * Time: 9:46
 */

namespace App\Models;

use DB;

class Common extends Model
{

    public $timestamps = false;

    public static function getAllSubjectNames()
    {
        $dictGrade = new VipDictGrade();
        $result = $dictGrade->getDictGrade();
        $gradeArray = [];
        foreach ($result as $v) {
            $gradeArray[$v['id']] = str_replace('部', '', $v['title']);
        }
        $dictSubject = new VipDictSubject();
        $result = $dictSubject->getDictSubject();
        $subjectNamesArray = [];
        foreach ($result as $v) {
            $subjectNamesArray[$v['id']] = $gradeArray[$v['grade_id']] . $v['title'];
        }
        dd($subjectNamesArray);
        return $subjectNamesArray;
    }
    /**
     * 字符串转换
     */
    public function stringTransformation($subjectName)
    {
        $str = str_replace("初中","初中-",$subjectName);
        $str = str_replace("小学","小学-",$str);
        $str = str_replace("高中","高中-",$str);
        $str = str_replace("国际课程","国际课程-",$str);
        $str = str_replace("创新思维","创新思维-",$str);
        return $str;
    }
}



