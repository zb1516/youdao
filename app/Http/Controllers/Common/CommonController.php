<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/24
 * Time: 9:36
 */

namespace App\Http\Controllers\Common;

use App\Clients\KlibQuestionClient;
use App\Clients\KlibSubjectClient;
use App\Clients\KlibTeacherClient;
use App\Http\Controllers\BaseController;
use App\Jobs\UploadQueue;
use App\Models\Question;
use App\Models\SysRoles;
use App\Models\SysUsers;
use App\Models\VipDictGrade;
use App\Models\VipDictSubject;
use App\Models\VipQuestionOption;
use App\Services\UserService;
use Illuminate\Http\Request;
use App\Models\KmsSubjects;
use App\Models\Province;
use App\Models\Source;
use App\Models\City;
use App\Models\VipDictQuestionType;
use App\Models\VipDict;
use App\Models\VipYoudaoAgency;
use App\Services\YoudaoService;
use App\Clients\KlibPaperClient;
use DB;
use Illuminate\Support\Facades\Redis;

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
        $this->youdaoService = new YoudaoService();

    }

    //获取用户学科信息
    public function getSubjects()
    {
        try {
            $subjects = $this->kmsSubjects->getSubjects($this->userKey);
            $subjectNames = [];
            if(empty($subjects))
            {
                throw new \Exception('该教师下没有学科');
            }
            if ($subjects) {
                $subjectNames = $this->kmsSubjects->getGradeSubjectNames($subjects);//年级学科名称
            }
            return response()->json($subjectNames);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }

    }

    //获取省份
    public function getProvince()
    {
        //return 1;
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
            //$allGrade = $this->vipDict->getAllGrade($category = 'GRADE');//获取所有年级
            $allGrade = Config('app.GRADE_VALUE');
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

    /**
     * 获取有道学科
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public static function getSubjectYD(Request $request)
    {
        try{
            $searchArgs['token']=$request->input('token');
            //获取登陆用户uid
            $userInfo=UserService::getUserInfo($searchArgs['token']);
            $result=KlibSubjectClient::getSubject($userInfo['userId'],$userInfo['micro_token']);
            $res=[];
            if(!empty($result['data']))
            {
                foreach($result['data'] as $key => $val)
                {
                    $res[$key]['id']=$val['subjectId'];
                    $res[$key]['name']=$val['subjectName'];
                    $res[$key]['type']=$val['type'];
                }
            }
            return response()->json(['status'=>200,'data'=>['rows'=>$res]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 获取试卷审核状态
     */
    public static function getPaperStatus()
    {
        $status = config('app.PAPER_EXAMINED_STATUS');
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
        return $this->youdaoService->getYoudaoTask($url,$postData,$type);
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
            $provinceId = trim($request->post('provinceId', 0));
            if(empty($provinceId))
            {
                throw new \Exception('省Id不能为空');
            }

            if ($provinceId) {
                $result = explode("-",$provinceId);

                $provinceId = $result[0];
                $twoId = $result[1];
                $areas = $this->city->getAreaCitys($provinceId,$twoId);
            }
            return response()->json($areas);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 获取试卷详情
     */
    public function getPaperClient(Request $request)
    {
        try {
            $paperId = abs($request->post('paperId', 0));
            if(empty($paperId))
            {
                throw new \Exception('试卷Id不能为空');
            }
            //print_r($paperId);exit;
            $result = KlibPaperClient::getPaperClient($paperId);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 获取试题内容
     */
    public function getQuestionClient(Request $request)
    {
        try {

            $questionIds = $request->post('questionIds', '');
            $questionIds = explode(',',$questionIds);
           // echo 2;exit;

            if(empty($questionIds))
            {
                throw new \Exception('试题Id不能为空');
            }
            $result = KlibQuestionClient::getQuestion($questionIds);
            $detail = [];
            $i = 1;
            foreach ($result as $v) {
                $detail[$v['ques_id']] = [
                    'i' => $i,
                    'questionId'       => $v['ques_id'],//试题ID
                    'answer'           => isset($v['ques_answer']) ? $v['ques_answer'] : '',
                    'content'          => isset($v['ques_content']) ? $v['ques_content'] : '',
                    'analysis'         => isset($v['ques_analysis']) ? $v['ques_analysis'] : ''
                ];
                $i++;
            }
            return response()->json(['rows' => $detail]);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 审核通过，通知有道
     * @param $url
     * @param $taskId
     * @return \Illuminate\Http\JsonResponse
     */
    public function doYoudaoComplete($url, $taskId)
    {
        return $this->youdaoService->doYoudaoComplete($url, $taskId);
    }


    /** 审核不通过，退回有道
     * @param $url
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function doYoudaoFeedback($url, $data)
    {
        return $this->youdaoService->doYoudaoFeedback($url, $data);
    }


    /**
     * 上传套卷中所有试题相关word文件到题库服务器
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadPaperFile($data = array())
    {
        try {
            /*
            //测试数据
            $data = array(
                'paper_id'=>1483,
                'complete_file'=>'http://vip.gaosiedu.com/static/images/eap_loginbg2.png',
                'questions' => array(
                    '0'=>array(
                        'question_id'=>41866,
                        'content_file'=>'http://teacher.aitifen.com/static/images/logo.png',
                        'options'=>array(
                            '0'=>array(
                                'option_id'=>187340,
                                'option_file'=>'http://teacher.aitifen.com/static/images/logo.png',
                            ),
                            '1'=>array(
                                'option_id'=>187341,
                                'option_file'=>'http://teacher.aitifen.com/static/images/logo.png',
                            )
                        ),
                        'analysis_file'=>'http://teacher.aitifen.com/static/images/logo.png',
                    ),
                    '1'=>array(
                        'question_id'=>611785,
                        'content_file'=>'http://teacher.aitifen.com/static/images/loginbg2.png',
                        'answer_id'=>324087,
                        'answer_file'=>'http://teacher.aitifen.com/static/images/loginbg2.png',
                        'analysis_file'=>'http://teacher.aitifen.com/static/images/logo.png',
                    )
                )
            );*/

            //上传试题文档
            if($data['questions']){
                foreach ($data['questions'] as $key=>$q){
                    $uuid = uuid();
                    $sdate = date('Ymd');
                    $newFileName = $sdate.'_test-'.$uuid.'_'.'content'.'_content.docx';
                    //$result = $this->curlUploadFile($q['content_file'], $newFileName);
                    $result = $this->dispatch(new UploadQueue(array('fileUrl'=>$q['content_file'], 'newFileName'=>$newFileName)));
                    if($result){
                        //更新vip_question中uid和sdate字段
                        $question = new Question;
                        $question->edit(array('uid'=>$uuid,'sdate'=>$sdate), array('id'=>$q['question_id']));
                    }

                    //上传选项文档
                    if(isset($q['options']) && !empty($q['options'])){
                        foreach ($q['options'] as $k=>$o){
                            $shorUuid = shortUuid($uuid);
                            $newFileName = $sdate.'_test-'.$uuid.'_'.$shorUuid.'_'.$shorUuid.'.docx';
                            $result = $this->dispatch(new UploadQueue(array('fileUrl'=>$o['option_file'], 'newFileName'=>$newFileName)));
                            //$result = $this->curlUploadFile($o['option_file'], $newFileName);
                            //更新vip_question_option中uid字段
                            $questionOption = new VipQuestionOption;
                            $questionOption->edit(array('uid'=>$shorUuid), array('id'=>$o['option_id']));
                        }
                    }

                    //上传答案文档
                    if(isset($q['answer_file'])){
                        $newFileName = $sdate.'_test-'.$uuid.'_'.'answers'.'_answers.docx';
                        //$result = $this->curlUploadFile($q['answer_file'], $newFileName);
                        $result = $this->dispatch(new UploadQueue(array('fileUrl'=>$q['answer_file'], 'newFileName'=>$newFileName)));
                    }

                    //上传解析文档
                    if(isset($q['analysis_file'])){
                        $newFileName = $sdate.'_test-'.$uuid.'_'.'analysis'.'_analysis.docx';
                        //$result = $this->curlUploadFile($q['analysis_file'], $newFileName);
                        $result = $this->dispatch(new UploadQueue(array('fileUrl'=>$q['analysis_file'], 'newFileName'=>$newFileName)));
                    }
                }
            }
            return response()->json(['status' => 1]);

        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    //获取所有省份
    public function getAllProvince()
    {
        $key = 'provinceCityKey';
        $provinceValue = Redis::get($key);
        if($provinceValue){
            //file_put_contents('/dev/shm/province.txt','1'.PHP_EOL,FILE_APPEND);
            return $provinceValue;
        }
        $result = $this->province->getAllProvince();
        array_unshift($result,"全部");
        Redis::set($key,json_encode($result));
        return response()->json($result);

    }
    /*
     * 获取所有市
     */
    public function getAllCitys()
    {
        $key = 'provinceCityKey1';
        $cityValue = Redis::get($key);
        if($cityValue){
            //file_put_contents('/dev/shm/city.txt','1'.PHP_EOL,FILE_APPEND);
            return $cityValue;
        }
        $provinceModel=new Province();
        $list = $provinceModel->getCitys();
        $arr = [];
        foreach ($list as $v){
            $cityValue = [];
            foreach ($v['children'] as $value){
                $cityValue[$value['id']] = $value['city'];
            }
            $arr[] = $cityValue;
        }
        array_unshift($arr,['0'=>"全部"]);
        Redis::set($key,json_encode($arr));
        return response()->json($arr);
    }
}