<?php

namespace App\Http\Controllers\WxProgram;

use App\Clients\KlibPaperClient;
use App\Clients\KlibQuestionClient;
use App\Models\Common;
use App\Models\VipMessageRemind;
use App\Models\VipMessageViewLog;
use App\Models\VipPaperImage;
use App\Models\VipYoudaoAgency;
use App\Models\VipYoudaoExamined;
use App\Services\UserService;
use App\Services\WxService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

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
                $searchArgs['token']=$request->input('token');       //小程序登陆以后生成的唯一标识
                $searchArgs['agencyId']=$request->input('agencyId');
                $searchArgs['agencyName']=$request->input('agencyName');
                $searchArgs['paperType']=$request->input('paperType');
                $searchArgs['blendQuestionImage']=$request->input('blendQuestionImage');
                $searchArgs['questionImage']=$request->input('questionImage');
                $searchArgs['answerImage']=$request->input('answerImage');
                $searchArgs['subjectId']=$request->input('subjectId');
                $searchArgs['subjectName']=$request->input('subjectName');
                $searchArgs['gradeId']=$request->input('gradeId');
                $searchArgs['gradeName']=$request->input('gradeName');
                $searchArgs['provId']=$request->input('provId');
                $searchArgs['provName']=$request->input('provName');
                $searchArgs['cityId']=$request->input('cityId');
                $searchArgs['cityName']=$request->input('cityName');
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
                    if(empty($searchArgs['blendQuestionImage']))
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
                //获取用户openid
                $openId=WxService::getOpenId($searchArgs['token']);
                $userInfo=UserService::getUserInfo($searchArgs['token']);
                $taskId=uuid();     //生成任务id
                $commonModel=new Common();
                $subjectName=$commonModel->stringTransformation($searchArgs['subjectName']);
                $result=$vipYoudaoExaminedModel->add([
                    'task_id'=>$taskId,
                    'open_id'=>$openId,
                    'create_uid'=>$userInfo['userId'],
                    'agency_id'=>$searchArgs['agencyId'],
                    'subject_id'=>$searchArgs['subjectId'],
                    'grade'=>$searchArgs['gradeId'],
                    'province'=>$searchArgs['provId'],
                    'city'=>!isset($searchArgs['cityId'])?0:$searchArgs['cityId'],
                    'paper_name'=> $searchArgs['agencyId'].'-'.'套卷VIP'.'-'.$subjectName.'-'.$searchArgs['provName'].'-'.$searchArgs['cityName'].'-'.$searchArgs['gradeName'],
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
                    $questionImage=explode(',',$searchArgs['blendQuestionImage']);
                    $questionImage=arrayReverse($questionImage);
                    foreach($questionImage as $key => $val)
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
                    $questionImage=explode(',',$searchArgs['questionImage']);
                    $questionImage=arrayReverse($questionImage);
                    foreach($questionImage as $key => $val)
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
                    $answerImage=explode(',',$searchArgs['answerImage']);
                    $answerImage=arrayReverse($answerImage);
                    foreach($answerImage as $key => $val)
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
                //如果提交成功，查询机构是否记录
                $vipYoudaoAgencyModel=new VipYoudaoAgency();
                $info=$vipYoudaoAgencyModel->findOne(['agency_id'=>$searchArgs['agencyId']]);
                if(!$info)
                {
                    $result=$vipYoudaoAgencyModel->add(['agency_id'=>$searchArgs['agencyId'],'agency_name'=>$searchArgs['agencyName'],'create_time'=>date('Y-m-d H:i:s')]);
                    if($result === false)
                    {
                        throw new \Exception('上传试卷失败');
                    }
                }
                $vipYoudaoExaminedModel->commit();
                return response()->json(['status'=>200,'data'=>[],'errorMsg'=>'上传试卷成功']);
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
                $searchArgs['token']=$request->input('token');
                $searchArgs['taskId'] = $request->input('taskId');
                $searchArgs['agencyId']=$request->input('agencyId');
                $searchArgs['paperType'] = $request->input('paperType');
                $searchArgs['blendQuestionImage']=$request->input('blendQuestionImage');
                $searchArgs['questionImage'] = $request->input('questionImage');
                $searchArgs['answerImage'] = $request->input('answerImage');
                $searchArgs['subjectId']=$request->input('subjectId');
                $searchArgs['subjectName']=$request->input('subjectName');
                $searchArgs['gradeId']=$request->input('gradeId');
                $searchArgs['gradeName']=$request->input('gradeName');
                $searchArgs['provId']=$request->input('provId');
                $searchArgs['provName']=$request->input('provName');
                $searchArgs['cityId']=$request->input('cityId');
                $searchArgs['cityName']=$request->input('cityName');
                if(intval($searchArgs['agencyId']) <= 0){
                    throw new \Exception('缺少机构id');
                }
                if (!isset($searchArgs['taskId']) || empty($searchArgs['taskId'])) {
                    throw new \Exception('缺少任务ID');
                }
                if (intval($searchArgs['paperType']) <= 0) {
                    throw new \Exception('缺少试卷类型');
                }
                if($searchArgs['paperType'] == 1){
                    if(empty($searchArgs['blendQuestionImage']))
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
                if(intval($searchArgs['subjectId']) <=0 ){
                    throw new \Exception('缺少科目id');
                }
                if(intval($searchArgs['gradeId']) <= 0)
                {
                    throw new \Exception('请选择年级');
                }
                if(intval($searchArgs['provId']) <= 0)
                {
                    throw new \Exception('请选择省份');
                }
                //判断是分离样式还是混合样式
                if ($searchArgs['paperType'] == 1) {
                    $questionImage=explode(',',$searchArgs['blendQuestionImage']);
                    $questionImage=arrayReverse($questionImage);
                    foreach ($questionImage as $key => $val) {
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
                    $questionImage=explode(',',$searchArgs['questionImage']);
                    $questionImage=arrayReverse($questionImage);
                    foreach ($questionImage as $key => $val) {
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
                    $answerImage=explode(',',$searchArgs['answerImage']);
                    $answerImage=arrayReverse($answerImage);
                    foreach ($answerImage as $key => $val) {
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
                //获取用户openid
                $openId=WxService::getOpenId($searchArgs['token']);
                $vipYoudaoExaminedModel = new VipYoudaoExamined();
                $commonModel=new Common();
                $subjectName=$commonModel->stringTransformation($searchArgs['subjectName']);
                //修改任务审核状态
                $result = $vipYoudaoExaminedModel->edit([
                    'image_examined_status' => 1,
                    'open_id'=>$openId,
                    'subject_id'=>$searchArgs['subjectId'],
                    'grade'=>$searchArgs['gradeId'],
                    'province'=>$searchArgs['provId'],
                    'city'=>!isset($searchArgs['cityId'])?0:$searchArgs['cityId'],
                    'paper_name'=>$searchArgs['agencyId'].'-'.'套卷VIP'.'-'.$subjectName.'-'.$searchArgs['provName'].'-'.$searchArgs['cityName'].'-'.$searchArgs['gradeName'],
                    'upload_time'=>date('Y-m-d H:i:s'),
                ], ['task_id' => $searchArgs['taskId']]);
                if ($result === false) {
                    throw new \Exception('上传试卷失败');
                }
                //批量设置用户已读消息
                self::setMessageViewLogBatch($searchArgs['token'],$searchArgs['taskId'],$openId);
                $vipPaperImageModel->commit();
                return response()->json(['status' => 200,'data'=>[], 'errorMsg' => '上传试卷成功']);
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
            $searchArgs['taskId']=$request->input('taskId');
            if(!isset($searchArgs['taskId']) || empty($searchArgs['taskId'])){
                throw new \Exception('缺少任务ID');
            }
            //取出最后一条照片信息，照片第一张为最后一张，所以倒序排列取最后一条
            $vipPaperIamgeModel=new VipPaperImage();
            $info=$vipPaperIamgeModel->findOne(['task_id'=>$searchArgs['taskId'],'image_type'=>['in'=>[1,3]]],['id'=>'desc'],['image_url']);
            //取一条任务信息
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $paperInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$searchArgs['taskId']]);
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
            $searchArgs['token']=$request->input('token');
            $searchArgs['page']=$request->input('page')>0?$request->input('page'):1;
            $searchArgs['pageSize']=$request->input('pageSize')>0?$request->input('pageSize'):20;
            //获取登陆用户uid
            $userInfo=UserService::getUserInfo($searchArgs['token']);
            //创建子查询sql语句
            $sql = ("(select id,task_id,paper_name,upload_time,image_examined_status,image_error_type,image_examined_time,(select image_url from (select *  from vip_paper_image order by vip_paper_image.id desc) as paperImage where  paperImage.task_id=vip_youdao_examined.task_id and (image_type=1 or image_type=3) group by task_id ) as image_url from vip_youdao_examined where vip_youdao_examined.create_uid=".$userInfo['userId']." order by vip_youdao_examined.upload_time desc ) cc");
            $list = DB::connection('mysql_kms')->table(DB::connection('mysql_kms')->raw($sql))->paginate($searchArgs['pageSize'],['*'],'page',$searchArgs['page'])->toArray();
            foreach($list['data'] as $key => $val){
                $val=(array)$val;
                $val['image_error_type']=!empty($val['image_error_type'])?explode(',',$val['image_error_type']):array();
                //判断是否是退回状态如果是退回状态，取审核时间，如果不是退回状态，取上传时间
                $val['upload_time']=intval($val['image_examined_status'])==3?$val['image_examined_time']:$val['upload_time'];
                $list['data'][$key]=$val;
            }
            $list['data']=key_sort($list['data'],SORT_DESC,'upload_time');
            foreach($list['data'] as $key => $val)
            {
                $val=(array)$val;
                $val['upload_time']=empty($val['upload_time'])?'':formatDate(strtotime($val['upload_time']));
                $list['data'][$key]=$val;
            }
            return response()->json(['status'=>200,'data'=>[
                'current_page'=>$list['current_page'],
                'per_page'=>$list['per_page'],
                'total'=>$list['total'],
                'rows'=>$list['data']
            ]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取试卷统计
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPaperCount(Request $request)
    {
        try{
            $searchArgs['token']=$request->input('token');
            //获取用户id
            $userInfo=UserService::getUserInfo($searchArgs['token']);
            $dayData=getthemonth(date('Y-m-d'));            //获取本月第一天和最后一天
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $condition=['agency_id'=>['eq' => $userInfo['agencyId']],'upload_time'=>['between' => [$dayData[0].' 00:00:00',$dayData[1].' 11:59:59']]];
            $paperMonthCount=$vipYoudaoExaminedModel->count($condition);
            $paperMonthCount=intval($paperMonthCount)>0?$paperMonthCount:0;
            //获取本月上传试卷数
            $useCount=$vipYoudaoExaminedModel->count($condition);
            $useCount=intval($useCount)>0?$useCount:0;           //本月已上传次数
            //获取上传额度，先从配置文件中获取上传额度
            $paperUploadTotalCount=config('app.AGENCY_UPLOAD_NUMBER');
            $paperSurplusCount=intval($paperUploadTotalCount-$useCount)>0?$paperUploadTotalCount-$useCount:0;       //计算剩余上传额
            $condition['paper_examined_status']=3;      //拼上已经入库条件
            //统计入库的有道套卷数
            $paperCount=$vipYoudaoExaminedModel->count($condition);
            return response()->json(['status'=>200,'data'=>[
                'paperMonthCount'=>$paperMonthCount,                //本月上传数
                'paperCount'=>$paperCount,                          //本月入库数
                'paperSurplusCount'=>$paperSurplusCount,            //上传剩余额度
                'paperUploadTotalCount'=>$paperUploadTotalCount     //上传总额度
            ]]);
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
            $searchArgs['taskId']=$request->input('taskId');               //任务id
            $searchArgs['token']=$request->input('token');                 //用户token
            if(!isset($searchArgs['taskId']) || empty($searchArgs['taskId']))
            {
                throw new \Exception('缺少任务ID');
            }
            //查询任务
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $exainedInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$searchArgs['taskId']],[],'paper_type');
            $vipPaperImageModel=new VipPaperImage();
            $imageInfo=$vipPaperImageModel->findOne(['task_id'=>$searchArgs['taskId']],['id'=>'desc']);
            $where=['task_id'=>$searchArgs['taskId'],'create_time'=>$imageInfo['create_time']];
            $list=$vipPaperImageModel->findAll($where,['id'=>'desc'],['id','image_url','image_type']);
            $result=['paper_type'=>$exainedInfo['paper_type']];
            foreach($list as $key => $val)
            {
                $val['url']=$val['image_url'];
                if(intval($val['image_type']) == 1){
                    $result['question_rows'][]=$val;
                }elseif(intval($val['image_type']) == 2){
                    $result['anster_rows'][]=$val;
                }else{
                    $result['rows'][]=$val;
                }
            }
            return response()->json(['status'=>200,'data'=>$result]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取试卷审核状态
     * @param Request $request
     */
    public function getPaperStatus(Request $request)
    {
        try{
            $searchArgs['taskId']=$request->input('taskId');
            if(!isset($searchArgs['taskId']) || empty($searchArgs['taskId']))
            {
                throw new \Exception('缺少任务ID');
            }
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $paperInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$searchArgs['taskId']]);
            return response()->json([
                'status'=>200,
                'data'=>[
                    'task_id'=>$searchArgs['taskId'],
                    'image_examined_status'=>$paperInfo['image_examined_status']
                ]
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 试卷详情
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPaperInfo(Request $request)
    {
        try{
            $searchArgs['taskId']=$request->input('taskId');
            $searchArgs['token']=$request->input('token');
            $searchArgs['isShare']=$request->input('isShare');
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $paperExaminedInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$searchArgs['taskId']]);
            dd($paperExaminedInfo);
            $paperInfo=KlibPaperClient::getPaperClient($paperExaminedInfo['paper_id']);
            $result = KlibQuestionClient::getQuestion($paperInfo['ques_ids']);
            $questions=[];
            foreach ($result as $key => $val)
            {
                $questions[$val['ques_id']]=$val;
            }
            foreach($paperInfo['module'] as $key => $val)
            {
                foreach($val['questions'] as $k => $v)
                {
                    $val['questions'][$k]['ques_score']=$v['ques_score'];
                    $val['questions'][$k]=$questions[$v['ques_id']];
                }
                $paperInfo['module'][$key]=$val;
            }
            return response()->json(['status'=>200,'data'=>$paperInfo]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取套卷审核信息
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPaperExaminedInfo(Request $request)
    {
        try{
            $searchArgs['taskId']=$request->input('taskId');
            if(!isset($searchArgs['taskId']) || empty($searchArgs['taskId']))
            {
                throw new \Exception('缺少任务ID');
            }
            //获取信息
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $paperInfo=$vipYoudaoExaminedModel->findOne(['task_id'=>$searchArgs['taskId']],[],['task_id','subject_id','grade','province','city','paper_type']);
            //获取所有照片
            $vipPpaerImageModel=new VipPaperImage();
            //判断试卷类型
            if($paperInfo['paper_type'] == 1)
            {
                //取出最新一条图片记录
                $imageInfo=$vipPpaerImageModel->findOne(['task_id'=>$searchArgs['taskId'],'image_type'=>3],['id'=>'desc']);
                $rows=$vipPpaerImageModel->findAll(['task_id'=>$searchArgs['taskId'],'image_type'=>3,'create_time'=>$imageInfo['create_time']],['id'=>'desc']);
                foreach ($rows as $key => $val)
                {
                    $rows[$key]['url']=$val['image_url'];
                }
                $paperInfo['rows']=!empty($rows)?$rows:[];
            }else{
                $imageInfo=$vipPpaerImageModel->findOne(['task_id'=>$searchArgs['taskId'],'image_type'=>1],['id'=>'desc']);
                $questionRows=$vipPpaerImageModel->findAll(['task_id'=>$searchArgs['taskId'],'image_type'=>1,'create_time'=>$imageInfo['create_time']],['id'=>'desc']);
                foreach ($questionRows as $key => $val)
                {
                    $questionRows[$key]['url']=$val['image_url'];
                }
                $paperInfo['question_rows']=!empty($questionRows)?$questionRows:[];
                $imageInfo=$vipPpaerImageModel->findOne(['task_id'=>$searchArgs['taskId'],'image_type'=>2],['id'=>'desc']);
                $ansterRows=$vipPpaerImageModel->findAll(['task_id'=>$searchArgs['taskId'],'image_type'=>2,'create_time'=>$imageInfo['create_time']],['id'=>'desc']);
                foreach ($ansterRows as $key => $val)
                {
                    $ansterRows[$key]['url']=$val['image_url'];
                }
                $paperInfo['answer_rows']=!empty($ansterRows)?$ansterRows:[];
            }
            return response()->json(['status'=>200,'data'=>['rows'=>$paperInfo]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 通过学科id取年级
     * @param Request $request
     */
    public function getGradeBySubject(Request $request)
    {
        try{
            $searchArgs['subjectName']=$request->input('subjectName');
            $searchArgs['token']=$request->input('token');
            $list=[];
            $gradeList=config('app.KMS_GRADE_LIST');
            //判断是否传了学科名称
            if(isset($searchArgs['subjectName']) || !empty($searchArgs['subjectName']))
            {
                $gradeName=mb_substr($searchArgs['subjectName'],0,2);
                $list=$gradeList[$gradeName];
            }else{
                foreach($gradeList as $key => $val)
                {
                    foreach($val as $k => $v)
                    {
                        $list[]=$v;
                    }
                }
            }
            return response()->json(['status'=>200,'data'=>['rows'=>$list]]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 设置用户未读消息为已读消息
     * @param $token
     * @param $openId
     * @throws \Exception
     */
    protected static function setMessageViewLogBatch($token='',$taskId=0,$openId=0)
    {
        try{
            //获取用户信息
            $userInfo=UserService::getUserInfo($token);
            //查询所有用户已读消息记录
            $vipMessageViewLogModel=new VipMessageViewLog();
            $messageViewList=$vipMessageViewLogModel->findAll(['uid'=>$userInfo['userId']]);
            $messageReadIds=[];
            foreach($messageViewList as $key => $val)
            {
                $messageReadIds[]=$val['message_id'];
            }
            //如果上传成功，更新未读消息为已读消息
            $vipMessageRemindModel=new VipMessageRemind();
            $list=$vipMessageRemindModel->findAll(['uid'=>$userInfo['userId'],'task_id'=>$taskId,'id'=>['not in'=>$messageReadIds]]);
            foreach($list as $key => $val)
            {
                $result=$vipMessageViewLogModel->add([
                    'uid'=>$userInfo['userId'],
                    'open_id'=>$openId,
                    'message_id'=>$val['id'],
                    'addtime'=>time()
                ]);
                if($result === false)
                {
                    throw new \Exception('设置已读消息失败');
                }
            }
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
    }
}
