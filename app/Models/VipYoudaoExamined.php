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
            $condition['final_processing_time'] = array('lt' => $searchArgs['endDate'].' 23:59:59');
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('gt' => $searchArgs['beginDate'].' 00:00:01');
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['final_processing_time'] = array('between' => array($searchArgs['beginDate'].' 00:00:01',$searchArgs['endDate'].' 23:59:59'));
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
            $condition['paper_examined_time'] = array('lt' => $searchArgs['auditEndDate'].' 23:59:59');
        }
        if (!empty($searchArgs['auditBeginDate']) && empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('gt' => $searchArgs['auditBeginDate'].' 00:00:01');
        }
        if (!empty($searchArgs['auditBeginDate']) && !empty($searchArgs['auditEndDate'])) {
            $condition['paper_examined_time'] = array('between' => array($searchArgs['auditBeginDate'].' 00:00:01',$searchArgs['auditEndDate'].' 23:59:59'));
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
                /*
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
                }*/
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
        $province = isset($searchArgs['province']) ? $searchArgs['province'] : '';
        $city = isset($searchArgs['city']) ? $searchArgs['city'] : '';
        $country = isset($searchArgs['country']) ? $searchArgs['country'] : '';
        $school = isset($searchArgs['school']) ? $searchArgs['school'] : '';
        $year = isset($searchArgs['yeer']) ? $searchArgs['yeer'] : 0;
        $semester = isset($searchArgs['semester']) ? $searchArgs['semester'] : '';
        $source = isset($searchArgs['source']) ? $searchArgs['source'] : '';
        $duration = isset($searchArgs['duration']) ? $searchArgs['duration'] : 0;
        $score = isset($searchArgs['score']) ? $searchArgs['score'] : 0;
        $questionNumber = isset($searchArgs['questionNumber']) ? $searchArgs['questionNumber'] : 0;
        $other1 = isset($searchArgs['other1']) ? $searchArgs['other1'] : '';
        $other2 = isset($searchArgs['other2']) ? $searchArgs['other2'] : '';
        //0-套卷VIP-学部-学科-年份-省份-市-区-学校-年级-学期-考试类型-其他信息1-其他信息2-考试时长-考试满分-题目数量
        $paperName = $agencyId.'-'.'套卷VIP'.'-'.$str.'-'.$year.'-'.$province.'-'.$city.'-'.$country.'-'.$school.'-'.$grade.'-'.$semester.'-'.$source.'-'.$other1.'-'.$other2.'-'.$duration.'-'.$score.'-'.$questionNumber;
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
    public function paperAll($searchArgs){
        $list = [];
        $condition = $this->paperCondition($searchArgs);
        $recordCount = $this->count($condition);
        $limit = 1000;
        $max = ceil($recordCount/$limit);
        for($i=1;$i<=$max;$i++){
            $result = $this->findAll($condition,['upload_time'=>'asc'],['*'],'',[],$i,$limit);
            $result = json_decode(json_encode($result), true);
            if($result['data']){
                foreach ($result['data'] as $key=>$row){
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
    public function paperExamin($data){
        $status = 0;
        if($data){
            $time = time();
            $question = new Question;
            $paper = new Paper;
            $paperInfo = array(
                'grade_id'=>$data['grade'],
                'subject_id'=>$data['subject_id'],
                'name'=>$data['source'],
                'source'=>$data['source'],
                'year'=>$data['year'],
                'province'=>$data['province'],
                'city'=>$data['city'],
                'country'=>$data['area'],
                'school'=>$data['school'],
                'grades'=>$data['grade'],
                'term'=>$data['semester'],
                'duration'=>$data['examination_length'],
                'score'=>$data['examination_score'],
                'question_number'=>$data['question_number'],
                'created_time'=>$time,
                'file_name'=>$data['paper_name'],
                'file_name_md5'=>md5($data['paper_name']),
                'show_name'=>$data['youdao_info']['paper_name'],
                'agency_id'=>$data['agency_id'],
                'paper_type'=>2,//1教研，2有道
            );
            $paper->beginTransaction();
            $paperId = $paper->add($paperInfo);
            if(!$paperId){
                $this->rollback();
                throw new \Exception('套卷添加失败');
            }
            //更新vip_youdao_examined表paper_id字段，和套卷状态、套卷审核人、套卷审核通过时间
            $lastYoudaoTime = $this->getLastYoudaoTime($data['task_id']);
            $result = $this->edit(array('paper_id'=>$paperId,
                                        'paper_examined_status'=>3,
                                        'paper_examined_auditor_id'=>$data['author_info']['id'],
                                        'paper_examined_time'=>date('Y-m-d H:i:s'),
                                        'final_youdao_receive_time'=>$lastYoudaoTime['last_receive_time'],
                                        'last_processing_time'=>$lastYoudaoTime['youdao_processing_time'],
                                        'last_processing_days'=>$lastYoudaoTime['processing_days']),
                                array('task_id'=>$data['task_id'])
            );
            if(!$result){
                $this->rollback();
                throw new \Exception('更新套卷数据失败');
            }

            //更新最后一次有道处理记录的审核结果
            $vip_paper_examined_details = new VipPaperExaminedDetails;
            $lastYoudaoPaperDetail = $vip_paper_examined_details->findOne(array('task_id'=>$data['task_id']),['id'=>'desc']);
            $result = $vip_paper_examined_details->edit(array('author_id'=>$data['author_info']['id'],'audit_time'=>date('Y-m-d H:i:s'),'audit_status'=>1),array('id'=>$lastYoudaoPaperDetail['id']));
            if(!$result){
                $this->rollback();
                throw new \Exception('更新有道处理记录审核结果失败');
            }

            /**
             * todo:套卷的latex内容文件是否需要上传到oss
             */
            if(!empty($data['youdao_info']['questions'])){
                $ques = new Question;
                $opt = new VipQuestionOption;
                $ans = new VipQuestionAnswer;
                foreach ($data['youdao_info']['questions'] as $key=>$q){
                    $question['number'] = $q['quesNumber'];
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
                    $newQuesId = $ques->add($question);
                    if(!$newQuesId){
                        $this->rollback();
                        throw new \Exception('试题添加失败');
                    }

                    //选项录入
                    if($q['hasOptions'] == 1){
                        foreach ($q['options'] as $k=>$o){
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
                            $option['is_answer'] = ($o['isAnswer']==1)?1:0;
                            $newOptionId = $opt->add($option);
                            if(!$newOptionId){
                                $this->rollback();
                                throw new \Exception('试题选项添加失败');
                            }
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
                    }

                    //更新vip_youdao_question_details表question_id字段
                    $ydQuesDetail = new VipYoudaoQuestionDetails;
                    $count = $ydQuesDetail->count(array('task_id'=>$data['task_id'],'quesNumber'=>$q['quesNumber']));
                    if($count > 0){
                        $result = $ydQuesDetail->edit(array('paper_id'=>$paperId,'question_id'=>$newQuesId),array('task_id'=>$data['task_id'],'quesNumber'=>$q['quesNumber']));
                        if(!$result){
                            $this->rollback();
                            throw new \Exception('套卷ID、试题ID更新失败');
                        }
                    }

                    /**
                     * todo:试题的题干、选项、答案、解析latex内容文件是否需要上传到oss
                     */


                }
            }
            /**
             * todo:审核通过后给有道反馈：有道暂时还没更新（挪到model的事务里去）
             */

            $this->commit();
            $status = 1;
        }
        return $status;
    }



    public function updateFirstYouDaoTime($data){
        if($data['taskId']){
            $taskInfo = $this->findOne(array('task_id'=>$data['taskId']));
            if($taskInfo['first_youdao_receive_time']){
                $first_youdao_receive_time =  $taskInfo['first_youdao_receive_time'];
            }else{
                $first_youdao_receive_time = $data['youdaoReceiveTime'];
            }
            $first_processing_days = $this->getDiffDaysCount($first_youdao_receive_time, $data['youdaoProcessingTime']);
            $row = array(
                'first_processing_time'=>$data['youdaoProcessingTime'],
                'first_processing_days'=>$first_processing_days,
                'paper_examined_status'=>2
            );

            $result = $this->edit($row,array('task_id'=>$data['taskId']));
            if($result){
                return true;
            }
            return false;
        }
        return false;
    }



    public function getLastPaperExaminedDetail($taskId){
        $vip_paper_examined_details = new VipPaperExaminedDetails;
        return $vip_paper_examined_details->findOne(array('task_id'=>$taskId),['id'=>'desc']);
    }


    public function updateErrorYouDaoTime($data){
        if($data['taskId']){
            $vip_paper_examined_details = new VipPaperExaminedDetails;
            $vip_youdao_paper = new VipYoudaoPaper;
            $vip_youdao_question =  new VipYoudaoQuestion;
            $vip_youdao_question_details =  new VipYoudaoQuestionDetails;
            $lastPaperExaminedDetail = $this->getLastPaperExaminedDetail($data['taskId']);
            $this->beginTransaction();
            $processing_days = $this->getDiffDaysCount($lastPaperExaminedDetail['youdao_receive_time'],$data['youdaoProcessingTime']);
            $newData = array(
                'youdao_processing_time'=>$data['youdaoProcessingTime'],
                'processing_days'=>$processing_days
            );
            $result = $vip_paper_examined_details->edit(array($newData),array('id'=>$lastPaperExaminedDetail['id']));
            if(count($data['list'])>0){
                foreach ($data['list'] as $key=>$q){
                    //更新vip_youdao_question表
                    $lastYoudaoQuestion = $vip_youdao_question->findOne(array('task_id'=>$data['taskId'],'number'=>$q['number']),['id'=>'desc']);
                    $processing_days = $this->getDiffDaysCount($lastYoudaoQuestion['youdao_receive_time'],$data['youdaoProcessingTime']);
                    $count = $vip_youdao_question->count(array('task_id'=>$data['taskId'],'number'=>$q['number']));
                    $newData = array(
                        'youdao_processing_time'=>$data['youdaoProcessingTime'],
                        'processing_days'=>$processing_days,
                        'many_times'=>$count
                    );
                    $result = $vip_youdao_question->edit($newData, array('id'=>$lastYoudaoQuestion['id']));
                    if(!$result){
                        $this->rollback();
                        throw new \Exception('更新试题有道处理时间失败');
                    }

                    //更新vip_youdao_question_details表
                    $lastYoudaoQuestionDetail = $vip_youdao_question_details->findOne(array('task_id'=>$data['taskId'],'number'=>$q['number']),['id'=>'desc']);
                    $processing_days = $this->getDiffDaysCount($lastYoudaoQuestionDetail['youdao_receive_time'],$data['youdaoProcessingTime']);
                    $newData = array(
                        'youdao_processing_time'=>$data['youdaoProcessingTime'],
                        'processing_days'=>$processing_days
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

            //激活套卷待审状态
            $result = $this->edit(array('paper_examined_status'=>2),array('task_id'=>$data['taskId']));
            if(!$result){
                $this->rollback();
                throw new \Exception('套卷待审状态激活失败');
            }
            $this->commit();
            return true;
        }
        return false;
    }


    /**
     * 计算有道加工工作日数
     * @param $startTime
     * @param $endTime
     * @return count
     */
    public function getDiffDaysCount($startTime, $endTime){
        $vipYoudaoWorkingWeekendDays =  new VipYoudaoWorkingWeekendDays;
        return $vipYoudaoWorkingWeekendDays->getDiffDaysCount($startTime, $endTime);
    }


    /**
     * 试卷审核不通过处理
     * @param $data
     * @param $paperInfo
     * @return bool
     */
    public function paperError($data, $paperInfo){
        $this->beginTransaction();
        $nowTime = date('Y-m-d H:i:s');
        /**
         * todo:审核不通过反馈:/api/gaosi/feedback，如果有道返回code不为200，则所有事务回滚
         */
        $result = $this->edit(array('paper_examined_status'=>4,'paper_examined_auditor_id'=>$data['author_info']['user_id'],'paper_examined_time'=>$nowTime),array('task_id'=>$data['task_id']));
        if(!$result){
            $this->rollback();
            throw new \Exception('套卷审核状态、审核时间、审核人更新失败');
        }
        //更新最后一次有道处理记录的审核结果
        $vip_youdao_examined_details = new VipPaperExaminedDetails;
        $lastYoudaoPaperDetail = $vip_youdao_examined_details->findOne(array('task_id'=>$data['task_id']),['id'=>'desc']);
        $result = $vip_youdao_examined_details->edit(array('author_id'=>$data['author_info']['id'],'audit_time'=>date('Y-m-d H:i:s'),'audit_status'=>2),array('id'=>$lastYoudaoPaperDetail['id']));
        if(!$result){
            $this->rollback();
            throw new \Exception('更新有道处理记录审核结果失败');
        }

        //插入新的有道处理记录
        $newPaperExaminedDetail = array(
            'task_id'=>$data['task_id'],
            'youdao_receive_time'=>$nowTime,
        );
        $newDetailId = $vip_youdao_examined_details->add($newPaperExaminedDetail);
        if(!$newDetailId){
            $this->rollback();
            throw new \Exception('套卷有道处理记录添加失败');
        }
        if($data['isPaperError'] == 1){
            $newPaperError = array(
                'task_id'=>$data['task_id'],
                'paper_name'=>$paperInfo['paper_name'],
                'content'=>$data['paperErrorDesc']
            );
            $vip_youdao_paper = new VipYoudaoPaper;
            $newErrorId = $vip_youdao_paper->add($newPaperError);
            if(!$newErrorId){
                $this->rollback();
                throw new \Exception('套卷问题记录添加失败');
            }
        }
        if(count($data['list']) > 0){//如果有问题试题
            $vip_youdao_question = new VipYoudaoQuestion;
            foreach ($data['list'] as $key=>$error){
                $newErrorQuestion = array(
                    'task_id'=>$data['task_id'],
                    'quesNumber'=>$error['number'],
                    'youdao_receive_time'=>$nowTime,
                );

                $newErrorQuestionId = $vip_youdao_question->add($newErrorQuestion);
                if(!$newErrorQuestionId){
                    $this->rollback();
                    throw new \Exception('试题退回有道接收记录添加失败');
                }

                $vip_youdao_question_details = new VipYoudaoQuestionDetails;
                $return_times = $vip_youdao_question_details->count(array('task_id'=>$data['task_id'],'quesNumber'=>$error['number']));
                $newQuestionDetail = array(
                    'task_id'=>$data['task_id'],
                    'quesNumber'=>$error['number'],
                    'youdao_receive_time'=>$nowTime,
                    'return_times'=>$return_times+1,
                    'money'=>0,
                    'return_reason_content1'=>$error['content'],
                    'return_reason_answer1'=>$error['answer'],
                    'return_reason_analysis1'=>$error['analysis'],
                );
                $newQuestionDetailId = $vip_youdao_question_details->add($newQuestionDetail);
                if(!$newQuestionDetailId){
                    $this->rollback();
                    throw new \Exception('试题退回有道详细原因记录添加失败');
                }

            }

        }else{
            $this->rollback();
            throw new \Exception('退回有道试题列表不能为空');
        }
        $this->commit();
        return true;
    }


    public function getLastYoudaoTime($taskId){
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
}

