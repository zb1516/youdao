<?php

namespace App\Models;

use App\Models\Model;

class VipPaperImage extends Model
{
    protected $table='vip_paper_image';
    protected $connection = "mysql_kms";
    public $timestamps=false;
}
