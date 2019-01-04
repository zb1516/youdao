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
            $userToken=$request->input('userToken');
            $result=true;//UserService::checkUserStatus($userToken);
            if($result === false)
            {
                throw new \Exception('登陆已过期，请重新登陆');
            }
            return $next($request);
        }catch (\Exception $e){
            return response()->json(['status'=>0,'errorMsg'=>$e->getMessage()]);
        }
    }
}
