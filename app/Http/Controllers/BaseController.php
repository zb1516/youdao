<?php

namespace App\Http\Controllers;
use App\Libs\Xxtea;

class BaseController extends Controller
{
    protected $encryptUserKey = '';
    protected $userKey = '';
    protected $encryptKey = 'aitifen.com';
    public function __construct() {
        $this->encryptUserKey = isset($_REQUEST['userKey'])?$_REQUEST['userKey']:'';
        $this->userKey = Xxtea::decrypt($this->encryptUserKey, $this->encryptKey);
    }

}
