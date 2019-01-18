<?php

namespace App\Http\Middleware;

use App\Services\UserService;
use Closure;

class CheckUserToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try{
            $searchArgs['isShare']=$request->input('isShare');
            $searchArgs['token']=$request->input('token');
            if(!isset($searchArgs['isShare'])){
                if(!isset($searchArgs['token']) || empty($searchArgs['token']) )
                {
                    throw new \Exception('缺少token信息');
                }
                $result=UserService::checkUserStatus($searchArgs['token']);
                if($result === false)
                {
                    throw new \Exception('登陆已过期，请重新登陆');
                }
            }
            return $next($request);
        }catch (\Exception $e){
            return response()->json(['status'=>1001,'errorMsg'=>$e->getMessage()]);
        }
    }
}
