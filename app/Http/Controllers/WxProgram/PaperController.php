<?php

namespace App\Http\Controllers\WxProgram;

use App\Clients\KlibTeacherClient;
use App\Models\VipPaperImage;
use App\Models\VipYoudaoAgency;
use App\Models\VipYoudaoExamined;
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
                $searchArgs['userToken']=$request->header('userToken');
                $searchArgs['token']=$request->header('token');       //小程序登陆以后生成的唯一标识
                $searchArgs['agencyId']=$request->input('agencyId');
                $searchArgs['agencyName']=$request->input('agencyName');
                $searchArgs['paperType']=$request->input('paperType');
                $searchArgs['questionImage']=$request->input('questionImage');
                $searchArgs['answerImage']=$request->input('answerImage');
                $searchArgs['subjectId']=$request->input('subjectId');
                $searchArgs['gradeId']=$request->input('gradeId');
                $searchArgs['provId']=$request->input('provId');
                $searchArgs['cityId']=$request->input('cityId');
                if(!isset($searchArgs['userToken']) <= 0){
                    throw new \Exception('缺少登陆用户token');
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
                if(!isset($searchArgs['token']))
                {
                    throw new \Exception('缺少微信用户token');
                }
                //获取用户openid
                $openId=111;//WxService::getOpenId($searchArgs['token']);
                //获取登陆用户uid
                $userInfo=KlibTeacherClient::getAuthInfo($searchArgs['userToken']);
                $taskId=uuid();     //生成任务id
                $result=$vipYoudaoExaminedModel->add([
                    'task_id'=>$taskId,
                    'open_id'=>$openId,
                    'create_uid'=>$userInfo['userId'],
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
                    $questionImage=explode(',',$searchArgs['questionImage']);
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
                $searchArgs['taskId'] = $request->input('taskId');
                $searchArgs['paperType'] = $request->input('paperType');
                $searchArgs['questionImage'] = $request->input('questionImage');
                $searchArgs['answerImage'] = $request->input('answerImage');
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
                    $questionImage=explode(',',$searchArgs['questionImage']);
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
            $searchArgs['taskId']=$request->input('taskId');
            if(empty($searchArgs['taskId'])){
                throw new \Exception('缺少任务id');
            }
            //取出最后一条照片信息，照片第一张为最后一张，所以倒序排列取最后一条
            $vipPaperIamgeModel=new VipPaperImage();
            $info=$vipPaperIamgeModel->findOne(['task_id'=>$searchArgs['taskId']],['create_time'=>'desc'],['image_url'])->first();
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
            $searchArgs['token']=$request->header('token');
            $searchArgs['userToken']=$request->header('userToken');
            $searchArgs['page']=$request->input('page')>0?$request->input('page'):1;
            $searchArgs['pageSize']=$request->input('pageSize');
            if(!isset($searchArgs['userToken']))
            {
                throw new \Exception('缺少登陆用户token');
            }
            if(!isset($searchArgs['token']))
            {
                throw new \Exception('缺少微信用户token');
            }
            //获取登陆用户uid
            $userInfo=KlibTeacherClient::getAuthInfo($searchArgs['userToken']);
            //获取用户openId;
            $openId=1111;  //WxService::getOpenId($searchArgs['token']);
            //创建子查询sql语句
            $sql = ("(select *,(select image_url  from vip_paper_image where is_delete = 0 and vip_paper_image.task_id=vip_youdao_examined.task_id group by task_id order by create_time asc) as image_url from vip_youdao_examined where create_uid=".$userInfo['userId']." open_id='".$openId."'  order by id desc ) cc");
            $list = DB::connection('mysql_kms')->table(DB::connection('mysql_kms')->raw($sql))->paginate($searchArgs['pageSize'],['*'],'',$searchArgs['page']);
            foreach($list as $key => $val){
                $val->image_error_type=!empty($val->image_error_type)?explode(',',$val->image_error_type):array();
                $list[$key]=(array)$val;
            }
            return response()->json(['status'=>200,'data'=>$list]);
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
            $searchArgs['userToken']=$request->header('userToken');
            $searchArgs['agencyId']=1;//$request->input('agencyId');
            if(!isset($searchArgs['userToken'])){
                throw new \Exception('缺少登陆用户token');
            }
            if(intval($searchArgs['agencyId']) <= 0){
                throw new \Exception('缺少机构id');
            }
            //获取用户id
            $userInfo=KlibTeacherClient::getAuthInfo($searchArgs['userToken']);
            $dayData=getthemonth(date('Y-m-d'));            //获取本月第一天和最后一天
            $vipYoudaoExaminedModel=new VipYoudaoExamined();
            $paperMonthCount=$vipYoudaoExaminedModel->count(['upload_time'=>['egt'=>$dayData[0].' 00:00:00'],'upload_time'=>['elt'=>$dayData[1].' 11:59:59']]);
            $paperMonthCount=intval($paperMonthCount)>0?$paperMonthCount:0;
            //统计入库的有道套卷数
            $paperCount=$vipYoudaoExaminedModel->count(['create_uid'=>$userInfo['userId'],'paper_examined_status'=>3]);
            //获取本月上传试卷数
            $useCount=$vipYoudaoExaminedModel->count(['agency_id'=>$searchArgs['agencyId'],'upload_time'=>['egt'=>$dayData[0].' 00:00:00'],'upload_time'=>['elt'=>$dayData[1].' 11:59:59']]);
            $useCount=intval($useCount)>0?$useCount:0;           //本月已上传次数
            //获取上传额度，先从配置文件中获取上传额度
            $paperUploadTotalCount=config('app.AGENCY_UPLOAD_NUMBER');
            $paperSurplusCount=intval($paperUploadTotalCount-$useCount)>0?$paperUploadTotalCount-$useCount:0;       //计算剩余上传额
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
            $searchArgs['taskId']=$request->input('taskId');                 //任务id
            $searchArgs['paperType']=$request->input('paperType');           //试卷类型
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
            $list=$vipPaperImageModel->findAll($where,['create_time'=>'desc'],['id','image_url','image_type']);
            return response()->json(['status'=>200,'data'=>$list]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}