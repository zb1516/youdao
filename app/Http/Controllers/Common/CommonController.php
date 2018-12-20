<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/24
 * Time: 9:36
 */

namespace App\Http\Controllers\Common;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use App\Models\KmsSubjects;
use App\Models\Province;
use App\Models\Source;
use App\Models\City;
use App\Models\VipDictQuestionType;
use App\Models\VipDict;
use DB;


class CommonController extends BaseController
{

    public function __construct()
    {
        parent::__construct();
        $this->kmsSubjects = new KmsSubjects;
        $this->province = new Province;
        $this->source = new Source;
        $this->vipDict = new VipDict;
        $this->vipDictQuestionType = new VipDictQuestionType;

        $this->city = new City;
    }

    //获取用户学科信息
    public function getSubjects()
    {

        $subjects = $this->kmsSubjects->getSubjects($this->userKey);
        $subjectNames = [];
        if ($subjects) {
            $subjectNames = $this->kmsSubjects->getGradeSubjectNames($subjects);//年级学科名称
        }
        return response()->json($subjectNames);

    }

    //获取省份
    public function getProvince()
    {
        $result = $this->province->getProvince();
        return response()->json($result);

    }

    //获取年份
    public function getYear()
    {
        $year = config('app.YEAR');
        rsort($year);
        $yearArray = [];
        foreach ($year as $v) {
            $yearArray[] = [
                "yearText" => $v,
                "yearValue" => $v,
            ];
        }
        return response()->json($yearArray);
    }
    //获取判断类型
    public function getJudgeType()
    {
        $judgeType = config('app.JUDGE_TYPE');
        $judgeTypeArray = [];
        foreach ($judgeType as $v) {
            $judgeTypeArray[] = [
                "typeText"  => $v,
                "typeValue" => $v,
            ];
        }
        return response()->json($judgeTypeArray);
    }

    /**
     * 根据学科Id获取来源(试卷状态)
     */
    public function getPaperSourceAjaxSearch(Request $request)
    {
        try {

            $subjectId = abs($request->get('subjectId', ''));
            $sources = [];
            if ($subjectId) {
                $paperSources = $this->source->getPaperSource($subjectId);
                foreach ($paperSources as $v) {
                    $sources[]['sourceName'] = $v;
                }
            }
            return response()->json($sources);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }

    }

    /**
     * 根据学科Id获取题型(单题状态)
     */
    public function getQuestionTypeAjaxSearch(Request $request)
    {
        try {
            $subjectId = abs($request->get('subjectId', ''));

            $questionTypes = [];
            if ($subjectId) {
                $questionTypes = $this->vipDictQuestionType->getQuesTypes($subjectId);
            }
            return response()->json($questionTypes);
        } catch (\Exception $e) {
            return [
                'errorMsg' => $e->getMessage(),
            ];
        }
    }

    /**
     * /获取所有年级
     */
    public function getAllGrade(Request $request)
    {
        try {
            $allGrade = $this->vipDict->getAllGrade($category = 'GRADE');//获取所有年级
            return response()->json($allGrade);
        } catch (\Exception $e) {
            return [
                'errorMsg' => $e->getMessage(),
            ];
        }
    }


    /**
     * 根据省份Id获取地区(试卷状态)
     */
    public function getPaperCitysAjaxSearch(Request $request)
    {
        try {
            $citys = [];
            $provinceId = abs($request->post('provinceId', ''));
            if ($provinceId) {
                $citys = $this->city->getAjaxCitys($provinceId);
            }
            return response()->json($citys);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }

    }

    /**
     * 获取当月第一天和最后一天
     * @return array
     */
    public static function getMonthTime()
    {
        $beginDate = date('Y-m-01', strtotime(date("Y-m-d")));
        $lastday = date('Y-m-d', strtotime("$beginDate +1 month -1 day"));
        $arr = [];
        $arr['fristday'] = $beginDate;
        $arr['lastday'] = $lastday;
        return response()->json($arr);
    }


}