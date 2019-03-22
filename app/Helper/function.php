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
if(!function_exists('encryptMd5'))
{
    function encryptMd5($data)
    {
        $strPol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
        $rand=rand(0,32);
        $txt=$strPol[$rand];
        $param=http_build_query($data);
        return md5($param.date('Y-m-d').$txt);
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

if(!function_exists('shortUuid'))
{
    function shortUuid($uuid)
    {
        return strtoupper(substr($uuid, 8, 16));
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

if(!function_exists('formatDateTime'))
{
    function formatDateTime($ustime) {
        $ytime = date("Y-m-d H:i",$ustime);
        $rtime = date("n月j日 H:i",$ustime);
        $htime = date("H:i",$ustime);
        $time = time() - $ustime;
        $todaytime = strtotime("today");
        $time1 = time() - $todaytime;
        if($time < 60){
            $str = '刚刚';
        }else if($time < 60 * 60){
            $min = floor($time/60);
            $str = $min.'分钟前';
        }else if($time < $time1){
            $str = '今天'.$htime;
        }else{
            $str = $rtime;
        }
        return $str;
    }
}

if(!function_exists('formatDate'))
{
    function formatDate($ustime) {
        $rtime = date("Y年n月j日",$ustime);
        return $rtime;
    }
}

if(!function_exists('gmt_iso8601'))
{
    function gmt_iso8601($time) {
        $dtStr = date("c", $time);
        $mydatetime = new DateTime($dtStr);
        $expiration = $mydatetime->format(DateTime::ISO8601);
        $pos = strpos($expiration, '+');
        $expiration = substr($expiration, 0, $pos);
        return $expiration."Z";
    }
}

if(!function_exists('key_sort'))
{
    function key_sort($data,$order,$column)
    {
        if(is_array($column)){
            $str='';
            foreach ($column as $key => $val)
            {
                $str.="'".$val."',";
            }
            $columnKey=trim($str , ",");
        }else{
            $columnKey=$column;
        }
        $last_names = array_column($data,$columnKey);
        array_multisort($last_names,$order,$data);
        return $data;
    }
}