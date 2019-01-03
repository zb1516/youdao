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
use DB;


class ImagePaperController extends BaseController
{

    public function __construct() {
        $this->sysRoles = new SysRoles;
        $this->sysUsers = new SysUsers;
        $this->vipYoudaoExamined = new VipYoudaoExamined;

    }

    /**
     * 图片审核列表
     */
    public function imagePaper(Request $request)
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
}