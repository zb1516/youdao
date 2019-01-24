<?php
namespace App\Services;

use App\Models\VipYoudaoUserLoginLog;
use Illuminate\Support\Facades\Redis;

class WxService
{
    /**
     * 模板消息通知
     *
     * @return reposne
     */
    public static function SendTemplate($openId,$data,$type)
    {
        try{
            $tempalteId=intval($type)==1?"umwNreURUB7KeE2y_d3ozPfZyIhpRxnEEiwIrh5cDjg":"ogryc1vv3lPF94kShdrMsfX4llpIAAlK6u9Fbnv0aNk";
            $template =[
                'touser' => $openId,
                'mp_template_msg'=>[
                    "appid"=>config('wechat.app_id'),
                    'template_id' => $tempalteId,
                    'url' => '',
                    "miniprogram"=>[
                        "appid"=>config('wxxcx.appid'),
                        "path"=>"pages/message/index/index"
                    ],
                    'data' =>$data,
                ]
            ];
            $accessToken=self::getAccessToken();         //获取access_token
            //发送模板消息
            $url ="https://api.weixin.qq.com/cgi-bin/message/wxopen/template/uniform_send?access_token=".$accessToken;
            $template =  json_encode($template);
            $result = httpPost($url,$template);
            return $result;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }

    }

    /**
     * 获取access_token
     * @return mixed
     * @throws \Exception
     */
    public static function getAccessToken()
    {
        $appId=config('wxxcx.appid');
        $secretKey=config('wxxcx.secret');
        $key='wx_token_'.substr(sha1($appId),0,10);
        //从缓存中取出access_token ，判断是否过期，如果已过期从新获取access_token
        $accessToken=Redis::get($key);
        if(!empty($accessToken)){
            $accessTokenJson=json_decode($accessToken);
            if($accessTokenJson->expire_time <= time()){
                //获取access_token
                $url ="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appId."&secret=".$secretKey;
                $accessTokenJson=httpGet($url);
                if(isset($accessTokenJson->errcode) && $accessTokenJson->errorcode != 0)
                {
                    throw new \Exception($accessTokenJson->errmsg);
                }
                //把access_token存入redis
                $data=[
                    'access_token'=>$accessTokenJson->access_token,
                    'expire_time'=>time()+$accessTokenJson->expires_in
                ];
                Redis::set($key,json_encode($data));        //存入redis
            }
        }else{
            //获取access_token
            $url ="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appId."&secret=".$secretKey;
            $accessTokenJson=httpGet($url);
            var_dump($accessTokenJson);exit;
            if(isset($accessTokenJson->errcode) && $accessTokenJson->errorcode != 0)
            {
                throw new \Exception($accessTokenJson->errmsg);
            }
            //把access_token存入redis
            $data=[
                'access_token'=>$accessTokenJson->access_token,
                'expire_time'=>time()+$accessTokenJson->expires_in
            ];
            Redis::set($key,json_encode($data));        //存入redis
        }
        return $accessTokenJson->access_token;
    }

    /**
     * 获取用户openid
     * @param $token
     * @return mixed
     * @throws \Exception
     */
    public static function getOpenId($token)
    {
        $token=Redis::get($token);
        $json=json_decode($token);
        return $json->openid;
    }
}