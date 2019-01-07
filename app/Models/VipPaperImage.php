<?php

namespace App\Models;

use App\Models\Model;

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

        if($searchArgs['paperType'] == 1){
            //第三方oss调用
            $condition = array(
                'task_id' => $searchArgs['taskId'],
                'image_type' => 3,
            );
            $result = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            $count = count($result);
            for($i=0;$i<$count;$i++){
                $data = [
                    'image_url' => $searchArgs['sortTaskId'][$searchArgs['taskId']],
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
                    'image_url' => $searchArgs['sortTaskId'][$searchArgs['taskId']]['question'],
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
            $condition = array(
                'task_id' => $searchArgs['taskId'],
                'image_type' => 2,
            );
            $answer = $this->findAll($condition, $order=[], ['id', 'image_url', 'create_time']);
            $count = count($answer);
            for($i=0;$i<$count;$i++){
                $data = [
                    'image_url' => $searchArgs['sortTaskId'][$searchArgs['taskId']]['answer'],
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

        }
        $this->commit();
        return true;
    }
}
