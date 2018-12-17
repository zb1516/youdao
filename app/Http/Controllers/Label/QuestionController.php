<?php

namespace App\Http\Controllers\Label;

use App\Clients\KlibQuestionClient;
use App\Clients\QuestionClient;
use App\Http\Controllers\BaseController;
use App\Models\Common;
use App\Models\Paper;
use App\Models\Question;
use App\Models\User;
use App\Models\VipLabelTagContent;
use App\Models\VipGetJudgeQuestion;
use App\Models\VipRemindTag;
use App\Models\VpJudgeSourceQuestion;
use App\Models\VpLabelGet;
use App\Models\VpTagTestErrorCorrection;
use App\Models\VpTeacherLabelTag;
use Illuminate\Http\Request;

class QuestionController extends BaseController
{
    /**
     * 获取套卷列表
     * @param Request $request
     */
    public function getPaperList(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            $searchArgs['is_finish']=$request->input('is_finish');
            $searchArgs['subjectId']=abs($request->input('subjectId'));
            $searchArgs['currentPage']=$request->input('currentPage');
            $searchArgs['pageSize']=$request->input('pageSize');
            $model=new VpLabelGet();
            $result=$model->getLabelPaperList($searchArgs);
            return response()->json([
                'status'=>1,
                'data'=>empty($result)?array():$result
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取套卷信息
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPaper(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            $model=new VpLabelGet();
            $result=$model->getPaperByUserKey($searchArgs['userKey']);
            return response()->json([
                'status'=>1,
                'data'=>empty($result)?array():$result
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取单题信息
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getQuestion(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            $model=new VpLabelGet();
            $result=$model->getQuestionByUserKey($searchArgs['userKey']);
            return response()->json([
                'status'=>1,
                'data'=>empty($result)?array():$result
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }


    /**
     * 统计套卷
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPaperCount(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            $model=new VpLabelGet();
            $result=$model->getPaperCountByUserKey($searchArgs['userKey']);
            return response()->json([
                'status'=>1,
                'data'=>$result
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 统计试题
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getQuestionCount(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            $model=new VpLabelGet();
            $result=$model->getQuestionCountByUserKey($searchArgs['userKey']);
            return response()->json([
               'status'=>1,
               'data'=>$result
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取套卷试题详情
     * @param Request $request
     */
    public function getPaperQuestionList(Request $request)
    {
        try{
            $searchArgs['paperId']=abs($request->input('paperId'));
            $searchArgs['userKey']=$this->userKey;
            if($searchArgs['paperId'] <= 0)
            {
                throw new \Exception('缺少套卷id');
            }
            $paperModel=new Paper();
            $paperInfo=$paperModel->findOne(['id'=>$searchArgs['paperId']]);
            $model=new Question();
            $list=$model->getQuestionByPaperId($searchArgs['paperId']);
            //格式化试题
            //判断如果试题不为空
            if($list)
            {
                $questionIds=[];
                foreach($list as $key => $val)
                {
                    $questionIds[]=$val['id'];
                }
                //格式化试题
                $list=KlibQuestionClient::getQuestion($questionIds);            //格式化试题
                $labelContentModel=new VipLabelTagContent();
                foreach($list as $key => $val)
                {
                    $labelContent=$labelContentModel->getTeacherLabelContent($val['ques_id'],$searchArgs['userKey'],'teacher');
                    $val['label']=empty($labelContent)?array():$labelContent;
                    $list[$key]=$val;
                }
            }
            return response()->json([
                'status'=>1,
                'data'=>[
                    'paperName'=>$paperInfo['file_name'],
                    'list'=>$list
                ]
            ]);
        }catch (\Exception $e)
        {
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 试题纠错
     * @param Request $request
     */
    public function questionErrorReport(Request $request)
    {
        try{
            $searchArgs['questionId']=abs($request->input('questionId'));
            $searchArgs['errorType']=$request->input('errorType');
            $searchArgs['errorDesc']=$request->input('errorDesc');
            $searchArgs['agencyId']=abs($request->input('agencyId'));
            $searchArgs['agencyName']=$request->input('agencyName');
            $searchArgs['userName']=$request->input('userName');
            $searchArgs['userRealname']=$request->input('userRealname');
            if($searchArgs['agencyId'] <= 0)
            {
                throw new \Exception('缺少机构id');
            }
            if(empty($searchArgs['errorType']))
            {
                throw new \Exception('请选择错误类型');
            }
            $searchArgs['errorType']=implode(',',$searchArgs['errorType']);
            $questionModel=new Question();
            $questionInfo=$questionModel->getQuestionInfoById($searchArgs['questionId']);
            $commonModel=new Common();
            $allSubjectNames = $commonModel->getAllSubjectNames();              //获取学科id => 学科名
            $searchArgs['subjectName']=$allSubjectNames[$questionInfo['subject_id']];
            $model=new VpTagTestErrorCorrection();
            $model->addTagError($searchArgs);
            return response()->json([
               'status'=>1,
               'errorMsg'=>'保存成功'
            ]);
        }catch (\Exception $e)
        {
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 获取试题信息
     * @param Request $request
     */
    public function getQuestionInfo(Request $request)
    {
        try{
            $searchArgs['subjectId']=abs($request->input('subjectId'));
            $searchArgs['userKey']=$this->userKey;
            if(empty($searchArgs['userKey'])){
                throw new \Exception('缺少用户userkey');
            }
            $model=new VpLabelGet();
            $info=$model->getLabelQuestionInfo($searchArgs);
            if($info)
            {
                $info=KlibQuestionClient::getQuestion($info['task_id']);            //格式化试题
            }
            return response()->json([
                'status'=>1,
                'data'=>empty($info)?array():$info
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 跳过试题
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function jumpQuestion(Request $request)
    {
        try{
            $searchArgs['subjectId']=$request->input('subjectId');
            $searchArgs['userKey']=$this->userKey;
            $searchArgs['questionId']=abs($request->input('questionId'));
            //查询试题
            $model=new VpLabelGet();
            $info=$model->getJumpLabelQuestionInfo($searchArgs);
            if($info)
            {
                $info=KlibQuestionClient::getQuestion($info['task_id']);            //格式化试题
            }
            return response()->json([
                'status'=>1,
                'data'=>$info
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 贴标签
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function questionSave(Request $request)
    {
        try{
            $searchArgs['questionId']=abs($request->input('questionId'));
            $searchArgs['paperId']=abs($request->input('paperId'));
            $searchArgs['subjectId']=abs($request->input('subjectId'));
            $searchArgs['userKey']=$this->userKey;
            $searchArgs['userType']=$request->input('userType');
            $searchArgs['knowledgeId']=abs($request->input('knowledgeId'));
            $searchArgs['gradeId']=abs($request->input('gradeId'));
            $searchArgs['difficultyId']=abs($request->input('difficultyId'));
            $searchArgs['typeId']=abs($request->input('typeId'));
            $searchArgs['questionTypeId']=abs($request->input('questionTypeId'));
            $searchArgs['questionCategoryId']=abs($request->input('questionCategoryId'));
            $searchArgs['knowledgeName']=$request->input('knowledgeName');
            $searchArgs['gradeName']=$request->input('gradeName');
            $searchArgs['difficultyName']=$request->input('difficultyName');
            $searchArgs['type']=$request->input('type');
            $searchArgs['questionTypeName']=$request->input('questionTypeName');
            $searchArgs['questionCategoryName']=$request->input('questionCategoryName');
            $searchArgs['questionType']=$request->input('questionType');
            $model=new VpTeacherLabelTag();
            $model->addTeacherLabel($searchArgs);
            $labelContentModel=new VipLabelTagContent();
            $labelContent=$labelContentModel->getTeacherLabelContent($searchArgs['questionId'],$searchArgs['userKey'],$searchArgs['userType']);
            return response()->json([
               'status'=>1,
               'data'=>$labelContent
            ]);
        }catch (\Exception $e)
        {
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 教师贴标签
     * @param Request $request
     */
    public function getTeacherLabelContent(Request $request)
    {
        try{
            $searchArgs['questionId']=$request->input('questionId');
            $searchArgs['userKey']=$this->userKey;
            //判断多少人贴过标签
            $teacherLabelModel=new VpTeacherLabelTag();
            $count=$teacherLabelModel->getTeacherLabelCountByQuesId($searchArgs['questionId']);
            if($count >= 2)
            {
                throw new \Exception('这道试题已经有两位教师贴过标签了');
            }
            $labelContentModel=new VipLabelTagContent();
            $labelContent=$labelContentModel->getTeacherLabelContent($searchArgs['questionId'],$searchArgs['userKey'],'teacher');
            if($labelContent)
            {
                throw new \Exception('该试题已贴标签，请选择其他试题');
            }
            return response()->json([
                'status'=>1
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }


    /**
     * 获取判定人领取试题
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getJudgeQuestion(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            //查询领取表
            $model=new VipGetJudgeQuestion();
            $result=$model->getJudgeQuestionByUserKey($searchArgs['userKey']);
            return response()->json([
                'status'=>1,
                'data'=>empty($result)?array():$result
            ]);
        }catch (\Exception $e)
        {
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 获取待判定试题信息
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getJudgeQuestionInfo(Request $request)
    {
        try{
            $searchArgs['subjectId']=$request->input('subjectId');
            $searchArgs['userKey']=$this->userKey;
            $model=new VipGetJudgeQuestion();
            $info=$model->getJudgeQuestion($searchArgs);
            if($info)
            {
                //格式化试题
                $info=KlibQuestionClient::getQuestion($info['question_id']);            //格式化试题
                $info['labelData']=self::getTeacherContentByQuesId($info['ques_id']);     //获取教师贴标签内容
            }
            return response()->json([
                'status'=>1,
                'data'=>empty($info)?array():$info
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }


    /**
     * 搜索待判定试题
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getJudgeQuestionSearch(Request $request)
    {
        try{
            $searchArgs['questionId']=$request->input('questionId');
            $searchArgs['userKey']=$this->userKey;
            $model=new VipGetJudgeQuestion();
            $info=$model->getJudgeQuestion($searchArgs);
            if($info)
            {
                //格式化试题
                $info=KlibQuestionClient::getQuestion($info['question_id']);            //格式化试题
                $info['labelData']=self::getTeacherContentByQuesId($info['ques_id']);     //获取教师贴标签内容
            }
            return response()->json([
                'status'=>1,
                'data'=>empty($info)?array():$info
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }


    /**
     * 统计判定人领取试题
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getJudgeQuestionCount(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            $model=new VipGetJudgeQuestion();
            $result=$model->getJudgeQuesCountByUserKey($searchArgs['userKey']);
            return response()->json([
                'status'=>1,
                'data'=>$result
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }


    /**
     * 跳过试题
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function jumpJudgeQuestion(Request $request)
    {
        try{
            $searchArgs['subjectId']=$request->input('subjectId');
            $searchArgs['userKey']=$this->userKey;
            $searchArgs['questionId']=abs($request->input('questionId'));
            //查询判定人试题
            $model=new VipGetJudgeQuestion();
            $info=$model->getJumpJudgeQuestion($searchArgs);
            if($info)
            {
                $info=KlibQuestionClient::getQuestion($info['question_id']);            //格式化试题
                $info['labelData']=self::getTeacherContentByQuesId($info['ques_id']);     //获取教师贴标签内容
            }
            return response()->json([
                'status'=>1,
                'data'=>$info
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 获取判定人贴标签内容
     * @param $questionId
     */
    protected static function getTeacherContentByQuesId($questionId){
        $labelArr=[];
        //获取该试题下教师贴标签内容
        $labelContentModel=new VipLabelTagContent();
        $labelContent=$labelContentModel->questionTagContent(['question_id'=>$questionId,'user_type'=>'teacher','is_remove'=>0]);
        if($labelContent){
            $userModel=new User();
            foreach($labelContent as $key => $val)
            {
                $userInfo=$userModel->getUserInfo($key);
                $labelArr[$key]['user_realname']=$userInfo['user_realname'];
                $labelArr[$key]['tag_content']=$val['tag_content'];
            }
        }
        return $labelArr;
    }

    /**
     * 完成贴套卷标签
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function questionFinish(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            $searchArgs['paperId']=$request->input('paperId');
            $vpLabelGetModel=new VpLabelGet();
            $vpLabelGetModel->updateLabelFinish($searchArgs);
            return response()->json([
                'status'=>1
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 判断套卷是否完成
     * @param Request $request
     * @throws \Exception
     */
    public function paperIsFinish(Request $request){
        try{
            $searchArgs['paperId']=abs($request->input('paperId'));
            $searchArgs['userKey']=$this->userKey;
            $condition=[
                'task_id'=>$searchArgs['paperId'],
                'user_key'=>$searchArgs['userKey']
            ];
            $vpLabelGetModel=new VpLabelGet();
            //查询套卷是否已经完成
            $labelGetInfo=$vpLabelGetModel->findOne($condition);
            if($labelGetInfo['is_finish'] > 0)
            {
                throw new \Exception('该试卷贴标签任务已完成');
            }
            return response()->json([
                'status'=>1
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }

    }

    /**
     * 添加
     * @param Request $request
     * @return bool|\Illuminate\Http\JsonResponse
     */
    public function addRemind(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            $data = array(
                'user_key'=>$searchArgs['userKey'],
                'remind_time'=>date('Y-m-d H:i:s')
            );
            $vipRemindTagModel=new VipRemindTag();
            $result=$vipRemindTagModel->add($data);
            if($result === false){
                return response()->json(['status'=>0]);
            }else{
                return response()->json(['status'=>1]);
            }
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 验证用户是否使用过贴标签功能
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkIsRemind(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            $model=new VipRemindTag();
            $result=$model->checkIsRemind($searchArgs['userKey']);
            if($result){
                return response()->json(['status'=>1]);
            }else{
                return response()->json(['status'=>0]);
            }
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }
}
