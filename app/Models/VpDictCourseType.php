<?php
namespace App\Models;

class VpDictCourseType extends Model
{
    protected $table='vip_dict_course_type';
    protected $connection='mysql_kms';
    public $timestamps=false;

    /**
     * 通过科目id获取知识点列表
     * @param $subjectId
     * @return mixed
     */
    public function getKnowledgeBySubjectId($subjectId)
    {
        //查询
        $vpDictKnowledgeTypeModel=new VpDictKnowledgeType();
        $vpDictKnowledgeType=$vpDictKnowledgeTypeModel->getKnowledgeType($subjectId);
        if($vpDictKnowledgeType == false){
            throw new \Exception('无法获取科目同步课程，通用教材版本不存在');
        }
        $condition=[
            'subject_id'=>$subjectId,
            'knowledge_type_id'=>$vpDictKnowledgeType['id'],
            'title'=>'同步课程',
            'status'=>1
        ];
        $vpDictCourseType=$this->findOne($condition);
        $vpKnowledgeCourseTypeRsModel=new VpKnowledgeCourseTypeRs();
        $rows=$vpKnowledgeCourseTypeRsModel->getKnowledgeCourseTypeRs($vpDictCourseType['id']);
        if($rows == false)
        {
            throw new \Exception('课程没有设置知识点');
        }
        $knowledgeIds=[];
        foreach($rows as $row){
            $knowledgeIds[]=$row['knowledge_id'];
        }
        $knowledgeModel=new VpKnowledge();
        $list=$knowledgeModel->getKnowledge($knowledgeIds);
        return $list;
    }
}