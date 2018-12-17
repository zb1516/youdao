<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/9/6
 * Time: 10:33
 */
namespace App\Models;
class SysUserRoles extends Model
{

    protected $connection = 'sqlsrv_server';
    protected $table = "sys_user_roles";
    public $timestamps = false;
    /**
     * 根据角色获取userKeys
     * @param array
     * @return array
     */
    public function getUserKeysByRoleId ($roleId)
    {
        if(empty($roleId))return [];
        $condition = [
            'role_id' => $roleId,
        ];
        $result = $this->findAll ($condition,[],['user_key']);
        return $result;
    }
    public function getUserKeys ($roleId)
    {
        $condition = [
            'role_id' => $roleId,
        ];
        $result = $this->findAll ($condition,$order=['id' => 'asc'],['user_key']);
        $userKeyArray = [];
        foreach ($result as $value) {
            $userKeyArray[] = $value['user_key'];
        }
        return $userKeyArray;
    }
}