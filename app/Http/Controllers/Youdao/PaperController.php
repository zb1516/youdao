<?php
/**
 * 套卷审核
 * Created by PhpStorm.
 * User: xiecuiping
 * Date: 2018/12/22
 * Time: 14:14
 */
namespace App\http\Controllers\Youdao;

use App\Http\Controllers\BaseController;
use App\Models\User;

class PaperController extends BaseController
{

    protected $getUserKey;
    public function __construct(){
        parent::__construct();
        $this->user = new User;
        //$this->getUserKey = $this->userKey;
    }


    //套卷审核列表
    public function paperList(){
        try{
            $userInfo = $this->user->getUserInfo($this->userKey);
            print_r($userInfo);exit;
        }catch (\Exception $e){
            return response()->json(['errorMsg' => $e->getMessage()]);
        }

    }
}
