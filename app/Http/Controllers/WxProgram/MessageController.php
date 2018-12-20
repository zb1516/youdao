<?php

namespace App\Http\Controllers\WxProgram;

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
            $searchArgs['page']=$request->page>0?$request->page:1;
            $searchArgs['pageSize']=$request->pageSize;
            //获取模板消息
            $vipMessageRemindModel=new VipMessageRemind();
            $list=$vipMessageRemindModel->findAll([],['addtime','desc'],"*","",[],$searchArgs['page'],$searchArgs['pageSize']);
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
            //查询出当前用户已读消息
            $vipMessageViewLogModel=new VipMessageViewLog();
            $messageIdsList=$vipMessageViewLogModel->findAll(['uid'=>$searchArgs['userId']],['addtime','desc'],['message_id']);
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
