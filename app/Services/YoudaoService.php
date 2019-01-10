<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2019/1/9
 * Time: 15:42
 */
namespace App\Services;

class YoudaoService
{
    /**
     * 获取有道信息内容
     * @param $url
     * @param $postData
     * @param $type 1为投递任务，2为获取任务
     * @return boolean
     */
    public function getYoudaoTask($url,$postData,$type=1)
    {
        try{
            $appKey = config('app.TEST_APP_KEY');
            $appSecret = config('app.TEST_APP_SECRET');
            $url = config('app.TEST_YOUDAO_URL').$url;
            $salt = rand(1,1000);
            $time = time();
            if($type == 1){
                $sign = $this->getYoudaoSign($appKey,$postData['questionUrl'],$salt,$time,$appSecret);
            }else{
                $sign = $this->getYoudaoSign($appKey,$postData['data']['taskId'],$salt,$time,$appSecret);
            }
            $postData = array(
                'appKey' => $appKey,
                'salt' => $salt,
                'curtime' => $time,
                'sign' => $sign,
                'type' => 1,
            );
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POST, 1);// post数据
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));// post的变量
            $result = curl_exec($ch);//有道返回的内容
            curl_close($ch);
            return response()->json($result);
        }catch (\Exception $e){

            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 获取有道签名认证
     * @return array
     */
    public function getYoudaoSign($appKey,$url,$salt,$time,$appSecret)
    {
        $str = $this->getYoudaoInput($url);
        $base64_encode_str = $appKey.base64_encode($str).$salt.$time.$appSecret;
        $result = hash('sha256', $base64_encode_str, true);
        return bin2hex($result);
    }
    /**
     * 获取有道input值
     * @return array
     */
    public function getYoudaoInput($url)
    {
        $INPUT_LENGTH_LIMIT = 20;
        $length = strlen($url);
        if ($length <= $INPUT_LENGTH_LIMIT) {
            return $url;
        }
        $str = substr($url,0,10).$length.substr($url,$length-10,$length);
        return $str;
    }
}