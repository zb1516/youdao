<?php

namespace App\Http\Controllers\WxProgram;

use App\Models\VipMessageRemind;
use App\Models\VipMessageViewLog;
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
            $searchArgs['token']=$request->token;         //小程序登陆以后生成的唯一标识
            $searchArgs['page']=$request->page>0?$request->page:1;
            $searchArgs['pageSize']=$request->pageSize;
            if(!isset($searchArgs['token']) || empty($searchArgs['token']))
            {
                throw new \Exception('缺少用户token');
            }
            //获取用户openid
            $openId=WxService::getOpenId($searchArgs['token']);
            //获取模板消息
            $vipMessageRemindModel=new VipMessageRemind();
            $list=$vipMessageRemindModel->findAll(['open_id'=>$openId],['addtime','desc'],"*","",[],$searchArgs['page'],$searchArgs['pageSize']);
            return response()->json(['status'=>200,'data'=>$list]);
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
            $searchArgs['userId']=$request->userId;
            if(intval($searchArgs['userId']) <= 0){
                throw new \Exception('缺少用户id');
            }
            $searchArgs['token']=$request->token;         //小程序登陆以后生成的唯一标识
            if(!isset($searchArgs['token']) || empty($searchArgs['token']))
            {
                throw new \Exception('缺少用户token');
            }
            //获取用户openid
            $openId=WxService::getOpenId($searchArgs['token']);
            //查询出当前用户已读消息
            $vipMessageViewLogModel=new VipMessageViewLog();
            $messageIdsList=$vipMessageViewLogModel->findAll(['uid'=>$searchArgs['userId'],'open_id'=>$openId],['addtime','desc'],['message_id']);
            $messageIds=[];
            foreach($messageIdsList as $key => $val){
                $messageIds[]=$val['message_id'];
            }
            //统计当前用户下
            $vipMessageRemindModel=new VipMessageRemind();
            $messageCount=$vipMessageRemindModel->count(['id'=>['not in'=>$messageIds]]);
            return response()->json(['status'=>200,'count'=>$messageCount]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}
