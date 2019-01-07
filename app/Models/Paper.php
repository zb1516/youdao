<?php

namespace App\Models;

use App\Clients\KlibQuestionClient;
use DB;
use http\Env\Response;
use Illuminate\Support\Facades\Redis;
use Symfony\Component\Translation\Dumper\QtFileDumper;

class Paper extends Model
{
    protected $connection = 'mysql_kms';
    protected $table = "vip_paper";
    public $timestamps = false;
    /**
     * 图片审核筛选套卷查询
     */
    public function getImagePaperList($searchArgs, $currentPage = 1, $pageSize = 15)
    {
        $vipYoudaoExamined = new VipYoudaoExamined();
        $vipYoudaoExamined->youdaoPaperNameInsert($searchArgs);
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
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['grade'])) {
            $condition['grade_id'] = array('eq' => $searchArgs['grade']);
        }
        if (!empty($searchArgs['province'])) {
            $provinceName = isset($provinceIdNames[$searchArgs['province']]) ? $provinceIdNames[$searchArgs['province']] : '';
            $condition['province'] = array('eq' => $provinceName);
        }
        if (!empty($searchArgs['city'])) {
            $cityName = isset($citys[$searchArgs['city']]) ? $citys[$searchArgs['city']] : '';
            $condition['city'] = array('eq' => $cityName);
        }
        if (!empty($searchArgs['country'])) {
            $countryName = isset($countrys[$searchArgs['country']]) ? $countrys[$searchArgs['country']] : '';
            $condition['country'] = array('eq' => $countryName);
        }
        if (!empty($searchArgs['school'])) {
            $condition['school'] = array('eq' => $searchArgs['school']);
        }
        if (!empty($searchArgs['year'])) {
            $condition['year'] = array('eq' => $searchArgs['year']);
        }
        if (!empty($searchArgs['term'])) {
            $condition['term'] = array('eq' => $searchArgs['term']);
        }
        if (!empty($searchArgs['source'])) {
            $condition['name'] = array('eq' => $searchArgs['source']);
        }
        if (!empty($searchArgs['duration'])) {
            $condition['duration'] = array('eq' => $searchArgs['duration']);
        }
        if (!empty($searchArgs['score'])) {
            $condition['score'] = array('eq' => $searchArgs['score']);
        }
        if (!empty($searchArgs['questionNumber'])) {
            $condition['question_number'] = array('eq' => $searchArgs['questionNumber']);
        }
        if (!empty($searchArgs['other1'])) {
            $condition['other1'] = array('eq' => $searchArgs['other1']);
        }
        if (!empty($searchArgs['other2'])) {
            $condition['other2'] = array('eq' => $searchArgs['other2']);
        }
        if (empty($condition)) {
            $condition = [];
        }
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $result = $this->findAll($condition, ['created_time' => 'desc'], ['id', 'subject_id', 'show_name', 'file_name'],$group="",$join=[], $page = $currentPage, $pageSize = $pageSize);
        $list = [];
        $i = 1;
        foreach ($result as $k => $item) {
            $list[] = [
                'number' => $i,
                'id' => $item['id'],
                'showName' => $item['show_name'],
                'fileName' => $item['file_name'],
            ];
            $i++;
        }
        return array('rows' => $list, 'total' => $recordCount);
    }



    /**
     * 转换套卷查询参数
     * @param $formData array
     * @param $isSort 是否有排序的参数
     * @return array
     */
    public function imagePaperSearchArgs($formData,$isSort=0)
    {
        $searchArgs = [];
        if (isset($formData['taskId'])) {
            $searchArgs['taskId'] = trim($formData['taskId']);
        }
        if (isset($formData['subjectId'])) {
            $searchArgs['subjectId'] = $formData['subjectId'];
        }
        if (isset($formData['grade'])) {
            $searchArgs['grade'] = $formData['grade'];
        }
        if (isset($formData['province'])) {
            $searchArgs['province'] = $formData['province'];
        }
        if (isset($formData['city'])) {
            $searchArgs['city'] = $formData['city'];
        }
        if (isset($formData['country'])) {
            $searchArgs['country'] = $formData['country'];
        }
        if (isset($formData['school'])) {
            $searchArgs['school'] = $formData['school'];
        }
        if (isset($formData['year'])) {
            $searchArgs['year'] = $formData['year'];
        }
        if (isset($formData['term'])) {
            $searchArgs['term'] = $formData['term'];
        }
        if (isset($formData['source'])) {
            $searchArgs['source'] = $formData['source'];
        }
        if (isset($formData['duration'])) {
            $searchArgs['duration'] = $formData['duration'];
        }
        if (isset($formData['score'])) {
            $searchArgs['score'] = $formData['score'];
        }
        if (isset($formData['questionNumber'])) {
            $searchArgs['questionNumber'] = $formData['questionNumber'];
        }
        if (isset($formData['other1'])) {
            $searchArgs['other1'] = $formData['other1'];
        }
        if (isset($formData['other2'])) {
            $searchArgs['other2'] = $formData['other2'];
        }
        if($isSort){
            if (isset($formData['sortTaskId'])) {
                $searchArgs['sortTaskId'] = $formData['sortTaskId'];
            }
            if (isset($formData['paperType'])) {
                $searchArgs['paperType'] = $formData['paperType'];
            }
        }
        return $searchArgs;
    }




}
