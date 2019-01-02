<?php
namespace App\Clients;
use Hprose\Http\Client;
class KnowledgeClient{
    public static function getKnowledge($searchArgs){
        if ($searchArgs['subjectId'] <= 0){
            throw new \Exception('缺少学科id');
        }
        $postData["subjectId"]=$searchArgs['subjectId'];
        if(!empty($searchArgs['name'])){
            $postData["name"]=$searchArgs['name'];
        }
        $obj=new Client(env('KLIB_SERVICE_HOST') . ':' . env('KLIB_SERVICE_PORT') .  '/quesService',false);
        $res = $obj->getKnowledgePoint ($postData);
        return $res;
    }
}