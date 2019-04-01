<?php
namespace App\Clients;

use Hprose\Http\Client;

class KlibWechatMessageClient
{
    public static function sendWxTemplate($data , $type = 0)
    {
        try{
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/weixin'.date('Ymd').'.txt', json_encode($data).PHP_EOL,FILE_APPEND);
            //file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/service'.date('Ymd').'.txt', env('KLIB_SERVICE_HOST'). '/messageService/questionService'.PHP_EOL,FILE_APPEND);
            $client = new Client(env('KLIB_SERVICE_HOST'). '/messageService/questionService', false);
            if($type == 0){
                //失败通知
                $result = $client->errorPatQues($data);
            }else{
                //成功通知
                $result = $client->succPatQues($data);
            }

            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/weixin'.date('Ymd').'.txt', json_encode($result).PHP_EOL,FILE_APPEND);
            return $result;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }
}