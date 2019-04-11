<?php

namespace App\Models;
use App\Clients\KlibTeacherClient;
use App\Http\Controllers\Common\CommonController;
use App\http\Controllers\Youdao\PaperController;

class VipYoudaoExamined extends Model
{
    protected $table='vip_youdao_examined';
    protected $connection = "mysql_kms";
    public $timestamps = false;

    public function getPaperInfo($taskId)
    {
        $condition = array(
            'task_id'=>$taskId
        );
        $paperInfo = $this->findOne($condition);
        if($paperInfo){
            $vipPaperImage = new VipPaperImage;
            $paperInfo['images'] = [];
            if($paperInfo['paper_type'] == 1){
                $paperInfo['images'] = $vipPaperImage->findAll(array('task_id'=>$taskId, 'is_delete'=>0), ['id'=>'desc']);
            }else{
                $imageTypeOne = $vipPaperImage->findAll(array('task_id'=>$taskId, 'is_delete'=>0, 'image_type'=>1), ['id'=>'desc']);
                $imageTypeTwo = $vipPaperImage->findAll(array('task_id'=>$taskId, 'is_delete'=>0, 'image_type'=>2), ['id'=>'desc']);
                $paperInfo['images'] = array_merge($imageTypeOne,$imageTypeTwo);
            }
            if($paperInfo['subject_id']){
                $kmsSubject = new KmsSubjects;
                $paperInfo['subject_name'] = $kmsSubject->getSubjectName($paperInfo['subject_id']);
                $vipDictSubject = new VipDictSubject();
                $subjectInfo = $vipDictSubject->findOne(array('id'=>$paperInfo['subject_id']));//根据学科获取年部
                $paperInfo['grade_id'] = $subjectInfo['grade_id'];
            }
            if($paperInfo['grade']){//年级
                $gradeArr = Config('app.GRADE_VALUE');
                $paperInfo['grade_name'] = $gradeArr[$paperInfo['grade']];
            }
            if($paperInfo['create_uid']){
                $data =  array(
                    'platform' => env('MICRO_API_SERVICE_TYPE'), //平台类型
                    'secret' => env('MICRO_API_SERVICE_KEY'),//秘钥
                    'userId' => $paperInfo['create_uid'], //用户id
                    'agencyId' =>$paperInfo['agency_id'],
                );
                $klibTeacherClient = new KlibTeacherClient();
                $freeToken = $klibTeacherClient->getFreeToken($data);
                $teacherInfo = $klibTeacherClient->getTeacherInfo($paperInfo['create_uid'], $freeToken);
                if(!$teacherInfo){
                    //throw new \Exception('抱歉，查询不到上传该任务的教师信息');
                    $teacherInfo['realName'] = '';
                }
                $paperInfo['user_name'] = $teacherInfo['realName'];
            }
            $city = new City();
            if($paperInfo['province']){
                $cityInfo = $city->findOne(array('id'=>$paperInfo['province']));
                $paperInfo['province_name'] = $cityInfo['city'];
            }
            if($paperInfo['city']){
                $cityInfo = $city->findOne(array('id'=>$paperInfo['city']));
                $paperInfo['city_name'] = $cityInfo['city'];
            }
            if($paperInfo['area']){
                $cityInfo = $city->findOne(array('id'=>$paperInfo['area']));
                $paperInfo['area_name'] = $cityInfo['city'];
            }
        }

        return $paperInfo;
    }


    /**
     * @param $formData
     * @return array
     */
    public function paperSearchArgs($formData)
    {
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
            $searchArgs['beginDate'] = str_replace('/','-',$formData['beginDate']);
        }
        if (isset($formData['endDate'])) {
            $searchArgs['endDate'] = str_replace('/','-',$formData['endDate']);
        }
        if(isset($formData['status'])){
            $searchArgs['status'] = abs($formData['status']);
        }
        if(isset($formData['agencyId'])){
            $searchArgs['agencyId'] = abs($formData['agencyId']);
        }
        if(isset($formData['paperName'])){
            $searchArgs['paperName'] = trim($formData['paperName']);
        }
        if(isset($formData['auditorId'])){//审核人
            $searchArgs['auditorId'] = abs($formData['auditorId']);
        }
        //试卷审核日期
        if (isset($formData['auditBeginDate'])) {
            $searchArgs['auditBeginDate'] = $formData['auditBeginDate'];
        }
        if (isset($formData['auditEndDate'])) {
            $searchArgs['auditEndDate'] = $formData['auditEndDate'];
        }
        if (isset($formData['sortField'])) {
            $searchArgs['sortField'] = $formData['sortField'];
        }
        if (isset($formData['sortType'])) {
            $searchArgs['sortType'] = $formData['sortType'];
        }
        return $searchArgs;
    }


    /**
     * @param $searchArgs
     * @return array
     */
    public function paperCondition($searchArgs)
    {
        $condition = [];
        //有道最终处理日期
        if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('lt' => $searchArgs['endDate'].' 23:59:59');
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('gt' => $searchArgs['beginDate'].' 00:00:01');
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('between' => array($searchArgs['beginDate'].' 00:00:01', $searchArgs['endDate'].' 23:59:59'));
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
        }else{
            $condition['paper_examined_status'] = array('gt' => 0);
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
            $condition['paper_examined_time'] = array('lt' => $searchArgs['auditEndDate'].' 23:59:59');
        }
        if (!empty($searchArgs['auditBeginDate']) && empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('gt' => $searchArgs['auditBeginDate'].' 00:00:01');
        }
        if (!empty($searchArgs['auditBeginDate']) && !empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('between' => array($searchArgs['auditBeginDate'].' 00:00:01', $searchArgs['auditEndDate'].' 23:59:59'));
        }
        return $condition;
    }

    public function paperList($searchArgs, $currentPage = 1, $pageSize = 20)
    {
        $condition = $this->paperCondition($searchArgs);
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array(
                'rows' => [],
                'total' => $recordCount,
                'totalPage'=>0,
                'listCount'=>array(
                    'totalCount'=>0,
                    'waitCount'=>0,
                    'passCount'=>0,
                    'returnCount'=>0
                ));
        }
        if(!empty($searchArgs['sortField'])){
            $order = [$searchArgs['sortField']=>$searchArgs['sortType']];
        }else{
            $order = ['paper_examined_status'=>'asc','upload_time'=>'asc'];
        }
        $list = $this->findAll($condition, $order, ['task_id','paper_name','agency_id','subject_id','grade','upload_time','image_processing_days', 'first_processing_time', 'final_processing_days','final_processing_time','paper_examined_time','paper_examined_status','image_examined_auditor_id','paper_examined_auditor_id'], '', [], $currentPage, $pageSize);
        if($list['data']){
            foreach ($list['data'] as $key=>$row){
                $list['data'][$key]['num'] = abs(( $key + 1 )+ ( $currentPage - 1 ) * $pageSize );
                $list['data'][$key]['paper_examined_days'] = $this->getDiffDaysCount($row['final_processing_time'], $row['paper_examined_time']);
            }
        }
        $list = $this->formatPaperList($list['data']);
        $statistic = $this->paperStatistic($searchArgs);
        return array('rows' => $list, 'total' => $recordCount, 'totalPage'=>ceil($recordCount / $pageSize), 'listCount'=>$statistic);
    }


    public function paperStatistic($searchArgs)
    {
        $condition = $this->paperCondition($searchArgs);
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $list = $this->findAll($condition, [], ['paper_examined_status'], '', [], null);
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
            'totalCount'=>abs($totalCount),
            'waitCount'=>abs($waitCount),
            'passCount'=>abs($passCount),
            'returnCount'=>abs($returnCount)
        );
    }


    /**
     * 获取试卷辅助信息
     * @param $list
     * @return mixed
     */
    public function formatPaperList($list)
    {
        if($list){
            $agencyIdArr = [];
            $subjectIdArr = [];
            $gradeIdArr = [];
            $authorIdArr = [];
            $cityIdArr = [];
            foreach ($list as $row){
                if(isset($row['agency_id']) && !empty($row['agency_id'])){
                    $agencyIdArr[] = $row['agency_id'];
                }
                if(isset($row['subject_id']) && !empty($row['subject_id'])){
                    $subjectIdArr[] = $row['subject_id'];
                }
                /*if(isset($row['grade']) && !empty($row['grade'])){
                    $gradeIdArr[] = $row['grade'];
                }*/
                if(isset($row['image_examined_auditor_id']) && !empty($row['image_examined_auditor_id'])){
                    $authorIdArr[] = $row['image_examined_auditor_id'];
                }
                if(isset($row['paper_examined_auditor_id']) && !empty($row['paper_examined_auditor_id'])){
                    $authorIdArr[] = $row['paper_examined_auditor_id'];
                }
                if(isset($row['province']) && !empty($row['province'])){
                    $cityIdArr[] = $row['province'];
                }
                if(isset($row['city']) && !empty($row['city'])){
                    $cityIdArr[] = $row['city'];
                }
                if(isset($row['area']) && !empty($row['area'])){
                    $cityIdArr[] = $row['area'];
                }
            }

            //获取机构
            $vipYoudaoAgency = new VipYoudaoAgency;
            $agencyIdArr = array_unique($agencyIdArr);
            $agencyArr = [];
            if($agencyIdArr){
                $agency = $vipYoudaoAgency->findAll(array('agency_id'=>array('in'=>$agencyIdArr)), [], ['agency_id','agency_name']);
                if(!empty($agency)){
                    foreach ($agency  as $key=>$row){
                        $agencyArr[$row['agency_id']] = $row['agency_name'];
                    }
                }
            }


            //获取学科、年级
            $kmsSubject = new KmsSubjects;
            $subjectIdArr = array_unique($subjectIdArr);
            $subjectArr = [];
            if($subjectIdArr){
                $subject = $kmsSubject->getSubjectsByIds($subjectIdArr);
                if(!empty($subject)){
                    foreach ($subject  as $key=>$row){
                        $subjectArr[$row['id']] = $row['grade_show_name'].$row['title'];
                    }
                }
            }

            /*$vipDict = new VipDict;
            $gradeIdArr = array_unique($gradeIdArr);
            $gradeArr = [];
            if($gradeIdArr){
                $grade = $vipDict->findAll(array('id'=>array('in'=>$gradeIdArr),'category'=>'GRADE'));
                if(!empty($grade)){
                    foreach ($grade  as $key=>$row){
                        $gradeArr[$row['id']] = $row['title'];
                    }
                }
            }*/

            //获取审核人
            $user = new User;
            $authorIdArr = array_unique($authorIdArr);
            $userArr = [];
            if(!empty($authorIdArr)){
                $users = $user->getUsersByIds($authorIdArr);
                if(!empty($users)){
                    foreach ($users  as $key=>$row){
                        $userArr[$row['id']] = $row['user_realname'];
                    }
                }
            }

            //获取年级配置
            $gradeArr = Config('app.GRADE_VALUE');

            //获取省份、市、区名称
            $city = new City();
            $cityIdArr = array_unique($cityIdArr);
            $cityArr = [];
            if(!empty($cityIdArr)){
                $citys = $city->getCitysByIds($cityIdArr);
                if(!empty($citys)){
                    foreach ($citys  as $key=>$row){
                        $cityArr[$row['id']] = $row['city'];
                    }
                }
            }

            foreach ($list as $key=>$row){
                if(!empty($row['agency_id'])){
                    $list[$key]['agency_name'] = $agencyArr[$row['agency_id']];
                }
                if(!empty($row['subject_id'])){
                    $list[$key]['subject_name'] = $subjectArr[$row['subject_id']];
                }
                if(!empty($row['grade'])){
                    $list[$key]['grade_name'] = $gradeArr[$row['grade']];
                }
                if(!empty($row['image_examined_auditor_id'])){
                    $list[$key]['image_examined_auditor_name'] = $userArr[$row['image_examined_auditor_id']];
                }
                if(!empty($row['paper_examined_auditor_id'])){
                    if($row['paper_examined_auditor_id']==-1 && !empty($row['paper_examined_time'])){
                        $list[$key]['paper_examined_auditor_name'] = '自动审核';
                    }else{
                        $list[$key]['paper_examined_auditor_name'] = $userArr[$row['paper_examined_auditor_id']];
                    }
                }


                $list[$key]['province_name'] = !empty($row['province'])?$cityArr[$row['province']]:'';
                $list[$key]['city_name'] = !empty($row['city'])?$cityArr[$row['city']]:'';
                $list[$key]['area_name'] = !empty($row['area'])?$cityArr[$row['area']]:'';

            }

        }
        return $list;
    }

    /**
     * 图片审核列表及统计
     */
    public function getImagePaperList($searchArgs, $currentPage = 1, $pageSize = 30)
    {
        $sysUsers = new SysUsers();
        $imgNames = $sysUsers->getUserNames($searchArgs['IMG_AUDITOR']);//图片审核角色
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
        if($searchArgs['isType'] == 1){
            //图片审核
            if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
                $condition['upload_time'] = array('lt' => $searchArgs['endDate']);
            }
            if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
                $condition['upload_time'] = array('gt' => $searchArgs['beginDate']);
            }
            if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
                $condition['upload_time'] = array('between' => array($searchArgs['beginDate'],$searchArgs['endDate']));
            }
            if (!empty($searchArgs['imageExaminedStatus'])) {
                $condition['image_examined_status'] = array('eq' => $searchArgs['imageExaminedStatus']);
            }
            if(empty($searchArgs['imageExaminedStatus'])){
                $condition['image_examined_status'] = array('lt' => 5);
            }
        }else{
            //图片审核统计
            if (empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
                $condition['image_examined_time'] = array('lt' => $searchArgs['endDate']);
            }
            if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
                $condition['image_examined_time'] = array('gt' => $searchArgs['beginDate']);
            }
            if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
                $condition['image_examined_time'] = array('between' => array($searchArgs['beginDate'],$searchArgs['endDate']));
            }
            if (!empty($searchArgs['authorId'])) {
                $condition['image_examined_auditor_id'] = array('eq' => $searchArgs['authorId']);
            }
        }
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['province'])) {
            //$provinceName = isset($provinceIdNames[$searchArgs['province']]) ? $provinceIdNames[$searchArgs['province']] : '';
            $condition['province'] = array('eq' => $searchArgs['province']);
        }
        if (!empty($searchArgs['city'])) {
            //$countryName = isset($countrys[$searchArgs['city']]) ? $countrys[$searchArgs['city']] : '';
            $condition['city'] = array('eq' => $searchArgs['city']);
        }
        if (!empty($searchArgs['grade'])) {
            $condition['grade'] = array('eq' => $searchArgs['grade']);
        }
        if (!empty($searchArgs['agencyId'])) {
            $condition['agency_id'] = array('eq' => $searchArgs['agencyId']);
        }
        if (!empty($searchArgs['paperName'])) {
            $condition['paper_name'] = array('like' => '%' . $searchArgs['paperName'] . '%');
        }
        if (empty($condition)) {
            $condition = [];
        }

        $recordCount = $this->count($condition);
        if($searchArgs['isType'] == 1){
            $statusStartValue = ['待审核' => 0,'已通过' => 0,'退回' => 0,'试卷重复' => 0];
            if (0 == abs($recordCount)) {
                return array('rows' => [], 'total' => ceil($recordCount/$pageSize), 'listCount' => $statusStartValue,'totalNum' => $recordCount);
            }
            if ($searchArgs['isUploadTimeSort']) {
                $orderSort = ['upload_time' => $searchArgs['isUploadTimeSort']];
            }
            if ($searchArgs['isExaminedTimeSort']) {
                $orderSort = ['image_examined_time' => $searchArgs['isExaminedTimeSort']];
            }
            if ($searchArgs['isExaminedStatusSort']) {
                $orderSort = ['image_examined_status' => $searchArgs['isExaminedStatusSort']];
            }

        }else{
            if (0 == abs($recordCount)) {
                return array('rows' => [], 'total' => ceil($recordCount/$pageSize), 'totalNum' => $recordCount);
            }
            if ($searchArgs['isUploadTimeSort']) {
                $orderSort = ['upload_time' => $searchArgs['isUploadTimeSort']];
            }
            if ($searchArgs['isExaminedTimeSort']) {
                $orderSort = ['image_examined_time' => $searchArgs['isExaminedTimeSort']];
            }

        }
        $result = $this->findAll($condition, $orderSort, ['id', 'agency_id', 'paper_name', 'upload_time', 'image_examined_time', 'image_examined_status','subject_id','image_processing_days','image_examined_auditor_id','province','city','task_id','paper_type'],$group="",$join=[], $page = $currentPage, $pageSize = $pageSize);
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
        foreach ($result['data'] as $k => $item) {
            $list[] = [
                'number' => $i,
                'num'=>abs(( $k + 1 )+ ( $currentPage - 1 ) * $pageSize ),
                'id' => $item['id'],
                'taskId' => $item['task_id'],
                'paperType' => $item['paper_type'],
                'province' => isset($provinceIdNames[$item['province']]) ? $provinceIdNames[$item['province']] : '',
                'city' => isset($countrys[$item['city']]) ? $countrys[$item['city']] : '',
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
        if($searchArgs['isType'] == 1){
            if(empty($searchArgs['imageExaminedStatus'])){
                $condition['image_examined_status'] = array('lt' => 5);
            }
            $result = $this->groupCount($condition, $order = ['image_examined_status' => 'asc'], ['image_examined_status'], $group = 'image_examined_status');
            $listCount = [];
            foreach ($result as $v) {
                $listCount[$imageExaminedStatus[$v['image_examined_status']]] = $v['total'];
            }
            $arrayMerge = array_merge($statusStartValue,$listCount);
            return array('rows' => $list, 'total' => ceil($recordCount/$pageSize), 'listCount' => $arrayMerge,'totalNum' => $recordCount);
        }else{
            return array('rows' => $list, 'total' => ceil($recordCount/$pageSize), 'totalNum' => $recordCount);
        }

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
            $searchArgs['beginDate'] = str_replace('/','-',$formData['beginDate']).' 00:00:01';
        }
        if (isset($formData['endDate'])) {
            $searchArgs['endDate'] = str_replace('/','-',$formData['endDate']).' 23:59:59';
        }
        if (isset($formData['subjectId'])) {
            $searchArgs['subjectId'] = $formData['subjectId'];
        }
        if (isset($formData['province'])) {
            $searchArgs['province'] = $formData['province'];
        }
        if (isset($formData['city'])) {
            $searchArgs['city'] = $formData['city'];
        }
        if (isset($formData['grade'])) {
            $searchArgs['grade'] = $formData['grade'];
        }
        if (isset($formData['agencyId'])) {
            $searchArgs['agencyId'] = $formData['agencyId'];
        }
        if (isset($formData['paperName'])) {
            $searchArgs['paperName'] = $formData['paperName'];
        }
        $searchArgs['isType'] = abs($formData['isType']);
        if($formData['isType'] != 3){
            $searchArgs['isUploadTimeSort'] = trim($formData['isUploadTimeSort']);
            $searchArgs['isExaminedTimeSort'] = trim($formData['isExaminedTimeSort']);
        }
        if($formData['isType'] == 1){
            if (isset($formData['imageExaminedStatus'])) {
                $searchArgs['imageExaminedStatus'] = $formData['imageExaminedStatus'];
            }
            $searchArgs['isExaminedStatusSort'] = trim($formData['isExaminedStatusSort']);
        }
        if($formData['isType'] == 2 || $formData['isType'] == 3){
            $searchArgs['authorId'] = $formData['authorId'];
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
            $condition['image_examined_time'] = array('lt' => $searchArgs['endDate']);
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['image_examined_time'] = array('gt' => $searchArgs['beginDate']);
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['image_examined_time'] = array('between' => array($searchArgs['beginDate'],$searchArgs['endDate']));
        }
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['province'])) {
            //$provinceName = isset($provinceIdNames[$searchArgs['province']]) ? $provinceIdNames[$searchArgs['province']] : '';
            $condition['province'] = array('eq' => $searchArgs['province']);
        }
        if (!empty($searchArgs['city'])) {
            //$countryName = isset($countrys[$searchArgs['city']]) ? $countrys[$searchArgs['city']] : '';
            $condition['city'] = array('eq' => $searchArgs['city']);
        }
        if (!empty($searchArgs['grade'])) {
            $condition['grade'] = array('eq' => $searchArgs['grade']);
        }
        if (!empty($searchArgs['agencyId'])) {
            $condition['agency_id'] = array('eq' => $searchArgs['agencyId']);
        }
        if (!empty($searchArgs['paperName'])) {
            $condition['paper_name'] = array('like' => "%" . $searchArgs['paperName'] . "%");
        }
        if (!empty($searchArgs['authorId'])) {
            $condition['image_examined_auditor_id'] = array('eq' => $searchArgs['authorId']);
        }
        if (empty($condition)) {
            $condition = [];
        }
        $result = $this->findAll($condition, ['upload_time' => 'desc'], ['id', 'agency_id', 'paper_name', 'upload_time', 'image_examined_time', 'image_examined_status','subject_id','image_processing_days','image_examined_auditor_id','province','city','paper_id']);
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
                'agencyId' => $item['agency_id'],
                'paperId' => $item['paper_id'],
                'province' => isset($provinceIdNames[$item['province']]) ? $provinceIdNames[$item['province']] : '',
                'city' => isset($countrys[$item['city']]) ? $countrys[$item['city']] : '',
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
     * 保存套卷标签
     */
    public function youdaoPaperNameInsert($searchArgs)
    {
        if(!isset($searchArgs['taskId']))
        {
            throw new \Exception('缺少taskId');
        }
        $condition = [
            'task_id' => $searchArgs['taskId']
        ];
        $province = new Province();
        $provinces = $province->getProvince();//获取省份

        $provinceIds = [];
        $provinceIdNames = [];
        foreach ($provinces as $v) {
            $provinceIds[] = $v['id'];
            $provinceIdNames[$v['id']] = $v['city'];
        }

        $city = new City();
        $citys = $city->getIdCountrys($provinceIds);
        $countrys = $city->getIdAreas($provinceIds);
        $result = $this->findOne($condition, $order=[], ['agency_id']);
        $agencyId = $result['agency_id'];
        $subjectId = isset($searchArgs['subjectId']) ? $searchArgs['subjectId'] : 0;
        $common = new Common();
        $allSubjectNames = $common->getAllSubjectNames();
        $subjectName = isset($allSubjectNames[$subjectId]) ? $allSubjectNames[$subjectId] : '';
        $str = '';
        if($subjectName){
            $str = $common->stringTransformation($subjectName);
        }
        $grade = isset($searchArgs['grade']) ? $searchArgs['grade'] : 0;
        $province = isset($searchArgs['province']) ? $searchArgs['province'] : 0;
        if($searchArgs['city']){
            $city = isset($searchArgs['city']) ? explode('-',$searchArgs['city'])[1] : '';
        }else{
            $city = 0;
        }
        $country = isset($searchArgs['country']) ? $searchArgs['country'] : '';
        $countryName = isset($countrys[$country]) ? $countrys[$country] : '';
        $school = isset($searchArgs['school']) ? $searchArgs['school'] : '';
        $year = isset($searchArgs['year']) ? $searchArgs['year'] : 0;
        $semester = isset($searchArgs['term']) ? $searchArgs['term'] : '';
        $source = isset($searchArgs['source']) ? $searchArgs['source'] : '';
        $duration = isset($searchArgs['duration']) ? $searchArgs['duration'] : 0;
        $score = isset($searchArgs['score']) ? $searchArgs['score'] : 0;
        $questionNumber = isset($searchArgs['questionNumber']) ? $searchArgs['questionNumber'] : 0;
        $other1 = isset($searchArgs['other1']) ? $searchArgs['other1'] : '';
        $other2 = isset($searchArgs['other2']) ? $searchArgs['other2'] : '';

        //0-套卷VIP-学部-学科-年份-省份-市-区-学校-年级-学期-考试类型-其他信息1-其他信息2-考试时长-考试满分-题目数量
        $gradeName = config('app.GRADE_VALUE');
        $gradeValue = isset($gradeName[$grade]) ? $gradeName[$grade] : 0;
        $cityValue = isset($citys[$city]) ? $citys[$city] : 0;
        $provinceValue = isset($provinceIdNames[$province]) ? $provinceIdNames[$province] : 0;
        $paperName = $agencyId.'-'.'套卷VIP'.'-'.$str.'-'.$year.'-'.$provinceValue.'-'.$cityValue.'-'.$countryName.'-'.$school.'-'.$gradeValue.'-'.$semester.'-'.$source.'-'.$other1.'-'.$other2.'-'.$duration.'-'.$score.'-'.$questionNumber;

        $data = [
            'subject_id' => $subjectId,
            'grade' => $grade,
            'province' => $province,
            'city' => $city,
            'area' => $country,
            'school' => $school,
            'year' => $year,
            'semester' => $semester,
            'source' => $source,
            'examination_length' => $duration,
            'examination_score' => $score,
            'question_number' => $questionNumber,
            'other_information_one' => $other1,
            'other_information_two' => $other2,
            'paper_name' => $paperName,
            'image_error_type' => ''
        ];
        $condition = array(
            'task_id' => $searchArgs['taskId']
        );
        $result = $this->edit($data, $condition);

        if($result === false)
        {
            throw new \Exception('保存标签失败');
        }
    }



    /**
     * 试卷导出
     * @param $searchArgs
     * @return array
     */
    public function paperAll($searchArgs)
    {
        $list = [];
        $condition = $this->paperCondition($searchArgs);
        $recordCount = $this->count($condition);
        $limit = 1000;
        $max = ceil($recordCount / $limit);
        for($i=1; $i<=$max; $i++){
            $result = $this->findAll($condition,['upload_time'=>'asc'], ['*'], '', [], $i, $limit);
            $result = json_decode(json_encode($result), true);
            if($result['data']){
                foreach ($result['data'] as $key => $row){
                    $list[] = $row;
                }
            }
        }
        $list = $this->formatPaperList($list);
        return $list;
    }


    /**
     * 试卷审核成功处理
     * @param $data
     * @return int
     */
    public function paperExamined($data, $userInfo)
    {
        $status = 0;
        if($data){
            $time = time();
            $common = new CommonController;
            $question = new Question;
            $paper = new Paper;
            $paperInfo = array(
                'grade_id' => $data['grade_id'],
                'subject_id' => $data['subject_id'],
                'name' => $data['source'],
                'source' => $data['source'],
                'year' => $data['year'],
                'province' => $data['province_name'],
                'city' => $data['city_name'],
                'country' => $data['area_name'],
                'school' => $data['school'],
                'grades' => $data['grade'],
                'term' => $data['semester'],
                'duration' => $data['examination_length'],
                'score' => $data['examination_score'],
                'question_number' => $data['question_number'],
                'created_time' => $time,
                'file_name' => $data['paper_name'],
                'file_name_md5' => md5($data['paper_name']),
                'show_name' => isset($data['youdao_info']['textbook']['name'])?$data['youdao_info']['textbook']['name']:$data['show_name'],
                'agency_id' => $data['agency_id'],
                'paper_type' => 2,//1教研，2有道
            );
            $this->beginTransaction();
            $paperId = $paper->add($paperInfo);
            if(!$paperId){
                $this->rollback();
                throw new \Exception('试卷添加失败');
            }
            //更新vip_youdao_examined表paper_id字段，和试卷状态、试卷审核人、试卷审核通过时间
            $lastYoudaoTime = $this->getLastYoudaoTime($data['task_id']);
            $result = $this->edit(array('paper_id' => $paperId,
                                        'image_examined_status' => 6,
                                        'paper_examined_status' => 3,
                                        'paper_examined_auditor_id' => $userInfo['id'],
                                        'paper_examined_time' => date('Y-m-d H:i:s'),
                                        'final_youdao_receive_time' => $lastYoudaoTime['last_receive_time'],
                                        'final_processing_time' => $lastYoudaoTime['last_processing_time'],
                                        'final_processing_days' => $lastYoudaoTime['last_processing_days']),
                                array('task_id' => $data['task_id'])
            );
            if(!$result){
                $this->rollback();
                throw new \Exception('更新试卷数据失败');
            }

            //更新最后一次有道处理记录的审核结果
            $vip_paper_examined_details = new VipPaperExaminedDetails;
            $lastYoudaoPaperDetail = $vip_paper_examined_details->findOne(array('task_id'=>$data['task_id']), ['id'=>'desc']);
            $result = $vip_paper_examined_details->edit(array('author_id'=>$userInfo['id'], 'audit_time'=>date('Y-m-d H:i:s'), 'audit_status'=>1), array('id'=>$lastYoudaoPaperDetail['id']));
            if(!$result){
                $this->rollback();
                throw new \Exception('更新有道处理记录审核结果失败');
            }

            $fileArr['paper_id'] = $paperId;
            $fileArr['paper_url'] = $data['youdao_info']['textbook']['paperFilePath'];

            if(!empty($data['youdao_info']['questions'])){
                $ques = new Question;
                $opt = new VipQuestionOption;
                $ans = new VipQuestionAnswer;
                $courseType = new VpDictCourseType();
                $courseTypeInfo = $courseType->findOne(array('subject_id'=>$data['subject_id']), ['sort'=>'asc']);
                $courseTypeId = $courseTypeInfo['id'];
                foreach ($data['youdao_info']['questions'] as $key => $q){
                    $question = [];
                    $question['course_type_id'] = isset($courseTypeId)?$courseTypeId:0;
                    $question['number'] = isset($q['quesNo'])?$q['quesNo']:($key+1);
                    $question['score'] = isset($q['quesScore'])?$q['quesScore']:'';
                    $question['yd_question_type'] = $q['quesType'];
                    $question['content'] = $q['quesLatextContent']['content'];
                    $question['content_text'] = strip_tags($q['quesLatextContent']['content']);
                    $question['analysis'] = $q['quesLatextAnalysis']['content'];
                    $question['analysis_text'] = strip_tags($q['quesLatextAnalysis']['content']);
                    $question['paper_id'] = $paperId;
                    $question['created_time'] = $time;
                    $question['sdate'] = date('Ym');
                    $question['source'] = $data['source'];
                    $question['grade_id'] = $data['grade'];
                    $question['subject_id'] = $data['subject_id'];
                    $question['school'] = $data['school'];
                    $question['province'] = $data['province'];
                    $question['city'] = $data['city'];
                    $question['country'] = $data['area'];
                    $question['year'] = $data['year'];
                    $question['term'] = $data['semester'];
                    $question['name'] = $data['source'];
                    $question['agency_id'] = $data['agency_id'];
                    $question['yd_question_type'] = $q['quesType'];
                    $question['is_yd'] = 1;
                    $question['status'] = 1;
                    $newQuesId = $ques->add($question);
                    if(!$newQuesId){
                        $this->rollback();
                        throw new \Exception('试题添加失败');
                    }else{
                        $fileArr['questions'][$key]['question_id'] = $newQuesId;
                        $fileArr['questions'][$key]['content_file'] = isset($q['quesLatextContent']['fileUrl'])?$q['quesLatextContent']['fileUrl']:'';

                        //解析文档
                        $fileArr['questions'][$key]['analysis_file'] = isset($q['quesLatextAnalysis']['fileUrl'])?$q['quesLatextAnalysis']['fileUrl']:'';
                    }

                    //选项录入
                    if($q['hasOptions'] == 1 && !empty($q['options'])){
                        foreach ($q['options'] as $k => $o){
                            $option['question_id'] = $newQuesId;
                            $option['content'] = $o['latexContent'];
                            $option['content_text'] = strip_tags($o['latexContent']);
                            switch ($o['label']){
                                case 'A':
                                    $option['sort'] = 1;
                                    break;
                                case 'B':
                                    $option['sort'] = 2;
                                    break;
                                case 'C':
                                    $option['sort'] = 3;
                                    break;
                                case 'D':
                                    $option['sort'] = 4;
                                    break;
                                case 'E':
                                    $option['sort'] = 5;
                                    break;
                                case 'F':
                                    $option['sort'] = 6;
                                    break;
                                case 'G':
                                    $option['sort'] = 7;
                                    break;
                                case 'H':
                                    $option['sort'] = 8;
                                    break;
                                case 'I':
                                    $option['sort'] = 9;
                                    break;
                            }
                            $option['is_answer'] = ($o['isAnswer'] == 1)? 1 : 0;
                            $newOptionId = $opt->add($option);
                            if(!$newOptionId){
                                $this->rollback();
                                throw new \Exception('试题选项添加失败');
                            }
                            $fileArr['questions'][$key]['options'][] = array(
                                'option_id'=>$newOptionId,
                                'option_file'=>isset($o['latexFilePath'])?$o['latexFilePath']:''
                            );
                        }

                    }else{
                        $answer['question_id'] = $newQuesId;
                        $answer['content'] = $q['quesLatextAnswer']['content'];
                        $answer['content_text'] = $q['quesLatextAnswer']['content'];
                        $newAnswerId = $ans->add($answer);
                        if(!$newAnswerId){
                            $this->rollback();
                            throw new \Exception('试题答案添加失败');
                        }
                        $fileArr['questions'][$key]['answer_id'] = $newAnswerId;
                        $fileArr['questions'][$key]['answer_file'] = isset($q['quesLatextAnswer']['fileUrl'])?$q['quesLatextAnswer']['fileUrl']:'';
                    }

                    //查看vip_youdao_question中该试题是否有记录，若无记录，则插入一条，若有记录，则不做操作(即使试题没有被退回过也需要录一条记录，此种试题也需导出)
                    $vip_youdao_question = new VipYoudaoQuestion;
                    $count = $vip_youdao_question->count(array('task_id'=>$data['task_id'], 'quesNumber'=>$q['quesNumber']));
                    if($count == 0){
                        $newYoudaoQuestion = array(
                            'task_id' => $data['task_id'],
                            'quesNumber' => $q['quesNumber'],
                            'youdao_receive_time' => $lastYoudaoPaperDetail['youdao_receive_time'],
                            'youdao_processing_time' => $lastYoudaoPaperDetail['youdao_processing_time'],
                            'processing_days' => $lastYoudaoPaperDetail['processing_days'],
                            'many_times' => 1,
                            'create_time'=>date('Y-m-d H:i:s')
                        );
                        $result = $vip_youdao_question->add($newYoudaoQuestion);
                        if(!$result){
                            $this->rollback();
                            throw new \Exception('一次性审核即通过的试题录入失败');
                        }
                    }

                    //更新vip_youdao_question_details表question_id字段
                    $ydQuesDetail = new VipYoudaoQuestionDetails;
                    $count = $ydQuesDetail->count(array('task_id'=>$data['task_id'], 'quesNumber'=>$q['quesNumber']));
                    if($count > 0){
                        $result = $ydQuesDetail->edit(array('paper_id'=>$paperId, 'question_id'=>$newQuesId), array('task_id'=>$data['task_id'], 'quesNumber'=>$q['quesNumber']));
                        if(!$result){
                            $this->rollback();
                            throw new \Exception('试卷ID、试题ID更新失败');
                        }
                    }else{
                        $newQuestionDetail = array(
                            'task_id'=>$data['task_id'],
                            'quesNumber'=>$q['quesNumber'],
                            'paper_id'=>$paperId,
                            'question_id'=>$newQuesId,
                            'youdao_receive_time'=>$lastYoudaoPaperDetail['youdao_receive_time'],
                            'youdao_processing_time'=>$lastYoudaoPaperDetail['youdao_processing_time'],
                            'processing_days'=>$lastYoudaoPaperDetail['processing_days']
                        );
                        $result = $ydQuesDetail->add($newQuestionDetail);
                        if(!$result){
                            $this->rollback();
                            throw new \Exception('试卷相关试题录入失败');
                        }
                    }

                }
            }

            //审核通过反馈给有道
            $result = $common->doYoudaoComplete(config('app.YOUDAO_COMPLETE_URL'), $data['task_id']);
            $result = json_decode($result, true);
            if($result['code'] !== 200){
                $this->rollback();
                throw new \Exception('有道错误：审核通过反馈有道失败，code：'.$result['code'].','.$result['message']);
            }


            //$common->uploadPaperFile($fileArr);
            /**
             * 录入有道试卷文件上传任务表（计划任务自动上传有道解析的试题文件至题库服务器相应目录）
             */
            $vip_youdao_paper_file_upload_task = new VipYoudaoPaperFileUploadTask();
            $result = $vip_youdao_paper_file_upload_task->add(
                array(
                    'task_id'=>$data['task_id'],
                    'file_json'=>json_encode($fileArr),
                    'create_time'=>date('Y-m-d H:i:s')
                )
            );
            if(!$result){
                $this->rollback();
                throw new \Exception('试卷文件上传任务录入失败');
            }

            $this->commit();
            $status = 1;
        }
        return $status;
    }



    public function updateFirstYouDaoTime($data)
    {
        if($data['taskId']){
            $taskInfo = $this->findOne(array('task_id' => $data['taskId']));
            if($data['isPass']==1 && isset($data['youdaoProcessingTime']) && $taskInfo['paper_examined_status'] == 2){
                throw new \Exception('此任务已经为待审核状态，不能重复处理');
            }
            if($data['isPass']==0 && $taskInfo['paper_examined_status'] == 5){
                throw new \Exception('此任务已经为关闭状态，不能重复处理');
            }
            $first_youdao_receive_time = $data['youdaoReceiveTime'];
            $row = array(
                'first_youdao_receive_time' => $first_youdao_receive_time,
                'final_youdao_receive_time' => $first_youdao_receive_time,
            );
            if($data['isPass'] == 1){
                if(isset($data['youdaoProcessingTime'])){
                    //第一次投递任务成功后有道审核通过
                    $row['paper_examined_status'] = 2;
                    $first_processing_days = $this->getDiffDaysCount($first_youdao_receive_time, $data['youdaoProcessingTime']);
                    $row['first_processing_time'] = $data['youdaoProcessingTime'];
                    $row['first_processing_days'] = $first_processing_days;
                    $row['final_processing_time'] = $data['youdaoProcessingTime'];
                    $row['final_processing_days'] = $first_processing_days;
                }else{
                    $row['paper_examined_status'] = 1;
                }
                $row['image_examined_status'] = 5;
                $row['show_name'] = isset($data['name']) ? $data['name'] : '';
            }else{
                //第一次投递任务成功后有道审核不通过，图片退回，试卷为未处理
                $row['paper_examined_status'] = 0;
                $row['image_examined_status'] = 3;
                $row['image_examined_time'] = date('Y-m-d H:i:s');
                $row['image_error_type'] = '图片不清晰';
            }

            $this->beginTransaction();
            $result = $this->edit($row, array('task_id' => $data['taskId']));
            if(!$result){
                $this->rollback();
                throw new \Exception('有道第一次处理成功回调处理失败');
            }

            $newPaperExaminedDetail = array(
                'task_id' => $data['taskId'],
                'youdao_receive_time' => $first_youdao_receive_time,
                'youdao_status'=>$data['isPass'],
            );
            if($data['isPass'] == 1 && isset($data['youdaoProcessingTime'])){
                $newPaperExaminedDetail['youdao_processing_time'] = $data['youdaoProcessingTime'];
                $newPaperExaminedDetail['processing_days'] = $first_processing_days;
            }
            $vip_paper_examined_details = new VipPaperExaminedDetails;
            $lastPaperExaminedDetail = $this->getLastPaperExaminedDetail($data['taskId']);
            if(!empty($lastPaperExaminedDetail) && $lastPaperExaminedDetail['youdao_processing_time'] == ''){
                $result = $vip_paper_examined_details->edit($newPaperExaminedDetail, array('id'=>$lastPaperExaminedDetail['id']));
            }else{
                $result = $vip_paper_examined_details->add($newPaperExaminedDetail);
            }
            if(!$result){
                $this->rollback();
                throw new \Exception('有道第一次处理成功回调处理信息更新失败');
            }

            //如果有道审核不通过，则删除该任务所有图片
            if($data['isPass'] == 0){
                $vip_paper_image = new VipPaperImage;
                $result = $vip_paper_image->edit(array('is_delete'=>1), array('task_id'=>$data['taskId']));
                if(!$result){
                    $this->rollback();
                    throw new \Exception('有道审核未通过回调处理任务图片删除失败');
                }
            }
            $this->commit();
            return true;
        }
        return false;
    }



    public function getLastPaperExaminedDetail($taskId)
    {
        $vip_paper_examined_details = new VipPaperExaminedDetails;
        return $vip_paper_examined_details->findOne(array('task_id'=>$taskId), ['id'=>'desc']);
    }


    public function updateErrorYouDaoTime($data)
    {
        if($data['taskId']){
            $taskInfo = $this->findOne(array('task_id' => $data['taskId']));
            if($taskInfo['paper_examined_status'] == 3){
                throw new \Exception('处理失败，此任务已经完结，请勿重复处理');
            }
            $vip_paper_examined_details = new VipPaperExaminedDetails;
            $vip_youdao_paper = new VipYoudaoPaper;
            $vip_youdao_question =  new VipYoudaoQuestion;
            $vip_youdao_question_details =  new VipYoudaoQuestionDetails;
            if(isset($data['youdaoProcessingTime'])){
                //有道编辑处理完成
                $lastPaperExaminedDetail = $this->getLastPaperExaminedDetail($data['taskId']);
                $this->beginTransaction();
                $processing_days = $this->getDiffDaysCount($data['youdaoReceiveTime'], $data['youdaoProcessingTime']);
                $newData = array(
                    'youdao_status'=>$data['isPass']
                );
                if($data['isPass'] == 1){
                    $newData['youdao_receive_time'] = $data['youdaoReceiveTime'];
                    $newData['youdao_processing_time'] = $data['youdaoProcessingTime'];
                    $newData['processing_days'] = $processing_days;
                }
                $result = $vip_paper_examined_details->edit($newData, array('id'=>$lastPaperExaminedDetail['id']));
                if($data['isPass'] == 1){
                    if(isset($data['list'])){
                        $data['list'] = json_decode($data['list'], true);
                        if(count($data['list']) > 0){
                            foreach ($data['list'] as $key => $q){
                                //更新vip_youdao_question表
                                $lastYoudaoQuestion = $vip_youdao_question->findOne(array('task_id'=>$data['taskId'], 'quesNumber'=>$q['number']), ['id'=>'desc']);
                                //$processing_days = $this->getDiffDaysCount($data['youdaoReceiveTime'], $data['youdaoProcessingTime']);
                                $count = $vip_youdao_question->count(array('task_id'=>$data['taskId'], 'quesNumber'=>$q['number']));
                                $newData = array(
                                    'youdao_receive_time' => $data['youdaoReceiveTime'],
                                    'youdao_processing_time' => $data['youdaoProcessingTime'],
                                    'processing_days' => $processing_days,
                                    'many_times' => $count
                                );
                                $result = $vip_youdao_question->edit($newData, array('id'=>$lastYoudaoQuestion['id']));
                                if(!$result){
                                    $this->rollback();
                                    throw new \Exception('更新试题有道处理时间失败');
                                }

                                //更新vip_youdao_question_details表，一道试题只有一条记录
                                $lastYoudaoQuestionDetail = $vip_youdao_question_details->findOne(array('task_id'=>$data['taskId'], 'quesNumber'=>$q['number']));
                                //$processing_days = $this->getDiffDaysCount($data['youdaoReceiveTime'], $data['youdaoProcessingTime']);
                                $newData = array(
                                    'youdao_receive_time' => $data['youdaoReceiveTime'],
                                    'youdao_processing_time' => $data['youdaoProcessingTime'],
                                    'processing_days' => $processing_days
                                );
                                $result = $vip_youdao_question_details->edit($newData, array('id'=>$lastYoudaoQuestionDetail['id']));
                                if(!$result){
                                    $this->rollback();
                                    throw new \Exception('更新试题有道处理时间失败');
                                }
                            }

                        }else{
                            $this->rollback();
                            throw new \Exception('有道处理问题试题成功后返回的试题不能为空');
                        }
                    }

                    //若有道审核通过且处理完成，则激活任务待审状态
                    $newData = array(
                        'paper_examined_status'=>2,
                        'final_youdao_receive_time'=>$data['youdaoReceiveTime'],
                        'final_processing_time'=>$data['youdaoProcessingTime'],
                        'final_processing_days'=>$processing_days,
                    );
                    if(isset($data['name'])){
                        $newData['show_name'] = $data['name'];
                    }
                }else{
                    //若有道审核未通过，则默认已处理，任务状态改为待审，图片,更新最终有道接收、处理时间
                    $newData = array(
                        'image_examined_status'=>5,
                        'paper_examined_status'=>2,
                        'final_youdao_receive_time'=>$data['youdaoReceiveTime'],
                        'final_processing_time'=>$data['youdaoProcessingTime'],
                        'final_processing_days'=>$processing_days
                    );
                }
                file_put_contents($_SERVER['DOCUMENT_ROOT'].'/batchLog/newData'.date('Ymd').'.txt',json_encode(array_merge($newData, array('task_id'=>$data['taskId']))).PHP_EOL,FILE_APPEND);
                //更新任务状态，如通过有道审核，则激活试卷待审状态，如未通过有道审核，则关闭任务
                $result = $this->edit($newData, array('task_id'=>$data['taskId']));
                if(!$result){
                    $this->rollback();
                    throw new \Exception('试卷状态更新失败');
                }
                $this->commit();
                return true;
            }else{
                //有道审核完成（未开始处理）
                $vip_paper_examined_details = new VipPaperExaminedDetails;
                $lastPaperExaminedDetail = $this->getLastPaperExaminedDetail($data['taskId']);
                $this->beginTransaction();
                $newData = array(
                    'youdao_status'=>$data['isPass'],
                    'youdao_receive_time'=> $data['youdaoReceiveTime']
                );
                $result = $vip_paper_examined_details->edit($newData, array('id'=>$lastPaperExaminedDetail['id']));
                if($data['isPass'] == 1) {
                    if(isset($data['list'])){
                        $data['list'] = json_decode($data['list'], true);
                        if (count($data['list']) > 0) {
                            foreach ($data['list'] as $key => $q) {
                                //更新vip_youdao_question表
                                $lastYoudaoQuestion = $vip_youdao_question->findOne(array('task_id'=>$data['taskId'], 'quesNumber'=>$q['number']), ['id'=>'desc']);
                                $count = $vip_youdao_question->count(array('task_id'=>$data['taskId'], 'quesNumber'=>$q['number']));
                                $newData = array(
                                    'youdao_receive_time' => $data['youdaoReceiveTime'],
                                    'many_times' => $count
                                );
                                $result = $vip_youdao_question->edit($newData, array('id'=>$lastYoudaoQuestion['id']));
                                if(!$result){
                                    $this->rollback();
                                    throw new \Exception('更新试题有道处理时间失败');
                                }


                                //更新vip_youdao_question_details表，一道试题只有一条记录
                                $lastYoudaoQuestionDetail = $vip_youdao_question_details->findOne(array('task_id'=>$data['taskId'], 'quesNumber'=>$q['number']));
                                $newData = array(
                                    'youdao_receive_time' => $data['youdaoReceiveTime'],
                                );
                                $result = $vip_youdao_question_details->edit($newData, array('id'=>$lastYoudaoQuestionDetail['id']));
                                if(!$result){
                                    $this->rollback();
                                    throw new \Exception('更新试题有道处理时间失败');
                                }
                            }
                        }else{
                            $this->rollback();
                            throw new \Exception('有道审核问题试题成功后返回的试题不能为空');
                        }
                    }

                    //若有道审核通过,还未处理时，则不更新任务状态，只更新有道接收时间
                    $newData = array(
                        'final_youdao_receive_time'=>$data['youdaoReceiveTime'],
                        'image_examined_status'=>5,
                    );
                    if(isset($data['name'])){
                        $newData['show_name'] = $data['name'];
                    }
                }else{
                    //若有道审核未通过，则默认已处理，任务状态改为待审，图片,更新最终有道接收、处理时间
                    $newData = array(
                        //'image_examined_status'=>5,
                        //'paper_examined_status'=>2,
                        'final_youdao_receive_time'=>$data['youdaoReceiveTime'],
                        'final_processing_time'=>$data['youdaoReceiveTime'],
                    );
                }
                //更新任务状态，如通过有道审核，则激活试卷待审状态，如未通过有道审核，则关闭任务
                $result = $this->edit($newData, array('task_id'=>$data['taskId']));
                if(!$result){
                    $this->rollback();
                    throw new \Exception('试卷状态更新失败');
                }
                $this->commit();
                return true;
            }
        }
        return false;
    }


    /**
     * 计算有道加工工作日数
     * @param $startTime
     * @param $endTime
     * @return count
     */
    public function getDiffDaysCount($startTime, $endTime)
    {
        $vipYoudaoWorkingWeekendDays =  new VipYoudaoWorkingWeekendDays;
        return $vipYoudaoWorkingWeekendDays->getDiffDaysCount($startTime, $endTime);
    }


    /**
     * 试卷审核不通过处理
     * @param $data
     * @param $paperInfo
     * @return bool
     */
    public function paperError($data, $paperInfo, $userInfo)
    {
        $this->beginTransaction();
        $nowTime = date('Y-m-d H:i:s');
        //更新试卷审核状态、审核时间、审核人
        $result = $this->edit(array('paper_examined_status'=>4, 'paper_examined_time'=>$nowTime, 'paper_examined_auditor_id'=>$userInfo['id']), array('task_id'=>$data['taskId']));
        if(!$result){
            $this->rollback();
            throw new \Exception('试卷审核状态更新失败');
        }
        //更新最后一次有道处理记录的审核结果
        $vip_youdao_examined_details = new VipPaperExaminedDetails;
        $lastYoudaoPaperDetail = $vip_youdao_examined_details->findOne(array('task_id'=>$data['taskId']), ['id'=>'desc']);
        $result = $vip_youdao_examined_details->edit(array('author_id'=>$userInfo['id'], 'audit_time'=>date('Y-m-d H:i:s'), 'audit_status'=>2, 'return_reason'=>json_encode($data)), array('id'=>$lastYoudaoPaperDetail['id']));
        if(!$result){
            $this->rollback();
            throw new \Exception('更新有道处理记录审核结果失败');
        }

        //审核不通过反馈给有道
        $common = new CommonController;
        $result = $common->doYoudaoFeedback(config('app.YOUDAO_FEEDBACK_URL'), $data);
        $result = json_decode($result, true);
        if($result['code'] !== 200){
            $this->rollback();
            throw new \Exception('有道错误：审核不通过反馈有道失败！code:'.$result['code'].','.$result['message']);
        }

        //插入新的有道处理记录
        $newPaperExaminedDetail = array(
            'task_id' => $data['taskId'],
            //'youdao_receive_time' => $nowTime,
        );
        $newDetailId = $vip_youdao_examined_details->add($newPaperExaminedDetail);
        if(!$newDetailId){
            $this->rollback();
            throw new \Exception('试卷有道处理记录添加失败');
        }
        if($data['isPaperError'] == 1){
            $newPaperError = array(
                'task_id' => $data['taskId'],
                'paper_name' => $paperInfo['paper_name'],
                'content' => $data['paperErrorDesc'],
                'create_time'=>$nowTime
            );
            $vip_youdao_paper = new VipYoudaoPaper;
            $newErrorId = $vip_youdao_paper->add($newPaperError);
            if(!$newErrorId){
                $this->rollback();
                throw new \Exception('试卷问题记录添加失败');
            }
        }
        if(count($data['list']) > 0){//如果有问题试题
            $vip_youdao_question = new VipYoudaoQuestion;
            $vip_youdao_question_details = new VipYoudaoQuestionDetails;
            foreach ($data['list'] as $key => $error){
                $return_times = $vip_youdao_question->count(array('task_id'=>$data['taskId'], 'quesNumber'=>$error['number']));
                $newErrorQuestion = array(
                        'task_id' => $data['taskId'],
                        'quesNumber' => $error['number'],
                        //'youdao_receive_time' => $nowTime,
                        //'many_times' => $return_times + 1,
                        'return_reason_content1' => $error['content'],
                        'return_reason_answer1' => $error['answer'],
                        'return_reason_analysis1' => $error['analysis'],
                        'create_time'=>$nowTime
                );

                $newErrorQuestionId = $vip_youdao_question->add($newErrorQuestion);
                if(!$newErrorQuestionId){
                    $this->rollback();
                    throw new \Exception('试题退回有道接收记录添加失败');
                }

                $newQuestionDetail = array(
                    'task_id' => $data['taskId'],
                    'quesNumber' => $error['number'],
                    //'youdao_receive_time' => $nowTime,
                    'return_times' => $return_times + 1,
                    'money' => 0,
                );
                $count = $vip_youdao_question_details->count(array('task_id'=>$data['taskId'], 'quesNumber'=>$error['number']));
                if($count > 0){
                    $result = $vip_youdao_question_details->edit($newQuestionDetail, array('task_id'=>$data['taskId'], 'quesNumber'=>$error['number']));
                }else{
                    $result = $vip_youdao_question_details->add($newQuestionDetail);
                }
                if(!$result){
                    $this->rollback();
                    throw new \Exception('试题退回有道详细原因记录添加失败');
                }
            }

        }
        $this->commit();
        return true;
    }


    public function getLastYoudaoTime($taskId)
    {
        $lastPaperExaminedDetail = $this->getLastPaperExaminedDetail($taskId);
        if($lastPaperExaminedDetail){
            $lastYoudaoReceiveTime = $lastPaperExaminedDetail['youdao_receive_time'];
            $lastYoudaoProcessingTime = $lastPaperExaminedDetail['youdao_processing_time'];
            $lastYoudaoProcessingDays = $lastPaperExaminedDetail['processing_days'];
        }else{
            //当前条件有道处理时间第一次即为最后一次
            $youdaoExaminedInfo = $this->findOne(array('task_id'=>$taskId));
            $lastYoudaoReceiveTime = $youdaoExaminedInfo['first_youdao_receive_time'];
            $lastYoudaoProcessingTime = $youdaoExaminedInfo['first_processing_time'];
            $lastYoudaoProcessingDays = $youdaoExaminedInfo['first_processing_days'];
        }
        return array('last_receive_time'=>$lastYoudaoReceiveTime,
                     'last_processing_time'=>$lastYoudaoProcessingTime,
                     'last_processing_days'=>$lastYoudaoProcessingDays
        );
    }


    //批量自动审核任务
    public function batchExamined()
    {
        $autoAuditDays = config('app.AUTO_AUDIT_DAYS');
        $vipYoudaoWorkingWeekendDays =  new VipYoudaoWorkingWeekendDays;
        $startTime = $vipYoudaoWorkingWeekendDays->getStartTime($autoAuditDays);
        $vip_paper_examined_details = new VipPaperExaminedDetails;
        $condition = array(
            'paper_examined_status' => 2,
            'author_id' => array('eq'=>null),
            'youdao_processing_time' => array('between' => array(date('Y-m-d H:i:s',0), $startTime))
        );
        $join = array(
            array('type'=>'left', 'table'=>'vip_youdao_examined', 'on'=>array($this->table.'.task_id'=>$vip_paper_examined_details->getTable().'.task_id')),
        );
        $recordCount = $vip_paper_examined_details->count($condition, $join);
        $limit = 1000;
        $max = ceil($recordCount / $limit);
        $successArr = $resultArr = [];
        if($recordCount > 0){
            for($i=1; $i<=$max; $i++) {
                $result = $vip_paper_examined_details->findAll($condition, ['id' => 'asc'], ['vip_paper_examined_details.id','vip_paper_examined_details.task_id','vip_paper_examined_details.youdao_receive_time','vip_paper_examined_details.youdao_processing_time','vip_paper_examined_details.processing_days','vip_youdao_examined.open_id','vip_youdao_examined.create_uid'], '', $join, $i, $limit);
                $result = json_decode(json_encode($result), true);
                if($result['data']){
                    foreach ($result['data'] as $key => $row){
                        //试卷、试题入库
                        $paper = new PaperController;
                        $paperInfo = $paper->getPaperInfo($row['task_id']);
                        $result = $this->paperExamined($paperInfo, array('id'=>-1));
                        if(!$result){
                            $resultArr[] = array('task_id'=>$row['task_id'],'is_success'=>0);
                            continue;
                        }else{
                            $resultArr[] = array('task_id'=>$row['task_id'],'is_success'=>1);
                            $successArr[] = array(
                                'agencyId' => $row['agency_id'],
                                'userId' => $row['create_uid'],
                                'paperName' => $row['paper_name'],
                            );
                        }
                    }
                }
            }

        }
        return array('successTask'=>$successArr, 'resultArr'=>$resultArr);
    }


    public function getProcessList($taskId){
        $processList = [];
        $taskInfo = $this->findOne(array('task_id'=>$taskId), [], ['agency_id', 'upload_time', 'image_examined_time', 'image_examined_status', 'image_examined_auditor_id', 'create_uid']);
        $vip_paper_examined_details = new VipPaperExaminedDetails;
        $examinedDetails = $vip_paper_examined_details->findAll(array('task_id'=>$taskId), ['id'=>'asc']);
        if($taskInfo){
            if($taskInfo['image_examined_auditor_id']){
                $userIdArr[] = $taskInfo['image_examined_auditor_id'];
            }
            if($taskInfo['create_uid']){
                $userIdArr[] = $taskInfo['create_uid'];
            }
            if($examinedDetails){
                foreach ($examinedDetails as $key=>$detail){
                    $userIdArr[] = $detail['author_id'];
                }
            }

            //获取用户姓名
            $user = new User;
            $userIdArr = array_unique($userIdArr);
            $userArr = [];
            $userArr['-1'] = '自动审核';
            if(!empty($userIdArr)){
                $users = $user->getUsersByIds($userIdArr);
                if(!empty($users)){
                    foreach ($users  as $key=>$row){
                        $userArr[$row['id']] = $row['user_realname'];
                    }
                }
            }
        }

        if($taskInfo['create_uid'] && $taskInfo['agency_id']){
            $data =  array(
                'platform' => env('MICRO_API_SERVICE_TYPE'), //平台类型
                'secret' => env('MICRO_API_SERVICE_KEY'),//秘钥
                'userId' => $taskInfo['create_uid'], //用户id
                'agencyId' =>$taskInfo['agency_id'],
            );
            $klibTeacherClient = new KlibTeacherClient();
            $freeToken = $klibTeacherClient->getFreeToken($data);
            $teacherInfo = $klibTeacherClient->getTeacherInfo($taskInfo['create_uid'], $freeToken);
            if(!$teacherInfo){
                throw new \Exception('抱歉，查询不到上传该任务的教师信息');
            }
        }

        $processList[0] = array(
            'process_name'=>'上传图片',
            'process_time'=>$taskInfo['upload_time'],
            'process_user'=>$teacherInfo['realName'],
            'status'=>''
        );
        $processList[1] = array(
            'process_name'=>'审核图片',
            'process_time'=>$taskInfo['image_examined_time'],
            'process_user'=>$userArr[$taskInfo['image_examined_auditor_id']],
            'status'=>1
        );

        if($examinedDetails){
            foreach ($examinedDetails as $key=>$detail){
                if($detail['youdao_receive_time']){
                    $processList[] = array(
                        'process_name'=>'第'.($key+1).'次有道接收',
                        'process_time'=>$detail['youdao_receive_time'],
                        'process_user'=>'有道',
                        'status'=>abs($detail['youdao_status'])
                    );
                }

                if($detail['youdao_processing_time']){
                    $processList[] = array(
                        'process_name'=>'第'.($key+1).'次有道处理',
                        'process_time'=>$detail['youdao_processing_time'],
                        'process_user'=>'有道',
                        'status'=>''
                    );
                }

                if($detail['author_id']){
                    $processList[] = array(
                        'process_name'=>'第'.($key+1).'次审核试题',
                        'process_time'=>$detail['audit_time'],
                        'process_user'=>$userArr[$detail['author_id']],
                        'status'=>($detail['audit_status']==1)?1:0
                    );
                }

            }
        }
        return $processList;
    }
}

