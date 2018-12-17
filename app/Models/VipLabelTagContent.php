<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/9/3
 * Time: 11:22
 */

namespace App\Models;

class VipLabelTagContent extends Model
{
    protected $table = "vip_label_tag_content";
    protected $connection = "mysql_kms";
    public $timestamps = false;

    /**
     * 获取试题贴标签内容
     * @param array
     * @return array
     */
    public function questionTagContent($condition)
    {
        $result = $this->findAll($condition, ['id' => 'asc'], ['question_id', 'user_key', 'tag_content']);
        $tagContent = [];
        foreach ($result as $v) {
            if (array_key_exists($v['user_key'], $tagContent)) {
                $tagContent[$v['user_key']]['tag_content'][] = $v['tag_content'];
            } else {
                $tagContent[$v['user_key']]['tag_content'][] = $v['tag_content'];
            }
        }
        return $tagContent;

    }

    /**
     * 获取教师贴标签内容
     * @param $questionId
     * @param $userKey
     * @return mixed
     */
    public function getTeacherLabelContent($questionId,$userKey,$userType)
    {
        $condition=['question_id'=>$questionId,'user_key'=>$userKey,'user_type'=>$userType,'is_remove'=>0];
        $result = $this->findAll($condition, ['id' => 'desc'], ['*'],'type');
        $arr = array_column($result, 'id');                 //取出id列
        array_multisort($arr,SORT_ASC,$result);             //根据id 正序 排序结果集
        return $result;
    }

    /**
     * 套卷详情获取第一个教师给每一道题贴标签的内容
     * @param array
     * @return array
     */
    public function getPaperTagContent($userType, $userKey, $paperId)
    {
        $condition = array(
            'paper_id' => $paperId,
            'user_key' => $userKey,
            'user_type' => $userType
        );
        $result = $this->findAll($condition, ['id' => 'asc'], ['question_id', 'user_key', 'tag_content']);
        $tagContent = [];
        foreach ($result as $v) {
            if (array_key_exists($v['question_id'], $tagContent)) {
                $tagContent[$v['question_id']]['tag_content'][] = $v['tag_content'];
            } else {
                $tagContent[$v['question_id']]['tag_content'][] = $v['tag_content'];
            }
        }
        return $tagContent;

    }

    /**
     * 不合格题目跟踪贴标签的内容
     * @param array
     * @return array
     */
    public function getTailTagContent($userType, $questionId)
    {
        $condition = array(
            'question_id' => $questionId,
            'user_type' => $userType
        );
        $result = $this->findAll($condition, ['id' => 'asc'], ['question_id', 'user_key', 'tag_content', 'type']);
        $tagContent = [];
        foreach ($result as $v) {
            if (array_key_exists($v['question_id'], $tagContent)) {
                $tagContent[$v['question_id']][$v['user_key']]['tag_content'][$v['type']] = $v['tag_content'];
            } else {
                $tagContent[$v['question_id']][$v['user_key']]['tag_content'][$v['type']] = $v['tag_content'];
            }
        }
        return $tagContent;

    }

    /**
     * 添加标签内容
     * @param $data
     * @return mixed
     */
    public function addLabelContent($data)
    {

        return $this->add($data);
    }

    /**
     * 更新vip_label_tag_content
     * @param boolean
     */
    public function updateLabelTagContent($ids,$userKey,$userType,$flag)
    {
        if($userType == 'teacher' && $flag == 'paper'){
            $condition = array(
                'paper_id' => array('in' => $ids),
                'user_key' => $userKey,
                'user_type' => $userType,
                'is_remove' => 0,
            );
        }
        if(($userType == 'judge' && $flag == 'question') || ($userType == 'teacher' && $flag == 'question')){
            $condition = array(
                'question_id' => array('in' => $ids),
                'user_key' => $userKey,
                'user_type' => $userType,
                'is_remove' => 0,
            );
        }
        $res = $this->findAll($condition);
        if($res){
            foreach ($res as $v) {
                $condition = array(
                    'id' => array('eq' => $v['id']),
                );
                $result = $this->edit(['is_remove' => 1], $condition);
                if(false === $result){
                    $this->rollback();
                    throw new \Exception('清空任务失败');
                }
            }
        }

    }


}