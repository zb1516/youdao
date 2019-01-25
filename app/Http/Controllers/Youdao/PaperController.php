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
use App\Http\Controllers\WxProgram\WxController;
use App\Libs\Export;
use App\Models\User;
use App\Models\VipYoudaoExamined;
use App\Models\VipYoudaoQuestion;
use Illuminate\Http\Request;
use Mockery\Exception;


class PaperController extends BaseController
{

    protected $getUserKey;
    public function __construct(){
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
    public function paperList(Request $request){
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
    public function paperStatistic(Request $request){
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
    public function paperInfo(Request $request){
        try{
            $taskId = abs($request->taskId);
            if($taskId){
                $paperInfo = $this->getPaperInfo($taskId);
                return response()->json($paperInfo);
            }else{
                return response()->json(['errorMsg' => '任务id不能为空']);
            }

        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }



    public function getPaperInfo($taskId){
        $paperInfo = $this->vipYoudaoExamined->getPaperInfo($taskId);
        //调用有道接口。获取有道处理的试卷详情
        $postUrl = config('app.YOUDAO_TASK_RESULT_URL');
        $postData['data']['taskId'] = $taskId;
        /*$common = new CommonController;
        $result = $common->getYoudaoTask($postUrl, $postData, 2);
        if($result['code']== 200){
            $paperInfo['youdao_info'] = $result['data'];
        }*/
        $paperInfo['youdao_info'] = array(
            'questions'=>array(
                '0'=>array(
                    'quesNumber'=>1,
                    'hasOptions'=>1,
                    'quesLatextContent'=>array(
                        'content'=>'<div>safasfasfasfs</div>',
                        'fileUrl'=>"http://xxxxxx/ques/{quesId}/conent.docx"
                    ),
                    'options'=>array(
                        array(
                            "label"=>"A", //选项标题
                            "latexContent"=>'<div>asdfsafsafasfsda</div>',
                            "latexFilePath"=>"http://xxxxxxx/ques/{quesId}/options/A.docx",
                            "isAnswer"=>1
                        ),
                        array(
                            "label"=>"B", //选项标题
                            "latexContent"=>'<div>asdfsafsafasfsda</div>',
                            "latexFilePath"=>"http://xxxxxxx/ques/{quesId}/options/A.docx",
                            "isAnswer"=>0
                        ),
                        array(
                            "label"=>"C", //选项标题
                            "latexContent"=>'<div>asdfsafsafasfsda</div>',
                            "latexFilePath"=>"http://xxxxxxx/ques/{quesId}/options/A.docx",
                            "isAnswer"=>1
                        ),
                        array(
                            "label"=>"D", //选项标题
                            "latexContent"=>'<div>asdfsafsafasfsda</div>',
                            "latexFilePath"=>"http://xxxxxxx/ques/{quesId}/options/A.docx",
                            "isAnswer"=>0
                        ),

                    ),
                ),
                '1'=>array(
                    'quesNumber'=>2,
                    'hasOptions'=>0,
                    'quesLatextContent'=>array(
                        'content'=>'<div>22222222</div>',
                        'fileUrl'=>"http://xxxxxx/ques/{quesId}/conent.docx"
                    ),
                    'quesLatextAnswer'=>array(
                        'content'=>'<div>22222222222</div>',
                        'fileUrl'=>"http://xxxxxx/ques/{quesId}/conent.docx"
                    ),
                    'quesLatextAnalysis'=>array(
                        'content'=>'<div>22222222222</div>',
                        'fileUrl'=>"http://xxxxxx/ques/{quesId}/conent.docx"
                    ),
                ),
                '2'=>array(
                    'quesNumber'=>3,
                    'hasOptions'=>0,
                    'quesLatextContent'=>array(
                        'content'=>'<div>3333333333333</div>',
                        'fileUrl'=>"http://xxxxxx/ques/{quesId}/conent.docx"
                    ),
                    'quesLatextAnswer'=>array(
                        'content'=>'<div>3333333333333</div>',
                        'fileUrl'=>"http://xxxxxx/ques/{quesId}/conent.docx"
                    ),
                    'quesLatextAnalysis'=>array(
                        'content'=>'<div>22222222222</div>',
                        'fileUrl'=>"http://xxxxxx/ques/{quesId}/conent.docx"
                    ),
                ),
            )
        );
        return $paperInfo;
    }



    /**
     * 试卷导出
     * @return \Illuminate\Http\JsonResponse
     */
    public function paperExport(){
        try{
            $data = [];
            $searchArgs = $this->vipYoudaoExamined->paperSearchArgs($_GET);
            $list = $this->vipYoudaoExamined->paperAll($searchArgs);

            if($list){
                foreach ($list as $key=>$row){
                    $data[$key]['id'] = $key+1;
                    $data[$key]['paper_id'] = $row['paper_id'];
                    $data[$key]['paper_name'] = $row['paper_name'];
                    $data[$key]['subject_name'] = isset($row['subject_name'])?$row['subject_name']:'';
                    $data[$key]['grade_name'] = isset($row['grade_name'])?$row['grade_name']:'';
                    $data[$key]['province_name'] = $row['province'];
                    $data[$key]['city_name'] = $row['city'];
                    $data[$key]['area_name'] = $row['area'];
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
    public function questionExport(){
        try{
            $data = [];
            $searchArgs = $this->vipYoudaoExamined->paperSearchArgs($_GET);
            $vipYoudaoQuestion = new VipYoudaoQuestion;
            $list = $vipYoudaoQuestion->questionAll($searchArgs);
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
    public function paperExaminedOne(Request $request){
        try{
            $taskId = $request->post('taskId',0);

            /**
             * todo:组装提交数据
             */
            $data = array(
                'task_id'=>$taskId,
                'list'=>array(
                    array(
                        'number'=>2,
                        'content'=>'题干不完整，题干错误',
                        'answer'=>'答案不完整',
                        'analysis'=>'解析不完整'
                    ),
                    array(
                        'number'=>5,
                        'content'=>'题干错误',
                        'answer'=>'答案不完整',
                        'analysis'=>'解析错误'
                    ),
                )
            );
            $request->session()->put($taskId,$data);
            $status = 1;
            return response()->json(['status' => $status]);
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }



    public function paperExaminedTwo(Request $request){
        try{
            $taskId = $request->post('taskId',0);
            $isPaperError = $request->post('isPaperError',0);//试卷是否有问题
            $paperErrorDesc = $request->post('paperErrorDesc','');
            $data = $request->session()->get($taskId);//从session中获取该任务的题干问题
            $userInfo = $this->user->getUserInfo($this->userKey);
            $paperInfo = $this->getPaperInfo($taskId);
            //$data['author_info'] = $userInfo;
            if(empty($data) && $isPaperError == 0){
                //试卷通过审核，通知有道
                $result = $this->vipYoudaoExamined->paperExamined($paperInfo, $userInfo);
                //审核通过需要给小程序发模版消息
                $this->sendWxTemplate(array(
                    'taskId'=>$taskId,
                    'openId'=>$paperInfo['open_id'],
                    'type'=>0,
                    'userId'=>$paperInfo['create_uid'],
                    'content'=>'恭喜您，您提交的试卷已通过审核。'
                ));

                return response()->json(['status' => $result]);
            }else{
                $data['isPaperError'] = $isPaperError;
                $data['paperErrorDesc'] = $paperErrorDesc;
                //session($taskId,$data);
                //试卷审核不通过，退回有道
                $this->vipYoudaoExamined->paperError($data, $paperInfo, $userInfo);

                //审核不通过需要给小程序发模版消息
                $this->sendWxTemplate(array(
                    'taskId'=>$taskId,
                    'openId'=>$paperInfo['open_id'],
                    'type'=>1,
                    'userId'=>$paperInfo['create_uid'],
                    'content'=>'抱歉，您提交的试卷未通过审核。'
                ));
                /*
                $error = [];
                if(!empty($data['list'])){
                    $error[] = '题目问题';
                }
                if($isPaperError == 1){
                    $error[] = '试卷问题';
                }*/
                $error = 0;
                if(!empty($data['list'])){
                    $error += 1;
                }
                if($isPaperError == 1){
                    $error += 1;
                }

                return response()->json(['status' => 0, 'error'=>$error]);
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
    public function questionError(Request $request){
        try{
            $code = $request->post('code',0);
            $message = $request->post('message','');
            $data = $request->post('data','');
            $status = 0;
            if($code == 200){
                $postData = json_decode($data,true);
                //更新问题任务的有道接收、处理时间
                $status = $this->vipYoudaoExamined->updateErrorYouDaoTime($postData);
            }
            return response()->json(['status'=>$status]);
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 有道第一次处理试卷成功后的回调地址
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function paperExamined(Request $request){
        try{
            $code = $request->post('code',0);
            $message = $request->post('message','');
            $data = $request->post('data','');
            $status = 0;
            if($code == 200){
                $postData = json_decode($data,true);
                //todo 有道反馈时可能没有通过有道审核，这边需要做处理
                //更新任务的有道接收、处理时间
                $status = $this->vipYoudaoExamined->updateFirstYouDaoTime($postData);
            }
            return response()->json(['status'=>$status]);
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 发送微信模版消息
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendWxTemplate($data){
        $wxTemplate = new WxController;
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
     * 套卷提交有道处理超过9个工作日未反馈的批量处理审核通过
     * @return \Illuminate\Http\JsonResponse
     */
    public function batchPaperExamined(){
        try{
            $successTask = $this->vipYoudaoExamined->batchExamined();
            //批量发送微信模版消息
            if($successTask){
                foreach ($successTask as $key=>$task){
                    $this->sendWxTemplate(array(
                        'taskId'=>$task['taskId'],
                        'openId'=>$task['openId'],
                        'userId'=>$task['userId'],
                        'type'=>$task['type'],
                        'content'=>$task['content']
                    ));
                }
            }
            file_put_contents('/dev/shm/'.date('YmdHis').'.txt',json_encode($successTask));
            return response()->json(['successTask'=>$successTask]);
        }catch (\Exception $e){
            file_put_contents('/dev/shm/'.date('YmdHis').'.txt',$e->getMessage());
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

}
