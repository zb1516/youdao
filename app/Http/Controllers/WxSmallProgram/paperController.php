<?php

namespace App\Http\Controllers\WxSmallProgram;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class paperController extends Controller
{
    /**
     * 上传试卷照片
     * @param Request $request
     */
    public function addPaperImage(Request $request)
    {
        $vipYoudaoExaminedModel=new VipYoudaoExamined();
        $vipYoudaoExaminedModel->beginTransaction();
        try{
            if($request->isMethod('post')){
                $searchArgs['userId']=$request->userId;
                $searchArgs['paperType']=$request->paperType;
                $searchArgs['image']=$request->image;
                $searchArgs['subjectId']=$request->subjectId;
                $searchArgs['gradeId']=$request->gradeId;
                $searchArgs['provId']=$request->provId;
                $searchArgs['cityId']=$request->cityId;
                if(intval($searchArgs['userId']) <= 0){
                    throw new \Exception('缺少用户id');
                }
                if(intval($searchArgs['subjectId']) <=0 ){
                    throw new \Exception('缺少科目id');
                }
                if(intval($searchArgs['paperType']) <=0)
                {
                    throw new \Exception('请选择试卷样式');
                }
                if(empty($searchArgs['image']))
                {
                    throw new \Exception('请选择试卷照片');
                }
                if(intval($searchArgs['gradeId']) <= 0)
                {
                    throw new \Exception('请选择年级');
                }
                if(intval($searchArgs['provId']) <= 0)
                {
                    throw new \Exception('请选择省份');
                }
                if(intval($searchArgs['cityId']) <= 0)
                {
                    throw new \Exception('请选择城市');
                }
                $taskId=uuid();     //生成任务id
                $result=$vipYoudaoExaminedModel->add([
                    'task_id'=>$taskId,
                    'subject_id'=>$searchArgs['subjectId'],
                    'grade'=>$searchArgs['gradeId'],
                    'province'=>$searchArgs['provId'],
                    'city'=>$searchArgs['cityId'],
                    'paper_type'=>$searchArgs['paperType'],
                    'upload_time'=>date('Y-m-d H:i:s')
                ]);
                if($result === false){
                    throw new \Exception('上传失败');
                }
                $vipPaperImageModel=new VipPaperImage();
                //如果创建任务成功，上传图片
                //判断是分离样式还是混合样式
                if($searchArgs['paperType'] == 1){
                    foreach($searchArgs['image'] as $key => $val)
                    {
                        $result=$vipPaperImageModel->add([
                            'task_id'=>$taskId,
                            'image_url'=>$val,
                            'image_type'=>3,
                            'is_delete'=>0,
                            'create_time'=>time()
                        ]);
                        if($result === false){
                            throw new \Exception('上传失败');
                        }
                    }
                }else{
                    foreach($searchArgs['image'][0] as $key => $val)
                    {
                        $result=$vipPaperImageModel->add([
                            'task_id'=>$taskId,
                            'image_url'=>$val,
                            'image_type'=>1,
                            'is_delete'=>0,
                            'create_time'=>time()
                        ]);
                        if($result === false){
                            throw new \Exception('上传失败');
                        }
                    }
                    foreach($searchArgs['image'][1] as $key => $val)
                    {
                        $result=$vipPaperImageModel->add([
                            'task_id'=>$taskId,
                            'image_url'=>$val,
                            'image_type'=>2,
                            'is_delete'=>0,
                            'create_time'=>time()
                        ]);
                        if($result === false){
                            throw new \Exception('上传失败');
                        }
                    }
                }
                $vipYoudaoExaminedModel->commit();
                return response()->json(['status'=>200,'errorMsg'=>'上传成功']);
            }else{
                throw new \Exception('请求方式不允许');
            }
        }catch (\Exception $e){
            $vipYoudaoExaminedModel->rollback();
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 返回图片审核列表
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPaperExaminedList(Request $request)
    {
        try{
            $searchArgs['page']=$request->page>0?$request->page:1;
            $searchArgs['pageSize']=$request->pageSize;
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $vipPaperImageModel=new VipPaperImage();
            //创建子查询sql语句
            $sub=$vipPaperImageModel->where(['is_delete'=>0])->orderBy(["create_time","asc"])->groupBy("task_id")->first();
            //创建查询条件
            $where=['vip_youdao_examined.task_id'=>['sub'=>["table"=>"vip_paper_image","where"=>"vip_youdao_examined.task_id=vip_paper_image.task_id","select"=>DB::raw("({$sub->toSql()}) as sub")]]];
            //获取图片审核列表
            $list=$vipYoudaoExaminedModel->findAll($where,['id','desc'],["*"],"",[],$searchArgs['page'],$searchArgs['pageSize']);
            return response()->json(['status'=>200,'data'=>$list]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取试卷上传月统计
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUserUploadMonthCount(Request $request)
    {
        try{
            $searchArgs['userId']=$request->userId;
            if(intval($searchArgs['userId']) <=0 ){
                throw new \Exception('缺少用户id');
            }
            $dayData=getthemonth(date('Y-m-d'));            //获取本月第一天和最后一天
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $count=$vipYoudaoExaminedModel->count(['DATE_FORMAT(upload_time,"%Y-%m-%d")'=>['egt'=>$dayData[0]],'DATE_FORMAT(upload_time,"%Y-%m-%d")'=>['elt'=>$dayData[1]]]);
            $count=intval($count)>0?$count:0;
            return response()->json(['status'=>200,'data'=>$count]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 统计有道题目入库数
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getYDPaperCount(Request $request)
    {
        try{
            $searchArgs['userId']=$request->userId;
            if(intval($searchArgs['userId']) <= 0)
            {
                throw new \Exception('缺少用户id');
            }
            //查询创建的任务
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $examinedIdsList=$vipYoudaoExaminedModel->findAll(['create_uid'=>$searchArgs['userId']],['upload_time','desc'],['paper_id']);
            $examinedIds=[];
            foreach ($examinedIdsList as $key => $val)
            {
                $examinedIds[]=$val['paper_id'];
            }
            //统计本月入库的有道套卷数
            $vipPaperModel=new VipPaper();
            $count=$vipPaperModel->count(['id'=>['in'=>$examinedIds],'paper_type'=>2]);
            return response()->json(['status'=>200,'data'=>$count]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取试卷图片列表
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPaperImageList(Request $request)
    {
        try{
            $searchArgs['taskId']=$request->taskId;                 //任务id
            $searchArgs['imageType']=$request->imageType;           //图片类型 1问题 2 答案
            if(intval($searchArgs['taskId']) <=0 )
            {
                throw new \Exception('缺少任务id');
            }
            if(intval($searchArgs['imageType']) <= 0)
            {
                throw new \Exception('缺少类型');
            }
            $vipPaperImageModel=new VipPaperImage();
            $list=$vipPaperImageModel->findAll(['task_id'=>$searchArgs['taskId'],'image_type'=>$searchArgs['imageType'],'is_delete'=>0]);
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            //获取任务信息
            $vipYoudaoExaminedInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$searchArgs['taskId']]);
            return response()->json(['status'=>200,'data'=>['paperType'=>$vipYoudaoExaminedInfo['paper_type'],'list'=>$list]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取上传额度
     * @param Request $request
     */
    public function getUploadCount(Request $request)
    {
        try{
            $searchArgs['agencyId']=$request->agencyId;
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $dayData=getthemonth(date('Y-m-d'));            //获取本月第一天和最后一天
            //获取本月上传次数
            $count=$vipYoudaoExaminedModel->count(['agency_id'=>$searchArgs['agencyId'],'DATE_FORMAT(upload_time,"%Y-%m-%d")'=>['egt'=>$dayData[0]],'DATE_FORMAT(upload_time,"%Y-%m-%d")'=>['elt'=>$dayData[1]]]);
            $count=intval($count)>0?$count:0;           //本月已上传次数
            //获取上传额度，先从配置文件中获取上传额度
            $uploadCount=config('app.AGENCY_UPLOAD_NUMBER');
            $residualUploadCount=intval($uploadCount-$count)>0?$uploadCount-$count:0;       //计算剩余上传额度
            return response(['status'=>200,'data'=>$residualUploadCount]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}
