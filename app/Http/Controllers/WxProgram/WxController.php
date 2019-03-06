<?php

namespace App\Http\Controllers\WxProgram;

use App\Models\VipPaperImage;
use App\Models\VipYoudaoUserLoginLog;
use E421083458\Wxxcx\Wxxcx;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redis;

class WxController extends Controller
{
    protected $wx;

    public function __construct(Wxxcx $wxxcx)
    {
        $this->wx=$wxxcx;
    }

    /**
     * 微信登陆
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        try{
            $searchArgs['code']=$request->input('code');
            $result=$this->wx->getLoginInfo($searchArgs['code']);
            if(!$result['openid']){
                throw new \Exception($result['code']);
            }
            $token=encryptMd5($result);
            //把token存入redis中
            Redis::set($token,json_encode([
                'session_key'=>$result['session_key'],
                'openid'=>$result['openid'],
                'expire_time'=>time()+86400
            ]));
            //通过用户openid获取登陆信息
            $vipYoudaoUserLoginLogModel=new VipYoudaoUserLoginLog();
            $wxInfo=$vipYoudaoUserLoginLogModel->findOne(['open_id'=>$result['openid']]);
            if($wxInfo){
                //如果存在，更新用户登陆绑定信息
                $result=$vipYoudaoUserLoginLogModel->edit(['wx_token'=>$token],['open_id'=>$result['openid'],'userName'=>$wxInfo['userName'],'is_delete'=>0]);
                if($result === false){
                    throw new \Exception('缺少绑定信息');
                }
            }
            return response()->json(['status'=>200,'data'=>['token'=>$token]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取分享模板内容
     * @param Request $request
     */
    public function getShareTemplate(Request $request)
    {
        try{
            $searchArgs['taskId']=$request->input('taskId');
            if(empty($searchArgs['taskId']))
            {
                throw new \Exception('缺少试卷任务id');
            }
            $vipPaperImageModel=new VipPaperImage();
            //获取第一张图片
            $paperInfo=$vipPaperImageModel->findOne(['task_id'=>$searchArgs['taskId'],'is_delete'=>0],['create_time'=>'asc'],['image_url']);
            return response()->json([
                'status'=>200,
                'data'=>[
                    'title'=>'看过来，又有一套试卷进入咱们的机构私库了，快到私库中查看喽！',
                    'path'=>'/pages/message/detail/detail?task_id='.$searchArgs['taskId'].'&is_share=1',
                    'desc'=>'',
                    'imageUrl'=>$paperInfo['image_url'],
                ]
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 处理微信的请求消息
     *
     * @return string
     */
    public function serve(Request $request)
    {
        $wechat = app('wechat');
        $wechat->server->setMessageHandler(function($message){
            return "欢迎关注小a说课！";
        });
        return $wechat->server->serve();
    }
}
