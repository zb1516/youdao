<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2019/1/10
 * Time: 10:09
 */
namespace App\Models;

class VipYoudaoWorkingWeekendDays extends Model
{
    protected $connection = 'mysql_kms';
    protected $table = "vip_youdao_working_weekend_days";
    public $timestamps = false;

    /**
     * 获取处理天数
     * @param $startTime,$endTime
     * @return count
     */
    public function getDiffDaysCount($startTime,$endTime)
    {
        $result = $this->findAll($condition=[], $order=[], ['date_working_weekend']);
        $list = [];
        foreach($result as $v){
            $list[] = strtotime(date('Y-m-d',strtotime($v['date_working_weekend'])));
        }
        $count = 1;
        $startTimeStamp = strtotime(date('Y-m-d',strtotime($startTime)));
        $endTimeStamp = strtotime(date('Y-m-d',strtotime($endTime)));
        for($i=$startTimeStamp;$i<=$endTimeStamp;$i+=86400){
            if(in_array($i,$list)){
                continue;
            }
            $count++;
        }
        $num = $count-2;
        return $num;

    }
}