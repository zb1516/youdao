<?php
namespace App\Http\Controllers\Label;

use App\Http\Controllers\BaseController;
use App\Models\Paper;
use App\Models\Question;
use App\Models\VipGetJudgeQuestion;
use App\Models\VpJudgeSourceQuestion;
use App\Models\VpLabelGet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TaskController extends BaseController
{
    /**
     * 获取剩余套卷
     * @param Request $request
     */
    public function getPaperQuestionCount(Request $request)
    {
        try{
            $searchArgs['subjectId']=abs($request->input('subjectId'));
            $searchArgs['questionCount']=abs($request->input('questionCount'));
            $searchArgs['paperCount']=abs($request->input('paperCount'));
            $searchArgs['userKey']=$this->userKey;
            $paperCount=0;
            $questionCount=0;
            //单题
            if($searchArgs['questionCount']>0)
            {
                $model=new Question();
                $questionCount=$model->getQuestionCount($searchArgs['subjectId'],$searchArgs['userKey']);
            }
            //套卷
            if($searchArgs['paperCount']>0)
            {
               $model=new Paper();
               $paperCount=$model->getPaperCount($searchArgs['subjectId'],$searchArgs['userKey']);
            }
            return response()->json([
                'status'=>1,
                'data'=>[
                    'paperCount'=>$paperCount>=$searchArgs['paperCount']?$searchArgs['paperCount']:$paperCount,
                    'questionCount'=>$questionCount>=$searchArgs['questionCount']?$searchArgs['questionCount']:$questionCount
                ]
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 添加领取任务
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addTask(Request $request){
        try{
            $searchArgs['subjectId']=abs($request->input('subjectId'));
            $searchArgs['subjectName']=$request->input('subjectName');
            $searchArgs['paperCount']=abs($request->input('paperCount'));       //套卷数
            $searchArgs['questionCount']=abs($request->input('questionCount')); //单题数
            $searchArgs['userKey']=$this->userKey;
            $model=new VpLabelGet();
            $model->addPaperQuestion($searchArgs);           //添加领取任务
            return response()->json(['status'=>1,'errorMsg'=>'领取成功']);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 获取可退回任务数
     * @param Request $request
     */
    public function getReturnCountByUserKey(Request $request)
    {
        try{
            $searchArgs['subjectId']=$request->input('subjectId');
            $searchArgs['userKey']=$this->userKey;
            $model=new VpLabelGet();
            $result=$model->getReturnCountByUserKey($searchArgs);
            return response()->json($result);
        }catch (\Exception $e){}
    }

    /**
     * 删除可退回任务
     * @param Request $request
     */
    public function removeTask(Request $request)
    {
        try{
            $searchArgs['subjectId']=$request->input('subjectId');
            $searchArgs['userKey']=$this->userKey;
            $searchArgs['taskCheck']=$request->input('taskCheck');
            $model=new VpLabelGet();
            $model->removePaperQuestion($searchArgs);
            return response()->json(['status'=>1,'errorMsg'=>'删除成功']);
        }catch (\Exception $e)
        {
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }

    /**
     * 待判定单题统计
     * @param Request $request
     */
    public function getJudgeQuestionCount(Request $request)
    {
        try{
            $searchArgs['subjectId']=$request->input('subjectId');
            $searchArgs['userKey']=$this->userKey;
            $vipGetJudgeQuestionModel=new VipGetJudgeQuestion();
            $vipGetJudgeQuestionList=$vipGetJudgeQuestionModel->findAll(['subject_id'=>$searchArgs['subjectId'],'is_return'=>0]);
            $judgeIds=[];
            foreach ($vipGetJudgeQuestionList as $key => $val){
                $judgeIds[]=$val['question_id'];
            }
            $model=new VpJudgeSourceQuestion();
            $questionCount=$model->getJudgeQuestionCountBySubjectId($searchArgs,$judgeIds);
            return response()->json([
                'status'=>1,
                'data'=>[
                    'questionCount'=>$questionCount
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
     * 添加待判定试题
     * @param Request $request
     */
    public function addJudgeQuestion(Request $request)
    {
        try{
            $searchArgs['subjectId']=$request->input('subjectId');
            $searchArgs['userKey']=$this->userKey;
            $searchArgs['questionCount']=$request->input('questionCount');
            $vipGetJudgeQuestionModel=new VipGetJudgeQuestion();
            $vipGetJudgeQuestionList=$vipGetJudgeQuestionModel->findAll(['subject_id'=>$searchArgs['subjectId'],'is_return'=>0]);
            $judgeIds=[];
            foreach ($vipGetJudgeQuestionList as $key => $val){
                $judgeIds[]=$val['question_id'];
            }
            $judgeSourceQuestionModel=new VpJudgeSourceQuestion();
            //获取领取数的试题列表
            $questionList=$judgeSourceQuestionModel->getJudgeQuestionBySubjectId($searchArgs,$judgeIds);
            $question=[];
            $data=[];
            $createTime=date('Y-m-d H:i:s');
            foreach($questionList as $key => $val)
            {
                $data['question_id']=$val['question_id'];
                $data['paper_id']=$val['paper_id'];
                $data['subject_id']=$val['subject_id'];
                $data['subject_name']=$val['subject_name'];
                $data['user_key']=$searchArgs['userKey'];
                $data['create_time']=$createTime;
                $data['is_finish']=0;
                $data['is_return']=0;
                $question[]=$data;
            }
            //添加待判定试题领取记录
            $getJudgeQuestionModel=new VipGetJudgeQuestion();
            $getJudgeQuestionModel->addGetJudgeQuestion($question);
            return response()->json([
                'status'=>1,
                'errorMsg'=>'判定人领取成功'
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

    /**
     * 统计判定人可退回任务
     * @param Request $request
     */
    public function getJudgeQuesReturnCount(Request $request)
    {
        try{
            $searchArgs['subjectId']=$request->input('subjectId');
            $searchArgs['userKey']=$this->userKey;
            $judgeQuestionModel=new VipGetJudgeQuestion();
            $questionCount=$judgeQuestionModel->getJudgeQuesReturnCount($searchArgs['subjectId'],$searchArgs['userKey']);
            return response()->json([
               'status'=>1,
               'data'=>[
                   'questionCount'=>$questionCount
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
     * 删除判定人领任务
     * @param Request $request
     */
    public function removeJudgeQuestion(Request $request)
    {
        try{
            $searchArgs['userKey']=$this->userKey;
            $searchArgs['subjectId']=abs($request->input('subjectId'));
            $judgeQuestionModel=new VipGetJudgeQuestion();
            $judgeQuestionModel->removeJudgeQuestion($searchArgs);
            return response()->json([
                'status'=>1,
                'errorMsg'=>'删除判定人任务成功'
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }

}