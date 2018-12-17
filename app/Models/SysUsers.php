<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/9/6
 * Time: 10:21
 */

namespace App\Models;
class SysUsers extends Model
{

    protected $connection = 'sqlsrv_server';
    protected $table = "sys_users";
    public $timestamps = false;

    /**
     * 判断人工作量统计列表
     * @param string
     * @return array
     */
    public function getJudgeWorkList($searchArgs, $currentPage = 1, $pageSize = 15)
    {
        $judgeNames = $this->getUserNames($searchArgs['judgeLabelling']);//获取判定人角色下的所有教师名称
        $judgeIds = array_keys($judgeNames);
        $beginDate = !empty($searchArgs['beginDate']) ? $searchArgs['beginDate'] : '';
        $endDate = !empty($searchArgs['endDate']) ? $searchArgs['endDate'] : '';
        $recordCount = 0;
        if (!empty($judgeIds)) {
            $condition['id'] = ['in' => $judgeIds];
            $recordCount = $this->count($condition);
        }
        if (empty($judgeIds) || 0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $result = $this->findAll($condition, ['id' => 'asc'], ['user_key']);
        $userKeys = [];
        foreach ($result as $v) {
            $userKeys[] = $v['user_key'];
        }
        $result = $this->findAll($condition, ['id' => 'asc'], ['id', 'user_key', 'user_realname'], $group = "", $join = [], $page = $currentPage, $pageSize = $pageSize);
        $userJudgeTagNum = $this->getTagNum($userKeys, $beginDate, $endDate, $userType = 'judge');
        $userJudgeTagNumAll = $this->getTagNumAll($userKeys, $userType = 'judge');
        $getUserNum = $this->getUserNum($userKeys);
        $list = [];
        foreach ($result as $k => $item) {
            $userNum = isset($getUserNum[$item['user_key']]) ? $getUserNum[$item['user_key']] : 0;
            $judgeNum = isset($userJudgeTagNum[$item['user_key']]) ? $userJudgeTagNum[$item['user_key']] : 0;
            $judgeNumAll = isset($userJudgeTagNumAll[$item['user_key']]) ? $userJudgeTagNumAll[$item['user_key']] : 0;
            $surplusNum = $userNum - $judgeNumAll;
            $list[] = [
                'id' => $item['id'],
                'userRealname' => $item['user_realname'],
                'userkey' => $item['user_key'],
                'judgeNum' => $judgeNum,
                'surplusNum' => $surplusNum,
            ];
        }
        return array('rows' => $list, 'total' => $recordCount);
    }

    /**
     * 判断人参数处理
     * @param array
     * @return array
     */
    public function judgeSearchArgs($formData)
    {
        if (isset($formData['beginDate'])) {
            $searchArgs['beginDate'] = $formData['beginDate'];
        }
        if (isset($formData['endDate'])) {
            $searchArgs['endDate'] = $formData['endDate'];
        }
        $searchArgs['judgeLabelling'] = trim($formData['judgeLabelling']);
        return $searchArgs;
    }

    /**
     * 通过角色roleId获取名称
     * @param string
     * @return array
     */
    public function getUserNames($roleId)
    {
        $sysUserRoles = new SysUserRoles();
        $result = $sysUserRoles->getUserKeysByRoleId($roleId);
        $userKeyArray = [];
        foreach ($result as $value) {
            $userKeyArray[] = $value['user_key'];
        }
        if (empty($userKeyArray)) return [];
        $condition = [
            'user_key' => ['in' => $userKeyArray],
        ];
        $resultNames = $this->findAll($condition, [], ['id', 'user_realname']);
        $userIdNameArray = [];
        foreach ($resultNames as $v) {
            $userIdNameArray[$v['id']] = $v['user_realname'];
        }
        ksort($userIdNameArray);
        return $userIdNameArray;
    }

    /**
     * 获取已贴数目
     * @param string
     * @return array
     */
    public function getTagNum($userKeys, $beginDate, $endDate, $userType)
    {
        if (empty($userKeys)) return [];
        $condition = [
            'user_key' => array(['in' => $userKeys]),
            'user_type' => $userType,
            'is_remove' => 0,
            'status' => 0
        ];
        if (empty($beginDate) && !empty($endDate)) {
            $condition['create_time'] = array('lt' => $endDate.' 23:59:59');
        }
        if (!empty($beginDate) && empty($endDate)) {
            $condition['create_time'] = array('gt' => $beginDate.' 00:00:01');
        }
        if (!empty($beginDate) && !empty($endDate)) {
            $condition['create_time'] = array('between' => array($beginDate.' 00:00:01', $endDate.' 23:59:59'));
        }
        $vpTeacherLabelTag = new VpTeacherLabelTag();
        $result = $vpTeacherLabelTag->getUserKeyTagNum($condition);
        return $result;
    }
    /**
     * 获取已贴数目all所有
     * @param string
     * @return array
     */
    public function getTagNumAll($userKeys,$userType)
    {
        if (empty($userKeys)) return [];
        $condition = [
            'user_key' => array(['in' => $userKeys]),
            'user_type' => $userType,
            'is_remove' => 0,
            'status' => 0
        ];
        $vpTeacherLabelTag = new VpTeacherLabelTag();
        $result = $vpTeacherLabelTag->getUserKeyTagNum($condition);
        return $result;
    }

    /**
     * 获取判断人领取数目
     * @param array
     * @return array
     */
    public function getUserNum($userKeys)
    {
        if (empty($userKeys)) return [];
        $condition = [
            'user_key' => ['in' => $userKeys],
            'is_return' => 0
        ];
        $vpTeacherLabelTag = new VipGetJudgeQuestion();
        $result = $vpTeacherLabelTag->getJudgeUserKeyReceiveNum($condition);
        return $result;
    }

    /**
     * 判断人导出
     * @param array
     * @return array
     */
    public function getJudgeExport($searchArgs)
    {
        $judgeNames = $this->getUserNames($searchArgs['judgeLabelling']);//获取判定人角色下的所有教师名称
        $judgeIds = array_keys($judgeNames);
        $beginDate = !empty($searchArgs['beginDate']) ? $searchArgs['beginDate'] : '';
        $endDate = !empty($searchArgs['endDate']) ? $searchArgs['endDate'] : '';
        if (empty($judgeIds)) return [];
        $condition['id'] = ['in' => $judgeIds];
        $result = $this->findAll($condition, ['id' => 'asc'], ['id', 'user_key', 'user_realname']);
        $userKeys = [];
        foreach ($result as $v) {
            $userKeys[] = $v['user_key'];
        }
        $userJudgeTagNum = $this->getTagNum($userKeys, $beginDate, $endDate, $userType = 'judge');
        $userJudgeTagNumAll = $this->getTagNumAll($userKeys, $userType = 'judge');
        $getUserNum = $this->getUserNum($userKeys);
        $list = [];
        foreach ($result as $k => $item) {
            $userNum = isset($getUserNum[$item['user_key']]) ? $getUserNum[$item['user_key']] : 0;
            $judgeNum = isset($userJudgeTagNum[$item['user_key']]) ? $userJudgeTagNum[$item['user_key']] : 0;
            $judgeNumAll = isset($userJudgeTagNumAll[$item['user_key']]) ? $userJudgeTagNumAll[$item['user_key']] : 0;
            $surplusNum = $userNum - $judgeNumAll;
            $list[] = [
                'id' => $item['id'],
                'userRealname' => $item['user_realname'],
                'userkey' => $item['user_key'],
                'judgeNum' => $judgeNum,
                'surplusNum' => $surplusNum,
            ];
        }
        return $list;
    }

    /**
     * 教师参数处理
     * @param array
     * @return array
     */
    public function teacherSearchArgs($formData)
    {
        if (isset($formData['beginDate'])) {
            $searchArgs['beginDate'] = $formData['beginDate'];
        }
        if (isset($formData['endDate'])) {
            $searchArgs['endDate'] = $formData['endDate'];
        }
        $searchArgs['teacherLabelling'] = trim($formData['teacherLabelling']);
        return $searchArgs;
    }

    /**
     * 教师工作量统计
     * @param array
     * @return array
     */
    public function getTeacherWorkList($searchArgs, $currentPage = 1, $pageSize = 15)
    {
        $teacherNames = $this->getUserNames($searchArgs['teacherLabelling']);
        $teacherIds = array_keys($teacherNames);
        $beginDate = !empty($searchArgs['beginDate']) ? $searchArgs['beginDate'] : '';
        $endDate = !empty($searchArgs['endDate']) ? $searchArgs['endDate'] : '';
        $recordCount = 0;
        if (!empty($teacherIds)) {
            $condition['id'] = ['in' => $teacherIds];
            $recordCount = $this->count($condition);
        }
        if (empty($teacherIds) || 0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $result = $this->findAll($condition, ['id' => 'asc'], ['user_key']);
        $userKeys = [];
        foreach ($result as $v) {
            $userKeys[] = $v['user_key'];
        }
        $result = $this->findAll($condition, ['id' => 'asc'], ['id', 'user_key', 'user_realname'], $group = "", $join = [], $page = $currentPage, $pageSize = $pageSize);
        //通过试题个数
        $vpTeacherLabelTag = new VpTeacherLabelTag();
        $ids = $vpTeacherLabelTag->getTagQuestionIds($userKeys);
        $vpJudgeSourceQuestion = new VpJudgeSourceQuestion();
        $passIds = $vpJudgeSourceQuestion->getPassIds($ids);
        $everyTeacherPassNum = $vpTeacherLabelTag->getEveryTeacherPassIdsNum($userKeys,$passIds);
        //俩人都贴的试题个数
        $twoTagIds = $vpTeacherLabelTag->getTagNumTwoQuestionIds($userKeys);//取出贴过俩次的试题ids
        $everyTeacherTagTwoNum = $vpTeacherLabelTag->getEveryTeacherTagTwoNum($userKeys,$twoTagIds);
        $userTeacherTagNum = $this->getTagNum($userKeys, $beginDate, $endDate, $userType = 'teacher');
        $userTeacherTagNumAll = $this->getTagNumAll($userKeys, $userType = 'teacher');
        $getUserNum = $this->getTeacherUserNum($userKeys);
        $list = [];
        foreach ($result as $k => $item) {
            $userNum = isset($getUserNum[$item['user_key']]) ? $getUserNum[$item['user_key']] : 0;
            $teacherNum = isset($userTeacherTagNum[$item['user_key']]) ? $userTeacherTagNum[$item['user_key']] : 0;
            $passNum = isset($everyTeacherPassNum[$item['user_key']]) ? $everyTeacherPassNum[$item['user_key']] : 0;
            $twoNum = isset($everyTeacherTagTwoNum[$item['user_key']]) ? $everyTeacherTagTwoNum[$item['user_key']] : 0;
            $teacherNumAll = isset($userTeacherTagNumAll[$item['user_key']]) ? $userTeacherTagNumAll[$item['user_key']] : 0;
            if(empty($twoNum)){
                $ratePassing = '0%';
            }else{

                $ratePassing = (sprintf("%.2f",($passNum/$twoNum))*100).'%';
            }
            $surplusNum = $userNum - $teacherNumAll;
            $list[] = [
                'id' => $item['id'],
                'userRealname' => $item['user_realname'],
                'userkey' => $item['user_key'],
                'passNum' => $passNum,
                'twoTagNum' => $twoNum,
                'teacherNum' => $teacherNum,
                'ratePassing' => $ratePassing,
                'surplusNum' => $surplusNum,
            ];
        }
        return array('rows' => $list, 'total' => $recordCount, 'user_key' => $userKeys);
    }

    /**
     * 教师工作量导出
     * @param array
     * @return array
     */
    public function getTeacherExport($searchArgs)
    {
        $teacherNames = $this->getUserNames($searchArgs['teacherLabelling']);//获取判定人角色下的所有教师名称
        $teacherIds = array_keys($teacherNames);
        $beginDate = !empty($searchArgs['beginDate']) ? $searchArgs['beginDate'] : '';
        $endDate = !empty($searchArgs['endDate']) ? $searchArgs['endDate'] : '';
        if (empty($teacherIds)) return [];
        $condition['id'] = ['in' => $teacherIds];
        $result = $this->findAll($condition, ['id' => 'asc'], ['id', 'user_key', 'user_realname']);
        $userKeys = [];
        foreach ($result as $v) {
            $userKeys[] = $v['user_key'];
        }
        //通过试题个数
        $vpTeacherLabelTag = new VpTeacherLabelTag();
        $ids = $vpTeacherLabelTag->getTagQuestionIds($userKeys);
        $vpJudgeSourceQuestion = new VpJudgeSourceQuestion();
        $passIds = $vpJudgeSourceQuestion->getPassIds($ids);
        $everyTeacherPassNum = $vpTeacherLabelTag->getEveryTeacherPassIdsNum($userKeys,$passIds);
        //俩人都贴的试题个数
        $twoTagIds = $vpTeacherLabelTag->getTagNumTwoQuestionIds($userKeys);//取出贴过俩次的试题ids
        $everyTeacherTagTwoNum = $vpTeacherLabelTag->getEveryTeacherTagTwoNum($userKeys,$twoTagIds);
        $userTeacherTagNum = $this->getTagNum($userKeys, $beginDate, $endDate, $userType = 'teacher');
        $userTeacherTagNumAll = $this->getTagNumAll($userKeys, $userType = 'teacher');
        $getUserNum = $this->getTeacherUserNum($userKeys);
        $list = [];
        foreach ($result as $k => $item) {
            $userNum = isset($getUserNum[$item['user_key']]) ? $getUserNum[$item['user_key']] : 0;
            $teacherNum = isset($userTeacherTagNum[$item['user_key']]) ? $userTeacherTagNum[$item['user_key']] : 0;
            $passNum = isset($everyTeacherPassNum[$item['user_key']]) ? $everyTeacherPassNum[$item['user_key']] : 0;
            $twoNum = isset($everyTeacherTagTwoNum[$item['user_key']]) ? $everyTeacherTagTwoNum[$item['user_key']] : 0;
            $teacherNumaAll = isset($userTeacherTagNumAll[$item['user_key']]) ? $userTeacherTagNumAll[$item['user_key']] : 0;
            if(empty($twoNum)){
                $ratePassing = '0%';
            }else{
                $ratePassing = (sprintf("%.2f",($passNum/$twoNum))*100).'%';
            }
            $surplusNum = $userNum - $teacherNumaAll;
            $list[] = [
                'id' => $item['id'],
                'userRealname' => $item['user_realname'],
                'userkey' => $item['user_key'],
                'passNum' => $passNum,
                'twoTagNum' => $twoNum,
                'teacherNum' => $teacherNum,
                'ratePassing' => $ratePassing,
                'surplusNum' => $surplusNum,
            ];
        }
        return $list;
    }

    /**
     * 教师领取数目
     * @param array
     * @return array
     */
    public function getTeacherUserNum($userKeys)
    {
        if (empty($userKeys)) return [];
        $vpLabelGet = new VpLabelGet();
        $result = $vpLabelGet->getTeacherUserKeyReceiveNum($userKeys);
        return $result;
    }

}