<?php
namespace App\Services;

use App\Clients\KlibAgencyClient;
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
                throw new \Exception('登陆已过期，请重新登陆');
            }
            self::authIsPrivate($userInfo['micro_token']);
            //调用获取登陆信息接口，是否成功，如果成功，说明用户未过期，如果抛出异常，说明用户已经过期
            KlibTeacherClient::getAuthInfo($userInfo['micro_token']);
            return true;
        }catch (\Exception $e){
            //判断是否1001
            $errorCode=$e->getMessage();
            if($errorCode == 1001){
                try{
                    $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
                    //查询用户
                    $userInfo=$vipYoudaoUserLoginLogModel->findOne(['wx_token'=>$token,'is_delete'=>0]);
                    //调用微服务接口，进行用户登陆
                    $microToken=KlibTeacherClient::getToken([
                        'userName'=>$userInfo['userName'],
                        'passWord'=>$userInfo['password'],
                        'agencyId'=>$userInfo['agencyId']
                    ]);
                    self::authIsPrivate($microToken);
                    $result=$vipYoudaoUserLoginLogModel->edit(['micro_token'=>$microToken],['wx_token'=>$token,'is_delete'=>0]);
                    if($result ===  false)
                    {
                        return false;
                    }
                    return true;
                }catch (\Exception $e){
                    throw new \Exception($e->getMessage());
                }
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
                throw new \Exception('登陆已过期，请重新登陆');
            }
            return $userInfo;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * 认证是否是私库
     * @param $microToken
     * @return bool
     * @throws \Exception
     */
    public static function authIsPrivate($microToken)
    {
        //获取登陆用户信息
        $authUserInfo=KlibTeacherClient::getAuthInfo($microToken);
        //获取机构是否开通私库状态
        $agencyDeatil=KlibAgencyClient::getAgencyDetail($authUserInfo['agencyId'],$microToken);
        //判断机构私库是否开通，如未开通，不让登陆
        if($agencyDeatil['questions_library_status'] != 3)
        {
            throw new \Exception('抱歉，您的机构未开通私库！');
        }
        //获取教师信息
        $teacherInfo=KlibTeacherClient::getTeacherInfo($authUserInfo['userId'],$microToken);
        if($teacherInfo['isPrivateLibraryManage'] != 1)
        {
            throw new \Exception('请到元校管授权私库上传试卷权限');
        }
        return true;
    }
}