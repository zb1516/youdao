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
    public static function SendTemplate($openId,$formId,$data,$type)
    {
        try{
            $tempalteId=intval($type)==1?"am9CzBmTGUrjxN7oKY5qy0GetWPgq98_3WBqEbk4X0Y":"7G9-0evnvXdg_4mBU9cs83wg4jSjp8jK-rjSRzlar-w";
            $template =[
                'touser' => $openId,
                'template_id' => $tempalteId,
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
        //验证token是否过期
        $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
        $userInfo=$vipYoudaoUserLoginLogModel->findOne(['wx_token'=>$token,'is_delete'=>0]);
        if(!$userInfo)
        {
            throw new \Exception('登陆已过期，请重新登陆');
        }
        $token=Redis::get($token);
        $json=json_decode($token);
        return $json->openid;
    }
}