<?php

namespace App\Models;

class VpUserSubjects extends Model
{

    protected $connection = 'sqlsrv_server';
    protected $table = "vp_user_subjects";
    public $timestamps = false;

    /**
     * 获取学科id
     * @param string
     * @return array
     */
    public function getUserSubjectIds($userKey)
    {
        if (false == is_array($userKey)) {
            $userKey = array($userKey);
        }
        $condition = array('user_key' => array('in' => $userKey));
        $rows = $this->findAll($condition);
        if (false == $rows) {
            return array();
        }
        $sids = array();
        foreach ($rows as $row) {
            $sids = array_merge($sids, explode(',', $row['sids']));
        }
        return $sids;
    }
}
