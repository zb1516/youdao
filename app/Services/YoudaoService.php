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
                $sign = $this->getYoudaoSign($appKey,$postData['taskId'],$salt,$time,$appSecret);
            }
            $postDataNew = array(
                'appKey' => $appKey,
                'salt' => $salt,
                'curtime' => $time,
                'sign' => $sign,
                'type' => 1,
                'taskId'=>$postData['taskId']
            );

            $postData = array_merge($postData,$postDataNew);
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/taskResult'.date('Ymd').'.txt',json_encode($postData).PHP_EOL,FILE_APPEND);
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
            $result = curl_exec($ch);
            curl_close($ch);
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/taskResult'.date('Ymd').'.txt',$result.PHP_EOL,FILE_APPEND);
            return $result;
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


    /**
     * 套卷审核通过，通知有道审核通过
     * @param $url
     * @param $taskId
     * @return \Illuminate\Http\JsonResponse
     */
    public function doYoudaoComplete($url,$taskId){
        try{
            $appKey = config('app.TEST_APP_KEY');
            $appSecret = config('app.TEST_APP_SECRET');
            $url = config('app.TEST_YOUDAO_URL').$url;
            $salt = rand(1,1000);
            $time = time();
            $sign = $this->getYoudaoSign($appKey,$taskId,$salt,$time,$appSecret);
            $postData = array(
                'taskId'=>$taskId,
                'appKey' => $appKey,
                'salt' => $salt,
                'curtime' => $time,
                'sign' => $sign,
                'type' => 1,
            );
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/complete'.date('Ymd').'.txt',json_encode($postData).PHP_EOL,FILE_APPEND);
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POST, 1);// post数据
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));// post的变量
            $result = curl_exec($ch);//有道返回的内容
            curl_close($ch);
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/complete'.date('Ymd').'.txt',$result.PHP_EOL,FILE_APPEND);
            return $result;
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 套卷审核不通过，退回有道
     * @param $url
     * @param $data
     * @return \Illuminate\Http\JsonResponse
     */
    public function doYoudaoFeedback($url,$data){
        try{
            $appKey = config('app.TEST_APP_KEY');
            $appSecret = config('app.TEST_APP_SECRET');
            $url = config('app.TEST_YOUDAO_URL').$url;
            $salt = rand(1,1000);
            $time = time();
            $sign = $this->getYoudaoSign($appKey,$data['taskId'],$salt,$time,$appSecret);
            $postData = array(
                'appKey' => $appKey,
                'salt' => $salt,
                'curtime' => $time,
                'sign' => $sign,
                'type' => 1,
            );

            if(is_array($data['list']) && !empty($data['list'])){
                $data['list'] = json_encode($data['list'],JSON_UNESCAPED_UNICODE);
            }else {
                $data['list']='[]';
            }
            $postData = array_merge($data, $postData);
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/feedback'.date('Ymd').'.txt',json_encode($postData,JSON_UNESCAPED_UNICODE).PHP_EOL,FILE_APPEND);
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POST, 1);// post数据
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));// post的变量
            $result = curl_exec($ch);//有道返回的内容
            curl_close($ch);
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/feedback'.date('Ymd').'.txt',$result.PHP_EOL,FILE_APPEND);
            return $result;
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }


    /**
     * 删除有道word文件
     * @param $url
     * @param $postData
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function deleteYoudaoDocUrl($url,$postData)
    {
        try{
            $appKey = config('app.TEST_APP_KEY');
            $appSecret = config('app.TEST_APP_SECRET');
            $url = config('app.TEST_YOUDAO_URL').$url;
            $salt = rand(1,1000);
            $time = time();
            $sign = $this->getYoudaoSign($appKey,$postData['taskId'],$salt,$time,$appSecret);
            $postDataNew = array(
                'appKey' => $appKey,
                'salt' => $salt,
                'curtime' => $time,
                'sign' => $sign,
                'type' => 1,
                'taskId'=>$postData['taskId'],
                'url'=>$postData['url']
            );

            $postData = array_merge($postData,$postDataNew);
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/deleteDoc'.date('Ymd').'.txt',json_encode($postData).PHP_EOL,FILE_APPEND);
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
            $result = curl_exec($ch);
            curl_close($ch);
            file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/deleteDoc'.date('Ymd').'.txt',$result.PHP_EOL,FILE_APPEND);
            return $result;
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    

}