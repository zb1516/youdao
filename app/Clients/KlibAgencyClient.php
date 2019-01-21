<?php
namespace App\Clients;

use Hprose\Http\Client;

class KlibAgencyClient
{
    public static function getAgencyDetail($id,$token)
    {
        try{
            $client = new Client(env('MICRO_API_SERVICE_HOST') .'/userService/agency', false);
            $client->setHeader('X-USER-TOKEN',$token);
            $result=$client->getAgencyDetail(['id'=>$id]);
            return $result;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }

    }
}