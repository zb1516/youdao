<?php

namespace App\Models;

use App\Models\Model;

class VipRemindTag extends Model
{
    protected $table="vip_remind_tag";
    protected $connection='mysql_kms';
    public $timestamps=false;

    /**
     * 验证是否已经使用过贴标签
     * @param $userKey
     * @return mixed
     */
    public function checkIsRemind($userKey){
        $condition = [
            'user_key'=>$userKey,
        ];
        $result = $this->findOne($condition);
        return $result;
    }
}
