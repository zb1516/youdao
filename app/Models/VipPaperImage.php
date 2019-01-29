<?php

namespace App\Models;

use App\Models\Model;
use App\Services\BucketService;
use App\Services\YoudaoService;

class VipPaperImage extends Model
{
    protected $table='vip_paper_image';
    protected $connection = "mysql_kms";
    public $timestamps=false;
    /**
     * 图片审核列表详情
     */
    public function getImagePaperDetail($taskId, $paperType, $allType = false)
    {
        if($allType == true){
            $condition = array(
                'task_id' => $taskId,
            );
            $result = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            return $result;
        }else{
            if($paperType == 1){
                $condition = array(
                    'task_id' => $taskId,
                    'image_type' => 3,
                );
                $result = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
                return $result;
            }else{
                $condition = array(
                    'task_id' => $taskId,
                    'image_type' => 1,
                );
                $question = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
                $condition = array(
                    'task_id' => $taskId,
                    'image_type' => 2,
                );
                $answer = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
                return ['question' => $question, 'answer' => $answer];
            }
        }
    }

    /**
     * 图片退回
     */
    public function paperReturn($taskId, $imageErrorType, $userKey)
    {
        $this->beginTransaction();
        $condition = array(
            'task_id' => $taskId
        );
        $date = date("Y-m-d H:i:s",time());
        $userModel = new User();
        $userInfo = $userModel->getUserInfo($userKey);
        $vipYoudaoExamined = new VipYoudaoExamined();
        $result = $vipYoudaoExamined->findOne($condition);
        if($result){
            $vipYoudaoWorkingWeekendDays = new VipYoudaoWorkingWeekendDays();
            $diffDays = $vipYoudaoWorkingWeekendDays->getDiffDaysCount($result['upload_time'],$date);
            $data = [
                'image_examined_status' => 3,
                'image_error_type' => $imageErrorType,
                'image_examined_time' => $date,
                'image_examined_auditor_id' => $userInfo['id'],
                'image_processing_days' => $diffDays,
            ];
            $resultEdit = $vipYoudaoExamined->edit($data, $condition);
            if($resultEdit === false)
            {
                $this->rollback();
                throw new \Exception('图片退回失败');
            }
        }
        $resultAll = $this->findAll($condition);
        //第三方Oss的东西
        if($resultAll){
            $data = [
                'is_delete' => 1,
            ];
            $result = $this->edit($data, $condition);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('图片详情退回失败');
            }
        }
        $postData = array(
            'openId' => $result['open_id'],
            'type' => 1,
            'userId' => $result['create_uid'],
            'taskId' => $taskId,
            'content' => $imageErrorType,
        );
        $sendTemplateUrl = config('app.YOUDAO_SEND_TEMPLATE');
        $this->sendCurl($sendTemplateUrl,$postData);
        $this->commit();
        return true;
    }

    /**
     * 图片通过
     */
    public function paperPass($searchArgs)
    {
        $this->beginTransaction();
        $vipYoudaoExamined = new VipYoudaoExamined();
        $vipYoudaoExamined->youdaoPaperNameInsert($searchArgs);
        $date = date("Y-m-d H:i:s",time());
        $userModel = new User();
        $userInfo = $userModel->getUserInfo($searchArgs['userKey']);
        $condition = array(
            'task_id' => $searchArgs['taskId'],
        );
        $result = $vipYoudaoExamined->findOne($condition);
        $filename = $this->createFileName($searchArgs);
        if($result){
            $vipYoudaoWorkingWeekendDays = new VipYoudaoWorkingWeekendDays();
            $diffDays = $vipYoudaoWorkingWeekendDays->getDiffDaysCount($result['upload_time'],$date);
            $data = [
                'image_examined_status' => 2,
                'image_examined_time' => $date,
                'image_examined_auditor_id' => $userInfo['id'],
                'image_processing_days' => $diffDays,
                'paper_name' => $filename,
            ];
            $resultEdit = $vipYoudaoExamined->edit($data, $condition);
            if($resultEdit === false)
            {
                $this->rollback();
                throw new \Exception('图片退回失败');
            }
        }
        $dateTime = time();
        $rand = rand(1,1000);
        if($searchArgs['paperType'] == 1){
            $condition = array(
                'task_id' => $searchArgs['taskId'],
                'image_type' => 3,
            );
            $resultAll = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            $count = count($result);
            if($resultAll){
                for($i=0;$i<$count;$i++){
                    $data = [
                        'image_url' => $searchArgs['sortTaskId'][$searchArgs['taskId']][$i],
                        'is_delete' => 0,
                    ];
                    $condition = array(
                        'id' => $result[$i]['id'],
                    );
                    $resultImage = $this->edit($data, $condition);
                    if($resultImage === false)
                    {
                        $this->rollback();
                        throw new \Exception('图片url编辑失败-混合');
                    }
                }

            }
            //第三方oss调用
            $imagesUrl = $searchArgs['sortTaskId'][$searchArgs['taskId']];
            $this->createPackage($searchArgs, $imagesUrl, $dateTime, $rand);
            $filenameAll = $filename.$dateTime.$rand;
            $ossPATH="YOUDAO/IMAGE/YOUDAO_V1/".$searchArgs['taskId']."/";
            $resultUrl = $this->uploadOssPackage($filenameAll, $ossPATH);
            $questionUrl = $resultUrl['info']['url'];
            $data = [
                'question_url' => $questionUrl,
                'answer_url' => '',
            ];
            $resultEdit = $vipYoudaoExamined->edit($data, ['task_id' => $searchArgs['taskId']]);
            if($resultEdit === false)
            {
                $this->rollback();
                throw new \Exception('编辑有道返回的上传地址失败');
            }
            //调用有道接口
            $resultYoudao = $this->youdaoDataHandle($searchArgs, $filename, $questionUrl);
            $resultYoudao = json_decode($resultYoudao,true);
            $data = [
                'first_youdao_receive_time' => $resultYoudao['data']['youdaoReceiveTime']
            ];
            $vipYoudaoExamined->edit($data,['task_id' => $resultYoudao['data']['taskId']]);
        }else{
            //第三方oss调用
            $condition = array(
                'task_id' => $searchArgs['taskId'],
                'image_type' => 1,
            );
            $question = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            $count = count($question);
            $imagesUrl = $searchArgs['sortTaskIdQuestion'][$searchArgs['taskId']];

            if($question){
                for($i=0;$i<$count;$i++){
                    $data = [
                        'image_url' => $imagesUrl[$i],
                        'is_delete' => 0,
                    ];
                    $condition = array(
                        'id' => $question[$i]['id'],
                    );
                    $resultQuestion = $this->edit($data, $condition);
                    if($resultQuestion === false)
                    {
                        $this->rollback();
                        throw new \Exception('图片url编辑失败-分离问题');
                    }
                }
            }
            $this->createPackage($searchArgs, $imagesUrl, $dateTime, $rand, 'question');
            $filenameQuestion = $filename.$dateTime.$rand.'question';
            $ossPATH = "YOUDAO/IMAGE/YOUDAO_V1/".$searchArgs['taskId']."/";
            $resultUrl = $this->uploadOssPackage($filenameQuestion, $ossPATH);
            $questionUrl = $resultUrl['info']['url'];
            $data = [
                'question_url' => $questionUrl,
            ];
            $resultEdit = $vipYoudaoExamined->edit($data, ['task_id' => $searchArgs['taskId']]);
            if($resultEdit === false)
            {
                $this->rollback();
                throw new \Exception('编辑有道返回的上传地址失败');
            }
            $condition = array(
                'task_id' => $searchArgs['taskId'],
                'image_type' => 2,
            );
            $answer = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            $count = count($answer);
            $imagesUrl = $searchArgs['sortTaskIdAnswer'][$searchArgs['taskId']];
            if($answer){
                for($i=0;$i<$count;$i++){
                    $data = [
                        'image_url' => $imagesUrl[$i],
                        'is_delete' => 0,
                    ];
                    $condition = array(
                        'id' => $answer[$i]['id'],
                    );
                    $resultAnswer = $this->edit($data, $condition);
                    if($resultAnswer === false)
                    {
                        $this->rollback();
                        throw new \Exception('图片url编辑失败-分离答案');
                    }
                }
            }

            $this->createPackage($searchArgs, $imagesUrl, $dateTime, $rand, 'answer');
            $filenameAnswer = $filename.$dateTime.$rand.'answer';
            $ossPATH="YOUDAO/IMAGE/YOUDAO_V1/".$searchArgs['taskId']."/";
            $resultUrl = $this->uploadOssPackage($filenameAnswer, $ossPATH);
            $answerUrl = $resultUrl['info']['url'];
            $data = [
                'answer_url' => $answerUrl,
            ];
            $resultEdit = $vipYoudaoExamined->edit($data, ['task_id' => $searchArgs['taskId']]);
            if($resultEdit === false)
            {
                $this->rollback();
                throw new \Exception('编辑有道返回的上传地址失败');
            }
            //调用有道接口
            $resultYoudao = $this->youdaoDataHandle($searchArgs, $filename, $questionUrl, $answerUrl);
            $resultYoudao = json_decode($resultYoudao,true);
            $data = [
                'first_youdao_receive_time' => $resultYoudao['data']['youdaoReceiveTime']
            ];
            $vipYoudaoExamined->edit($data,['task_id' => $resultYoudao['data']['taskId']]);

        }
//        $postData = array(
//            'openId' => $result['open_id'],
//            'type' => 2,
//            'userId' => $result['create_uid'],
//            'taskId' => $result['task_id'],
//            'content' => '恭喜您，您提交的图片已审核通过',
//        );
//        $sendTemplateUrl = config('app.YOUDAO_SEND_TEMPLATE');
//        $this->sendCurl($sendTemplateUrl,$postData);
        $this->commit();
        return true;
    }
    /**
     * 下载图片保存到本地
     */
    public function download($url, $j, $type = '')
    {
        $url = str_replace('https://','http://',$url);
        $path = 'ossImages/';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
        $file = curl_exec($ch);
        curl_close($ch);
        //
        //$filename = pathinfo($url, PATHINFO_BASENAME);
        if($type){
            $resource = fopen($path.$type.'/' . $j.'.jpg', 'a');
        }else{

            $resource = fopen($path. $j.'.jpg', 'a');

        }
        fwrite($resource, $file);
        fclose($resource);
    }
    /**
     * 生成文件名称
     */
    public function createFileName($searchArgs)
    {
        $condition = [
            'task_id' => $searchArgs['taskId']
        ];
        $vipYoudaoExamined = new VipYoudaoExamined();
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
        $result = $vipYoudaoExamined->findOne($condition, $order=[], ['agency_id']);
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
        $gradeName = config('app.GRADE_VALUE');
        $gradeValue = isset($gradeName[$grade]) ? $gradeName[$grade] : 0;
        $cityValue = isset($citys[$city]) ? $citys[$city] : 0;
        $provinceValue = isset($provinceIdNames[$province]) ? $provinceIdNames[$province] : 0;
        $paperName = $agencyId.'-'.'套卷VIP'.'-'.$str.'-'.$year.'-'.$provinceValue.'-'.$cityValue.'-'.$countryName.'-'.$school.'-'.$gradeValue.'-'.$semester.'-'.$source.'-'.$other1.'-'.$other2.'-'.$duration.'-'.$score.'-'.$questionNumber;
        return $paperName;
    }
    /**
     * 生成压缩包
     */
    public function createPackage($searchArgs, $imagesUrl, $dateTime, $rand, $type = '')
    {
        $j = 1;
        foreach ($imagesUrl as $url) {
            if($j < 10){
                $this->download($url,'00'.$j,$type);
            }
            if($j>=10 && $j<100){
                $this->download($url,'0'.$j,$type);
            }
            $j++;
        }
        $zip = new \ZipArchive(); //首先实例化这个类
        if($type){
            $filename = $this->createFileName($searchArgs).$dateTime.$rand.$type.'.zip';
        }else{
            $filename = $this->createFileName($searchArgs).$dateTime.$rand.'.zip';
        }
        if ($zip->open($filename,\ZipArchive::OVERWRITE|\ZipArchive::CREATE) === TRUE) { //然后查看是否存在test.zip这个压缩包
            $count = count($imagesUrl);
            for($i=1;$i<=$count;$i++){
                if($type){
                    if($i<10){
                        $zip->addFile('ossImages/'.$type.'/'.'00'.$i.'.jpg');
                    }
                    if($i>=10 && $i<100){
                        $zip->addFile('ossImages/'.$type.'/'.'0'.$i.'.jpg');
                    }
                }else{

                    if($i<10){
                        $zip->addFile('ossImages/'.'00'.$i.'.jpg');
                    }
                    if($i>=10 && $i<100){
                        $zip->addFile('ossImages/'.'0'.$i.'.jpg');
                    }
                }

            }
            $zip->close(); //关闭
        } else {
            throw new \Exception('生成压缩包失败');
        }
    }
    /**
     * 上传压缩包oss
     */
    public function uploadOssPackage($filename, $ossPATH)
    {
        $bucketName = config('app.OFFICE_DOCUMENT_BUCKET');
        $localImageUrl = config('app.LOCAL_IMAGE_URL');
        $res = BucketService::uploadFile( $bucketName,$filename . '.zip',$ossPATH.$filename . '.zip',false,'压缩包.zip');
        unlink($localImageUrl . $filename . '.zip');
        return $res;
    }

    /**
     * 调用有道数据处理
     */
    public function youdaoDataHandle($searchArgs, $filename, $questionUrl, $answerUrl = '')
    {
        $gradeName = config('app.GRADE_NAME');
        $url = config('app.YOUDAO_DELIVER_TASK');
        $grade = isset($searchArgs['grade']) ? $searchArgs['grade'] : 0;
        $paperType = isset($searchArgs['pageType']) ? $searchArgs['pageType'] : 0;
        $subjectId = isset($searchArgs['subjectId']) ? $searchArgs['subjectId'] : 0;
        $youdaoService = new YoudaoService();
        $postData = [
            'taskId' => $searchArgs['taskId'],
            'name' => $filename,
            'questionUrl' => $questionUrl,
            'answerUrl' => $answerUrl,
            'pageType' => $paperType,
            'education' => isset($gradeName[$grade]) ? $gradeName[$grade] : '',
            'subject' => $subjectId,
        ];
        return $youdaoService->getYoudaoTask($url,$postData);

    }

    /**
     * 发送模板消息
     */
    public function sendCurl($url,$post_data){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);// post数据
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);// post的变量
        $buf = curl_exec($ch);
        curl_close($ch);
    }

}
