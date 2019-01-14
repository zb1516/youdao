<?php

namespace App\Http\Controllers\WxProgram;

use App\Models\VipMessageRemind;
use App\Models\VipPaperImage;
use App\Models\VipYoudaoExamined;
use App\Models\VipYoudaoUserLoginLog;
use App\Services\TaskService;
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
                throw new \Exception("错误：".$result['code']);
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
            if(intval($data['openId']) <= 0)
            {
                throw new \Exception('缺少openid');
            }
            if(intval($data['type']) <= 0)
            {
                throw new \Exception('缺少类型');
            }
            if(intval($data['userId']) <= 0){
                throw new \Exception('缺少用户id');
            }
            if(intval($data['formId']) <= 0)
            {
                throw new \Exception('缺少表单id');
            }
            //查询任务id
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $taskInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$data['taskId']]);
            //判断完成还是退回消息
            if($data['type'] == 1){
                $templateData=[
                    'keyword1'  => ['value'=>$taskInfo['paper_name'],'color'=>'#000000'],
                    'keyword2'  => ['value'=>$taskInfo['upload_time'],'color'=>'#000000'],
                    'keyword3'  => ['value'=>$taskInfo['image_error_type'],'color'=>'#000000'],
                ];
            }else{
                $templateData=[
                    'keyword1'  => ['value'=>$taskInfo['paper_name'],'color'=>'#000000'],
                    'keyword2'  => ['value'=>'试卷加工已完成，请到私库中查看','color'=>'#000000'],
                ];
            }
            $result=WxService::SendTemplate($data['openId'],$data['formId'],$templateData,$data['type']);
            if($result->errcode != 0)
            {
                throw new \Exception($result->errmsg);
            }
            //添加发送消息记录
            $messageModel=new VipMessageRemind();
            $result=$messageModel->add([
                'uid'=>$data['userId'],
                'task_id'=>$data['taskId'],
                'open_id'=>$data['openId'],
                'message_content'=>htmlspecialchars($data['content']),
                'message_status'=>$data['type'],
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
            $paperInfo=$vipPaperImageModel->findOne(['task_id'=>$searchArgs['taskId']],['create_time'=>'asc'],['image_url']);
            return response()->json([
                'status'=>200,
                'data'=>[
                    'title'=>'',
                    'path'=>'',
                    'desc'=>'',
                    'imageUrl'=>$paperInfo['image_url'],
                ]
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}
