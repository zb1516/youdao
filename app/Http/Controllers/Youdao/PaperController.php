<?php
/**
 * 套卷审核
 * Created by PhpStorm.
 * User: xiecuiping
 * Date: 2018/12/22
 * Time: 14:14
 */
namespace App\http\Controllers\Youdao;

use App\Clients\KlibPaperClient;
use App\Clients\KlibQuestionClient;
use App\Clients\KlibWechatMessageClient;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Common\CommonController;
use App\Libs\Export;
use App\Models\User;
use App\Models\VipMessageRemind;
use App\Models\VipYoudaoExamined;
use App\Models\VipYoudaoQuestion;
use App\Services\WxService;
use App\Services\YoudaoService;
use Illuminate\Http\Request;
use Mockery\Exception;


class PaperController extends BaseController
{

    protected $getUserKey;
    public function __construct()
    {
        parent::__construct();
        $this->user = new User;
        //$this->getUserKey = $this->userKey;
        $this->vipYoudaoExamined = new VipYoudaoExamined();

    }


    /**
     * 套卷审核列表
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function paperList(Request $request)
    {
        try{
            //$userInfo = $this->user->getUserInfo($this->userKey);
            $currentPage = abs($request->get('currentPage', 1));
            $pageSize = abs($request->get('pageSize', 30));
            $searchArgs = $this->vipYoudaoExamined->paperSearchArgs($_GET);
            $result = $this->vipYoudaoExamined->paperList($searchArgs, $currentPage, $pageSize);
            return response()->json($result);
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }

    }


    /**
     * 套卷统计
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function paperStatistic(Request $request)
    {
        try{
            $searchArgs = $this->vipYoudaoExamined->paperSearchArgs($_GET);
            $result = $this->vipYoudaoExamined->paperStatistic($searchArgs);
            return response()->json($result);
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 试卷详情
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function paperInfo(Request $request)
    {
        try{
            $taskId = trim($request->taskId);
            if($taskId){
                $paperInfo = $this->vipYoudaoExamined->getPaperInfo($taskId);
                //调用有道接口。获取有道处理的试卷详情
                $postUrl = config('app.YOUDAO_TASK_RESULT_URL');
                $postData['taskId'] = $taskId;
                $common = new CommonController;
                $result = $common->getYoudaoTask($postUrl, $postData, 2);
//                file_put_contents('/dev/shm/result.txt',$result);
                $result = json_decode($result,true);
//                print_r($result);
                if($result['code'] == 200){
                    if(isset($result['data']['questions']) && $result['data']['questions']){
                        foreach ($result['data']['questions'] as $key=>$ques){
                            //$ques['quesLatextContent']['content'] = '< img src="" alt="$ (a+2)^{2} $"/> &#43;|b&#43;3|&#61;0&#xff0c;<br />∴a&#43;2&#61;0&#xff0c;b&#43;3&#61;0.<br />解得a&#61;-2&#xff0c;b&#61;-3.<br />3< img src="" alt="$ a^{2} $"/> b-[2< img src="" alt="$ a^{2} $"/> b-(3ab-< img src="" alt="$ a^{2} $"/> b-4< img src="" alt="$ a^{2} $"/> )]-2ab<br />&#61;3< img src="" alt="$ a^{2} $"/> b-(2< img src="" alt="$ a^{2} $"/> b-3ab&#43;< img src="" alt="$ a^{2} $"/> b&#43;4< img src="" alt="$ a^{2} $"/> )-2ab<br />&#61;3< img src="" alt="$ a^{2} $"/> b-2< img src="" alt="$ a^{2} $"/> b&#43;3ab-< img src="" alt="$ a^{2} $"/> b-4< img src="" alt="$ a^{2} $"/> -2ab<br />&#61;ab-4< img src="" alt="$ a^{2} $"/> .<br />将a&#61;-2&#xff0c;b&#61;-3代入ab-4< img src="" alt="$ a^{2} $"/> 得-2×(-3)-4×< img src="" alt="$ (-2)^{2} $"/> &#61;6-16&#61;-10&#xff0c;<br />所以3< img src="" alt="$ a^{2} $"/> b-[2< img src="" alt="$ a^{2} $"/> b-(3ab-< img src="" alt="$ a^{2} $"/> b-4< img src="" alt="$ a^{2} $"/> )]-2ab&#61;-10.';
                            if(isset($result['data']['questions'][$key]['quesLatextAnalysis'])){
                                $result['data']['questions'][$key]['quesLatextAnalysis']['content'] = self::clearWordHtml($ques['quesLatextAnalysis']['content']);
                            }
                            if(isset($result['data']['questions'][$key]['quesLatextAnswer'])){
                                $result['data']['questions'][$key]['quesLatextAnswer']['content'] = self::clearWordHtml($ques['quesLatextAnswer']['content']);
                            }
                            if(isset($result['data']['questions'][$key]['quesLatextContent'])){
                                $result['data']['questions'][$key]['quesLatextContent']['content'] = self::clearWordHtml($ques['quesLatextContent']['content']);
                            }
                            if(isset($result['data']['questions'][$key]['options'])){
                                foreach ($result['data']['questions'][$key]['options'] as $k=>$option){
                                    $result['data']['questions'][$key]['options'][$k]['latexContent'] = self::clearWordHtml($option['latexContent']);
                                }
                            }
                        }
                    }

                    $paperInfo['youdao_info'] = $result['data'];
                    return response()->json($paperInfo);
                }else{
                    return response()->json(['errorMsg' => '有道错误：获取任务信息失败！code:'.$result['code'].','.$result['message']]);
                }
            }else{
                return response()->json(['errorMsg' => '任务id不能为空']);
            }
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }



    public function getPaperInfo($taskId)
    {
        $paperInfo = $this->vipYoudaoExamined->getPaperInfo($taskId);
        //调用有道接口。获取有道处理的试卷详情
        $postUrl = config('app.YOUDAO_TASK_RESULT_URL');
        $postData['taskId'] = $taskId;
        $common = new CommonController;
        $result = $common->getYoudaoTask($postUrl, $postData, 2);
        $result = json_decode($result,true);
        if($result['code'] == 200){
            $paperInfo['youdao_info'] = $result['data'];
        }

        /*$paperInfo['youdao_info'] = array(
            'textbook'=>array(
                'name'=>'222222',
            ),
            'questions'=>array(
                '0'=>array(
                    'quesNumber'=>1,
                    'hasOptions'=>1,
                    'quesType'=>'单选题', //题型
                    'quesScore'=>5,
                    'quesLatextContent'=>array(
                        'content'=>'<div>safasfasfasfs</div>',
                        'fileUrl'=>"http://vip.gaosiedu.com/static/images/eap_loginbg2.png"
                    ),
                    'options'=>array(
                        array(
                            "label"=>"A", //选项标题
                            "latexContent"=>'<div>asdfsafsafasfsda</div>',
                            "latexFilePath"=>"http://teacher.aitifen.com/static/images/logo.png",
                            "isAnswer"=>1
                        ),
                        array(
                            "label"=>"B", //选项标题
                            "latexContent"=>'<div>asdfsafsafasfsda</div>',
                            "latexFilePath"=>"http://teacher.aitifen.com/static/images/logo.png",
                            "isAnswer"=>0
                        ),
                        array(
                            "label"=>"C", //选项标题
                            "latexContent"=>'<div>asdfsafsafasfsda</div>',
                            "latexFilePath"=>"http://teacher.aitifen.com/static/images/logo.png",
                            "isAnswer"=>1
                        ),
                        array(
                            "label"=>"D", //选项标题
                            "latexContent"=>'<div>asdfsafsafasfsda</div>',
                            "latexFilePath"=>"http://teacher.aitifen.com/static/images/logo.png",
                            "isAnswer"=>0
                        ),

                    ),
                    'quesLatextAnalysis'=>array(
                        'content'=>'<div>asdfsafsafasfsda</div>',
                        'fileUrl'=>"http://teacher.aitifen.com/static/images/logo.png"
                    ),
                ),
                '1'=>array(
                    'quesNumber'=>2,
                    'hasOptions'=>0,
                    'quesType'=>'解答题', //题型
                    'quesLatextContent'=>array(
                        'content'=>'<div>22222222</div>',
                        'fileUrl'=>"http://teacher.aitifen.com/static/images/loginbg2.png"
                    ),
                    'quesLatextAnswer'=>array(
                        'content'=>'<div>22222222222</div>',
                        'fileUrl'=>"http://teacher.aitifen.com/static/images/logo.png"
                    ),
                    'quesLatextAnalysis'=>array(
                        'content'=>'<div>22222222222</div>',
                        'fileUrl'=>"http://teacher.aitifen.com/static/images/logo.png"
                    ),
                ),

            )
        );*/
        return $paperInfo;
    }



    /**
     * 试卷导出
     * @return \Illuminate\Http\JsonResponse
     */
    public function paperExport()
    {
        try{
            $data = [];
            $searchArgs = $this->vipYoudaoExamined->paperSearchArgs($_GET);
            $list = $this->vipYoudaoExamined->paperAll($searchArgs);
            $headerArr = [
                '序号',
                '试卷ID',
                '试卷名称',
                '学科',
                '年级',
                '省份',
                '市',
                '区',
                '机构ID',
                '机构名称',
                '图片上传时间',
                '图片审核时间',
                '最终有道接收时间',
                '最终有道处理时间',
                '最终审核试卷时间',
                '图片审核人',
                '试卷审核人',
                '审核图片工作日',
                '有道加工工作日',
                '审核试卷工作日'
            ];
            if($list){
                foreach ($list as $key=>$row){
                    $data[$key]['id'] = $key+1;
                    $data[$key]['paper_id'] = $row['paper_id'];
                    $data[$key]['paper_name'] = $row['paper_name'];
                    $data[$key]['subject_name'] = isset($row['subject_name'])?$row['subject_name']:'';
                    $data[$key]['grade_name'] = isset($row['grade_name'])?$row['grade_name']:'';
                    $data[$key]['province_name'] = $row['province_name'];
                    $data[$key]['city_name'] = $row['city_name'];
                    $data[$key]['area_name'] = $row['area_name'];
                    $data[$key]['agency_id'] = $row['agency_id'];
                    $data[$key]['agency_name'] = isset($row['agency_name'])?$row['agency_name']:'';
                    $data[$key]['upload_time'] = $row['upload_time'];
                    $data[$key]['image_examined_time'] = $row['image_examined_time'];
                    $data[$key]['final_youdao_receive_time'] = $row['final_youdao_receive_time'];
                    $data[$key]['final_processing_time'] = $row['final_processing_time'];
                    $data[$key]['paper_examined_time'] = $row['paper_examined_time'];
                    $data[$key]['image_examined_auditor_name'] = isset($row['image_examined_auditor_name'])?$row['image_examined_auditor_name']:'';
                    $data[$key]['paper_examined_auditor_name'] = isset($row['paper_examined_auditor_name'])?$row['paper_examined_auditor_name']:'';
                    $data[$key]['image_processing_days'] = $row['image_processing_days'];
                    $data[$key]['final_processing_days'] = $row['final_processing_days'];
                    $data[$key]['paper_examined_days'] = $this->vipYoudaoExamined->getDiffDaysCount($row['final_processing_time'], $row['paper_examined_time']);//审核试卷工作日
                }
            }
            Export::export('试卷列表', $headerArr, $data);
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 试题导出
     * @return \Illuminate\Http\JsonResponse
     */
    public function questionExport()
    {
        try{
            $data = [];
            $searchArgs = $this->vipYoudaoExamined->paperSearchArgs($_GET);
            $vipYoudaoQuestion = new VipYoudaoQuestion;
            $list = $vipYoudaoQuestion->questionAll($searchArgs);
            $headerArr = [
                '序号',
                '试卷ID',
                '试卷名称',
                '试题ID',
                '第几次',
                '有道接收时间',
                '有道处理时间',
                '有道加工工作日',
                '试卷审核通过时间',
                '退回原因'
            ];
            if($list){
                foreach ($list as $key=>$row){
                    $data[$key]['id'] = $key+1;
                    $data[$key]['paper_id'] = $row['paper_id'];
                    $data[$key]['paper_name'] = $row['paper_name'];
                    $data[$key]['question_id'] = $row['question_id'];
                    $data[$key]['many_times'] = $row['many_times'];
                    $data[$key]['youdao_receive_time'] = $row['youdao_receive_time'];
                    $data[$key]['youdao_processing_time'] = $row['youdao_processing_time'];
                    $data[$key]['processing_days'] = $row['processing_days'];
                    $data[$key]['paper_examined_time'] = $row['paper_examined_time'];
                    $data[$key]['return_reason'] = $row['return_reason_content1'].' '.$row['return_reason_content2'].' '.$row['return_reason_answer1'].' '.$row['return_reason_answer2'].' '.$row['return_reason_analysis1'].' '.$row['return_reason_analysis2'];
                }
            }
            Export::export('试题列表', $headerArr, $data);
        }catch(\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }



    /**
     * 试卷审核第一步：题干，答案，解析审核
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function paperExaminedOne(Request $request)
    {
        try{
            $taskId = $request->post('taskId',0);
            $errorStr = trim($request->post('errorStr',''), '\'');
            $errorData = array();
            if($errorStr){
                $errorArr = explode(',', $errorStr);
                foreach ($errorArr as $key=>$error){
                    $temp = explode('_', $error);
                    $errorData[$temp[1]]['number'] = $temp[1];
                    $errorData[$temp[1]][$temp[0]][] = $temp[2];
                }
                foreach ($errorData as $key=>$error){
                    if(isset($errorData[$key]['content'])){
                        $errorData[$key]['content'] = implode(',', $error['content']);
                    }else{
                        $errorData[$key]['content'] = '';
                    }
                    if(isset($errorData[$key]['answer'])){
                        $errorData[$key]['answer'] = implode(',', $error['answer']);
                    }else{
                        $errorData[$key]['answer'] = '';
                    }
                    if(isset($errorData[$key]['analysis'])){
                        $errorData[$key]['analysis'] = implode(',', $error['analysis']);
                    }else{
                        $errorData[$key]['analysis'] = '';
                    }
                }
            }

            if(!empty($errorData)){
                $errorData = array_values($errorData);
            }
            $request->session()->put($taskId, '');//清空session
            $data = array(
                'taskId'=>$taskId,
                'list'=>$errorData
            );
            $request->session()->put($taskId, $data);
            $status = 0;
            if($request->session()->has($taskId)){
                $status = 1;
            }
            return response()->json(['status' => $status]);
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }



    public function paperExaminedTwo(Request $request)
    {
        try{
            $taskId = $request->post('taskId',0);
            $isPaperError = $request->post('isPaperError',0);//试卷是否有问题
            $paperErrorDesc = $request->post('paperErrorDesc','');
            $data = $request->session()->get($taskId);//从session中获取该任务的题干问题
            $userInfo = $this->user->getUserInfo($this->userKey);
            $paperInfo = $this->getPaperInfo($taskId);
            if(empty($data['list']) && $isPaperError == 0){
                //试卷通过审核，通知有道
                $result = $this->vipYoudaoExamined->paperExamined($paperInfo, $userInfo);
                //return response()->json(['status' => $result, 'type'=>1]);
                //审核通过需要给小程序发模版消息
                /*$this->sendWxTemplate(array(
                    'taskId'=>$taskId,
                    'openId'=>$paperInfo['open_id'],
                    'type'=>2,
                    'userId'=>$paperInfo['create_uid'],
                    'content'=>'恭喜您，您提交的试卷已通过审核。'
                ));*/
                $this->sendWxTemplate(array(
                    'message'=>'恭喜您你，您提交的试卷已加工完成',
                    'agency_id'=>$paperInfo['agency_id'],
                    'name'=>$paperInfo['paper_name'],
                    'user_id'=>$paperInfo['create_uid'],
                    'content'=>'加工试卷',
                    'status'=>'已进入您的机构私库',
                    'url'=>'pages/message/index/index'
                ), 1);
                //添加发送消息记录
                $messageModel=new VipMessageRemind();
                $result=$messageModel->add([
                    'uid'=>$paperInfo['create_uid'],
                    'task_id'=>$taskId,
                    'open_id'=>$paperInfo['open_id'],
                    'message_content'=>htmlspecialchars('恭喜您，您提交的试卷已通过审核。'),
                    'message_status'=>2,
                    'message_type'=>1,
                    'addtime'=>time()
                ]);
                if($result === false) {
                    throw new \Exception('添加消息记录失败');
                }
                return response()->json(['status' => $result, 'type'=>1]);
            }else{
                $data['isPaperError'] = $isPaperError;
                $data['paperErrorDesc'] = $paperErrorDesc;
                //试卷审核不通过，退回有道
                $result = $this->vipYoudaoExamined->paperError($data, $paperInfo, $userInfo);
                //$result = 1;
                $error = 0;
                if(!empty($data['list']) && $isPaperError == 0){
                    $error = 1;
                }
                if($isPaperError == 1 && empty($data['list'])){
                    $error = 2;
                }
                if(!empty($data['list']) && $isPaperError == 1){
                    $error = 3;
                }

                return response()->json(['status' => $result, 'type'=>2, 'error'=>$error]);
            }


        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 有道第n次处理问题试题成功后的回调地址
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function questionError(Request $request)
    {
        $code = 100;
        $errorMsg = '';
        try{
            $data = $request->post();
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/questionError'.date('Ymd').'.txt',json_encode($request->post()).PHP_EOL,FILE_APPEND);
            if($data['taskId']){
                //更新问题任务的有道接收、处理时间
                $status = $this->vipYoudaoExamined->updateErrorYouDaoTime($data);
                if($status == true){
                    $code = 200;
                }
            }else{
                $errorMsg = '任务ID不能为空';
            }
            return response()->json(['code'=>$code, 'errorMsg' => $errorMsg]);
        }catch (\Exception $e){
            return response()->json(['code'=>$code, 'errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 有道第一次处理试卷成功后的回调地址
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function paperExamined(Request $request)
    {
        $code = 100;
        $errorMsg = '';
        try{
            $data = $request->post();
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/paperExamined'.date('Ymd').'.txt',json_encode($request->post()).PHP_EOL,FILE_APPEND);
            if(isset($data['taskId']) && isset($data['isPass']) && isset($data['youdaoReceiveTime']) ){
                //更新任务的有道审核结果，接收、处理时间
                $status = $this->vipYoudaoExamined->updateFirstYouDaoTime($data);
                if($status){
                    $code = 200;
                    if($data['isPass'] == 0){
                        //若未通过有道审核，则退回任务，给用户发模板消息
                        $paperInfo = $this->getPaperInfo($data['taskId']);
                        /*$this->sendWxTemplate(array(
                            'taskId'=>$data['taskId'],
                            'openId'=>$paperInfo['open_id'],
                            'type'=>1,
                            'userId'=>$paperInfo['create_uid'],
                            'content'=>'图片不清晰'
                        ));*/
                        $this->sendWxTemplate(array(
                            'message'=>'您上传的试卷图片未通过审核，请重新上传',
                            'agency_id'=>$paperInfo['agency_id'],
                            'user_name'=>$paperInfo['user_name'],
                            'user_id'=>$paperInfo['create_uid'],
                            'date'=>$paperInfo['upload_time'],
                            'error_why'=>'图片不清晰',
                            'url'=>'pages/message/index/index'
                        ), 0);
                        //添加发送消息记录
                        $messageModel=new VipMessageRemind();
                        $result=$messageModel->add([
                            'uid'=>$paperInfo['create_uid'],
                            'task_id'=>$data['taskId'],
                            'open_id'=>$paperInfo['open_id'],
                            'message_content'=>htmlspecialchars('图片不清晰'),
                            'message_status'=>1,
                            'message_type'=>1,
                            'addtime'=>time()
                        ]);
                        if($result === false) {
                            throw new \Exception('添加消息记录失败');
                        }
                    }
                }
            }else{
                $errorMsg = '参数不完整';
            }
            return response()->json(['code'=>$code, 'errorMsg' => $errorMsg]);
        }catch (\Exception $e){
            return response()->json(['code'=>$code, 'errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 发送微信模版消息
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendWxTemplate($data , $type=0)
    {
        //$wxTemplate = new WxController;
        /*$wxTemplate = new WxService();
        $wxTemplateData =  array(
            'taskId'=>$data['taskId'],
            'openId'=>$data['openId'],
            'type'=>$data['type'],
            'userId'=>$data['userId'],
            'content'=>$data['content']
        );
        return $wxTemplate->sendTemplate($wxTemplateData);*/
        return KlibWechatMessageClient::sendWxTemplate($data , $type);
    }





    /**
     * 套卷提交有道处理超过9个工作日未反馈的批量处理审核通过,每日执行一次
     * @return \Illuminate\Http\JsonResponse
     */
    public function batchPaperExamined()
    {
        $batchLogDir = $_SERVER['DOCUMENT_ROOT'].'/batchLog/';
        try{
            $resultTask = $this->vipYoudaoExamined->batchExamined();
            //批量发送微信模版消息
            if($resultTask['successTask']){
                foreach ($resultTask['successTask'] as $key=>$task){
                    /*$this->sendWxTemplate(array(
                        'taskId'=>$task['taskId'],
                        'openId'=>$task['openId'],
                        'userId'=>$task['userId'],
                        'type'=>$task['type'],
                        'content'=>$task['content']
                    ));*/
                    $this->sendWxTemplate(array(
                        'message'=>'恭喜您，您提交的试卷已加工完成',
                        'agency_id'=>$task['agencyId'],
                        'name'=>$task['paperName'],
                        'user_id'=>$task['createUid'],
                        'content'=>'加工试卷',
                        'status'=>'已进入您的机构私库',
                        'url'=>'pages/message/index/index'
                    ), 1);
                    //添加发送消息记录
                    $messageModel=new VipMessageRemind();
                    $result=$messageModel->add([
                        'uid'=>$task['userId'],
                        'task_id'=>$task['taskId'],
                        'open_id'=>$task['openId'],
                        'message_content'=>htmlspecialchars($task['content']),
                        'message_status'=>2,
                        'message_type'=>1,
                        'addtime'=>time()
                    ]);
                    if($result === false) {
                        throw new \Exception('添加消息记录失败');
                    }
                }
            }
            if(is_dir($batchLogDir)){
                @mkdir($batchLogDir, 0777);
            }
            file_put_contents($batchLogDir . '/batchExamined-'. date('Ymd') . '.txt', json_encode($resultTask['resultArr']).PHP_EOL,FILE_APPEND);
            return response()->json(['allTask'=>$resultTask['resultArr']]);
        }catch (\Exception $e){
            file_put_contents($batchLogDir . '/batchExamined-'.date('Ymd').'.txt', $e->getMessage().PHP_EOL,FILE_APPEND);
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    /*获取任务的所有审核流程*/
    public function getProcessList(Request $request)
    {
        try{
            $taskId = $request->get('taskId','');
            $processList = [];
            if($taskId){
                $processList = $this->vipYoudaoExamined->getProcessList($taskId);
            }
            return response()->json($processList);
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    //从私库获取试卷信息
    public function getSKPaperInfo(Request $request){
        try{
            $taskId = trim($request->taskId);
            if($taskId){
                $taskInfo = $this->vipYoudaoExamined->findOne(array('task_id'=>$taskId));
                if($taskInfo){
                    $paperInfo = KlibPaperClient::getPaperClient($taskInfo['paper_id']);
                    if($paperInfo['ques_ids']){
                        $result = KlibQuestionClient::getQuestion($paperInfo['ques_ids'], 1);
                        $paperInfo['questions'] = $result;
                    }
                    return response()->json($paperInfo);
                }else{
                    return response()->json(['errorMsg' => '任务不存在']);
                }
            }else{
                return response()->json(['errorMsg' => '任务id不能为空']);
            }
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    protected static function clearWordHtml($html,$convertLatex=true) {
        $pattern = '#<\/?span[^>]*>#i';
        $parts = preg_split($pattern, $html);
        preg_match_all($pattern, $html, $matches);

        if(false==$matches){
            $matches = array(array());
        }
        $spanStacks = array();
        if(is_array($matches) && $matches[0]){
            foreach($matches[0] as $key=>$match) {
                if(false == stristr($match, '</span>')) {
                    array_push($spanStacks, array($key, $match));
                } else {
                    $startTag = array_pop($spanStacks);
                    //if(!isset($startTag[0])){
                    //    continue;
                    //}else{
                    $endTag = array($key, $match);

                    $cleanedStartTag = $startTag[1];

                    $cleanedStartTag = preg_replace('#font\-emphasize:\s*dot#is', '-webkit-text-emphasis:dot;-webkit-text-emphasis-position:under', $cleanedStartTag);
                    $cleanedStartTag = preg_replace('#text\-underline:\s*wave#is', 'text-underline:wavy', $cleanedStartTag);
                    $cleanedStartTag = preg_replace('#text\-underline:([a-z]+)#is', 'text-decoration:underline;text-decoration-style:\\1', $cleanedStartTag);

                    $fonts = array(
                        'Symbol', '华文新魏', '华文楷体', '黑体'
                    );

                    if($cleanedStartTag == $startTag[1]) {
                        $keep = false;
                        if(stristr($cleanedStartTag, 'decoration') || stristr($cleanedStartTag, 'text-indent')) {
                            $keep = true;
                        } else {
                            foreach($fonts as $font) {
                                if(false == $keep && stristr($cleanedStartTag, $font)) {
                                    $keep = true;
                                }
                            }
                        }
                        if(false == $keep) $cleanedStartTag = '';
                    }
                    $startTag[1] = $cleanedStartTag;
                    if(false == $cleanedStartTag) {
                        $endTag[1] = '';
                    }
                    $matches[$startTag[0]] = $startTag[1];
                    $matches[$endTag[0]] = $endTag[1];
                //}
                }
            }
        }
        $html = '';
        foreach($parts as $key=>$part) {
            $html .= trim($part);
            $tag = isset($matches[$key]) ? $matches[$key] : '';
            if($tag){
                $html .= $tag;
            }
        }
        $html = preg_replace('#line\-height:[^;\'"]+;?#i', '', $html);
        $html = preg_replace('#letter\-spacing:[^;\'"]+;?#i', '', $html);
        $html = preg_replace('#layout\-grid:[^;\'"]+;?#i', '', $html);
        $html = preg_replace('#<img#i', '<img align="absmiddle"', $html);
        if($convertLatex){
            $html = preg_replace("#(<img[^>]*)(alt=\")(.*?)学科网(.*?)(\".*?>)#i","$1$5",$html);
            $html = preg_replace("#(<img[^>]*alt=\")(.*?)(%)(.*?)(%)(.*?)(\".*?>)#i","$1$2\\%$4\\%$6$7",$html);
            $html = preg_replace("#(<img[^>]*alt=\")(.*?)(\\\\\\\\%)(.*?)(\\\\\\\\%)(.*?)(\".*?>)#i","$1$2\\%$4\\%$6$7",$html);
            $html = preg_replace("#<img[^>]*alt=\"(.*?)\"(.*?)>#i","$1",$html);
            $html = str_replace(['\[','\]'],['\(','\)'],$html);
//            $html = preg_replace("#\\\\[#i","(",$html);
//            $html = preg_replace("#\\\\]#i",")",$html);
            $html = preg_replace("#\\$(.*?)\\$#i","\\("."$1"."\\)",$html);
            $html = preg_replace("#(.*?)(\\\\Rightarrow)(.*?)#is","$1"."$2"."\\)\\("."$3",$html);
            $html = preg_replace("#(.*?)(\\\\xrightarrow)(.*?)#is","$1"."\\)\\("."$2"."$3",$html);
            return $html;

        }
        return $html;
    }

}
