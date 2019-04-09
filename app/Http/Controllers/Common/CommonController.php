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
use App\Models\VipYoudaoPaperFileUploadTask;
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
    public function getYoudaoTask($url, $postData, $type=1)
    {
        return $this->youdaoService->getYoudaoTask($url, $postData, $type);
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
    public function uploadPaperFile()
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
            $vip_youdao_paper_file_upload_task = new VipYoudaoPaperFileUploadTask;
            $taskList = $vip_youdao_paper_file_upload_task->findAll(array('is_upload'=>0),['create_time'=>'asc']);
            $resultArr = [];
            $batchLogDir = $_SERVER['DOCUMENT_ROOT'].'/batchLog/';
            if(is_dir($batchLogDir)){
                @mkdir($batchLogDir, 0777);
            }
            if($taskList){
                $question = new Question;
                $questionOption = new VipQuestionOption;
                foreach ($taskList as $key=>$task){
                    if($task['file_json']){
                        $data = json_decode($task['file_json'], true);
                        $question->beginTransaction();
                        //上传试题文档
                        if($data['questions']){
                            foreach ($data['questions'] as $key=>$q){
                                $uuid = str_replace('-','',uuid());
                                $sdate = date('Ymd');
                                $newFileName = $sdate.'_'.$uuid.'_'.'content'.'_content.docx';
                                //$result = $this->curlUploadFile($q['content_file'], $newFileName);
                                $quesFile = json_decode($q['content_file'] ,true);
                                //file_put_contents($batchLogDir . '/file-'. date('Ymd') . '.txt', $q['content_file'].PHP_EOL,FILE_APPEND);
                                $result = $this->dispatch(new UploadQueue(array('fileUrl'=>$quesFile['url'], 'newFileName'=>$newFileName, 'task_id'=>$task['task_id'])));
                                //更新vip_question中uid和sdate字段
                                $result = $question->edit(array('uid'=>$uuid,'sdate'=>$sdate), array('id'=>$q['question_id']));
                                if(!$result){
                                    $question->rollback();
                                    $resultArr[] = array('task_id'=>$task['task_id'],'is_success'=>0,'error_msg'=>'试题目录更新失败');
                                    //throw new \Exception('试题目录更新失败');
                                    continue;
                                }

                                //上传选项文档
                                if(isset($q['options']) && !empty($q['options'])){
                                    foreach ($q['options'] as $k=>$o){
                                        //$shorUuid = shortUuid($uuid);
                                        $newUuid = strtoupper(substr(str_replace('-','',uuid()), 0,16));
                                        $newFileName = $sdate.'_'.$uuid.'_'.$newUuid.'_'.$newUuid.'.docx';
                                        $optionFile = json_decode($o['option_file'] ,true);
                                        $result = $this->dispatch(new UploadQueue(array('fileUrl'=>$optionFile['url'], 'newFileName'=>$newFileName, 'task_id'=>$task['task_id'])));

                                        //更新vip_question_option中uid字段
                                        $result = $questionOption->edit(array('uid'=>$newUuid), array('id'=>$o['option_id']));
                                        if(!$result){
                                            $question->rollback();
                                            $resultArr[] = array('task_id'=>$task['task_id'],'is_success'=>0,'error_msg'=>'试题选项目录更新失败');
                                            //throw new \Exception('试题选项目录更新失败');
                                            continue;
                                        }
                                    }
                                }

                                //上传答案文档
                                if(isset($q['answer_file'])){
                                    $newFileName = $sdate.'_'.$uuid.'_'.'answers'.'_answers.docx';
                                    //$result = $this->curlUploadFile($q['answer_file'], $newFileName);
                                    $answerFile = json_decode($q['answer_file'] ,true);
                                    $result = $this->dispatch(new UploadQueue(array('fileUrl'=>$answerFile['url'], 'newFileName'=>$newFileName, 'task_id'=>$task['task_id'])));

                                }

                                //上传解析文档
                                if(isset($q['analysis_file'])){
                                    $newFileName = $sdate.'_'.$uuid.'_'.'analysis'.'_analysis.docx';
                                    //$result = $this->curlUploadFile($q['analysis_file'], $newFileName);
                                    $analysisFile = json_decode($q['analysis_file'] ,true);
                                    $result = $this->dispatch(new UploadQueue(array('fileUrl'=>$analysisFile['url'], 'newFileName'=>$newFileName, 'task_id'=>$task['task_id'])));
                                }
                            }
                        }
                        $now = date('Y-m-d H:i:s');
                        $result = $vip_youdao_paper_file_upload_task->edit(array('is_upload'=>1,'upload_time'=>$now),array('task_id'=>$task['task_id']));
                        if(!$result){
                            $question->rollback();
                            $resultArr[] = array('task_id'=>$task['task_id'],'is_success'=>0,'error_msg'=>'试题解析文件上传失败');
                            //throw new \Exception('试题解析文件上传失败');
                            continue;
                        }

                        $question->commit();
                        $resultArr[] = array('task_id'=>$task['task_id'],'is_success'=>1,'error_msg'=>'','data'=>$data);
                    }
                }
            }

            //file_put_contents($batchLogDir . '/uploadFile-'. date('YmdHis') . '.txt', json_encode($resultArr));
            return response()->json(['status' => 1]);

        } catch (\Exception $e) {
            return response()->json(['status' => 0,'errorMsg'=>$e->getMessage()]);
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


    /**
     * 删除有道的试卷文件
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteYoudaoFile()
    {
        try {
            $vip_youdao_paper_file_upload_task = new VipYoudaoPaperFileUploadTask;
            $taskList = $vip_youdao_paper_file_upload_task->findAll(array('is_delete'=>0),['create_time'=>'asc']);
            $resultArr = [];
            $batchLogDir = $_SERVER['DOCUMENT_ROOT'].'/batchLog/';
            if(is_dir($batchLogDir)){
                @mkdir($batchLogDir, 0777);
            }
            if($taskList){
                foreach ($taskList as $key=>$task){
                    if($task['file_json']){
                        $urls = [];
                        $data = json_decode($task['file_json'], true);
                        //删除试卷文档
                        if($data['paper_url']){
                            $urls[] = $data['paper_url'];
                            /*$postData = array(
                                'taskId'=>$task['task_id'],
                                'url'=>$data['paper_url']
                            );

                            file_put_contents($batchLogDir.'/postDelDoc-'. date('Ymd') . '.txt', json_encode($postData).PHP_EOL,FILE_APPEND);
                            $result = $youdaoService->deleteYoudaoDocUrl(config('app.YOUDAO_DELETE_DOC_URL'), $postData);
                            $result = json_decode($result,true);
                            if($result['code'] == 200){
                                $is_success = 1;
                            }else{
                                $is_success = 0;
                            }
                            $resultArr[] = array('task_id'=>$task['task_id'],'url'=>$data['paper_url'],'is_success'=>$is_success,'error_msg'=>$result['message'],'data'=>json_encode($result).PHP_EOL,FILE_APPEND);
                            */
                        }
                        //删除试题文档
                        if($data['questions']){
                            foreach ($data['questions'] as $key=>$q){
                                if(isset($q['options']) && !empty($q['options'])){
                                    foreach ($q['options'] as $k=>$o){
                                        $optionFile = json_decode($o['option_file'] ,true);
                                        $urls[] = $optionFile['url'];
                                        /*$postData = array(
                                            'taskId'=>$task['task_id'],
                                            'url'=>$optionFile['url']
                                        );
                                        file_put_contents($batchLogDir.'/postDelDoc-'. date('Ymd') . '.txt', json_encode($postData).PHP_EOL,FILE_APPEND);
                                        $result = $youdaoService->deleteYoudaoDocUrl(config('app.YOUDAO_DELETE_DOC_URL'), $postData);
                                        $result = json_decode($result,true);
                                        if($result['code'] == 200){
                                            $is_success = 1;
                                        }else{
                                            $is_success = 0;
                                        }
                                        $resultArr[] = array('task_id'=>$task['task_id'],'url'=>$optionFile['url'],'is_success'=>$is_success,'error_msg'=>$result['message'],'data'=>json_encode($result).PHP_EOL,FILE_APPEND);
                                        */
                                    }
                                }

                                //上传答案文档
                                if(isset($q['answer_file'])){
                                    $answerFile = json_decode($q['answer_file'] ,true);
                                    $urls[] = $answerFile['url'];
                                    /*$postData = array(
                                        'taskId'=>$task['task_id'],
                                        'url'=>$answerFile['url']
                                    );*/
                                    //$result = $this->dispatch(new UploadQueue(array('fileUrl'=>$answerFile['url'], 'newFileName'=>$newFileName, 'task_id'=>$task['task_id'])));

                                }

                                //上传解析文档
                                if(isset($q['analysis_file'])){
                                    $analysisFile = json_decode($q['analysis_file'] ,true);
                                    $urls[] = $analysisFile['url'];
                                    /*$postData = array(
                                        'taskId'=>$task['task_id'],
                                        'url'=>$analysisFile['url']
                                    );*/
                                    //$result = $this->dispatch(new UploadQueue(array('fileUrl'=>$analysisFile['url'], 'newFileName'=>$newFileName, 'task_id'=>$task['task_id'])));
                                }
                            }
                        }
                        $postData = array(
                            'taskId'=>$task['task_id'],
                            'url'=>implode(',', $urls)
                        );
                        file_put_contents($batchLogDir.'/postDelDoc-'. date('Ymd') . '.txt', json_encode($postData).PHP_EOL,FILE_APPEND);
                        $youdaoService = new YoudaoService();
                        $result = $youdaoService->deleteYoudaoDocUrl(config('app.YOUDAO_DELETE_DOC_URL'), $postData);
                        $result = json_decode($result,true);
                        if($result['code'] == 200){
                            $now = date('Y-m-d H:i:s');
                            $vip_youdao_paper_file_upload_task->edit(array('is_delete'=>1,'delete_time'=>$now),array('task_id'=>$task['task_id']));
                            $is_success = 1;
                        }else{
                            $is_success = 0;
                        }
                        $resultArr[] = array('task_id'=>$task['task_id'],'url'=>$urls,'is_success'=>$is_success,'error_msg'=>$result['message'],'data'=>$result);

                    }
                }
            }

            file_put_contents($batchLogDir . '/deleteDoc-'. date('YmdHis') . '.txt', json_encode($resultArr));
            return response()->json(['status' => 1]);

        } catch (\Exception $e) {
            return response()->json(['status' => 0,'errorMsg'=>$e->getMessage()]);
        }
    }

}