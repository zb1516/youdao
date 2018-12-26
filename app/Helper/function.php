<?php
//返回指定日期的第一天和最后一天
if(!function_exists('getthemonth'))
{
    function getthemonth($date)
    {
        $firstday =date('Y-m-01', strtotime($date));
        $lastday=date('Y-m-d',strtotime("$firstday +1 month -1 day"));
        return [$firstday,$lastday];
    }
}
//加密
if(!function_exists('encrypt'))
{
    function encrypt($data,$key='')
    {
        $key=empty($key)?config('app.AUTH_KEY'):$key;               //加密key
        $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=+";
        $rand = rand(0,64);
        $ch = $chars[$rand];
        $mdKey = md5($key.$ch);
        $mdKey = substr($mdKey,$rand%8, $rand%8+7);
        $txt = base64_encode($data);
        $tmp = '';
        $i=0;$j=0;$k = 0;
        for ($i=0; $i<strlen($txt); $i++) {
            $k = $k == strlen($mdKey) ? 0 : $k;
            $j = ($rand+strpos($chars,$txt[$i])+ord($mdKey[$k++]))%64;
            $tmp .= $chars[$j];
        }
        return urlencode($ch.$tmp);
    }
}
//解密
if(!function_exists('decrypt'))
{
    function decrypt($data,$key)
    {
        $key=empty($key)?config('app.AUTH_KEY'):$key;               //加密key
        $txt = urldecode($data);
        $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=+";
        $ch = $txt[0];
        $nh = strpos($chars,$ch);
        $mdKey = md5($key.$ch);
        $mdKey = substr($mdKey,$nh%8, $nh%8+7);
        $txt = substr($txt,1);
        $tmp = '';
        $i=0;$j=0; $k = 0;
        for ($i=0; $i<strlen($txt); $i++) {
            $k = $k == strlen($mdKey) ? 0 : $k;
            $j = strpos($chars,$txt[$i])-$nh - ord($mdKey[$k++]);
            while ($j<0) $j+=64;
            $tmp .= $chars[$j];
        }
        return base64_decode($tmp);
    }
}
//生成uuid
if(!function_exists('uuid'))
{

    function uuid($prefix = '')
    {
        $chars = md5(uniqid(mt_rand(), true));
        $uuid  = substr($chars,0,8) . '-';
        $uuid .= substr($chars,8,4) . '-';
        $uuid .= substr($chars,12,4) . '-';
        $uuid .= substr($chars,16,4) . '-';
        $uuid .= substr($chars,20,12);
        return $prefix . $uuid;
    }
}
//curl_get请求
if(!function_exists('httpGet'))
{
    function httpGet($url,$timeout=5)
    {
        $ch=curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch,CURLOPT_HEADER,false);
        curl_setopt($ch, CURLOPT_TIMEOUT,(int)$timeout);
        $output = curl_exec($ch);
        if($output === false)
        {
            throw new Exception("CURL Error:".curl_error($ch));
        }
        curl_close($ch);
        return json_decode($output);
    }
}
//curl_post请求
if(!function_exists('httpPost'))
{
    function httpPost($url,$data=array(),$timeout=5)
    {
        $ch=curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_POST,true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch,CURLOPT_HEADER,false);
        curl_setopt($ch, CURLOPT_TIMEOUT,(int)$timeout);
        $output = curl_exec($ch);
        if($output === false)
        {
            throw new Exception("CURL Error:".curl_error($ch));
        }
        curl_close($ch);
        return json_decode($output);
    }
}
//数组元素倒序返回
if(!function_exists('arrayReverse'))
{
    function arrayReverse($data)
    {
        return array_reverse($data);
    }
}