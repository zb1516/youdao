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
}