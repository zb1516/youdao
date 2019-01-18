<?php

namespace App\Http\Controllers\WxProgram;

use App\Clients\KlibTeacherClient;
use App\Models\VipYoudaoUserLoginLog;
use App\Services\WxService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function login(Request $request)
    {
        try{
            //接收参数
            $searchArgs['userName']=$request->input('userName');
            $searchArgs['password']=$request->input('password');
            $searchArgs['agencyId']=$request->input('agencyId');
            $searchArgs['token']=$request->input('token');
            //调用微服务接口，进行用户登陆
            $microToken=KlibTeacherClient::getToken([
                'userName'=>$searchArgs['userName'],
                'passWord'=>$searchArgs['password'],
                'agencyId'=>$searchArgs['agencyId']
            ]);
            $openId=WxService::getOpenId($searchArgs['token']);
            //获取登陆用户信息
            $authUserInfo=KlibTeacherClient::getAuthInfo($microToken);
            //获取教师信息
            $teacherInfo=KlibTeacherClient::getTeacherInfo($authUserInfo['userId'],$microToken);
            //添加用户绑定登陆记录
            $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
            $userInfo=$vipYoudaoUserLoginLogModel->findOne(['wx_token'=>$searchArgs['token'],'is_delete'=>0]);
            if(!$userInfo)
            {
                $result=$vipYoudaoUserLoginLogModel->add([
                    'userName'=>$searchArgs['userName'],
                    'password'=>$searchArgs['password'],
                    'agencyId'=>$searchArgs['agencyId'],
                    'userId'=>$authUserInfo['userId'],
                    'realName'=>$teacherInfo['realName'],
                    'open_id'=>$openId,
                    'micro_token'=>$microToken,
                    'wx_token'=>$searchArgs['token'],
                    'login_time'=>time()
                ]);
            }else{
                $result=$vipYoudaoUserLoginLogModel->edit([
                    'userName'=>$searchArgs['userName'],
                    'password'=>$searchArgs['password'],
                    'agencyId'=>$searchArgs['agencyId'],
                    'userId'=>$authUserInfo['userId'],
                    'realName'=>$teacherInfo['realName'],
                    'open_id'=>$openId,
                    'micro_token'=>$microToken,
                    'wx_token'=>$searchArgs['token'],
                    'login_time'=>time()
                ],['wx_token'=>$searchArgs['token'],'is_delete'=>0]);
            }

            if($result === false)
            {
                throw new \Exception('登陆失败');
            }
            return response()->json([
                'status'=>200,
                'data'=>[
                    'token'=>$searchArgs['token'],
                    'realName'=>$teacherInfo['realName']
                ]
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 退出登陆
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        try{
            $searchArgs['token']=$request->input('token');
            $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
            $userInfo=$vipYoudaoUserLoginLogModel->findOne(['wx_token'=>$searchArgs['token'],'is_delete'=>0]);
            if($userInfo)
            {
                $result=$vipYoudaoUserLoginLogModel->edit(['is_delete'=>1],['wx_token'=>$searchArgs['token']]);
                if($result === false)
                {
                    throw new \Exception('退出失败');
                }
            }
            return response()->json(['status'=>200,'data'=>[],'errorMsg'=>'退出成功']);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 通过手机号获取机构列表
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAgencyList(Request $request)
    {
        try{
            $searchArgs['userName']=$request->input('userName');
            //调用微服务获取机构列表
            $agencyList=KlibTeacherClient::getTeaOrEmpAgencyList($searchArgs['userName'],'teacher');
            $list=[];
            foreach($agencyList['list'] as $key => $val)
            {
                $list[$key]['agencyId']=$val['agencyId'];
                $list[$key]['agencyName']=$val['agencyName'];
            }
            return response()->json(['status'=>200,'data'=>['rows'=>$list]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}
