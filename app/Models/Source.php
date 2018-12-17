<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/24
 * Time: 15:22
 */

namespace App\Models;

class Source extends Model
{
    public function getPaperSource($subjectId)
    {
        $kmsSubjects = new KmsSubjects();
        $subjectName = $kmsSubjects->getSubjectName($subjectId);
        $result = $this->getQuesSources($subjectName);
        return $result;
    }

    public function getQuesSources($subjectName = '')
    {
        $arrXMath = array(
            '单元测试卷', '期中测试卷', '期末测试卷', '小升初真题', '小升初综合题', '分班真题', '其他'
        );

        $arrXMath2 = array(
            '迎春杯', '华杯', '走美杯', '希望杯', '高斯杯', '金帆', '龙校', '高思导引', '其他'
        );

        $arrXChinese = array(
            '小升初试题', '杯赛真题', '期中考试', '期末考试', '分班试题', '单元测试卷', '其他'
        );

        $arrXEnglish = array(
            '小升初试题', '杯赛真题', '期中考试', '期末考试', '分班试题', '单元测试卷', '其他'
        );

        $arrMiddle = array(
            '中考真题', '中考一模', '中考二模', '期中考试', '期末考试', '月考卷', '章节测试卷', '中考其他模拟', '其他'
        );
        $arrMEnglish = array('中考真题', '中考一模', '中考二模', '中考其他模拟', '期中考试', '期末考试', '阶段测评', '其他');

        $arrHigh = array(
            '高考真题', '高考一模', '高考二模', '期中考试', '期末考试', '会考', '月考卷', '章节测试卷', '高考其他模拟', '其他'
        );
        $arrHChinese = array('高考真题', '高考一模', '高考二模', '期中考试', '期末考试', '月考卷', '章节测试卷', '高考其他模拟', '其他');
        $arrHEnglish = array('高考真题', '高考一模', '高考二模', '高考其他模拟', '期中考试', '期末考试', '月考卷', '阶段测评', '其他');

        $keys = array('arrXMath', 'arrXMath2', 'arrXChinese', 'arrXEnglish', 'arrMiddle', 'arrMEnglish', 'arrHigh', 'arrHChinese', 'arrHEnglish');

        if (false == $subjectName) {
            $sourceArray = array();
            foreach ($keys as $key) {
                $sourceArray = array_merge($sourceArray, $$key);
            }
            $sourceArray = array_unique($sourceArray);
            return $sourceArray;
        }

        if (strstr($subjectName, '初中') && !in_array($subjectName, array('初中英语'))) {
            return $arrMiddle;
        }
        if (strstr($subjectName, '高中') && !in_array($subjectName, array('高中英语', '高中语文'))) {
            return $arrHigh;
        }
        $arrs = array(
            '小学思维' => $arrXMath2,
            '小学数学' => $arrXMath,
            '小学语文' => $arrXChinese,
            '小学英语' => $arrXEnglish,
            '初中英语' => $arrMEnglish,
            '高中英语' => $arrHEnglish,
            '高中语文' => $arrHChinese
        );
        if (isset($arrs[$subjectName])) {
            return $arrs[$subjectName];
        }
        return array('其他');
    }
}
