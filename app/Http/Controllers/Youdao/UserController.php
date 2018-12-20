<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/24
 * Time: 9:02
 */
namespace App\Http\Controllers\Youdao;
use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use App\Models\User;
use DB;


class UserController extends BaseController
{
    protected $getUserKey;
    public function __construct() {
        parent::__construct();
        $this->user  = new User;
        $this->getUserKey = $this->userKey;
    }

    //获取用户信息
    public function getUserInfo(Request $request) {

        $userInfo = $this->user->getUserInfo ($this->getUserKey);
        return $userInfo;
    }

}