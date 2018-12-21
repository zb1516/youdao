<?php
namespace App\Clients;

use Hprose\Http\Client;

class KlibSubjectClient{
    /**
     * 获取学科
     * @param $userId
     * @param $page
     * @param $pageSize
     * @param $token
     * @param $isKms
     * @return mixed
     */
    public static function getSubject($userId,$token,$isKms=true)
    {
        $user = new Client(env('KLIB_ATF_API_SERVICE_HOST') . ':' . env('KLIB_ATF_API_SERVICE_PORT') . '/teachingService/system', false);
        $res = $user->getSubjectListYd($userId,$token,$isKms);
        return $res;
    }
}