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
            $searchArgs['token']=$request->header('token');
            //通过token获取用户openid
            $openId=111;//WxService::getOpenId($searchArgs['token']);
            $userToken=md5($openId);          //根据微信openid生成一个绑定的token，这个token是唯一标识
            //调用微服务接口，进行用户登陆
            $microToken=KlibTeacherClient::getToken([
                'userName'=>$searchArgs['userName'],
                'passWord'=>$searchArgs['password'],
                'agencyId'=>$searchArgs['agencyId']
            ]);
            //获取登陆用户信息
            $authUserInfo=KlibTeacherClient::getAuthInfo($microToken);
            //获取教师信息
            $teacherInfo=KlibTeacherClient::getTeacherInfo($authUserInfo['userId'],$microToken);
            //添加用户绑定登陆记录
            $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
            $userInfo=$vipYoudaoUserLoginLogModel->findOne(['user_token'=>$userToken,'is_delete'=>0]);
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
                    'user_token'=>$userToken,
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
                    'user_token'=>$userToken,
                    'login_time'=>time()
                ],['user_token'=>$userToken,'is_delete'=>0]);
            }

            if($result === false)
            {
                throw new \Exception('登陆失败');
            }
            return response()->json([
                'status'=>200,
                'data'=>[
                    'token'=>$userToken,
                    'userName'=>$teacherInfo['realName']
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
            $searchArgs['userToken']=$request->header('userToken');
            $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
            $userInfo=$vipYoudaoUserLoginLogModel->findOne(['user_token'=>$searchArgs['userToken']]);
            if($userInfo)
            {
                $result=$vipYoudaoUserLoginLogModel->edit(['is_delete'=>1],['user_token'=>$searchArgs['userToken']]);
                if($result === false)
                {
                    throw new \Exception('退出失败');
                }
            }
            return response()->json(['status'=>200,'errorMsg'=>'退出成功']);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}
