<?php
namespace App\Http\Controllers\WxProgram;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JohnLui\AliyunOSS;

class UploadController extends Controller
{
    /**
     * 获取签名
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function getSignature(Request $request)
    {
        try{
            $accessId=env('OSS_ACCESS_ID');
            $accessKey= env('OSS_ACCESS_KEY');
            $host = env('OSS_ORIGIN_HOST');
            $bucketName=env('OSS_BUCK_NAME');
            $fileDir = env('OSS_FILE_DIR');
            $now = time();
            $expire = 30; //设置该policy超时时间是10s. 即这个policy过了这个有效时间，将不能访问
            $end = $now + $expire;
            $expiration = gmt_iso8601($end);
//            $oss_sdk_service = new AliyunOSS($host,'经典网络',false,$accessId,$accessKey);
            //最大文件大小.用户可以自己设置
            $condition = array(0=>'content-length-range', 1=>0, 2=>1048576000);
            $conditions[] = $condition;
            //表示用户上传的数据,必须是以$dir开始, 不然上传会失败,这一步不是必须项,只是为了安全起见,防止用户通过policy上传到别人的目录
            $start = array(0=>'starts-with', 1=>$accessKey, 2=>$fileDir);
            $conditions[] = $start;
            //这里默认设置是２０２０年.注意了,可以根据自己的逻辑,设定expire 时间.达到让前端定时到后面取signature的逻辑
            $arr = array('expiration'=>$expiration,'conditions'=>$conditions);
            $policy = json_encode($arr);
            $base64_policy = base64_encode($policy);
            $string_to_sign = $base64_policy;
            $signature = base64_encode(hash_hmac('sha1', $string_to_sign, $accessKey, true));
            return response()->json([
                'status'=>200,
                'errorMsg'=>'操作成功',
                'data'=>[
                    'AccessKeySecret'=>$accessKey,
                    'AccessKeyId'=>$accessId,
                    'Expiration'=>$expiration,
                    'SecurityToken'=>$signature,
                    'region'=>$host,
                    'bucket'=>$bucketName,
                    'path'=>$fileDir
                ]
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status'=>0,
                'errorMsg'=>$e->getMessage()
            ]);
        }
    }
}