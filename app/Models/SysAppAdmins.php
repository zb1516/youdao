<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/9/6
 * Time: 10:06
 */
namespace App\Models;

class SysAppAdmins extends Model
{

    protected $connection = 'sqlsrv_server';
    protected $table = "sys_app_admins";
    public $timestamps = false;


}