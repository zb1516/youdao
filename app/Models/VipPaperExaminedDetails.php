<?php

namespace App\Models;

use App\Models\Model;

class VipPaperExaminedDetails extends Model
{
    protected $table='vip_paper_examined_details';
    protected $connection = "mysql_kms";
    public $timestamps=false;
}
