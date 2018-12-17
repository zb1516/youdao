<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/9/5
 * Time: 9:58
 */

namespace App\Models;

class Tail extends Model
{

    protected $connection = 'mysql_kms';
    protected $table = "vip_judge_source_question";
    public $timestamps = false;

    /**
     * 转换不合格题目跟踪查询参数
     * @param $formData array
     * @return array
     */
    public function tailSearchArgs($formData)
    {
        $searchArgs = [];
        if (isset($formData['beginDate'])) {
            $searchArgs['beginDate'] = $formData['beginDate'];
        }
        if (isset($formData['endDate'])) {
            $searchArgs['endDate'] = $formData['endDate'];
        }
        if (isset($formData['subjectId'])) {
            $searchArgs['subjectId'] = $formData['subjectId'];
        }
        if (isset($formData['type'])) {
            $searchArgs['type'] = $formData['type'];
        }
        if (isset($formData['isLabel'])) {
            $searchArgs['isLabel'] = $formData['isLabel'];
        }
        return $searchArgs;
    }

    /**
     * 不合格跟踪题目列表（试题管理）
     */
    public function getTailList($searchArgs, $currentPage = 1, $pageSize = 15)
    {
        $judgeType = config('app.JUDGE_TYPE_VALUE');
        if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['create_time'] = array('lt' =>  $searchArgs['endDate'].' 23:59:59');
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['create_time'] = array('gt' =>  $searchArgs['beginDate'].' 00:00:01');
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['create_time'] = array('between' => array( $searchArgs['beginDate'].' 00:00:01', $searchArgs['endDate'].' 23:59:59'));
        }
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['type'])) {
            $type = isset($judgeType[$searchArgs['type']]) ? $judgeType[$searchArgs['type']] : '';
            $condition['judge_type'] = array('eq' => $type);
        }
        if ($searchArgs['isLabel'] !== '') {
            $condition['is_label'] = array('eq' => $searchArgs['isLabel']);
        }
        $condition['is_pass'] = array('eq' => 0);
        $condition['is_remove'] = array('eq' => 0);
        if (empty($condition)) {
            $condition = [];
        }
        $recordCount = $this->findAll($condition, [], ['id'], $group = ['question_id']);
        $recordCount = count($recordCount);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $result = $this->findAll($condition, ['create_time' => 'desc'], ['paper_id', 'question_id', 'subject_name', 'paper_name', 'is_label'], $group = ['question_id'], $join = [], $page = $currentPage, $pageSize = $pageSize);
        $list = [];
        foreach ($result as $k => $item) {
            $list[] = [
                'paperId' => $item['paper_id'] ?: '',
                'paperName' => $item['paper_name'],
                'questionId' => $item['question_id'],
                'subjectName' => $item['subject_name'],
                'isLabel' => $item['is_label'],

            ];

        }
        return array('rows' => $list, 'total' => $recordCount);
    }

    /**
     * 不合格跟踪题目详情
     * @param $questionId int
     * @return array
     */
    public function getTailInfo($questionId)
    {
        $teacherContent = $this->getTailQuestionContent($questionId, $userType = 'teacher');
        if (empty($teacherContent)) $teacherContent[$questionId] = [];
        $judgeContent = $this->getTailQuestionContent($questionId, $userType = 'judge');
        $types = array('knowledge','questionType', 'difficulty', 'type', 'grade', 'questionCategory');
        $personTagCount = [];
        foreach ($types as $type) {
            foreach ($teacherContent[$questionId] as $item) {
                $userName = $item['user_name'];
                $userTag = isset($item['tag_content'][$type]) ? $item['tag_content'][$type] : '';
                if ($userTag) {
                    $personTagCount[$type][$userTag]['user_name'][] = $userName;
                    if (array_key_exists("count", $personTagCount[$type][$userTag])) {
                        $personTagCount[$type][$userTag]["count"] += 1;
                    } else {
                        $personTagCount[$type][$userTag]["count"] = 1;
                    }
                }
            }
        }
        $personCount = 2;
        $diff = [];
        foreach ($personTagCount as $key => $item) {
            foreach ($item as $k => $v) {
                if ($v["count"] == $personCount) {
                    continue;
                }
                foreach ($v["user_name"] as $value) {
                    $diff[$value][$key][$k] = $v["count"];
                }

            }
        }
        $difficulty = config('app.DIFFICULTY');
        $color = ['0' => 'red', '1' => 'blue'];
        $result = [
            'teacherTag' => $teacherContent[$questionId],
            'diffTag' => $diff,
            'judgeTag' => $judgeContent,
            'color' => $color,
            'difficulty' => $difficulty
        ];
        //print_r($result);exit;
        return $result;
    }

    /**
     * 不合格跟踪题目(单题所贴内容)
     * @param $questionId int
     * @return array
     */
    public function getTailQuestionContent($questionId, $userType)
    {
        if($userType == 'teacher'){
            $condition = array(
                'id' => $questionId
            );
            $question = new Question();
            $resultQuestion = $question->findOne($condition, $order=[], ['paper_id']);
            if($resultQuestion['paper_id']){
                $condition = array(
                    'get_type' => 'paper',
                    'task_id' => $resultQuestion['paper_id'],
                    'is_return' => 0
                );
            }else{
                $condition = array(
                    'get_type' => 'question',
                    'task_id' => $questionId,
                    'is_return' => 0
                );
            }
            $vplabelGet = new VpLabelGet();
            $result = $vplabelGet->getUserKeys($condition);
            if (empty($result)) {
                return [];
            }
            $userKeys = [];
            foreach ($result as $v) {
                $userKeys[] = $v['user_key'];
            }

        }
        if($userType == 'judge'){
            $condition = array(
                'user_type' => $userType,
                'question_id' => $questionId,
            );
            $vpTeacherLabelTag = new VpTeacherLabelTag();
            $result = $vpTeacherLabelTag->getUserKeys($condition);
            if (empty($result)) {
                return [];
            }
            $userKeys = [];
            foreach ($result as $v) {
                $userKeys[] = $v['user_key'];
            }
        }
        $user = new User();
        $listUserKeyNames = $user->getUserNamesByUserKeys($userKeys);
        $labelTagContent = new VipLabelTagContent();
        $teacherContent = $labelTagContent->getTailTagContent($userType, $questionId);
        $list = [];
        foreach ($result as $v) {
            if (array_key_exists($questionId, $list)) {
                $list[$questionId][] = [
                    'user_name' => isset($listUserKeyNames[$v['user_key']]) ? $listUserKeyNames[$v['user_key']] : '',
                    'tag_content' => isset($teacherContent[$questionId][$v['user_key']]) ? $teacherContent[$questionId][$v['user_key']]['tag_content'] : ''
                ];
            } else {
                $list[$questionId][] = [
                    'user_name' => isset($listUserKeyNames[$v['user_key']]) ? $listUserKeyNames[$v['user_key']] : '',
                    'tag_content' => isset($teacherContent[$questionId][$v['user_key']]) ? $teacherContent[$questionId][$v['user_key']]['tag_content'] : ''
                ];
            }
        }
        return $list;
    }


}