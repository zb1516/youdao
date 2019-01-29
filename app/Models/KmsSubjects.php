<?php

namespace App\Models;
use DB;

class KmsSubjects extends Model
{
    protected $connection = 'mysql_kms';
    protected $table = "vip_dict_subject";
    public $timestamps = false;

    public function getSubjects($userKey = null)
    {
        $condition = array(
            'status' => 1
        );
        if ($userKey !== null) {
            $vpUserSubjects = new VpUserSubjects();
            $eapSubjectIds = $vpUserSubjects->getUserSubjectIds($userKey);
            if (false == $eapSubjectIds) {
                return json_encode([]);
            }
            $condition['eap_subject_id'] = array('in' => $eapSubjectIds);
        } else {
            $condition['eap_subject_id'] = array('not null' => 'eap_subject_id');
        }
        $grade = new Grade();
        $gradeArray = $grade->getGradeArray();
        $subjectList = $this->findAll($condition, ['grade_id' => 'asc', 'sort' => 'asc']);
        foreach ($subjectList as $key => $subject) {
            $subjectList[$key]['grade_name'] = $gradeArray[$subject['grade_id']];
            $subjectList[$key]['grade_show_name'] = str_replace("部", "", $gradeArray[$subject['grade_id']]);
        }
        return $subjectList;
    }

    public function getGradeSubjectNames($subjects)
    {
        $subjectList = [];
        if($subjects){
            foreach ($subjects as $subject) {
                $subjectName = str_replace('部', '', $subject['grade_name']) . $subject['title'];
                $subjectList[] = [
                    'subjectId' => $subject['id'],
                    'subjectName' => $subjectName,
                ];
            }
        }

        $sort = array(
            'field' => 'subjectId',       //排序字段
        );
        $arrSort = array();
        if($subjectList){
            foreach ($subjectList AS $uniqid => $row) {
                foreach ($row AS $key => $value) {
                    $arrSort[$key][$uniqid] = $value;
                }
            }
            if ($subjectList) {
                array_multisort($arrSort[$sort['field']], SORT_ASC, $subjectList);
            }
        }
        return $subjectList;
    }

    public function getSubjectName($subjectId)
    {
        static $subjectList;
        if (false == $subjectList) {
            $subjectList = $this->getSubjects();
        }
        foreach ($subjectList as $subject) {
            if ($subject['id'] == $subjectId) {
                return str_replace('部', '', $subject['grade_name']) . $subject['title'];
            }
        }
        return '';
    }


    public function getSubjectsByIds($subjectIdArr){
        $condition = array(
            'id'=>array('in'=>$subjectIdArr)
        );
        $subjectList = $this->findAll($condition);
        $grade = new Grade();
        $gradeArray = $grade->getGradeArray();
        foreach ($subjectList as $key => $subject) {
            $subjectList[$key]['grade_name'] = $gradeArray[$subject['grade_id']];
            $subjectList[$key]['grade_show_name'] = str_replace("部", "", $gradeArray[$subject['grade_id']]);
        }
        return $subjectList;
    }
}
