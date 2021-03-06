<?php
namespace App\Clients;

use Hprose\Http\Client;

class KlibTeacherClient
{
    /**
     * 获取token
     * @param $data
     * @return mixed
     */
    public static function getToken($data)
    {
        try{
            $client = new Client(env('MICRO_API_SERVICE_HOST') .'/authService/TeacherAuth', false);
            $res = $client->getToken($data);
            return $res;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }

    }

    /**
     * 获取登陆用户信息
     * @return mixed
     */
    public static function getAuthInfo($token)
    {
        try{
            $client = new Client(env('MICRO_API_SERVICE_HOST') .'/authService/TeacherAuth', false);
            $client->setHeader('X-USER-TOKEN',$token);
            $client->setHeader('X-REQUEST-TIME',time());
            $res = $client->getAuthInfo();
            return $res;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }

    }

    /**
     * 获取教师信息
     * @param $userId
     * @return mixed
     * @throws \Exception
     */
    public static function getTeacherInfo($userId,$token)
    {
        try{
            $client = new Client(env('MICRO_API_SERVICE_HOST') .'/userService/teacher', false);
            $client->setHeader('X-USER-TOKEN',$token);
            $client->setHeader('X-REQUEST-TIME',time());
            $res = $client->getTeacherInfo(['id'=>$userId]);
            return $res;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * 通过教师手机号获取机构列表
     * @param $mobile
     * @param $type
     * @return mixed
     */
    public static function getTeaOrEmpAgencyList($mobile,$type)
    {
        try{
            $client = new Client(env('MICRO_API_SERVICE_HOST') .'/userService/agency', false);
            $result=$client->getTeaOrEmpAgencyList([
                'mobile'=>$mobile,
                'type'=>$type,
                'page'=>1,
                'pageSize'=>20
            ]);
            return $result;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * 教师列表
     * @param $userId
     * @param $token
     */
    public static function getTeacherList($userId,$token)
    {
        try{
            $client = new Client(env('MICRO_API_SERVICE_HOST') .'/userService/teacher', false);
            $client->setHeader('X-USER-TOKEN',$token);
            $client->setHeader('X-REQUEST-TIME',time());
            $res = $client->getTeacherList(['id'=>[$userId]]);
            return $res;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }


    /**
     * 获取免密token
     * @param $data
     * @return mixed
     */
    public static function getFreeToken($data)
    {
        try{
            $client = new Client(env('MICRO_API_SERVICE_HOST') .'/authService/TeacherAuth', false);
            $res = $client->getFreeToken($data);
            return $res;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }

    }
}