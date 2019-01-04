<?php

namespace App\Http\Controllers\WxProgram;

use App\Clients\KlibTeacherClient;
use App\Models\VipMessageRemind;
use App\Models\VipMessageViewLog;
use App\Services\UserService;
use App\Services\WxService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MessageController extends Controller
{
    /**
     * 消息列表
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getMessageList(Request $request)
    {
        try{
            $searchArgs['token']=$request->input('token');         //小程序登陆以后生成的唯一标识
            $searchArgs['page']=$request->input('page')>0?$request->input('page'):1;
            $searchArgs['pageSize']=$request->input('pageSize');
            if(!isset($searchArgs['token']))
            {
                throw new \Exception('缺少微信用户token');
            }
            //获取用户openid
            $openId=111;//WxService::getOpenId($searchArgs['token']);
            //获取模板消息
            $vipMessageRemindModel=new VipMessageRemind();
            $list=$vipMessageRemindModel->findAll(['open_id'=>$openId],['addtime','desc'],"*","",[],$searchArgs['page'],$searchArgs['pageSize']);
            return response()->json(['status'=>200,'data'=>["rows"=>$list]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取未读消息数
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getMessageCount(Request $request)
    {
        try{
            $searchArgs['userToken']=$request->input('userToken');
            if(!isset($searchArgs['userToken'])){
                throw new \Exception('缺少登陆用户token');
            }
            $searchArgs['token']=$request->input('token');         //小程序登陆以后生成的唯一标识
            if(!isset($searchArgs['token']))
            {
                throw new \Exception('缺少微信用户token');
            }
            //获取用户openid
            $openId=111;//WxService::getOpenId($searchArgs['token']);
            //获取用户id
            $userInfo=UserService::getUserInfo($searchArgs['userToken']);
            //查询出当前用户已读消息
            $vipMessageViewLogModel=new VipMessageViewLog();
            $messageIdsList=$vipMessageViewLogModel->findAll(['uid'=>$userInfo['userId'],'open_id'=>$openId],['addtime'=>'desc'],['message_id']);
            $messageIds=[];
            foreach($messageIdsList as $key => $val){
                $messageIds[]=$val['message_id'];
            }
            //统计当前用户下
            $vipMessageRemindModel=new VipMessageRemind();
            $messageCount=$vipMessageRemindModel->count(['id'=>['not in'=>$messageIds]]);
            return response()->json(['status'=>200,'data'=>['count'=>$messageCount]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 设置已读消息接口
     * @param Request $request
     */
    public function setReadMessage(Request $request)
    {
        try{
            $searchArgs['userToken']=$request->input('userToken');
            $searchArgs['token']=$request->input('token');
            $searchArgs['messageId']=$request->input('messageId');
            if(intval($searchArgs['messageId']) <= 0){
                throw new \Exception('缺少消息id');
            }
            if(!isset($searchArgs['token']))
            {
                throw new \Exception('缺少微信用户token信息');
            }
            if(!isset($searchArgs['userToken']))
            {
                throw new \Exception('缺少用户token信息');
            }
            //获取用户openId;
            $openId=WxService::getOpenId($searchArgs['token']);
            //获取用户id
            $userInfo=UserService::getUserInfo($searchArgs['userToken']);
            $vipMessageViewLogModel=new VipMessageViewLog();
            $info=$vipMessageViewLogModel->findOne(['uid'=>$userInfo['userId'],'open_id'=>$openId,'message_id'=>$searchArgs['messageId']]);
            if(!$info)
            {
                $result=$vipMessageViewLogModel->add(['uid'=>$userInfo['userId'],'open_id'=>$openId,'message_id'=>$searchArgs['messageId'],'addtime'=>time()]);
                if($result === false)
                {
                    throw new \Exception('操作失败');
                }
            }
            return response()->json(['status'=>200,'errorMsg'=>'操作成功']);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}
