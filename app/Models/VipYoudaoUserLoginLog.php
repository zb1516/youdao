<?php

namespace App\Models;

use App\Models\Model;

class VipYoudaoUserLoginLog extends Model
{
    protected $table='vip_youdao_user_login_log';
    protected $connection = "mysql_kms";
    public $timestamps=false;
}
