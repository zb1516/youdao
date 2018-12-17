<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/23
 * Time: 10:04
 */

namespace App\Http\Controllers\Label;

use App\Http\Controllers\BaseController;
use App\Models\Question;
use Illuminate\Http\Request;
use App\Models\Paper;
use App\Models\Tail;
use App\Models\SysRoles;
use App\Models\SysUsers;
use App\Libs\Export;
use App\Models\VipGetJudgeQuestion;
use App\Models\VpLabelGet;
use swoole_client;

class ManageController extends BaseController
{
    public function __construct()
    {
        $this->paper = new Paper;
        $this->question = new Question;
        $this->tail = new Tail;
        $this->sysRoles = new SysRoles;
        $this->sysUsers = new SysUsers;
        $this->vipGetJudgeQuestion = new VipGetJudgeQuestion;
        $this->vpLabelGet = new VpLabelGet;
    }
    /**
     * 试卷列表
     */
    public function paper(Request $request)
    {
        try {
            $currentPage = abs($request->get('currentPage', 1));
            $pageSize = abs($request->get('pageSize', 15));
            $searchArgs = $this->paper->paperSearchArgs($_GET);
            $result = $this->paper->getPaperList($searchArgs, $currentPage, $pageSize);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 套卷详情查询
     */
    public function paperDetailAjaxSearch (Request $request)
    {
        try {
            $paperId = abs ($request->get ('paperId', 0));
            //$paperName = abs ($request->get ('paperName', ''));
            if (false == $paperId) {
                throw new \Exception('试卷Id不能为空');
            }
            $result = $this->paper->getPaperDetail ($paperId);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }

    /**
     * 试卷领取信息
     */
    public function getPaperInfo(Request $request)
    {
        try {
            $paperId = abs($request->get('paperId', 0));
            if (false == $paperId) {
                throw new \Exception('试卷id不能为空');
            }
            $result = $this->paper->getPaperInfo($paperId);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }


    }
    /**
     * 试题列表
     */
    public function question(Request $request)
    {
        try {
            $currentPage = abs($request->get('currentPage', 1));
            $pageSize = abs($request->get('pageSize', 15));
            $searchArgs = $this->question->questionSearchArgs($_GET);
            $result = $this->question->getQuestionList($searchArgs, $currentPage, $pageSize);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }

    }
    /**
     * 试题领取信息
     */
    public function getQuestionInfo(Request $request)
    {
        try {
            $questionId = abs($request->get('questionId', 0));
            if (false == $questionId) {
                throw new \Exception('试题id不能为空');
            }
            $result = $this->question->getQuestionInfo($questionId);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }


    }
    /**
     * 试题详情查询
     */
    public function questionDetailAjaxSearch(Request $request)
    {
        try {
            $questionId = abs($request->get('questionId', 0));
            if (false == $questionId) {
                throw new \Exception('试题Id不能为空');
            }
            $result = $this->question->getQuestionDetail($questionId);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 不合格跟踪题目列表
     */
    public function tail (Request $request)
    {
        try {
            $currentPage = abs($request->get('currentPage', 1));
            $pageSize = abs($request->get('pageSize', 15));
            $searchArgs = $this->tail->tailSearchArgs($_GET);
            $result = $this->tail->getTailList($searchArgs, $currentPage, $pageSize);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 不合格跟踪题目详情
     */
    public function getTailInfo(Request $request)
    {
        try {
            $questionId = abs($request->get('questionId', 0));
            if (false == $questionId) {
                throw new \Exception('试题id不能为空');
            }
            $result = $this->tail->getTailInfo($questionId);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 判定人工作量统计查询
     */
    public function judgeWork (Request $request)
    {
        try {
            $currentPage = abs ($request->get ('currentPage', 1));
            $pageSize = abs ($request->get ('pageSize', 15));
            $judgeLabelling = config('app.JUDGE_LABELLING');
            $roleId = $this->sysRoles->getRoleId ($judgeLabelling);
            $_GET['judgeLabelling'] = $roleId;
            $searchArgs = $this->sysUsers->judgeSearchArgs ($_GET);
            $result = $this->sysUsers->getJudgeWorkList ($searchArgs, $currentPage, $pageSize);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 判定人工作量统计导出
     */
    public function judgeExport ()
    {
        try {
            $data = [];
            $judgeLabelling = config('app.JUDGE_LABELLING');
            $roleId = $this->sysRoles->getRoleId ($judgeLabelling);
            $_GET['judgeLabelling'] = $roleId;
            $searchArgs = $this->sysUsers->judgeSearchArgs ($_GET);
            $result = $this->sysUsers->getJudgeExport ($searchArgs);
            if ($result) {
                foreach ($result as $key => $one) {
                    $data[$key]['id'] = $one['id'];
                    $data[$key]['userRealname'] = $one['userRealname'];
                    $data[$key]['judgeNum'] = $one['judgeNum'];
                    $data[$key]['surplusNum'] = $one['surplusNum'];
                }
            }
            $headerArr = [
                '教师ID/工号',
                '教师',
                '判定人已贴题目总数',
                '当前剩余任务数',
            ];
            Export::export ('判定人工作统计表', $headerArr, $data);
//            $client = new swoole_client(SWOOLE_SOCK_TCP);
//            $client->connect("172.16.12.117",12345);
//            $newData["fileName"] = "判定人工作统计表";
//            $newData["headerArr"] = $headerArr;
//            $newData["data"] = $data;
//            $newResult = [
//                "className" => "Export",
//                "method" => "test",
//                "params" => $newData,
//            ];
//            $client->send(json_encode($newResult));
//            return $client->recv();
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 教师工作量统计查询
     */
    public function teacherWork (Request $request)
    {
        try {
            $currentPage = abs ($request->get ('currentPage', 1));
            $pageSize = abs ($request->get ('pageSize', 70));
            $teacherLabelling = config('app.TEACHER_LABELLING');
            $roleId = $this->sysRoles->getRoleId ($teacherLabelling);
            $_GET['teacherLabelling'] = $roleId;
            $searchArgs = $this->sysUsers->teacherSearchArgs ($_GET);
            $result = $this->sysUsers->getTeacherWorkList ($searchArgs, $currentPage, $pageSize);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 教师工作量统计导出
     */
    public function teacherExport ()
    {
        try {
            $data = [];
            $teacherLabelling = config('app.TEACHER_LABELLING');
            $roleId = $this->sysRoles->getRoleId ($teacherLabelling);
            $_GET['teacherLabelling'] = $roleId;
            $searchArgs = $this->sysUsers->teacherSearchArgs ($_GET);
            $result = $this->sysUsers->getTeacherExport ($searchArgs);
            if ($result) {
                foreach ($result as $key => $one) {
                    $data[$key]['id'] = $one['id'];
                    $data[$key]['userRealname'] = $one['userRealname'];
                    $data[$key]['teacherNum'] = $one['teacherNum'];
                    $data[$key]['surplusNum'] = $one['surplusNum'];
                    $data[$key]['ratePassing'] = $one['passNum'].'/'.$one['twoTagNum'].'   '.$one['ratePassing'];
                }
            }
            $headerArr = [
                '教师ID/工号',
                '教师',
                '教师已贴题目总数',
                '当前剩余任务数',
                '通过率',
            ];
            Export::export ('教师工作统计表', $headerArr, $data);

        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 任务管理
     */
    public function taskPaper(Request $request)
    {
        try {
            $currentPage = abs($request->get('currentPage', 1));
            $pageSize = abs($request->get('pageSize', 15));
            $searchArgs = $this->paper->paperSearchArgs($_GET);
            $result = $this->paper->getTaskPaperList($searchArgs, $currentPage, $pageSize);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 任务排序
     */
    public function taskSort(Request $request)
    {
        try {
            $paperIds = $request->post('paperIds', []);
            if (empty($paperIds)) {
                throw new \Exception('请先选择要排序的套卷');
            }
            $sortValue = abs($request->post('sortValue', 3));
            $searchArgs['paperIds'] = $paperIds;
            $searchArgs['sortValue'] = $sortValue;
            $result = $this->paper->getTaskSort($searchArgs);
            return response()->json($result);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 导出token
     */
    public function getTokenRedis(Request $request)
    {
        $key = abs($request->get('key', 0));
        $redis = new \Redis();
        $redis->connect("redis-server",6379);
        $token = $redis->get($key);
        return response()->json(['token' => $token]);
    }

    /**
     * 判定人清空任务
     */
    public function judgeEmptyingTask(Request $request)
    {
        try {
            $userKey = $request->post('judgeUserKey', 0);
            if (empty($userKey)) {
                throw new \Exception('userKey不能为空');
            }
            $result = $this->vipGetJudgeQuestion->judgeEmptyingTask($userKey);
            return response()->json(['result' => $result]);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }
    /**
     * 教师清空任务
     */
    public function teacherEmptyingTask(Request $request)
    {
        try {
            $userKey = $request->post('teacherUserKey', 0);
            if (empty($userKey)) {
                throw new \Exception('userKey不能为空');
            }
            $result = $this->vpLabelGet->teacherEmptyingTask($userKey);
            return response()->json(['result' => $result]);
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }
    }




}