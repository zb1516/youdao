<?php
namespace App\Services;

use Illuminate\Support\Facades\Redis;

class WxService
{
    /**
     * 模板消息通知
     *
     * @return reposne
     */
    public static function SendTemplate($openId,$formId,$data)
    {
        try{
            $tempalte_id = 'lv9T-PcgWn-Rkhq-1MxwaxvotO2VU3prc-wk1';
            $template =[
                'touser' => $openId,
                'template_id' => $tempalte_id,
                'url' => 'pages/index/index',
                'form_id'=>$formId,
                'topcolor' =>'#7B68EE',
                'data' =>$data,
            ];
            $accessToken=self::getAccessToken();         //获取access_token
            //发送模板消息
            $url = "https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=".$accessToken;
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
        $result=json_decode($accessToken);
        if($result->expire_time <= time()){
            //获取access_token
            $url ="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appId."&secret=".$secretKey;
            $access_token=httpGet($url);
            $result=json_decode($access_token);
            if($result->errcode != 0)
            {
                throw new \Exception($result->errmsg);
            }
            //把access_token存入redis
            $data=[
                'access_token'=>$result->access_token,
                'expire_time'=>time()+$access_token->expires_in
            ];
            Redis::set($key,json_encode($data));        //存入redis
        }
        return $result->access_token;
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
        if($json->expire_time <= time())
        {
            throw new \Exception('用户登陆已过期');
        }
        return $json->openid;
    }
}