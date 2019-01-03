<?php

namespace App\Models;
class VipYoudaoExamined extends Model
{
    protected $table='vip_youdao_examined';
    protected $connection = "mysql_kms";
    public $timestamps = false;

    public function getPaperInfo($taskId){
        $condition = array(
            'task_id'=>$taskId
        );
        $paperInfo = $this->findOne($condition);
        if($paperInfo){
            $vipPaperImage = new VipPaperImage;
            $paperInfo['images'] = $vipPaperImage->findAll(array('task_id'=>$taskId,'is_delete'=>0), ['id'=>'asc']);
            if($paperInfo['subject_id']){
                $kmsSubject = new KmsSubjects;
                $paperInfo['subject_name'] = $kmsSubject->getSubjectName($paperInfo['subject_id']);
            }
            if($paperInfo['grade']){
                $vipDict = new VipDict;
                $gradeInfo = $vipDict->findOne(array('id'=>$paperInfo['grade'],'category'=>'GRADE'));
                $paperInfo['grade_name'] = $gradeInfo['title'];
            }
        }

        return $paperInfo;
    }


    /**
     * @param $formData
     * @return array
     */
    public function paperSearchArgs($formData){
        $searchArgs = array();
        if(isset($formData['subjectId'])){
            $searchArgs['subjectId'] = abs($formData['subjectId']);
        }
        if(isset($formData['gradeId'])){
            $searchArgs['gradeId'] = abs($formData['gradeId']);
        }
        if(isset($formData['province'])){
            $searchArgs['province'] = trim($formData['province']);
        }
        if(isset($formData['city'])){
            $searchArgs['city'] = trim($formData['city']);
        }
        //有道最终处理日期
        if (isset($formData['beginDate'])) {
            $searchArgs['beginDate'] = $formData['beginDate'];
        }
        if (isset($formData['endDate'])) {
            $searchArgs['endDate'] = $formData['endDate'];
        }
        if(isset($formData['status'])){
            $searchArgs['status'] = abs($formData['status']);
        }
        if(isset($formData['agencyId'])){
            $searchArgs['agencyId'] = abs($formData['agencyId']);
        }
        if(isset($formData['paperName'])){
            $searchArgs['paperName'] = trim($searchArgs['paperName']);
        }
        if(isset($formData['auditorId'])){//审核人
            $searchArgs['auditorId'] = abs($searchArgs['auditorId']);
        }
        //试卷审核日期
        if (isset($formData['auditBeginDate'])) {
            $searchArgs['auditBeginDate'] = $formData['auditBeginDate'];
        }
        if (isset($formData['auditEndDate'])) {
            $searchArgs['auditEndDate'] = $formData['auditEndDate'];
        }
        return $searchArgs;
    }


    /**
     * @param $searchArgs
     * @return array
     */
    public function paperCondition($searchArgs){
        $condition = [];
        //有道最终处理日期
        if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('lt' => strtotime ($searchArgs['endDate'].' 23:59:59'));
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('gt' => strtotime ($searchArgs['beginDate'].' 00:00:01'));
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('between' => array(strtotime ($searchArgs['beginDate'].' 00:00:01'),strtotime ($searchArgs['endDate'].' 23:59:59')));
        }
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['gradeId'])) {
            $condition['grade'] = array('eq' => $searchArgs['gradeId']);
        }
        if (!empty($searchArgs['province'])) {
            $condition['province'] = array('eq' => $searchArgs['province']);
        }
        if (!empty($searchArgs['city'])) {
            $condition['city'] = array('eq' => $searchArgs['city']);
        }
        if (!empty($searchArgs['status'])) {
            $condition['paper_examined_status'] = array('eq' => $searchArgs['status']);
        }
        if (!empty($searchArgs['agencyId'])) {
            $condition['agency_id'] = array('eq' => $searchArgs['agencyId']);
        }
        if (!empty($searchArgs['paperName'])) {
            $condition['paper_name'] = array('like' => "%" . $searchArgs['paperName'] . "%");
        }
        if (!empty($searchArgs['auditorId'])) {
            $condition['paper_examined_auditor_id'] = $searchArgs['auditorId'];
        }
        //试卷最终审核日期
        if (empty($searchArgs['auditBeginDate']) && !empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('lt' => strtotime ($searchArgs['auditEndDate'].' 23:59:59'));
        }
        if (!empty($searchArgs['auditBeginDate']) && empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('gt' => strtotime ($searchArgs['auditBeginDate'].' 00:00:01'));
        }
        if (!empty($searchArgs['auditBeginDate']) && !empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('between' => array(strtotime ($searchArgs['auditBeginDate'].' 00:00:01'),strtotime ($searchArgs['auditEndDate'].' 23:59:59')));
        }
        return $condition;
    }

    public function paperList($searchArgs, $currentPage = 1, $pageSize = 20){
        $condition = $this->paperCondition($searchArgs);
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }

        $list = $this->findAll($condition, ['upload_time'=>'asc'], ['task_id','paper_name','agency_id','final_processing_time','paper_examined_time','paper_examined_status'], '',[],$currentPage,$pageSize);
        $list = $this->formatPaperList($list);
        return array('rows' => $list, 'total' => $recordCount);
    }


    public function paperStatistic($searchArgs){
        $condition = $this->paperCondition($searchArgs);
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $list = $this->findAll($condition, [], ['paper_examined_status'], '',[],null);
        $totalCount = $waitCount = $passCount = $returnCount = 0;
        if($list){
            foreach ($list as $row){
                $totalCount++;
                if($row['paper_examined_status'] == 2){
                    $waitCount++;
                }
                if($row['paper_examined_status'] == 3){
                    $passCount++;
                }
                if($row['paper_examined_status'] == 4){
                    $returnCount++;
                }
            }
        }
        return array(
            'totalCount'=>$totalCount,
            'waitCount'=>$waitCount,
            'passCount'=>$passCount,
            'returnCount'=>$returnCount
        );
    }


    /**
     * 获取试卷辅助信息
     * @param $list
     * @return mixed
     */
    public function formatPaperList($list){
        if($list){
            $vipYoudaoAgency = new VipYoudaoAgency;
            foreach ($list as &$row){
                //获取机构名称
                if($row['agency_id']){
                    $agencyInfo = $vipYoudaoAgency->findOne(array('agency_id'=>$row['agency_id']),[],['agency_name']);
                    $row['agency_name'] = $agencyInfo['agency_name'];
                }
                //获取学科名称
                if($row['subject_id']){
                    $kmsSubject = new KmsSubjects;
                    $row['subject_name'] = $kmsSubject->getSubjectName($row['subject_id']);
                }
                //获取年级
                if($row['grade']){
                    $vipDict = new VipDict;
                    $gradeInfo = $vipDict->findOne(array('id'=>$row['grade'],'category'=>'GRADE'));
                    $row['grade_name'] = $gradeInfo['title'];
                }
                //获取省、市、区
                $city = new City;
                if($row['province']){
                    $cityInfo = $city->findOne(array('id'=>$row['province']),[],['city']);
                    $row['province_name'] = $cityInfo['city'];
                }
                if($row['city']){
                    $cityInfo = $city->findOne(array('id'=>$row['city']),[],['city']);
                    $row['city_name'] = $cityInfo['city'];
                }
                if($row['area']){
                    $cityInfo = $city->findOne(array('id'=>$row['area']),[],['city']);
                    $row['area_name'] = $cityInfo['city'];
                }
                //获取图片审核人姓名
                $user = new User;
                if($row['image_examined_auditor_id']){
                    $row['image_examined_auditor_name'] = $user->getUserRealNameById($row['image_examined_auditor_id']);
                }
                //获取试卷审核人姓名
                if($row['paper_examined_auditor_id']){
                    $row['paper_examined_auditor_name'] = $user->getUserRealNameById($row['paper_examined_auditor_id']);
                }
                if($row['paper_examined_auditor_id']==0 && !empty($row['paper_examined_time'])){
                    $row['paper_examined_auditor_name'] = '自动审核';
                }
            }
        }
        return $list;
    }

    /**
     * 图片审核列表及统计
     */
    public function getImagePaperList($searchArgs, $currentPage = 1, $pageSize = 15)
    {
        $sysUsers = new SysUsers();
        $imgNames = $sysUsers->getUserNames($searchArgs['IMG_AUDITOR']);//获取判定人角色下的所有教师名称
        $province = new Province();
        $provinces = $province->getProvince();//获取省份
        $provinceIds = [];
        $provinceIdNames = [];
        foreach ($provinces as $v) {
            $provinceIds[] = $v['id'];
            $provinceIdNames[$v['id']] = $v['city'];
        }
        $city = new City();
        $countrys = $city->getIdCountrys($provinceIds);
        if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['upload_time'] = array('lt' => $searchArgs['endDate']);
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['upload_time'] = array('gt' => $searchArgs['beginDate']);
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['upload_time'] = array('between' => array($searchArgs['beginDate'],$searchArgs['endDate']));
        }
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['province'])) {
            $provinceName = isset($provinceIdNames[$searchArgs['province']]) ? $provinceIdNames[$searchArgs['province']] : '';
            $condition['province'] = array('eq' => $provinceName);
        }
        if (!empty($searchArgs['country'])) {
            $countryName = isset($countrys[$searchArgs['country']]) ? $countrys[$searchArgs['country']] : '';
            $condition['city'] = array('eq' => $countryName);
        }
        if (!empty($searchArgs['grade'])) {
            $condition['grade_id'] = array('eq' => $searchArgs['grade']);
        }
        if (!empty($searchArgs['agency_id'])) {
            $condition['agencyId'] = array('eq' => $searchArgs['agency_id']);
        }
        if (!empty($searchArgs['imageExaminedStatus'])) {
            $condition['image_examined_status'] = array('eq' => $searchArgs['imageExaminedStatus']);
        }
        if (!empty($searchArgs['paperName'])) {
            $condition['paper_name'] = array('like' => "%" . $searchArgs['paperName'] . "%");
        }
        if (empty($condition)) {
            $condition = [];
        }
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $result = $this->findAll($condition, ['upload_time' => 'desc'], ['id', 'agency_id', 'paper_name', 'upload_time', 'image_examined_time', 'image_examined_status','subject_id','image_processing_days','image_examined_auditor_id','province','city'],$group="",$join=[], $page = $currentPage, $pageSize = $pageSize);
        $vipYoudaoAgency = new VipYoudaoAgency();
        $agencyResult = $vipYoudaoAgency->getYoudaoAgency();
        $listAgency = [];
        foreach ($agencyResult as $item) {
            $listAgency[$item['agency_id']] = $item['agency_name'];
        }
        $imageExaminedStatus = config('app.IMAGE_EXAMINED_STATUS');
        $common = new Common();
        $allSubjectNames = $common->getAllSubjectNames();
        $list = [];
        $i = 1;
        foreach ($result as $k => $item) {
            $list[] = [
                'number' => $i,
                'id' => $item['id'],
                'province' => $item['province'],
                'city' => $item['city'],
                'paperName' => $item['paper_name'],
                'uploadTime' => $item['upload_time'],
                'imageExaminedTime' => $item['image_examined_time'],
                'imageProcessingDays' => $item['image_processing_days'],
                'imageExaminedAuditorName' => isset($imgNames[$item['image_examined_auditor_id']]) ? $imgNames[$item['image_examined_auditor_id']] : '',
                'subjectName' => isset($allSubjectNames[$item['subject_id']]) ? $allSubjectNames[$item['subject_id']] : '',
                'agencyName' => isset($listAgency[$item['agency_id']]) ? $listAgency[$item['agency_id']] : '',
                'imageExaminedStatusName' => isset($imageExaminedStatus[$item['image_examined_status']]) ? $imageExaminedStatus[$item['image_examined_status']] : '',
            ];
            $i++;
        }
        $result = $this->groupCount($condition = [], $order = ['image_examined_status' => 'asc'], ['image_examined_status'], $group = 'image_examined_status');
        $listCount = [];
        foreach ($result as $v) {
            $listCount[$imageExaminedStatus[$v['image_examined_status']]] = $v['total'];
        }
        return array('rows' => $list, 'total' => $recordCount, 'listCount' => $listCount);
    }
    /**
     * 转换图片审核查询参数
     * @param $formData array
     * @return array
     */
    public function imagePaperSearchArgs($formData)
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
        if (isset($formData['province'])) {
            $searchArgs['province'] = $formData['province'];
        }
        if (isset($formData['country'])) {
            $searchArgs['country'] = $formData['country'];
        }
        if (isset($formData['grade'])) {
            $searchArgs['grade'] = $formData['grade'];
        }
        if (isset($formData['image_examined_status'])) {
            $searchArgs['imageExaminedStatus'] = $formData['image_examined_status'];
        }
        if (isset($formData['agencyId'])) {
            $searchArgs['agencyId'] = $formData['agencyId'];
        }
        if (isset($formData['paperName'])) {
            $searchArgs['paperName'] = $formData['paperName'];
        }
        $searchArgs['IMG_AUDITOR'] = trim($formData['IMG_AUDITOR']);
        return $searchArgs;
    }

    /**
     * 图片审核导出
     * @param array
     * @return array
     */
    public function getImageExport($searchArgs)
    {
        $sysUsers = new SysUsers();
        $imgNames = $sysUsers->getUserNames($searchArgs['IMG_AUDITOR']);//获取判定人角色下的所有教师名称
        $province = new Province();
        $provinces = $province->getProvince();//获取省份
        $provinceIds = [];
        $provinceIdNames = [];
        foreach ($provinces as $v) {
            $provinceIds[] = $v['id'];
            $provinceIdNames[$v['id']] = $v['city'];
        }
        $city = new City();
        $countrys = $city->getIdCountrys($provinceIds);
        if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['upload_time'] = array('lt' => $searchArgs['endDate']);
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['upload_time'] = array('gt' => $searchArgs['beginDate']);
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['upload_time'] = array('between' => array($searchArgs['beginDate'],$searchArgs['endDate']));
        }
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['province'])) {
            $provinceName = isset($provinceIdNames[$searchArgs['province']]) ? $provinceIdNames[$searchArgs['province']] : '';
            $condition['province'] = array('eq' => $provinceName);
        }
        if (!empty($searchArgs['country'])) {
            $countryName = isset($countrys[$searchArgs['country']]) ? $countrys[$searchArgs['country']] : '';
            $condition['city'] = array('eq' => $countryName);
        }
        if (!empty($searchArgs['grade'])) {
            $condition['grade_id'] = array('eq' => $searchArgs['grade']);
        }
        if (!empty($searchArgs['agency_id'])) {
            $condition['agencyId'] = array('eq' => $searchArgs['agency_id']);
        }
        if (!empty($searchArgs['imageExaminedStatus'])) {
            $condition['image_examined_status'] = array('eq' => $searchArgs['imageExaminedStatus']);
        }
        if (!empty($searchArgs['paperName'])) {
            $condition['paper_name'] = array('like' => "%" . $searchArgs['paperName'] . "%");
        }
        if (empty($condition)) {
            $condition = [];
        }
        $result = $this->findAll($condition, ['upload_time' => 'desc'], ['id', 'agency_id', 'paper_name', 'upload_time', 'image_examined_time', 'image_examined_status','subject_id','image_processing_days','image_examined_auditor_id','province','city']);
        $vipYoudaoAgency = new VipYoudaoAgency();
        $agencyResult = $vipYoudaoAgency->getYoudaoAgency();
        $listAgency = [];
        foreach ($agencyResult as $item) {
            $listAgency[$item['agency_id']] = $item['agency_name'];
        }
        $imageExaminedStatus = config('app.IMAGE_EXAMINED_STATUS');
        $common = new Common();
        $allSubjectNames = $common->getAllSubjectNames();
        $list = [];
        $i = 1;
        foreach ($result as $k => $item) {
            $list[] = [
                'number' => $i,
                'id' => $item['id'],
                'province' => $item['province'],
                'paperId' => $item['paper_id'],
                'province' => $item['agency_id'],
                'city' => $item['city'],
                'paperName' => $item['paper_name'],
                'uploadTime' => $item['upload_time'],
                'imageExaminedTime' => $item['image_examined_time'],
                'imageProcessingDays' => $item['image_processing_days'],
                'imageExaminedAuditorName' => isset($imgNames[$item['image_examined_auditor_id']]) ? $imgNames[$item['image_examined_auditor_id']] : '',
                'subjectName' => isset($allSubjectNames[$item['subject_id']]) ? $allSubjectNames[$item['subject_id']] : '',
                'agencyName' => isset($listAgency[$item['agency_id']]) ? $listAgency[$item['agency_id']] : '',
                'imageExaminedStatusName' => isset($imageExaminedStatus[$item['image_examined_status']]) ? $imageExaminedStatus[$item['image_examined_status']] : '',
            ];
            $i++;
        }
        return $list;
    }


    /**
     * 试卷导出
     * @param $searchArgs
     * @return array
     */
    public function paperAll($searchArgs){
        $list = [];
        $condition = $this->paperCondition($searchArgs);
        $recordCount = $this->count($condition);
        $limit = 1000;
        $max = ceil($recordCount/$limit);
        for($i=1;$i<=$max;$i++){
            $result = $this->findAll($condition,['upload_time'=>'asc'],['*'],'',[],$i,$limit);
            if($result){

                array_merge($list,$result);
            }
        }
        return $list;
    }
}

