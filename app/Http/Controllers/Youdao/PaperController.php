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
use App\Models\User;
use App\Models\VipYoudaoExamined;
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
                $paperInfo['info'] = $this->getYoudaoTask($postUrl, $postData, 2);

                return response()->json($paperInfo);
            }else{
                return response()->json(['errorMsg' => '任务id不能为空']);
            }

        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 试卷导出
     * @return \Illuminate\Http\JsonResponse
     */
    public function paperExport(){
        try{

        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

}
