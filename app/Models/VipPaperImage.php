<?php

namespace App\Models;

use App\Models\Model;
use App\Services\BucketService;
use App\Services\WxService;
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
                'is_delete' => 0,
            );
            $result = $this->findAll($condition, $order=['image_type' => 'asc','id' => 'desc'], ['id', 'image_url', 'create_time']);
            return $result;
        }else{
            if($paperType == 1){
                $condition = array(
                    'task_id' => $taskId,
                    'image_type' => 3,
                    'is_delete' => 0,
                );
                $result = $this->findAll($condition, $order=['id' => 'desc'], ['id', 'image_url', 'create_time']);
                return $result;
            }else{
                $condition = array(
                    'task_id' => $taskId,
                    'image_type' => 1,
                    'is_delete' => 0,
                );
                $question = $this->findAll($condition, $order=['id' => 'desc'], ['id', 'image_url', 'create_time']);
                $condition = array(
                    'task_id' => $taskId,
                    'image_type' => 2,
                    'is_delete' => 0,
                );
                $answer = $this->findAll($condition, $order=['id' => 'desc'], ['id', 'image_url', 'create_time']);
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
            $resultEdit = $this->edit($data, $condition);
            if($resultEdit === false)
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
        //$sendTemplateUrl = config('app.YOUDAO_SEND_TEMPLATE');
        WxService::sendTemplate($postData);
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
                'paper_examined_status' => 1,
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
            //第三方oss调用
            $imagesUrl = $searchArgs['sortTaskId'][$searchArgs['taskId']];
            $searchArgs['randName'] = time().rand(1,10000);
            $this->createPackage($searchArgs, $imagesUrl, $dateTime, $rand);
            $filenameAll = $filename.$dateTime.$rand;
            $ossPATH="YOUDAO/IMAGE/YOUDAO_V1/".$searchArgs['taskId']."/";
            $resultUrl = $this->uploadOssPackage($filenameAll, $ossPATH,  $searchArgs['randName']);
            $questionUrl = $resultUrl['info']['url'];
            $dataEdit = [
                'question_url' => $questionUrl,
                'answer_url' => '',
            ];
            $resultEdit = $vipYoudaoExamined->edit($dataEdit, ['task_id' => $searchArgs['taskId']]);
            if($resultEdit === false)
            {
                $this->rollback();
                throw new \Exception('编辑有道返回的上传地址失败');
            }
            //调用有道接口
            $resultYoudao = $this->youdaoDataHandle($searchArgs, $filename, $questionUrl);
            $resultYoudao = json_decode($resultYoudao,true);

            if($resultYoudao['code'] != 200){
                throw new \Exception('任务投递失败');
            }

        }else{

            $imagesQuestionUrl = $searchArgs['sortTaskIdQuestion'][$searchArgs['taskId']];
            $searchArgs['randNameQuestion'] = 'question'.time().rand(1,10000);
            $this->createPackage($searchArgs, $imagesQuestionUrl, $dateTime, $rand, 'Question');
            $filenameQuestion = $filename.$dateTime.$rand.'Question';
            $ossPATH = "YOUDAO/IMAGE/YOUDAO_V1/".$searchArgs['taskId']."/";
            $resultUrl = $this->uploadOssPackage($filenameQuestion, $ossPATH, $searchArgs['randNameQuestion']);
            $questionUrl = $resultUrl['info']['url'];
            $dataEdit = [
                'question_url' => $questionUrl,
            ];
            $resultEdit = $vipYoudaoExamined->edit($dataEdit, ['task_id' => $searchArgs['taskId']]);
            if($resultEdit === false)
            {
                $this->rollback();
                throw new \Exception('编辑有道返回的上传地址失败');
            }
            $imagesAnswerUrl = $searchArgs['sortTaskIdAnswer'][$searchArgs['taskId']];
            $searchArgs['randNameAnswer'] = 'answer'.time().rand(1,10000);
            $this->createPackage($searchArgs, $imagesAnswerUrl, $dateTime, $rand, 'Answer');
            $filenameAnswer = $filename.$dateTime.$rand.'Answer';
            $ossPATH="YOUDAO/IMAGE/YOUDAO_V1/".$searchArgs['taskId']."/";
            $resultUrl = $this->uploadOssPackage($filenameAnswer, $ossPATH, $searchArgs['randNameAnswer']);
            $answerUrl = $resultUrl['info']['url'];
            $dataEdit = [
                'answer_url' => $answerUrl,
            ];
            $resultEdit = $vipYoudaoExamined->edit($dataEdit, ['task_id' => $searchArgs['taskId']]);
            if($resultEdit === false)
            {
                $this->rollback();
                throw new \Exception('编辑有道返回的上传地址失败');
            }
            //调用有道接口
            $resultYoudao = $this->youdaoDataHandle($searchArgs, $filename, $questionUrl, $answerUrl);
            $resultYoudao = json_decode($resultYoudao,true);
            if($resultYoudao['code'] != 200){
                throw new \Exception('任务投递失败');
            }
        }

        $this->commit();
        return true;
    }
    /**
     * 下载图片保存到本地
     */
    public function download($url, $j, $dir)
    {
        $url = str_replace('https://','http://',$url);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
        $file = curl_exec($ch);
        curl_close($ch);
        $resource = fopen($dir. $j.'.jpg', 'a');
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
        if($type){
            $typeName = 'randName'.$type;
            $taskId = $searchArgs[$typeName].'/';
            //$zipDir = $type.'/';
        }else{
            $taskId = $searchArgs['randName'].'/';
            //$zipDir = '/';
        }
        $dir = iconv("UTF-8", "GBK", "ossImages/".$taskId);
        //$dir = "ossImages/".$taskId;
        if (!file_exists($dir)){
            mkdir ($dir,0777,true);
        }
        $j = 1;
        foreach ($imagesUrl as $url) {
            if($j < 10){
                $this->download($url,'00'.$j,$dir);
            }
            if($j>=10 && $j<100){
                $this->download($url,'0'.$j,$dir);
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

                if($i<10){
                    $zip->addFile($dir.'00'.$i.'.jpg');
                }
                if($i>=10 && $i<100){
                    $zip->addFile($dir.'0'.$i.'.jpg');
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
    public function uploadOssPackage($filename, $ossPATH, $randName)
    {
        //$dir = "ossImages/".$taskId;
        $bucketName = config('app.OFFICE_DOCUMENT_BUCKET');
        $localImageUrl = config('app.LOCAL_IMAGE_URL');
        $res = BucketService::uploadFile( $bucketName,$filename . '.zip',$ossPATH.$filename . '.zip',false,'压缩包.zip');
        unlink($localImageUrl . $filename . '.zip');

        $this->deleteDir($localImageUrl.'ossImages/'.$randName);
            //unlink();


        return $res;
    }

    /**
     * 调用有道数据处理
     */
    public function youdaoDataHandle($searchArgs, $filename, $questionUrl, $answerUrl = '')
    {

        //$gradeName = config('app.GRADE_NAME');
        $url = config('app.YOUDAO_DELIVER_TASK');
        //$grade = isset($searchArgs['grade']) ? $searchArgs['grade'] : 0;
        $paperType = isset($searchArgs['paperType']) ? $searchArgs['paperType'] : 0;
        $subjectId = isset($searchArgs['subjectId']) ? $searchArgs['subjectId'] : 0;
        $youdaoService = new YoudaoService();
        $common = new Common();
        $allSubjectNames = $common->getAllSubjectNames();
        $subjectName = $allSubjectNames[$subjectId];
        $strValue = $common->stringTransformation($subjectName);
        $subjectValue = explode('-',$strValue);
        $postData = [
            'taskId' => $searchArgs['taskId'],
            'name' => $filename,
            'questionUrl' => $questionUrl,
            'answerUrl' => $answerUrl,
            'paperType' => $paperType,
            'education' => $subjectValue[0],
            'subject' => $subjectValue[1],
        ];
        return $youdaoService->getYoudaoTask($url,$postData);
    }

    /**
     * 删除目录
     */
    public function deleteDir($dir)
    {
        if (!$handle = @opendir($dir)) {
            return false;
        }
        while (false !== ($file = readdir($handle))) {
            if ($file !== "." && $file !== "..") {       //排除当前目录与父级目录
                $file = $dir . '/' . $file;
                if (is_dir($file)) {
                    $this->deleteDir($file);
                } else {
                    @unlink($file);
                }
            }
        }
        @rmdir($dir);
    }


    /**
     * 图片通过
     */
    public function paperImageSort($searchArgs)
    {
        $this->beginTransaction();
        if($searchArgs['paperType'] == 1){
            $condition = array(
                'task_id' => $searchArgs['taskId'],
                'image_type' => 3,
                'is_delete' => 0,
            );
            $resultAll = $this->findAll($condition, $order=['id' => 'desc'], ['id', 'image_url', 'create_time']);
            $count = count($resultAll);
            if($resultAll){
                for($i=0;$i<$count;$i++){
                    $dataAll = [
                        'image_url' => $searchArgs['sortTaskId'][$searchArgs['taskId']][$i],
                        'is_delete' => 0,
                    ];
                    $conditionAll = array(
                        'id' => $resultAll[$i]['id'],
                    );
                    $resultImage = $this->edit($dataAll, $conditionAll);
                    if($resultImage === false)
                    {
                        $this->rollback();
                        throw new \Exception('图片url编辑失败-混合');
                    }
                }
            }

        }else{
            $condition = array(
                'task_id' => $searchArgs['taskId'],
                'image_type' => 1,
                'is_delete' => 0,
            );
            $question = $this->findAll($condition, $order=['id' => 'desc'], ['id', 'image_url', 'create_time']);
            $count = count($question);
            $imagesQuestionUrl = $searchArgs['sortTaskIdQuestion'][$searchArgs['taskId']];
            if($question){
                for($i=0;$i<$count;$i++){
                    $dataQuestion = [
                        'image_url' => $imagesQuestionUrl[$i],
                        'is_delete' => 0,
                    ];
                    $conditionQuestion = array(
                        'id' => $question[$i]['id'],
                    );
                    $resultQuestion = $this->edit($dataQuestion, $conditionQuestion);
                    if($resultQuestion === false)
                    {
                        $this->rollback();
                        throw new \Exception('图片url编辑失败-分离问题');
                    }
                }
            }
            $condition = array(
                'task_id' => $searchArgs['taskId'],
                'image_type' => 2,
                'is_delete' => 0,
            );
            $answer = $this->findAll($condition, $order=['id' => 'desc'], ['id', 'image_url', 'create_time']);
            $count = count($answer);
            $imagesAnswerUrl = $searchArgs['sortTaskIdAnswer'][$searchArgs['taskId']];
            if($answer){
                for($i=0;$i<$count;$i++){
                    $dataAnswer = [
                        'image_url' => $imagesAnswerUrl[$i],
                        'is_delete' => 0,
                    ];
                    $conditionAnswer = array(
                        'id' => $answer[$i]['id'],
                    );
                    $resultAnswer = $this->edit($dataAnswer, $conditionAnswer);
                    if($resultAnswer === false)
                    {
                        $this->rollback();
                        throw new \Exception('图片url编辑失败-分离答案');
                    }
                }
            }
        }

        $this->commit();
        return true;
    }
}
