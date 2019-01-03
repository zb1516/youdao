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
            $searchArgs['userToken']=$request->header('userToken');
            if(!isset($searchArgs['userToken']))
            {
                throw new \Exception('缺少登陆用户token');
            }
            //获取登陆用户uid
            $userInfo=UserService::getUserInfo($searchArgs['userToken']);
            $result=KlibSubjectClient::getSubject($userInfo['userId'],$userInfo['micro_token']);
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
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);// post的变量
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
        $length = $url.length();
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

}