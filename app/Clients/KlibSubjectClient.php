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
        try{
            $user = new Client(env('KLIB_SERVICE_HOST') . ':14444/teachingService/system', false);
            $res = $user->getSubjectListYd($userId,$token,$isKms);
            return $res;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }
}