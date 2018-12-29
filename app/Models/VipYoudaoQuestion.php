<?php

namespace App\Models;

use App\Models\Model;

class VipYoudaoQuestion extends Model
{
    protected $table='vip_youdao_question';
    protected $connection = "mysql_kms";
    public $timestamps=false;
}
