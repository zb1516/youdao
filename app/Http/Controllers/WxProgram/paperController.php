<?php

namespace App\Http\Controllers\WxProgram;

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
                $searchArgs['agencyId']=$request->agencyId;
                $searchArgs['paperType']=$request->paperType;
                $searchArgs['questionImage']=$request->questionImage;
                $searchArgs['answerImage']=$request->answerImage;
                $searchArgs['subjectId']=$request->subjectId;
                $searchArgs['gradeId']=$request->gradeId;
                $searchArgs['provId']=$request->provId;
                $searchArgs['cityId']=$request->cityId;
                if(intval($searchArgs['userId']) <= 0){
                    throw new \Exception('缺少用户id');
                }
                if(intval($searchArgs['agencyId']) <= 0){
                    throw new \Exception('缺少机构id');
                }
                if(intval($searchArgs['subjectId']) <=0 ){
                    throw new \Exception('缺少科目id');
                }
                if(intval($searchArgs['paperType']) <=0)
                {
                    throw new \Exception('请选择试卷样式');
                }
                if($searchArgs['paperType'] == 1){
                    if(empty($searchArgs['questionImage']))
                    {
                        throw new \Exception('请上传试卷照片');
                    }
                }else{
                    if(empty($searchArgs['questionImage']))
                    {
                        throw new \Exception('请上传试卷题目照片');
                    }
                    if(empty($searchArgs['answerImage']))
                    {
                        throw new \Exception('请上传试卷答案照片');
                    }
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
                    'agency_id'=>$searchArgs['agencyId'],
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
                    foreach($searchArgs['questionImage'] as $key => $val)
                    {
                        $result=$vipPaperImageModel->add([
                            'task_id'=>$taskId,
                            'image_url'=>$val,
                            'image_type'=>3,
                            'is_delete'=>0,
                            'create_time'=>time()
                        ]);
                        if($result === false){
                            throw new \Exception('上传试卷失败');
                        }
                    }
                }else{
                    foreach($searchArgs['questionImage'] as $key => $val)
                    {
                        $result=$vipPaperImageModel->add([
                            'task_id'=>$taskId,
                            'image_url'=>$val,
                            'image_type'=>1,
                            'is_delete'=>0,
                            'create_time'=>time()
                        ]);
                        if($result === false){
                            throw new \Exception('上传试卷失败');
                        }
                    }
                    foreach($searchArgs['answerImage'] as $key => $val)
                    {
                        $result=$vipPaperImageModel->add([
                            'task_id'=>$taskId,
                            'image_url'=>$val,
                            'image_type'=>2,
                            'is_delete'=>0,
                            'create_time'=>time()
                        ]);
                        if($result === false){
                            throw new \Exception('上传试卷失败');
                        }
                    }
                }
                $vipYoudaoExaminedModel->commit();
                return response()->json(['status'=>200,'errorMsg'=>'上传试卷成功']);
            }else{
                throw new \Exception('请求方式不允许');
            }
        }catch (\Exception $e){
            $vipYoudaoExaminedModel->rollback();
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 修改试卷照片
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function editPaperImage(Request $request)
    {
        $vipPaperImageModel=new VipPaperImage();
        $vipPaperImageModel->beginTransaction();
        try{
            if($request->isMethod('post')) {
                $searchArgs['taskId'] = $request->taskId;
                $searchArgs['paperType'] = $request->paperType;
                $searchArgs['questionImage'] = $request->questionImage;
                $searchArgs['answerImage'] = $request->answerImage;
                if (intval($searchArgs['taskId']) <= 0) {
                    throw new \Exception('缺少任务id');
                }
                if (intval($searchArgs['paperType']) <= 0) {
                    throw new \Exception('缺少试卷类型');
                }
                if ($searchArgs['paperType'] == 1) {
                    if (empty($searchArgs['questionImage'])) {
                        throw new \Exception('请上传试卷照片');
                    }
                } else {
                    if (empty($searchArgs['questionImage'])) {
                        throw new \Exception('请上传试卷题目照片');
                    }
                    if (empty($searchArgs['answerImage'])) {
                        throw new \Exception('请上传试卷答案照片');
                    }
                }
                //判断是分离样式还是混合样式
                if ($searchArgs['paperType'] == 1) {
                    foreach ($searchArgs['questionImage'] as $key => $val) {
                        $result = $vipPaperImageModel->add([
                            'task_id' => $searchArgs['taskId'],
                            'image_url' => $val,
                            'image_type' => 3,
                            'is_delete' => 0,
                            'create_time' => time()
                        ]);
                        if ($result === false) {
                            throw new \Exception('上传试卷失败');
                        }
                    }
                } else {
                    foreach ($searchArgs['questionImage'] as $key => $val) {
                        $result = $vipPaperImageModel->add([
                            'task_id' => $searchArgs['taskId'],
                            'image_url' => $val,
                            'image_type' => 1,
                            'is_delete' => 0,
                            'create_time' => time()
                        ]);
                        if ($result === false) {
                            throw new \Exception('上传试卷失败');
                        }
                    }
                    foreach ($searchArgs['answerImage'] as $key => $val) {
                        $result = $vipPaperImageModel->add([
                            'task_id' => $searchArgs['taskId'],
                            'image_url' => $val,
                            'image_type' => 2,
                            'is_delete' => 0,
                            'create_time' => time()
                        ]);
                        if ($result === false) {
                            throw new \Exception('上传试卷失败');
                        }
                    }
                }
                $vipYoudaoExaminedModel = new VipYoudaoExamined();
                //修改任务审核状态
                $result = $vipYoudaoExaminedModel->edit(['image_examined_status' => 1], ['task_id' => $searchArgs['taskId']]);
                if ($result === false) {
                    throw new \Exception('上传试卷失败');
                }
                $vipPaperImageModel->commit();
                return response()->json(['status' => 200, 'errorMsg' => '上传试卷成功']);
            }else{
                throw new \Exception('请求方式不允许');
            }
        }catch (\Exception $e){
            $vipPaperImageModel->rollback();
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取试卷第一张照片
     * @param Request $request
     */
    public function getPaperFirstImage(Request $request)
    {
        try{
            $searchArgs['taskId']=$request->taskId;
            if(intval($searchArgs['taskId']) <= 0){
                throw new \Exception('缺少任务id');
            }
            //取出最后一条照片信息，照片第一张为最后一张，所以倒序排列取最后一条
            $vipPaperIamgeModel=new VipPaperImage();
            $info=$vipPaperIamgeModel->findOne(['task_id'=>$searchArgs['taskId']],['create_time','desc'],['image_url'])->first();
            //取一条任务信息
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $paperInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$searchArgs['taskId']])->first();
            return response()->json(['status'=>200,'data'=>[
                'taskId'=>$searchArgs['taskId'],
                'paperType'=>$paperInfo['paper_type'],
                'imageUrl'=>$info['image_url']
            ]]);
        }catch (\Exception $e){
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
            $list=$vipYoudaoExaminedModel->findAll($where,['id','desc'],["vip_youdao_examined.task_id,vip_youdao_examined.paper_name,vip_youdao_examined.upload_time,vip_youdao_examined.image_examined_status,vip_youdao_examined.image_error_type,vip_paper_image.image_url"],"",[],$searchArgs['page'],$searchArgs['pageSize']);
            foreach($list as $key => $val){
                $val['image_error_type']=!empty($val['image_error_type'])?explode(',',$val['image_error_type']):array();
                $list[$key]=$val;
            }
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
            return response()->json(['status'=>200,'count'=>$count]);
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
            return response()->json(['status'=>200,'count'=>$count]);
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
            $searchArgs['paperType']=$request->paperType;           //试卷类型
            if(intval($searchArgs['taskId']) <=0 )
            {
                throw new \Exception('缺少任务id');
            }
            if(intval($searchArgs['paperType']) <= 0)
            {
                throw new \Exception('缺少试卷类型');
            }
            $where=['task_id'=>$searchArgs['taskId'],'is_delete'=>0];
            //判断试卷类型，1混合式2分离式
            if($searchArgs['paperType'] == 1)
            {
                $where['image_type']=3;
            }else{
                $where['image_type']=['neq'=>3];
            }
            $vipPaperImageModel=new VipPaperImage();
            $list=$vipPaperImageModel->findAll($where,['create_time','desc'],['id','image_url','image_type']);
            return response()->json(['status'=>200,'data'=>$list]);
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
            return response(['status'=>200,'count'=>$residualUploadCount]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}
