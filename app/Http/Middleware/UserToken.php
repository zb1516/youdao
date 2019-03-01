<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/28
 * Time: 12:19
 */

namespace App\Http\Middleware;

use App\Libs\Xxtea;

use App\Models\SysRoles;
use App\Models\SysUsers;
use Closure;
use GuzzleHttp\Psr7\Request;
use Illuminate\Routing\Route;

class UserToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */

    protected $encryptUserKey = '';
    protected $userKey = '';
    protected $encryptKey = 'aitifen.com';

    public function handle($request, Closure $next)
    {
        try {
            $this->encryptUserKey = isset($_REQUEST['userKey']) ? $_REQUEST['userKey'] : '';
            if (empty($this->encryptUserKey)) {
                throw new \Exception('uesrKey不能为空');
            }
            $this->userKey = Xxtea::decrypt($this->encryptUserKey, $this->encryptKey);
            if (false == $this->userKey) {
                throw new \Exception('非法请求');
            }

        } catch (\Exception $e) {

            return response()->json(['errorMsg' => $e->getMessage()]);
        }

        return $next($request);
    }
}