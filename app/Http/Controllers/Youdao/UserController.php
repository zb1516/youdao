<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/24
 * Time: 9:02
 */
namespace App\Http\Controllers\Youdao;
use App\Http\Controllers\BaseController;
use App\Models\SysAppAdmins;
use App\Models\SysRoles;
use App\Models\SysUserRoles;
use Illuminate\Http\Request;
use App\Models\User;
use DB;


class UserController extends BaseController
{
    protected $getUserKey;
    public function __construct() {
        parent::__construct();
        $this->user  = new User;
        $this->getUserKey = $this->userKey;
    }

    //获取用户信息
    public function getUserInfo(Request $request) {

        $userInfo = $this->user->getUserInfo ($this->getUserKey);
        return $userInfo;
    }


    public function checkAuth(){
        $userKey = $this->getUserKey;
        $sysAppAdmins = new SysAppAdmins();
        $appAdminInfo = $sysAppAdmins->findOne(array('group_name'=>config('app.EAP_GROUP_NAME'), 'user_key'=>$userKey), [], ['is_admin']);
        if($appAdminInfo && $appAdminInfo['is_admin'] == 1){
            $authArr = array(
                'isImageShow'=>1,
                'isPaperShow'=>1,
                'isStatisticShow'=>1
            );
        }else{
            $imageRoleName = config('app.IMG_AUDITOR');
            $paperRoleName = config('app.PAPER_AUDITOR');
            $statisticRoleName = config('app.DATA_MANAGER');
            $sysRoles = new SysRoles();
            $imageRoleInfo = $sysRoles->findOne(array('role_caption'=>$imageRoleName), [],['role_id']);
            if($imageRoleInfo){
                $imageRoleId = $imageRoleInfo['role_id'];
            }else{
                throw new \Exception('非法请求，图片审核人角色不存在');
            }
            $paperRoleInfo = $sysRoles->findOne(array('role_caption'=>$paperRoleName), [],['role_id']);
            if($paperRoleInfo){
                $paperRoleId = $paperRoleInfo['role_id'];
            }else{
                throw new \Exception('非法请求，试卷审核人角色不存在');
            }
            $statisticRoleInfo = $sysRoles->findOne(array('role_caption'=>$statisticRoleName), [],['role_id']);
            if($statisticRoleInfo){
                $statisticRoleId = $statisticRoleInfo['role_id'];
            }else{
                throw new \Exception('非法请求，数据统计角色不存在');
            }
            $userRoles = new SysUserRoles();
            $authArr['isImageShow'] = $userRoles->count(array('user_key'=>$userKey, 'role_id'=>$imageRoleId));
            $authArr['isPaperShow'] = $userRoles->count(array('user_key'=>$userKey, 'role_id'=>$paperRoleId));
            $authArr['isStatisticShow'] = $userRoles->count(array('user_key'=>$userKey, 'role_id'=>$statisticRoleId));
        }

        return response()->json($authArr);
    }

}