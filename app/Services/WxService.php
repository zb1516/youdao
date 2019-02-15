<?php
namespace App\Services;

use App\Models\VipMessageRemind;
use App\Models\VipYoudaoExamined;
use App\Models\VipYoudaoUserLoginLog;
use Illuminate\Support\Facades\Redis;

class WxService
{
    /**
     * 发送消息模板接口
     * @param array $data
     * @return bool
     * @throws \Exception
     */
    public static function sendTemplate($data=[])
    {
        try{
            $searchArgs['openId']=$data['openId'];
            $searchArgs['type']=$data['type'];
            $searchArgs['userId']=$data['userId'];
            $searchArgs['taskId']=$data['taskId'];
            $searchArgs['content']=$data['content'];
            if(!isset($searchArgs['openId']) || empty($searchArgs['openId']))
            {
                throw new \Exception('缺少openid');
            }
            if(intval($searchArgs['type']) <= 0)
            {
                throw new \Exception('缺少类型');
            }
            if(intval($searchArgs['userId']) <= 0){
                throw new \Exception('缺少用户Id');
            }
            if(!isset($searchArgs['taskId']) || empty($searchArgs['taskId']))
            {
                throw new \Exception('缺少任务Id');
            }
            //查询任务id
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $taskInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$searchArgs['taskId']]);
            //获取本地登陆账号的用户信息
            $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
            $userInfo=$vipYoudaoUserLoginLogModel->findOne(['userId'=>$taskInfo['create_uid'],'open_id'=>$taskInfo['open_id']],['id'=>'desc']);
            //判断完成还是退回消息
            if(intval($searchArgs['type']) == 1){
                $templateData=[
                    'first' =>  ['value'=>'您上传的试卷图片未通过审核，请重新上传','color'=>'#000000'],
                    'keyword1'  =>  ['value'=>$userInfo['realName'],'color'=>'#000000'],
                    'keyword2'  => ['value'=>formatDate(strtotime($taskInfo['upload_time'])),'color'=>'#000000'],
                    'keyword3'  => ['value'=>$taskInfo['image_error_type'],'color'=>'#000000']
                ];
            }else{
                $templateData=[
                    'first'=>['value'=>'恭喜您，您提交的试卷已加工完成','color'=>'#000000'],
                    'keyword1'=>['value'=>$taskInfo['paper_name'],'color'=>'#000000'],
                    'keyword2'  => ['value'=>'加工试卷','color'=>'#000000'],
                    'keyword3'  => ['value'=>'已进入您的机构私库','color'=>'#000000']
                ];
            }
            $result=self::sendTemplateMessage($searchArgs['openId'],$templateData,$searchArgs['type']);
            if($result->errcode != 0)
            {
                throw new \Exception($result->errmsg);
            }
            //添加发送消息记录
            $messageModel=new VipMessageRemind();
            $result=$messageModel->add([
                'uid'=>$searchArgs['userId'],
                'task_id'=>$searchArgs['taskId'],
                'open_id'=>$searchArgs['openId'],
                'message_content'=>htmlspecialchars($searchArgs['content']),
                'message_status'=>$searchArgs['type'],
                'message_type'=>1,
                'addtime'=>time()
            ]);
            if($result === false)
            {
                throw new \Exception('添加消息记录失败');
            }
            return true;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * 模板消息通知
     * @param int $openId
     * @param array $data
     * @param int $type
     * @return mixed
     * @throws \Exception
     */
    public static function sendTemplateMessage($openId=0,$data=[],$type=1)
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
            $result=self::sendMessageContent($accessToken,$template);
            return $result;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }

    }

    /**
     * 发送模板内容
     * @param $accessToken
     * @param $template
     * @return mixed
     * @throws \Exception
     */
    protected static function sendMessageContent($accessToken='',$template=[])
    {
        if(empty($accessToken))
        {
            throw new \Exception('缺少access_token');
        }
        if(empty($template))
        {
            throw new \Exception('缺少模板内容');
        }
        //发送模板消息
        $url ="https://api.weixin.qq.com/cgi-bin/message/wxopen/template/uniform_send?access_token=".$accessToken;
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
        try{
            $appId=config('wxxcx.appid');
            $secretKey=config('wxxcx.secret');
            $key=self::getCacheKey($appId);
            //从缓存中取出access_token ，判断是否过期，如果已过期从新获取access_token
            $accessToken=Redis::get($key);
            if(!empty($accessToken)){
                $accessTokenJson=json_decode($accessToken);
                if($accessTokenJson->expire_time <= time()){
                    $accessTokenJson=self::getAccessTokenJson($appId,$secretKey);
                    if(isset($accessTokenJson->errcode) && $accessTokenJson->errorcode != 0)
                    {
                        throw new \Exception($accessTokenJson->errmsg);
                    }
                    //把access_token存入redis
                    $data=[
                        'access_token'=>$accessTokenJson->access_token,
                        'expire_time'=>time()+$accessTokenJson->expires_in
                    ];
                    Redis::setex($key,7200,json_encode($data));        //存入redis并设置时间为7200秒
                }
            }else{
                $accessTokenJson=self::getAccessTokenJson($appId,$secretKey);
                if(isset($accessTokenJson->errcode) && $accessTokenJson->errorcode != 0)
                {
                    throw new \Exception($accessTokenJson->errmsg);
                }
                //把access_token存入redis
                $data=[
                    'access_token'=>$accessTokenJson->access_token,
                    'expire_time'=>time()+$accessTokenJson->expires_in
                ];
                Redis::setex($key,7200,json_encode($data));        //存入redis并设置时间为7200秒
            }
            return $accessTokenJson->access_token;
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * 获取缓存key
     * @param bool $appId
     * @return string
     * @throws \Exception
     */
    protected static function getCacheKey($appId='')
    {
        if(empty($appId))
        {
            throw new \Exception('缺少appId');
        }
        $key='wx_token_'.substr(sha1($appId),0,10);
        return $key;
    }

    /**
     * 获取access_token返回结果
     * @param $appId
     * @param $secretKey
     * @return mixed
     * @throws \Exception
     */
    protected static function getAccessTokenJson($appId='',$secretKey='')
    {
        if(empty($appId))
        {
            throw new \Exception('缺少appId');
        }
        if(empty($secretKey))
        {
            throw new \Exception('缺少secretKey');
        }
        //重新获取access_token
        $url ="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appId."&secret=".$secretKey;
        $result=httpGet($url);
        return $result;
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