<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2019/1/9
 * Time: 11:05
 */
namespace App\Models;

class OssConfigs extends Model
{
    protected $table='oss_configs';
    protected $connection = "mysql_enroll_oss";
    public $timestamps=false;
}
