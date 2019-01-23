<?php

namespace App\Http\Controllers\WxProgram;

use App\Models\VipMessageRemind;
use App\Models\VipPaperImage;
use App\Models\VipYoudaoExamined;
use App\Models\VipYoudaoUserLoginLog;
use App\Services\TaskService;
use App\Services\UserService;
use App\Services\WxService;
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
     * 发送模板消息接口
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendTemplate(Request $request,$data)
    {
        try{
            $searchArgs['openId']=$data['openId'];//$request->input('openId');
            $searchArgs['type']=$data['type'];//$request->input('type');
            $searchArgs['userId']=$data['userId'];//$request->input('userId');
            $searchArgs['taskId']=$data['taskId'];//$request->input('taskId');
            $searchArgs['content']=$data['content'];//$request->input('content');
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
                    'keyword1'=>['value'=>$taskInfo['file_name'],'color'=>'#000000'],
                    'keyword2'  => ['value'=>'加工试卷','color'=>'#000000'],
                    'keyword3'  => ['value'=>'已进入您的机构私库','color'=>'#000000']
                ];
            }
            $result=WxService::SendTemplate($searchArgs['openId'],$templateData,$searchArgs['type']);
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
            return response()->json(['status'=>200,'errorMsg'=>'发送成功']);
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
            if(intval($searchArgs['taskId']) <= 0)
            {
                throw new \Exception('缺少试卷任务id');
            }
            $vipPaperImageModel=new VipPaperImage();
            //获取第一张图片
            $paperInfo=$vipPaperImageModel->findOne(['task_id'=>$searchArgs['taskId'],'is_delete'=>0],['create_time'=>'asc'],['image_url']);
//            $vipYoudaoExaminedModel=new VipYoudaoExamined();
//            $examinedPaperInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$searchArgs['taskId']],[],'show_name');
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
            return "欢迎关注 overtrue！";
        });
        return $wechat->server->serve();
    }
}
