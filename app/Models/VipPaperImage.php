<?php

namespace App\Models;

use App\Models\Model;
use App\Services\Bucket;
use App\Services\YoudaoService;

class VipPaperImage extends Model
{
    protected $table='vip_paper_image';
    protected $connection = "mysql_kms";
    public $timestamps=false;
    /**
     * 图片审核列表详情
     */
    public function getImagePaperDetail($taskId, $paperType)
    {
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

    /**
     * 图片退回
     */
    public function paperReturn($taskId, $imageErrorType,$userKey)
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
            $data = [
                'mage_examined_status' => 3,
                'image_error_type' => $imageErrorType,
                'image_examined_time' => $date,
                'image_examined_auditor_id' => $userInfo['id'],
            ];
            $result = $vipYoudaoExamined->edit($data,$condition);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('图片退回失败');
            }
        }
        $result = $this->findAll($condition);
        //第三方Oss的东西
        if($result){
            $data = [
                'is_delete' => 1,
            ];
            $result = $this->edit($data,$condition);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('图片详情退回失败');
            }
        }
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
        if($result){
            $data = [
                'mage_examined_status' => 2,
                'image_examined_time' => $date,
                'image_examined_auditor_id' => $userInfo['id'],
            ];
            $result = $vipYoudaoExamined->edit($data,$condition);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('图片退回失败');
            }
        }
//        $sortTaskId = [
//            'taskId' => [
//                'http://www.jansonvue.org/images/002.jpg',
//                'http://www.jansonvue.org/images/001.jpg'
//            ]
//        ];
//
//        $sortTaskId = [
//            'taskId' => [
//                'question' => [
//                    'http://www.jansonvue.org/images/002.jpg',
//                    'http://www.jansonvue.org/images/001.jpg'
//                ],
//                'answer' => [
//                    'http://www.jansonvue.org/images/002.jpg',
//                    'http://www.jansonvue.org/images/001.jpg'
//                ],
//            ]
//        ];

        $dateTime = time();
        $rand = rand(1,1000);
        if($searchArgs['paperType'] == 1){
            $condition = array(
                'task_id' => $searchArgs['taskId'],
                'image_type' => 3,
            );
            $result = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            $count = count($result);
            for($i=0;$i<$count;$i++){
                $data = [
                    'image_url' => $searchArgs['sortTaskId'][$searchArgs['taskId']][$i],
                    'is_delete' => 0,
                ];
                $condition = array(
                    'id' => $result[$i]['id'],
                );
                $result = $this->edit($data,$condition);
                if($result === false)
                {
                    $this->rollback();
                    throw new \Exception('图片url编辑失败-混合');
                }
            }
            //第三方oss调用
            $imagesUrl = $searchArgs['sortTaskId'][$searchArgs['taskId']];
            $this->createPackage($searchArgs,$imagesUrl,$dateTime,$rand);
            $filename = $this->createFileName($searchArgs).$dateTime.$rand;
            $ossPATH="YOUDAO_V1/".$searchArgs['taskId']."/";
            $resultUrl = $this->uploadOssPackage($filename,$ossPATH);
            $questionUrl = $resultUrl['info']['url'];
            $data = [
                'question_url' => $questionUrl,
            ];
            $result = $vipYoudaoExamined->edit($data,['task_id' => $searchArgs['taskId']]);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('编辑有道返回的上传地址失败');
            }
            //调用有道接口
            $this->youdaoDataHandle($searchArgs,$filename,$questionUrl);
        }else{
            //第三方oss调用
            $condition = array(
                'task_id' => $searchArgs['taskId'],
                'image_type' => 1,
            );
            $question = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            $count = count($question);
            for($i=0;$i<$count;$i++){
                $data = [
                    'image_url' => $searchArgs['sortTaskId'][$searchArgs['taskId']]['question'][$i],
                    'is_delete' => 0,
                ];
                $condition = array(
                    'id' => $question[$i]['id'],
                );
                $result = $this->edit($data,$condition);
                if($result === false)
                {
                    $this->rollback();
                    throw new \Exception('图片url编辑失败-分离问题');
                }
            }
            $imagesUrl = $searchArgs['sortTaskId'][$searchArgs['taskId']]['question'];
            $this->createPackage($searchArgs,$imagesUrl,$dateTime,$rand);
            $filename = $this->createFileName($searchArgs).$dateTime.$rand.'question';
            $ossPATH="YOUDAO_V1/".$searchArgs['taskId']."/";
            $resultUrl = $this->uploadOssPackage($filename,$ossPATH);
            $questionUrl = $resultUrl['info']['url'];
            $data = [
                'question_url' => $questionUrl,
            ];
            $result = $vipYoudaoExamined->edit($data,['task_id' => $searchArgs['taskId']]);
            if($result === false)
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
            for($i=0;$i<$count;$i++){
                $data = [
                    'image_url' => $searchArgs['sortTaskId'][$searchArgs['taskId']]['answer'][$i],
                    'is_delete' => 0,
                ];
                $condition = array(
                    'id' => $answer[$i]['id'],
                );
                $result = $this->edit($data,$condition);
                if($result === false)
                {
                    $this->rollback();
                    throw new \Exception('图片url编辑失败-分离答案');
                }
            }
            $imagesUrl = $searchArgs['sortTaskId'][$searchArgs['taskId']]['answer'];
            $this->createPackage($searchArgs,$imagesUrl,$dateTime,$rand);
            $filename = $this->createFileName($searchArgs).$dateTime.$rand.'answer';
            $ossPATH="YOUDAO_V1/".$searchArgs['taskId']."/";
            $resultUrl = $this->uploadOssPackage($filename,$ossPATH);
            $answerUrl = $resultUrl['info']['url'];
            $data = [
                'answer_url' => $answerUrl,
            ];
            $result = $vipYoudaoExamined->edit($data,['task_id' => $searchArgs['taskId']]);
            if($result === false)
            {
                $this->rollback();
                throw new \Exception('编辑有道返回的上传地址失败');
            }
            //调用有道接口
            $this->youdaoDataHandle($searchArgs,$filename,$questionUrl,$answerUrl);

        }
        $this->commit();
        return true;
    }
    /**
     * 下载图片保存到本地
     */
    public function download($url,$j, $path = 'ossImages/')
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
        $file = curl_exec($ch);
        curl_close($ch);
        //$filename = pathinfo($url, PATHINFO_BASENAME);
        $resource = fopen($path . $j.'.jpg', 'a');
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
        $result = $this->findOne($condition, $order=[], ['agency_id']);
        $agencyId = $result['agency_id'];
        $common = new Common();
        $allSubjectNames = $common->getAllSubjectNames();
        $subjectName = isset($allSubjectNames[$searchArgs['subject_id']]) ? $allSubjectNames[$searchArgs['subject_id']] : '';
        $str = $this->stringTransformation($subjectName);
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
        $paperName = $agencyId.'-'.'套卷VIP'.'-'.$str.'-'.$year.'-'.$province.'-'.$city.'-'.$country.'-'.$school.'-'.$grade.'-'.$semester.'-'.$source.'-'.$other1.'-'.$other2.'-'.$duration.'-'.$score.'-'.$questionNumber;
        return $paperName;
    }
    /**
     * 生成压缩包
     */
    public function createPackage($searchArgs,$imagesUrl,$dateTime,$rand)
    {
        $j = 1;
        foreach ($imagesUrl as $url) {
            if($j < 10){
                $this->download($url,'00'.$j);
            }
            if($j>=10 && $j<100){
                $this->download($url,'0'.$j);
            }
            $j++;
        }
        $zip = new ZipArchive(); //首先实例化这个类
        $filename = $this->createFileName($searchArgs).$dateTime.$rand.'.zip';
        if ($zip->open($filename,ZipArchive::OVERWRITE|ZipArchive::CREATE) === TRUE) { //然后查看是否存在test.zip这个压缩包
            $count = count($imagesUrl);
            for($i=1;$i<=$count;$i++){
                if($i<10){
                    $zip->addFile('ossImages/'.'00'.$i.'.jpg');
                }
                if($i>=10 && $i<100){
                    $zip->addFile('ossImages/'.'0'.$i.'.jpg');
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
    public function uploadOssPackage($filename,$ossPATH)
    {
        $bucketName = config('app.OFFICE_DOCUMENT_BUCKET');
        $res = Bucket::uploadFile( $bucketName,'/ossImages' . $filename . '.zip',$ossPATH.$filename . '.zip',false,'压缩包.zip');
        unlink('/ossImages' . $filename . '.zip');
        return $res;
    }

    /**
     * 调用有道数据处理
     */
    public function youdaoDataHandle($searchArgs,$filename,$questionUrl,$answerUrl='')
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
}
