<?php

namespace App\Models;

use App\Models\Model;

class VipMessageRemind extends Model
{
    protected $table='vip_message_remind';
    protected $connection = "mysql_kms";
    public $timestamps=false;
}
