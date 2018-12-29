<?php

namespace App\Models;

use App\Models\Model;

class VipMessageViewLog extends Model
{
    protected $table='vip_message_view_log';
    protected $connection = "mysql_kms";
    public $timestamps=false;
}
