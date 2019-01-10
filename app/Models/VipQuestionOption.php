<?php
/**
 * Created by PhpStorm.
 * User: xiecuiping
 * Date: 2019/1/9
 * Time: 16:00
 */
namespace App\Models;

class VipQuestionOption extends Model
{
    protected $table = "vip_question_option";
    protected $connection = "mysql_kms";
    public $timestamps = false;
}