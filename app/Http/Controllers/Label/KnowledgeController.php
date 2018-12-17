<?php
namespace App\Http\Controllers\Label;
use App\Clients\KnowledgeClient;
use App\Http\Controllers\BaseController;
use App\Models\VpDictCourseType;
use App\Models\VpKnowledge;
use Illuminate\Http\Request;

class KnowledgeController extends BaseController
{
    /**
     * 返回知识体系
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getKnowledgeList(Request $request)
    {
        try{
            $searchArgs['subjectId']=$request->input('subjectId');
            $list=KnowledgeClient::getKnowledge($searchArgs);
            $res=[];
            foreach($list['knowledegeList'] as $key => $val){
                if(isset($val['nodes']) && !empty($val['nodes'])){
                    foreach($val['nodes'] as $k => $v){
                        $res[]=$v;
                    }
                }
            }
            return response()->json([
                'status'=>1,
                'data'=>$res
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 筛选
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getKnowledgeSearch(Request $request)
    {
        try{
            $searchArgs['subjectId']=$request->input('subjectId');
            $searchArgs['name']=$request->input('keyword');
            $list=KnowledgeClient::getKnowledge($searchArgs);
            $res=[];
            foreach($list['knowledegeList'] as $key => $val){
                if(isset($val['nodes']) && !empty($val['nodes'])){
                    foreach($val['nodes'] as $k => $v){
                        $res[]=$v;
                    }
                }
            }
            return response()->json([
                'status'=>1,
                'data'=>$res
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }
}