<?php
namespace App\Services;

class WxService
{
    /**
     * 模板消息通知
     *
     * @return reposne
     */
    public static function SendTemplate($openId,$formId,$data)
    {
        $tempalte_id = 'lv9T-PcgWn-Rkhq-1MxwaxvotO2VU3prc-wk1';
        $template =[
            'touser' => $openId,
            'template_id' => $tempalte_id,
            'url' => 'pages/index/index',
            'form_id'=>$formId,
            'topcolor' =>'#7B68EE',
            'data' =>$data,
        ];
        $result=self::getAccessToken();         //获取access_token
        if($result->errcode != 0)
        {
            throw new \Exception($result->errmsg);
        }
        //发送模板消息
        $url = "https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=".$result->access_token;
        $template =  json_encode($template);
        $result = httpPost($url,$template);
        return $result;
    }

    /**
     * 获取access_token
     * @return mixed
     * @throws \Exception
     */
    public static function getAccessToken()
    {
        //从缓存中取出access_token ，判断是否过期，如果已过期从新获取access_token
        //获取access_token
        $url ="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".config('wxxcx.appid')."&secret=".config('wxxcx.secret');
        $access_token=httpGet($url);
        $access_token=json_decode($access_token);
        return $access_token;
    }
}