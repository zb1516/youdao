<?php

namespace App\Http\Controllers\WxProgram;

use App\Services\WxService;
use E421083458\Wxxcx\Wxxcx;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
            //通过用户openid查询数据库中的记录
            $model=new WxToken();
            $userInfo=$model->where(['openid'=>$result['openid']])->first();
            $rand = rand(0,64);
            $token=encrypt($result,$rand,'wx_mini_program');
            if(!$userInfo){
                //把数据存到数据库中
                $model->session_key=$result['session_key'];
                $model->openid=$result['openid'];
                $model->token=$token;
                $model->expire_time=time()+86400;
                $result=$model->save();
            }else{
                $model=WxToken::find($userInfo['id']);
                $model->id=$userInfo['id'];
                $model->session_key=$result['session_key'];
                $model->token=$token;
                $model->expire_time=time()+86400;
                $result=$model->save();
            }
            if($result === false){
                throw new \Exception('获取openid失败');
            }
            return response()->json(['status'=>200,'data'=>$token]);
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
}
