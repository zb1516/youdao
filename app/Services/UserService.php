<?php
namespace App\Services;

use App\Clients\KlibTeacherClient;
use App\Models\VipYoudaoUserLoginLog;

class UserService
{
    /**
     * 验证用户是否过期，自动token
     * @param $userToken
     * @return bool
     */
    public static function checkUserStatus($token)
    {
        try{
            //验证userToken是否过期
            $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
            $userInfo=$vipYoudaoUserLoginLogModel->findOne(['wx_token'=>$token,'is_delete'=>0]);
            if(!$userInfo){
                throw new \Exception('用户未登陆');
            }
            //调用获取登陆信息接口，是否成功，如果成功，说明用户未过期，如果抛出异常，说明用户已经过期
            KlibTeacherClient::getAuthInfo($userInfo['micro_token']);
            return true;
        }catch (\Exception $e){
            //判断是否1001
            $errorCode=$e->getMessage();
            if($errorCode == 1001){
                $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
                //查询用户
                $userInfo=$vipYoudaoUserLoginLogModel->findOne(['wx_token'=>$token,'is_delete'=>0]);
                //调用微服务接口，进行用户登陆
                $microToken=KlibTeacherClient::getToken([
                    'userName'=>$userInfo['userName'],
                    'passWord'=>$userInfo['password'],
                    'agencyId'=>$userInfo['agencyId']
                ]);
                $result=$vipYoudaoUserLoginLogModel->edit(['micro_token'=>$microToken],['wx_token'=>$token,'is_delete'=>0]);
                if($result ===  false)
                {
                    return false;
                }
                return true;
            }else{
                throw new \Exception($errorCode);
            }
        }
    }

    /**
     * 获取用户信息
     * @param $userToken
     * @return mixed
     */
    public static function getUserInfo($token)
    {
        try{
            $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
            $userInfo=$vipYoudaoUserLoginLogModel->findOne(['wx_token'=>$token,'is_delete'=>0]);
            if(!$userInfo){
                throw new \Exception('用户未登陆');
            }
            return $userInfo;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }
}