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
use Illuminate\Http\Request;


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
                $paperInfo = $this->vipYoudaoExamined->getPaperInfo($taskId);

                //调用有道接口。获取有道处理的试卷详情
                $postUrl = config('app.YOUDAO_TASK_RESULT_URL');
                $postData['data']['taskId'] = $taskId;
                $common = new CommonController;
                $paperInfo['info'] = $common->getYoudaoTask($postUrl, $postData, 2);

                return response()->json($paperInfo);
            }else{
                return response()->json(['errorMsg' => '任务id不能为空']);
            }

        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    public function paperExamin(){

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
                    //todo：计算试卷审核时间-有道最终处理时间所用工作日天数
                    $data[$key]['paper_examined_days'] = strtotime($row['paper_examined_time'])-strtotime($row['final_processing_time']);

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
            $searchArgs = $this->vipYoudaoExamined->paperSearchArgs(array('subjectId'=>4));
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
}
