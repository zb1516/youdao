<?php

namespace App\Http\Controllers\WxProgram;

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
            $searchArgs['taskId']=$data['taskId'];
            $searchArgs['openId']=$data['openId'];
            $searchArgs['type']=$data['type'];
            $searchArgs['formId']=$data['formId'];
            if(intval($searchArgs['openId']) <= 0)
            {
                throw new \Exception('缺少openid');
            }
            if(intval($searchArgs['type']) <= 0)
            {
                throw new \Exception('缺少类型');
            }
            if(intval($searchArgs['formId']) <= 0)
            {
                throw new \Exception('缺少');
            }
            //查询任务id
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $taskInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$searchArgs['taskId']]);
            //判断完成还是退回消息
            if($searchArgs['type'] == 1){
                $templateData=[
                    'keyword1'  => ['value'=>'被退回通知','color'=>'#000000'],
                    'keyword2'  => ['value'=>'试卷名称:'.$taskInfo['paper_name'],'color'=>'#000000'],
                    'keyword3'  => ['value'=>'上传时间:'.$taskInfo['upload_time'],'color'=>'#000000'],
                    'keyword4'  => ['value'=>'被退回原因:'.$taskInfo['image_error_type'],'color'=>'#000000'],
                ];
            }else{
                $templateData=[
                    'keyword1'  => ['value'=>'试卷加工完成通知','color'=>'#000000'],
                    'keyword2'  => ['value'=>'试卷名称:'.$taskInfo['paper_name'],'color'=>'#000000'],
                    'keyword3'  => ['value'=>'试卷状态:已加工完成，请到私库中查看','color'=>'#000000'],
                ];
            }
            $result=WxService::SendTemplate($searchArgs['openId'],$searchArgs['formId'],$templateData);
            if($result->errcode != 0)
            {
                throw new \Exception($result->errmsg);
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
