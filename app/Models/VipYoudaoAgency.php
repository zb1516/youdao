<?php

namespace App\Models;

use App\Models\Model;

class VipYoudaoAgency extends Model
{
    protected $table='vip_youdao_agency';
    protected $connection = "mysql_kms";
    public $timestamps=false;

    /**
     * 获取有道机构列表
     */
    public function getYoudaoAgency()
    {
        $result = $this->findAll($condition = [], $order=[], ['agency_id', 'agency_name']);
        return $result;
    }
}
