<?php
/**
 * 套卷审核
 * Created by PhpStorm.
 * User: xiecuiping
 * Date: 2018/12/22
 * Time: 14:14
 */
namespace App\http\Controllers\Youdao;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Common\CommonController;
use App\Libs\Export;
use App\Models\User;
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
            $pageSize = abs($request->get('pageSize', 15));
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
                $result = json_decode($result,true);
                if($result['code'] == 200){
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
            "isPaper"=>1,
            "paperFilePath"=>"http://xxxxxxxx/paper/{taskId}.docx",
            'questions'=>array(
                '0'=>array(
                    'quesNumber'=>1,
                    'hasOptions'=>1,
                    'quesType'=>'单选题', //题型
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
            $errorData = [];
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

            $request->session()->put($taskId,'');//清空session
            $data = array(
                'taskId'=>$taskId,
                'list'=>$errorData
            );
            $request->session()->put($taskId,$data);
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
                return response()->json(['status' => $result, 'type'=>1]);
                //审核通过需要给小程序发模版消息
                $this->sendWxTemplate(array(
                    'taskId'=>$taskId,
                    'openId'=>$paperInfo['open_id'],
                    'type'=>0,
                    'userId'=>$paperInfo['create_uid'],
                    'content'=>'恭喜您，您提交的试卷已通过审核。'
                ));
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
                //审核不通过需要给小程序发模版消息
                $this->sendWxTemplate(array(
                    'taskId'=>$taskId,
                    'openId'=>$paperInfo['open_id'],
                    'type'=>1,
                    'userId'=>$paperInfo['create_uid'],
                    'content'=>'抱歉，您提交的试卷未通过审核。'
                ));

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
        try{
            $data = $request->post('data','');
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/questionError'.time().'.txt',json_encode($_POST));
            if($data){
                //$postData = json_decode($data,true);
                //更新问题任务的有道接收、处理时间
                $status = $this->vipYoudaoExamined->updateErrorYouDaoTime($data);
                if($status == true){
                    $code = 200;
                }
            }
            return response()->json(['code'=>$code]);
        }catch (\Exception $e){
            return response()->json(['code'=>$code, 'errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 有道第一次处理试卷成功后的回调地址
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function paperExamined()
    {
        $code = 100;
        file_put_contents($_SERVER['DOCUMENT_ROOT'].'/paperExamined'.time().'.txt',json_encode($_POST));
        try{
            $data = $_REQUEST;
            if($data){
                //$postData = json_decode($data,true);
                //更新任务的有道审核结果，接收、处理时间
                $status = $this->vipYoudaoExamined->updateFirstYouDaoTime($data);
                if($data['isPass'] == 0){
                    //若未通过有道审核，则关闭任务，给用户发模板消息
                    $paperInfo = $this->getPaperInfo($data['taskId']);
                    $this->sendWxTemplate(array(
                        'taskId'=>$data['taskId'],
                        'openId'=>$paperInfo['open_id'],
                        'type'=>1,
                        'userId'=>$paperInfo['create_uid'],
                        'content'=>'抱歉，您提交的图片未通过有道审核，已被关闭。'
                    ));
                }
                if($status){
                    $code = 200;
                }
            }
            return response()->json(['code'=>$code]);
        }catch (\Exception $e){
            return response()->json(['code'=>$code, 'errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 发送微信模版消息
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendWxTemplate($data)
    {
        //$wxTemplate = new WxController;
        $wxTemplate = new WxService();
        $wxTemplateData =  array(
            'taskId'=>$data['taskId'],
            'openId'=>$data['openId'],
            'type'=>$data['type'],
            'userId'=>$data['userId'],
            'content'=>$data['content']
        );
        return $wxTemplate->sendTemplate($wxTemplateData);
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
                    $this->sendWxTemplate(array(
                        'taskId'=>$task['taskId'],
                        'openId'=>$task['openId'],
                        'userId'=>$task['userId'],
                        'type'=>$task['type'],
                        'content'=>$task['content']
                    ));
                }
            }

            file_put_contents($batchLogDir . '/batchExamined-'. date('YmdHis') . '.txt', json_encode($resultTask['resultArr']));
            return response()->json(['allTask'=>$resultTask['resultArr']]);
        }catch (\Exception $e){
            file_put_contents($batchLogDir . '/batchExamined-'.date('YmdHis').'.txt', $e->getMessage());
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

}
