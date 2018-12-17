<?php
namespace App\Models;
use App\Models\Model;

class VpTagTestErrorCorrection extends Model
{
    protected $table="vip_tag_test_error_correction";
    protected $connection="mysql_kms";
    public $timestamps = false;

    /**
     * 添加报错
     * @param $searchArgs
     * @return mixed
     */
    public function addTagError($searchArgs)
    {
        $data=[
            'test_questions_id'=>$searchArgs['questionId'],
            'error_type'=>$searchArgs['errorType'],
            'error_subject'=>$searchArgs['subjectName'],
            'error_description'=>$searchArgs['errorDesc'],
            'error_subject'=>$searchArgs['subjectName'],
            'error_source'=>'',
            'error_agency_id'=>$searchArgs['agencyId'],
            'error_agency_name'=>$searchArgs['agencyName'],
            'error_user_realname'=>$searchArgs['userRealname'],
            'error_user_name'=>$searchArgs['userName'],
            'error_time'=>date('Y-m-d H:i:s'),
            'status'=>0,
        ];
        $result=$this->add($data);
        if($result === false)
        {
            throw new \Exception('提交纠错信息失败');
        }
        return $result;
    }
}