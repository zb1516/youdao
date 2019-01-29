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
            $user = new Client(env('KLIB_SERVICE_HOST') . '/teachingService/system', false);
            $res = $user->getSubjectListYd(['userId'=>$userId,'token'=>$token,'isKms'=>$isKms,'deptId'=>0,'page'=>1,'pageSize'=>100]);
            return $res;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }
}