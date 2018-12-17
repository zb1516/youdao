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
     * 套卷列表（试题管理）
     */
    public function getPaperList($searchArgs, $currentPage = 1, $pageSize = 15)
    {
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
            $condition['created_time'] = array('lt' => strtotime ($searchArgs['endDate'].' 23:59:59'));
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['created_time'] = array('gt' => strtotime ($searchArgs['beginDate'].' 00:00:01'));
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['created_time'] = array('between' => array(strtotime ($searchArgs['beginDate'].' 00:00:01'),strtotime ($searchArgs['endDate'].' 23:59:59')));
        }
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['source'])) {
            $condition['name'] = array('eq' => $searchArgs['source']);
        }
        if (!empty($searchArgs['province'])) {
            $provinceName = isset($provinceIdNames[$searchArgs['province']]) ? $provinceIdNames[$searchArgs['province']] : '';
            $condition['province'] = array('eq' => $provinceName);
        }
        if (!empty($searchArgs['country'])) {
            $countryName = isset($countrys[$searchArgs['country']]) ? $countrys[$searchArgs['country']] : '';
            $condition['city'] = array('eq' => $countryName);
        }
        if (!empty($searchArgs['year'])) {
            $condition['year'] = array('eq' => $searchArgs['year']);
        }
        if ($searchArgs['isGet'] > 0) {
            $condition['is_get'] = array('gt' => 0);
        }
        if ($searchArgs['isGet'] == 0 && $searchArgs['isGet'] !== '') {
            $condition['is_get'] = array('eq' => $searchArgs['isGet']);
        }
        if ($searchArgs['isLabel'] > 0) {
            $condition['is_label'] = array('gt' => 0);
        }
        if ($searchArgs['isLabel'] == 0 && $searchArgs['isLabel'] !== '') {
            $condition['is_label'] = array('eq' => $searchArgs['isLabel']);
        }
//        if ($searchArgs['isLabel'] !== '') {
//            $condition['is_label'] = array('eq' => $searchArgs['isLabel']);
//        }
        if (!empty($searchArgs['paperName'])) {
            $condition['file_name'] = array('like' => "%" . $searchArgs['paperName'] . "%");
        }
        $condition['status'] = array('eq' => 1);
        $condition['label_status'] = array('eq' => 0);
        if (empty($condition)) {
            $condition = [];
        }
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $result = $this->findAll($condition, ['created_time' => 'desc'], ['id', 'subject_id', 'show_name', 'file_name', 'is_get', 'is_label'],$group="",$join=[], $page = $currentPage, $pageSize = $pageSize);
        $list = [];
        $i = 1;
        foreach ($result as $k => $item) {
            $list[] = [
                'number' => $i,
                'id' => $item['id'],
                'showName' => $item['show_name'],
                'fileName' => $item['file_name'],
                'isGet' => $item['is_get'],
                'isLabel' => $item['is_label'],
            ];
            $i++;
        }
        return array('rows' => $list, 'total' => $recordCount);
    }

    /**
     * 任务管理
     */
    public function getTaskPaperList($searchArgs, $currentPage = 1, $pageSize = 15)
    {
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
            $condition['created_time'] = array('lt' => strtotime ($searchArgs['endDate'].' 23:59:59'));
        }
        if (!empty($searchArgs['beginDate']) && empty($searchArgs['endDate'])) {
            $condition['created_time'] = array('gt' => strtotime ($searchArgs['beginDate'].' 00:00:01'));
        }
        if (!empty($searchArgs['beginDate']) && !empty($searchArgs['endDate'])) {
            $condition['created_time'] = array('between' => array(strtotime ($searchArgs['beginDate'].' 00:00:01'),strtotime ($searchArgs['endDate'].' 23:59:59')));
        }
        if (!empty($searchArgs['subjectId'])) {
            $condition['subject_id'] = array('eq' => $searchArgs['subjectId']);
        }
        if (!empty($searchArgs['source'])) {
            $condition['name'] = array('eq' => $searchArgs['source']);
        }
        if (!empty($searchArgs['province'])) {
            $provinceName = isset($provinceIdNames[$searchArgs['province']]) ? $provinceIdNames[$searchArgs['province']] : '';
            $condition['province'] = array('eq' => $provinceName);
        }
        if (!empty($searchArgs['country'])) {
            $countryName = isset($countrys[$searchArgs['country']]) ? $countrys[$searchArgs['country']] : '';
            $condition['city'] = array('eq' => $countryName);
        }
        if (!empty($searchArgs['year'])) {
            $condition['year'] = array('eq' => $searchArgs['year']);
        }
        $condition['is_get'] = array('lt' => 2);

        if (!empty($searchArgs['paperName'])) {
            $condition['file_name'] = array('like' => "%" . $searchArgs['paperName'] . "%");
        }
        $condition['status'] = array('eq' => 1);
        $condition['label_status'] = array('eq' => 0);
        if (empty($condition)) {
            $condition = [];
        }
        $recordCount = $this->count($condition);
        if (0 == abs($recordCount)) {
            return array('rows' => [], 'total' => $recordCount);
        }
        $result = $this->findAll($condition, $order=['created_time' => 'desc','is_sort' => 'desc','sort_time' => 'desc'], ['id', 'subject_id', 'show_name', 'file_name', 'is_get', 'is_label', 'is_sort'],$group="",$join=[], $page = $currentPage, $pageSize = $pageSize);
        $list = [];
        $i = 1;
        $arraySort = ['3' => '高','2' => '中','1' => '低'];
        foreach ($result as $k => $item) {
            $list[] = [
                'number' => $i,
                'id' => $item['id'],
                'showName' => $item['show_name'],
                'fileName' => $item['file_name'],
                'isGet' => $item['is_get'],
                'isSort' => $item['is_sort'],
                'isSortValue' => isset($arraySort[$item['is_sort']]) ? $arraySort[$item['is_sort']] : '',
                'isLabel' => $item['is_label'],
            ];
            $i++;
        }
        return array('rows' => $list, 'total' => $recordCount);
    }

    /**
     * 转换套卷查询参数
     * @param $formData array
     * @return array
     */
    public function paperSearchArgs($formData)
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
        if (isset($formData['source'])) {
            $searchArgs['source'] = $formData['source'];
        }
        if (isset($formData['province'])) {
            $searchArgs['province'] = $formData['province'];
        }
        if (isset($formData['country'])) {
            $searchArgs['country'] = $formData['country'];
        }
        if (isset($formData['year'])) {
            $searchArgs['year'] = $formData['year'];
        }
        if (isset($formData['isGet'])) {
            $searchArgs['isGet'] = $formData['isGet'];
        }
        if (isset($formData['isLabel'])) {
            $searchArgs['isLabel'] = $formData['isLabel'];
        }
        if (isset($formData['paperName'])) {
            $searchArgs['paperName'] = $formData['paperName'];
        }
        return $searchArgs;
    }

    /**
     * 统计套卷数
     * @param $searchArgs
     * @return mixed
     */
    public function getPaperCount($subjectId,$userKey)
    {
        $condition=[$this->table.'.subject_id'=>$subjectId,$this->table.'.is_get'=>['lt'=>2],'b.vip_label_get'=>['null'=>'b.id'],$this->table.'.status'=>1,'label_status'=>0,$this->table.'.created_time'=>['gt'=>config('app.MIDDLE_TIME')]];
        $join=[
            [
                'type'=>'left',
                'table'=>'vip_label_get as b',
                'on'=>['b.task_id'=>'vip_paper.id'],
                'where'=>['b.user_key'=>$userKey,'b.is_return'=>0]
            ]
        ];
        //获取剩余套卷数
        $count=$this->count($condition,$join);
        return $count;
    }

    /**
     * 获取标签套卷列表
     * @param $searchArgs
     * @return array
     */
    public function getLabelPaperList($searchArgs)
    {
        //查询领取表记录
        $vpLabelGetModel=new VpLabelGet();
        $vpLabelGetList=$vpLabelGetModel->findAll(['user_key'=>$searchArgs['userKey'],'is_return'=>0]);
        $arr=[];
        foreach($vpLabelGetList as $key => $val){
            $arr[]=$val['task_id'];
        }
        $vpLabelGetModel=new VpLabelGet();
        //根据学科统计剩余套卷
        $condition=['id'=>['not in'=>$arr],'subject_id'=>$searchArgs['subjectId'],'user_key'=>$searchArgs['userKey'],'get_type'=>'paper','is_return'=>0];
        $labelGet=$vpLabelGetModel->findAll($condition,['id'=>'desc'],['task_id']);
        $paperIds=[];
        foreach($labelGet as $key => $val){
            $paperIds[]=$val['task_id'];
        }
        //查询套卷领取表数据
        $condition=['subject_id'=>$searchArgs['subjectId'],'id'=>['not in'=>$paperIds],'is_get'=>['lt'=>2],'status'=>1,'label_status'=>0];
        //查询剩余套卷列表
        $paperList=$this->findLimit($condition,['created_time'=>'desc','is_sort'=>'desc','sort_time'=>'desc'],['id'],[],[],$searchArgs['paperCount']);
        $data=[];
        $createTime=date('Y-m-d H:i:s');
        foreach($paperList as $key => $val)
        {
            $data['task_id']=$val['id'];
            $data['subject_id']=$searchArgs['subjectId'];
            $data['subject_name']=$searchArgs['subjectName'];
            $data['user_key']=$searchArgs['userKey'];
            $data['create_time']=$createTime;
            $data['get_type']='paper';
            //添加领取单题记录
            $result = $vpLabelGetModel->add($data);
            if ($result === false) {
                throw new \Exception('领取失败');
            }
            $info = $this->findOne(['id' => $val['id']], ['id' => 'desc'], ['id', 'is_get']);
            //如果领取成功，更新套卷领取状态
            $result = $this->edit(['is_get' => $info['is_get'] + 1], ['id' => $info['id'],'is_get'=>['lt'=>2],'status'=>1]);
            if ($result === false) {
                throw new \Exception('领取失败');
            }
            $questionModel=new Question();
            //查询单题信息
            $questionList = $questionModel->findAll(['paper_id' => $val['id'],'status'=>1], ['id' => 'desc'], ['id', 'is_get']);
            //更新套卷下单题领取状态
            foreach($questionList as $k => $v)
            {
                $result=$questionModel->edit(['is_get'=>$v['is_get']+1],['id'=>$v['id'],'status'=>1,'is_get'=>['lt'=>2]]);
                if ($result === false) {
                    throw new \Exception('领取失败');
                }
            }
        }
        return true;
    }
    /**
     * 获取套卷领取信息
     * @param $paperId int
     * @return array
     */
    public function getPaperInfo($paperId)
    {
        $condition = array(
            'get_type'=> 'paper',
            'task_id' => $paperId,
            'is_return' => 0
        );
        $vplabelGet = new VpLabelGet();
        $result = $vplabelGet->getUserKeys($condition);
        if(empty($result)){
            return [];
        }
        $userKeys = [];
        foreach ($result as $v){
            $userKeys[] = $v['user_key'];
        }
        $ipCountObject = new VpTeacherLabelTag();
        $ipCountObj = $ipCountObject->selectRaw("*")->where('paper_id', '=', $paperId)->where('user_type', '=' , 'teacher')->orderBy('create_time','desc');
        $totalObj = DB::connection('mysql_kms')->table(DB::connection('mysql_kms')->raw("({$ipCountObj->toSql()}) as sub"))->mergeBindings($ipCountObj->getQuery())->select('sub.user_key', 'sub.create_time');
        $totalObj = $totalObj->groupBy('user_key')->get();
        $labelUserKeysTime = [];
        foreach($totalObj as $v){
            $labelUserKeysTime[$v->user_key] = $v->create_time;
        }
        $user = new User();
        $listUserKeyNames = $user->getUserNamesByUserKeys($userKeys);
        $paperIdNames = [];
        foreach ($result as $v){
            if(array_key_exists($v['task_id'],$paperIdNames)){
                $paperIdNames[$v['task_id']][] = [
                    'user_name' => isset($listUserKeyNames[$v['user_key']]) ? $listUserKeyNames[$v['user_key']] : '',
                    'create_time' => $v['create_time'],
                    'tag_time' => isset($labelUserKeysTime[$v['user_key']]) ? $labelUserKeysTime[$v['user_key']] : ''
                ];
            }else{
                $paperIdNames[$v['task_id']][] = [
                    'user_name' => isset($listUserKeyNames[$v['user_key']]) ? $listUserKeyNames[$v['user_key']] : '',
                    'create_time' => $v['create_time'],
                    'tag_time' => isset($labelUserKeysTime[$v['user_key']]) ? $labelUserKeysTime[$v['user_key']] : ''
                ];
            }
        }
        return $paperIdNames;
    }
    /**
     * 获取套卷详情
     * @param $paperId int
     * @return array
     */
    public function getPaperDetail ($paperId)
    {
        $ipCountObject = new VpTeacherLabelTag();
        $ipCountObj = $ipCountObject->selectRaw("*")->where('paper_id', '=', $paperId)->where('user_type', '=' , 'teacher')->orderBy('create_time','asc');
        $totalObj = DB::connection('mysql_kms')->table(DB::connection('mysql_kms')->raw("({$ipCountObj->toSql()}) as sub"))->mergeBindings($ipCountObj->getQuery())->select('sub.user_key', 'sub.create_time');
        $totalObj = $totalObj->groupBy('user_key')->get();
        $labelTagContent = new VipLabelTagContent();
        $fristTagContent = [];
        if(!empty($totalObj->toArray())){
            foreach($totalObj as $k => $v){
                if($k == 0){
                    $fristUserKey = isset($v->user_key) ? $v->user_key : '';
                    break;
                }
            }
        }else{
            $fristUserKey = '';
        }
        if($fristUserKey){
            $fristTagContent = $labelTagContent->getPaperTagContent($userType='teacher',$fristUserKey,$paperId);
        }
        $condition = array(
            'user_type' => 'judge',
            'paper_id' => $paperId
        );
        $result = $ipCountObject->getJudgeUserKey($condition);
        $judgeUserKey = isset($result['user_key']) ? $result['user_key'] : '';
        $judgeTagContent = [];
        if($judgeUserKey){
            $judgeTagContent = $labelTagContent->getPaperTagContent($userType='judge',$judgeUserKey,$paperId);
        }
        $ques = new Question();
        $condition = [
            'paper_id' => $paperId,
        ];
        $result = $ques->findAll($condition, ['id' => 'asc'], ['id']);
        $quesIds = [];
        foreach ($result as $v){
            $quesIds[] = $v['id'];
        }
        $questionResult = [];
        if($quesIds){
            $questionResult = KlibQuestionClient::getQuestion($quesIds);
        }
        $detail = [];
        $i = 1;
        foreach ($questionResult as $v) {
            $detail[] = [
                'i' => $i,
                'id'               => $v['ques_id'],//试题ID
                'answer'           => isset($v['ques_answer']) ? $v['ques_answer'] : '',
                'content'          => isset($v['ques_content']) ? $v['ques_content'] : '',
                'analysis'         => isset($v['ques_analysis']) ? $v['ques_analysis'] : '',
                "fristTagContent"  => isset($fristTagContent[$v['ques_id']]) ? trim(implode(",",$fristTagContent[$v['ques_id']]['tag_content']),","): '',
                "judgeTagContent"  => isset($judgeTagContent[$v['ques_id']]) ? trim(implode(",",$judgeTagContent[$v['ques_id']]['tag_content']),","): '',
            ];
            $i++;
        }
        return ['rows' => $detail];
    }

    /**
     * 任务排序
     * @param array
     * @return boolean
     */
    public function getTaskSort($searchArgs)
    {
        if(empty($searchArgs['paperIds'])) return false;
        $condition = array(
            'id' => array('in' => $searchArgs['paperIds']),
        );
        $result = $this->edit(['is_sort' => $searchArgs['sortValue'],'sort_time' => time()],$condition);
        if ($result == false){
            return false;
        }else{
            return true;
        }
    }
    /**
     * 更新套卷id
     * @param boolean
     */
    public function updatePaperIds($paperIds)
    {
        $question = new Question();
        $question->updateQuestionIds($paperIds,$type='paper');
        $condition = array(
            'id' => array('in' => $paperIds),
            'status' => 1
        );
        $res = $this->findAll($condition, $order=[], ['id','is_get','is_label']);
        if($res){
            foreach ($res as $v) {
                $condition = array(
                    'id' => array('eq' => $v['id']),
                    'is_get' => array('gt' => 0),
                );
                $result = $this->edit(['is_get' => $v['is_get'] - 1], $condition);
                if(false === $result){
                    $this->rollback();
                    throw new \Exception('清空任务失败');
                }
                $condition = array(
                    'id' => array('eq' => $v['id']),
                    'is_label' => array('gt' => 0),
                );
                $result = $this->edit(['is_label' => $v['is_label'] - 1], $condition);
                if(false === $result){
                    $this->rollback();
                    throw new \Exception('清空任务失败');
                }
            }
        }

    }


}
