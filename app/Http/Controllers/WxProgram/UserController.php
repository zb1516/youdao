<?php

namespace App\Http\Controllers\WxProgram;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function login(Request $request)
    {
        try{
            //接收参数
            $searchArgs['userName']=$request->userName;
            $searchArgs['password']=$request->password;
            $searchArgs['agencyId']=$request->agencyId;
            //调用微服务接口，进行用户登陆

        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}
