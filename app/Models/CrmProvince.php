<?php
namespace App\Models;

class CrmProvince extends Model
{
    protected $connection = 'mysql_crm';
    protected $table = "crm_prov";
    public $timestamps = false;
}