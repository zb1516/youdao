<?php

namespace App\Http\Controllers\WxProgram;

use App\Models\VipPaperImage;
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
            $searchArgs['code']=$request->code;
            $result=$this->wx->getLoginInfo($searchArgs['code']);
            if(!$result['openid']){
                throw new \Exception($result['code']);
            }
            $token=encrypt($result);
            //把token存入redis中
            Redis::set($token,json_encode([
                'session_key'=>$result['session_key'],
                'openid'=>$result['openid'],
                'expire_time'=>time()+86400
            ]));
            return response()->json(['status'=>200,'token'=>$token]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 发送模板消息接口
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendTemplate(Request $request)
    {
        try{
            $searchArgs['openId']=$request->openId;
            $searchArgs['type']=$request->type;
            $searchArgs['formId']=$request->formId;
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
            //判断完成还是退回消息
            if($searchArgs['type'] == 1){
                $data=[
                    'keyword1'  => ['value'=>'','color'=>'#000000'],
                    'keyword2'  => ['value'=>'','color'=>'#000000'],
                    'keyword3'  => ['value'=>'','color'=>'#000000'],
                    'keyword4'  => ['value'=>'','color'=>'#000000'],
                ];
            }else{
                $data=[
                    'keyword1'  => ['value'=>'','color'=>'#000000'],
                    'keyword2'  => ['value'=>'','color'=>'#000000'],
                    'keyword3'  => ['value'=>'','color'=>'#000000'],
                    'keyword4'  => ['value'=>'','color'=>'#000000'],
                ];
            }
            $result=WxService::SendTemplate($searchArgs['openId'],$searchArgs['formId'],$data);
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
            $searchArgs['taskId']=$request->taskId;
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
