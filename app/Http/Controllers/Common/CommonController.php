<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/24
 * Time: 9:36
 */

namespace App\Http\Controllers\Common;

use App\Clients\KlibSubjectClient;
use App\Clients\KlibTeacherClient;
use App\Http\Controllers\BaseController;
use App\Models\SysRoles;
use App\Models\SysUsers;
use App\Services\UserService;
use Illuminate\Http\Request;
use App\Models\KmsSubjects;
use App\Models\Province;
use App\Models\Source;
use App\Models\City;
use App\Models\VipDictQuestionType;
use App\Models\VipDict;
use App\Models\VipYoudaoAgency;
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
        $this->vipYoudaoAgency = new VipYoudaoAgency;

        $this->city = new City;

        $this->sysRoles = new SysRoles();
        $this->sysUsers = new SysUsers();

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
            return response()->json(['status'=>200,'data'=>['rows'=>$allGrade]]);
        } catch (\Exception $e) {
            return [
                'status'=>0,
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

    /**
     * 获取有道学科
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public static function getSubjectYD(Request $request)
    {
        try{
//            $searchArgs['token']=$request->input('token');
//            if(!isset($searchArgs['token']))
//            {
//                throw new \Exception('缺少微信用户token');
//            }
//            //获取登陆用户uid
//            $userInfo=UserService::getUserInfo($searchArgs['token']);
//            $result=KlibSubjectClient::getSubject($userInfo['userId'],$userInfo['micro_token']);
            $json='{"code":0,"message":"\u64cd\u4f5c\u6210\u529f","data":{"rows":[{"id":38,"name":"\u5c0f\u5b66\u6570\u5b66","type":"1"},{"id":2,"name":"\u5c0f\u5b66\u8bed\u6587","type":"1"},{"id":1,"name":"\u5c0f\u5b66\u601d\u7ef4","type":"1"},{"id":3,"name":"\u5c0f\u5b66\u82f1\u8bed","type":"1"},{"id":58,"name":"\u5c0f\u5b66\u827a\u672f","type":"1"},{"id":35,"name":"\u521d\u4e2d\u751f\u7269","type":"2"},{"id":47,"name":"\u521d\u4e2d\u5730\u7406","type":"2"},{"id":39,"name":"\u521d\u4e2d\u5386\u53f2","type":"2"},{"id":5,"name":"\u521d\u4e2d\u8bed\u6587","type":"2"},{"id":4,"name":"\u521d\u4e2d\u6570\u5b66","type":"2"},{"id":6,"name":"\u521d\u4e2d\u82f1\u8bed","type":"2"},{"id":7,"name":"\u521d\u4e2d\u7269\u7406","type":"2"},{"id":8,"name":"\u521d\u4e2d\u5316\u5b66","type":"2"},{"id":48,"name":"\u521d\u4e2d\u653f\u6cbb","type":"2"},{"id":60,"name":"\u521d\u4e2d\u79d1\u5b66","type":"2"},{"id":57,"name":"\u521d\u4e2d\u827a\u672f","type":"2"},{"id":11,"name":"\u9ad8\u4e2d\u8bed\u6587","type":"3"},{"id":25,"name":"\u9ad8\u4e2d\u6570\u5b66","type":"3"},{"id":12,"name":"\u9ad8\u4e2d\u82f1\u8bed","type":"3"},{"id":13,"name":"\u9ad8\u4e2d\u7269\u7406","type":"3"},{"id":14,"name":"\u9ad8\u4e2d\u5316\u5b66","type":"3"},{"id":50,"name":"\u9ad8\u4e2d\u653f\u6cbb","type":"3"},{"id":40,"name":"\u9ad8\u4e2d\u751f\u7269","type":"3"},{"id":49,"name":"\u9ad8\u4e2d\u5730\u7406","type":"3"},{"id":41,"name":"\u9ad8\u4e2d\u5386\u53f2","type":"3"},{"id":56,"name":"\u9ad8\u4e2d\u827a\u672f","type":"3"}]}}';
            $jsonArr=json_decode($json,true);
            $result=$jsonArr['data']['rows'];
            return response()->json(['status'=>200,'data'=>['rows'=>$result]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 获取试卷审核状态
     */
    public static function getPaperStatus()
    {
        $status = config('app.IMAGE_EXAMINED_STATUS');
        return response()->json($status);
    }


    /**
     * 获取图片审核状态
     */
    public static function getImageStatus()
    {
        $status = config('app.IMAGE_EXAMINED_STATUS');
        return response()->json($status);
    }


    public  function getAuditors(Request $request)
    {
        try{
            $roleName = $request->roleName;
            $roleId = $this->sysRoles->getRoleId($roleName);
            $auditors = $this->sysUsers->getUserNames($roleId);
            return response()->json($auditors);
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 获取有道信息内容
     * @param $url
     * @param $postData
     * @param $type 1为投递任务，2为获取任务
     * @return boolean
     */
    public function getYoudaoTask($url,$postData,$type=1)
    {
        try{
            $appKey = config('app.TEST_APP_KEY');
            $appSecret = config('app.TEST_APP_SECRET');
            $url = config('app.TEST_YOUDAO_URL').$url;
            $salt = rand(1,1000);
            $time = time();
            if($type == 1){
                $sign = $this->getYoudaoSign($appKey,$postData['questionUrl'],$salt,$time,$appSecret);
            }else{
                $sign = $this->getYoudaoSign($appKey,$postData['data']['taskId'],$salt,$time,$appSecret);
            }
            $postData = array(
                'appKey' => $appKey,
                'salt' => $salt,
                'curtime' => $time,
                'sign' => $sign,
                'type' => 1,
            );
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POST, 1);// post数据
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));// post的变量
            $result = curl_exec($ch);//有道返回的内容
            curl_close($ch);
            return response()->json($result);
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 获取有道签名认证
     * @return array
     */
    public function getYoudaoSign($appKey,$url,$salt,$time,$appSecret)
    {
        $str = $this->getYoudaoInput($url);
        $base64_encode_str = $appKey.base64_encode($str).$salt.$time.$appSecret;
        $result = hash('sha256', $base64_encode_str, true);
        return bin2hex($result);
    }
    /**
     * 获取有道input值
     * @return array
     */
    public function getYoudaoInput($url)
    {
        $INPUT_LENGTH_LIMIT = 20;
        $length = strlen($url);
        if ($length <= $INPUT_LENGTH_LIMIT) {
            return $url;
        }
        $str = substr($url,0,10).$length.substr($url,$length-10,$length);
        return $str;
    }
    //获取有道机构列表
    public function getYoudaoAgency()
    {
        $result = $this->vipYoudaoAgency->getYoudaoAgency();
        if(empty($result)){
            return json_encode([]);
        }
        $list = [];
        foreach ($result as $v){
            $list[] = [
                'agencyId' => $v['agency_id'],
                'agencyName' => $v['agency_name']
            ];

        }
        return response()->json($list);
    }
    /*
     * 获取省市
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCitys(Request $request)
    {
        try{
            $provinceModel=new Province();
            $list=$provinceModel->getCitys();
            return response()->json(['status'=>200,'data'=>['rows'=>$list]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 根据省份Id获取区域area
     */
    public function getPaperAreasAjaxSearch(Request $request)
    {
        try {
            $areas = [];
            $provinceId = abs($request->post('provinceId', ''));
            $twoId = abs($request->post('twoId', ''));
            if ($provinceId) {
                $areas = $this->city->getAreaCitys($provinceId,$twoId);
            }
            return response()->json($areas);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }

    }

}