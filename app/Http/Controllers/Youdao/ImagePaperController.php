<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2019/1/2
 * Time: 14:10
 */
namespace App\Http\Controllers\Youdao;
use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use App\Models\VipYoudaoExamined;
use App\Models\SysRoles;
use App\Models\SysUsers;
use App\Libs\Export;
use App\Models\Paper;
use App\Models\VipPaperImage;
use App\Models\VipRepeatPaperRecord;
use DB;


class ImagePaperController extends BaseController
{

    public function __construct() {
        $this->sysRoles = new SysRoles;
        $this->sysUsers = new SysUsers;
        $this->paper = new Paper;
        $this->vipYoudaoExamined = new VipYoudaoExamined;
        $this->vipPaperImage = new VipPaperImage;
        $this->vipRepeatPaperRecord = new VipRepeatPaperRecord;


    }

    /**
     * 图片审核列表
     */
    public function imagePaper1(Request $request)
    {
        try {
            $currentPage = abs($request->get('currentPage', 1));
            $pageSize = abs($request->get('pageSize', 15));
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
            $pageSize = abs($request->get('pageSize', 15));
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
            if(empty($taskId))
            {
                throw new \Exception('缺少taskId');
            }
            $result = $this->vipPaperImage->getImagePaperDetail($taskId, $paperType);
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
            if(empty($taskId))
            {
                throw new \Exception('缺少taskId');
            }
            $result = $this->vipRepeatPaperRecord->repeatPaperRecord($taskId, $paperId,$userKey);
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
            $imageErrorType = $request->get('image_error_type', '');
            $userKey = $request->get('userKey', '');
            if(empty($taskId))
            {
                throw new \Exception('缺少taskId');
            }
            $result = $this->vipPaperImage->paperReturn($taskId,$imageErrorType,$userKey);
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
        try {
            $isSort = 1;
            $_GET['paperType'] = 2;
//            $_GET['sortTaskId'] = [
//                '1' => [
//                    'http://www.jansonvue.org/images/002.jpg',
//                    'http://www.jansonvue.org/images/001.jpg'
//                ]
//            ];
            $_GET['sortTaskId']= [
            '1' => [
                'question' => [
                    'http://www.jansonvue.org/images/002.jpg',
                    'http://www.jansonvue.org/images/001.jpg'
                ],
                'answer' => [
                    'http://www.jansonvue.org/images/003.png',
                    'http://www.jansonvue.org/images/004.png'
                ],
            ]
        ];
            $searchArgs = $this->paper->imagePaperSearchArgs($_GET,$isSort);
            $result = $this->vipPaperImage->paperPass($searchArgs);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
}