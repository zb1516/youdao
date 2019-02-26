<?php
namespace App\Services;
use App\Models\OssBuckets;
use App\Models\OssConfigs;
use OSS\OssClient;
use OSS\Core\OssException;
class BucketService {
    // http://bucketName.bucketRegion(-internal).aliyuncs.com/filePath
    protected static $urlSuffix = 'aliyuncs.com';
    protected static $internalSuffix = '-internal';

    /**
     * @param $configKey
     * @return array
     * @throws \Exception
     */
    public static function getOssConfig($configKey) {
        $condition = array(
            'config_key'=>$configKey
        );
        $ossConfigs = new OssConfigs();
        $ossConfig=$ossConfigs->findOne($condition);
        if(false == $ossConfig) {
            throw new \RuntimeException('OSS配置信息不存在！');
        }
        return array(
            'accessId'=>$ossConfig['access_id'],
            'accessSecret'=>$ossConfig['access_secret'],
            'roleArn'=>$ossConfig['role_arn'],
        );
    }

    /**
     * @param $bucketName
     * @return array
     * @throws \Exception
     */
    public static function getOssConfigByBucket($bucketName) {
        $bucketConfig = self::getBucketConfig($bucketName, false);
        $configKey = $bucketConfig['config_key'];
        return self::getOssConfig($configKey);
    }

    /**
     * @param $bucketName
     * @param bool $withConfigInfo
     * @return array
     * @throws \Exception
     */
    public static function getBucketConfig($bucketName, $withConfigInfo=true) {

        if(is_array($bucketName)) {
            $bucketInfo = $bucketName;
        } else {
            $condition = array(
                'bucket_name' => $bucketName
            );
            $ossBuckets = new OssBuckets();
            $bucketInfo = $ossBuckets->findOne($condition);
        }
        if(false == $bucketInfo) {
            throw new \RuntimeException('找不到bucket配置信息！');
        }
        if(false == $withConfigInfo) {
            return $bucketInfo;
        }
        $configKey = $bucketInfo['config_key'];
        $ossConfigInfo = self::getOssConfig($configKey);
        return array_merge($ossConfigInfo, array(
            'bucketName'=>$bucketInfo['bucket_name'],
            'bucketRegion'=>$bucketInfo['bucket_region'],
            'bucketDomain'=>$bucketInfo['bucket_domain']
        ));

    }

    /**
     * @param $domain
     * @param bool $withConfigInfo
     * @return array
     * @throws \Exception
     */
    public static function getBucketInfoByDomain($domain, $withConfigInfo=true) {
        $domain = strtolower($domain);
        $domain = str_replace('https://', '', $domain);
        $domain = str_replace('http://', '', $domain);
        $domain = trim($domain, '/');
        $condition = array(
            'bucket_domain'=>$domain,
        );
        $ossBuckets = new OssBuckets();
        $bucketInfo = $ossBuckets->findOne($condition);
        if(false == $bucketInfo) {
            throw new \RuntimeException('无法根据域名获取bucket信息！');
        }
        return self::getBucketConfig($bucketInfo, $withConfigInfo);
    }

    /**
     * @param $bucketName
     * @param int $expires
     * @throws \Exception
     * @return array
     */
    public static function getStsToken($bucketName, $expires=3600) {
        date_default_timezone_set('UTC');
        $bucketInfo = self::getBucketConfig($bucketName, true);
        $accessKeyId = $bucketInfo['accessId'];
        $accessKeySecret = $bucketInfo['accessSecret'];
        $roleArn = $bucketInfo['roleArn'];
        $uid = uniqid();
        $data = [
            'AccessKeyId' => $accessKeyId,
            'Action' => 'AssumeRole',
            'DurationSeconds' => $expires,
            'Format' => 'JSON',
            'RoleArn' => $roleArn,
            'RoleSessionName' => $bucketName . $uid,
            'SignatureMethod' => 'HMAC-SHA1',
            'SignatureNonce' => time().rand(10000,99999),
            'SignatureVersion' => '1.0',
            'Timestamp' => date('Y-m-d').'T'.date('H:i:s').'Z',
            'Version' => '2015-04-01',
        ];
        $params = '';
        $signatureStrStart = 'GET&%2F&';
        $signatureStr = '';
        foreach($data as $k => $v){
            $params .= $k.'='.urlencode($v).'&';
            $signatureStr .= $k.'='.$v.'&';
        }
        $signature = $signatureStrStart.urlencode(substr($params,0,-1));
        $signature = base64_encode(hash_hmac('sha1', $signature, $accessKeySecret.'&', true));
        $url = 'https://sts.aliyuncs.com?'.$params.'&Signature='.$signature;
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $data = curl_exec($curl);
        curl_close($curl);

        $result = json_decode($data, true);
        return $result;
    }

    /**
     * 微服务层不能做文件上传操作，因为文件可能和微服务并不在同一个服务器上， 所以这个方法只能是PHP前端调用
     * @param $bucketName
     * @param $localFilePath
     * @param $ossPath
     * @param $internal
     * @return array
     * @throws \Exception
     */
    public static function uploadFile($bucketName, $localFilePath, $ossPath, $internal=true,$downloadFileName="") {
        dd($bucketName);
        $bucketInfo = self::getBucketConfig($bucketName, true);
        $options=null;
        $region = str_replace('oss-', '', $bucketInfo['bucketRegion']);
        if($internal) {
            $endpoint = 'oss-' . $region . self::$internalSuffix;
        } else {
            $endpoint = 'oss-' . $region;
        }
        $endpoint .= ('.' . self::$urlSuffix);
        if($downloadFileName){
            $options[OssClient::OSS_HEADERS] = array(
                OssClient::OSS_CONTENT_DISPOSTION => "attachment;filename=".$downloadFileName,
            );
        }
        try{
            $localImageUrl = config('app.LOCAL_IMAGE_URL');
            $ossClient = new OssClient($bucketInfo['accessId'], $bucketInfo['accessSecret'], $endpoint);
            $res = $ossClient->uploadFile($bucketName, $ossPath, $localImageUrl.$localFilePath,$options);
            return $res;
        } catch(OssException $e) {
            throw $e;
        }
    }

}