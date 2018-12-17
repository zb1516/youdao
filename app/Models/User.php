<?php

namespace App\Models;

class User extends Model
{

    protected $connection = 'sqlsrv_server';
    protected $table = "sys_users";
    public $timestamps = false;

    public function getUserInfo($userKey)
    {
        $condition = [
            'user_key' => $userKey
        ];
        $result = $this->findOne($condition, $order=[], ['user_name','user_realname']);
        $result['agency_id'] = 384;
        $result['agency_name'] = '高思VIP';
        return $result;
    }

    public function getUserNamesByUserKeys($userKeys)
    {
        if(empty($userKeys)) return [];
        $condition['user_key'] = array('in' => $userKeys);
        $res = $this->findAll($condition, $order=[], ['user_key', 'user_realname']);
        $userNames = [];
        foreach ($res as $v) {
            $userNames[$v['user_key']] = $v['user_realname'];
        }
        return $userNames;
    }


}
