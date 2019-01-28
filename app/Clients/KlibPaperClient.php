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
            $user = new Client(env('KLIB_SERVICE_HOST').":".env('DIY_SERVICE_PORT').'/diyService/paper', false);
            $res = $user->getPaperInfo($data);
//            foreach ($res['module'] as &$v){
//                foreach ($v['questions'] as &$it){
//                    $v['questions'][$it['ques_id']] = $it;
//                }
//            }
            //print_r($res);exit;
            return $res;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }
}