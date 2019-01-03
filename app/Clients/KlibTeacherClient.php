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
        $client = new Client(env('MICRO_API_SERVICE_HOST') .'/authService/TeacherAuth', false);
        $res = $client->getToken($data);
        return $res;
    }

    /**
     * 获取登陆用户信息
     * @return mixed
     */
    public static function getAuthInfo($token)
    {
        $client = new Client(env('MICRO_API_SERVICE_HOST') .'/authService/TeacherAuth', false);
        $client->setHeader('X-USER-TOKEN',$token);
        $client->setHeader('X-REQUEST-TIME',time());
        $res = $client->getAuthInfo();
        return $res;
    }
}