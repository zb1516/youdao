<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/9/6
 * Time: 10:06
 */
namespace App\Models;

class SysRoles extends Model
{

    protected $connection = 'sqlsrv_server';
    protected $table = "sys_roles";
    public $timestamps = false;
    /**
     * 获取角色role_id
     * @param string
     * @return string
     */
    public function getRoleId ($roleCaption)
    {
        if(empty($roleCaption))return null;
        $condition = [
            'role_caption' => $roleCaption,
        ];
        $result = $this->findOne ($condition,[],['role_id']);
        return $result['role_id'];
    }

}