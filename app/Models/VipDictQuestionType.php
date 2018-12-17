<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/30
 * Time: 16:46
 */

namespace App\Models;

class VipDictQuestionType extends Model
{
    protected $table = "vip_dict_question_type";
    protected $connection = "mysql_kms";
    public $timestamps = false;
    protected $dictType = 'QUESTION_TYPE';

    public function getQuesTypes($subjectId)
    {
        $condition = array(
            'subject_id' => $subjectId,
            'status' => 1
        );
        $typeList = $this->findAll($condition, ['sort' => 'asc'], ['id', 'question_type_code', 'title']);
        if (false == $typeList) {
            return array();
        }
        $typeCodes = array();
        foreach ($typeList as $type) {
            $typeCodes[$type['question_type_code']] = array('id' => $type['id'], 'title' => $type['title']);
        }
        $vipDict = new VipDict();
        $dictArray = $vipDict->getDictArrayByCodes($this->dictType, array_keys($typeCodes));
        foreach ($typeCodes as $code => $typeInfo) {
            if (false == isset($dictArray[$code])) {
                unset($typeCodes[$code]);
            } else {
                unset($dictArray[$code]['id']);
                if ($typeCodes[$code]['title']) {
                    unset($dictArray[$code]['title']);
                }
                $typeCodes[$code] = array_merge($typeCodes[$code], $dictArray[$code]);
            }
        }
        return array_values($typeCodes);
    }
}