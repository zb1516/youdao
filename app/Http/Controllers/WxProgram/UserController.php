<?php

namespace App\Http\Controllers\WxProgram;

use App\Clients\KlibTeacherClient;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function login(Request $request)
    {
        try{
            //接收参数
            $searchArgs['userName']=$request->input('userName');
            $searchArgs['password']=$request->input('password');
            $searchArgs['agencyId']=$request->input('agencyId');
            //调用微服务接口，进行用户登陆
            $token=KlibTeacherClient::getToken([
                'userName'=>$searchArgs['userName'],
                'passWord'=>$searchArgs['password'],
                'agencyId'=>$searchArgs['agencyId']
            ]);
            return response()->json([
                'status'=>200,
                'data'=>[
                    'token'=>$token
                ]
            ]);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}
