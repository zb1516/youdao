<?php
/**
 * Created by PhpStorm.
 * User: xiecuiping
 * Date: 2019/1/9
 * Time: 15:59
 */
namespace App\Models;

class VipQuestionAnswer extends Model
{
    protected $table = "vip_question_answer";
    protected $connection = "mysql_kms";
    public $timestamps = false;
}