<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2019/1/11
 * Time: 15:42
 */
namespace App\Clients;

use Hprose\Http\Client;

class KlibPaperClient
{
    public static function getPaperClient($paperId)
    {
        try{
            $isStandard = 1;
            $data = [
                'isStandard' => $isStandard,
                'paperId' => $paperId
            ];
            $user = new Client(env('DIY_SERVICE_HOST') . ':' . env('DIY_SERVICE_PORT') . '/paper', false);
            $res = $user->getPaperInfo($data);
            return $res;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }
}