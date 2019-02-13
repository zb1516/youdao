<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2019/1/2
 * Time: 14:10
 */
namespace App\Http\Controllers\Youdao;

use DB;
use App\Libs\Xxtea;
use App\Libs\Export;
use App\Models\Paper;
use App\Models\SysRoles;
use App\Models\SysUsers;
use Illuminate\Http\Request;
use App\Models\VipPaperImage;
use App\Models\VipYoudaoExamined;
use App\Models\VipRepeatPaperRecord;
use App\Http\Controllers\BaseController;

class ImagePaperController extends BaseController
{

    public function __construct() {

        $this->paper = new Paper;
        $this->sysRoles = new SysRoles;
        $this->sysUsers = new SysUsers;
        $this->vipPaperImage = new VipPaperImage;
        $this->vipYoudaoExamined = new VipYoudaoExamined;
        $this->vipRepeatPaperRecord = new VipRepeatPaperRecord;
    }

    /**
     * 图片审核列表
     */
    public function imagePaper(Request $request)
    {
        try {
            $currentPage = abs($request->get('currentPage', 1));
            $pageSize = abs($request->get('pageSize', 5));
            $imgAuditor = config('app.IMG_AUDITOR');
            $roleId = $this->sysRoles->getRoleId ($imgAuditor);
            $_GET['IMG_AUDITOR'] = $roleId;
            $searchArgs = $this->vipYoudaoExamined->imagePaperSearchArgs($_GET);
            $result = $this->vipYoudaoExamined->getImagePaperList($searchArgs, $currentPage, $pageSize);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 图片审核导出
     */
    public function imageExport ()
    {
        try {
            $data = [];
            $imgAuditor = config('app.IMG_AUDITOR');
            $roleId = $this->sysRoles->getRoleId ($imgAuditor);
            $_GET['IMG_AUDITOR'] = $roleId;
            $_GET['isType'] = 3;
            $searchArgs = $this->vipYoudaoExamined->imagePaperSearchArgs ($_GET);
            $result = $this->vipYoudaoExamined->getImageExport ($searchArgs);
            if ($result) {
                foreach ($result as $key => $one) {
                    $data[$key]['number'] = $one['number'];
                    $data[$key]['paperId'] = $one['paperId'];
                    $data[$key]['paperName'] = $one['paperName'];
                    $data[$key]['subjectName'] = $one['subjectName'];
                    $data[$key]['province'] = $one['province'];
                    $data[$key]['city'] = $one['city'];
                    $data[$key]['agencyId'] = $one['agencyId'];
                    $data[$key]['agencyName'] = $one['agencyName'];
                    $data[$key]['uploadTime'] = $one['uploadTime'];
                    $data[$key]['imageExaminedTime'] = $one['imageExaminedTime'];
                    $data[$key]['imageExaminedAuditorName'] = $one['imageExaminedAuditorName'];
                }
            }
            $headerArr = [
                '序号',
                '试卷ID',
                '试卷名称',
                '学科',
                '省份',
                '市',
                '机构ID',
                '机构名称',
                '上传时间',
                '审核时间',
                '审核人',
            ];
            Export::export ('图片审核统计', $headerArr, $data);

        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 试卷列表
     */
    public function paperList(Request $request)
    {
        try {
            $currentPage = abs($request->get('currentPage', 1));
            $pageSize = abs($request->get('pageSize', 4));
            $searchArgs = $this->paper->imagePaperSearchArgs($_GET);
            $result = $this->paper->getImagePaperList($searchArgs, $currentPage, $pageSize);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 图片审核列表详情
     */
    public function imagePaperDetail(Request $request)
    {
        try {
            $taskId = $request->get('taskId', '');
            $paperType = abs($request->get('paperType', 1));
            $allType = abs($request->get('allType', 0));
            if(empty($taskId))
            {
                throw new \Exception('缺少taskId');
            }
            $result = $this->vipPaperImage->getImagePaperDetail($taskId, $paperType, $allType);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 重复试卷记录表
     */
    public function repeatPaperRecord(Request $request)
    {
        try {
            $taskId = $request->get('taskId', '');
            $paperId = abs($request->get('paperId', 0));
            $userKey = $request->get('userKey', '');
            if(empty($paperId))
            {
                throw new \Exception('套卷id不能为空');
            }
            if(empty($taskId))
            {
                throw new \Exception('缺少taskId');
            }
            $result = $this->vipRepeatPaperRecord->repeatPaperRecord($taskId, $paperId, $userKey);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 图片退回
     */
    public function paperReturn(Request $request)
    {
        try {
            $taskId = $request->get('taskId', '');
            $imageErrorType = trim($request->get('imageErrorType', ''),',');
            $userKey = $request->get('userKey', '');
            if(empty($taskId))
            {
                throw new \Exception('缺少taskId');
            }
            $result = $this->vipPaperImage->paperReturn($taskId, $imageErrorType, $userKey);

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 图片通过
     */
    public function paperPass(Request $request)
    {
        $userKey = isset($_GET['userKey']) ? $_GET['userKey'] : '';
        $userKey = Xxtea::decrypt($userKey, 'aitifen.com');
        $_GET['userKey'] = $userKey;
        try {
            if(empty($userKey))
            {
                throw new \Exception('userKey不能为空');
            }
            if(empty($_GET['paperType']))
            {
                throw new \Exception('类型不能为空');
            }
            if($_GET['paperType'] == 1){
                if(!isset($_GET['sortTaskId'])){
                    throw new \Exception('图片不能为空');
                }
            }else{
                if(!isset($_GET['sortTaskIdQuestion']) || !isset($_GET['sortTaskIdAnswer'])){
                    throw new \Exception('图片不能为空');
                }
            }
            $isSort = 1;
            if($_GET['paperType'] == 1){
                $_GET['sortTaskId'][$_GET['taskId']] = $_GET['sortTaskId'];
            }else{
                $_GET['sortTaskIdQuestion'][$_GET['taskId']] = $_GET['sortTaskIdQuestion'];
                $_GET['sortTaskIdAnswer'][$_GET['taskId']] = $_GET['sortTaskIdAnswer'];
                //$_GET['sortTaskId'][$_GET['taskId']]['question'] = $_GET['sortTaskId'][0];
                //$_GET['sortTaskId'][$_GET['taskId']]['answer'] = $_GET['sortTaskId'][1];
            }
            $searchArgs = $this->paper->imagePaperSearchArgs($_GET,$isSort);
            if($searchArgs['sort'] == 1){
                $result = $this->vipPaperImage->paperImageSort($searchArgs);
            }else{
                $result = $this->vipPaperImage->paperPass($searchArgs);
            }

            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }


    }

}