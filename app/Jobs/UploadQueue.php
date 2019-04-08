<?php

namespace App\Jobs;

use App\Services\YoudaoService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Logging\Log;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class UploadQueue implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $data;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $data = $this->data;
        try {
            $fileContent = file_get_contents($data['fileUrl']);
            $uploadDir = $_SERVER['DOCUMENT_ROOT'].'/ossImages/temp/';
            if(is_dir($uploadDir)){
                @mkdir($uploadDir, 0777);
            }
            $targetFile = $uploadDir.$data['newFileName'];
            $result = file_put_contents($targetFile, $fileContent);
            if($result){
                $data = array('file'=>new \CURLFile($targetFile));
                header('content-type:text/html;charset=utf8');
                $curl = curl_init();
                curl_setopt($curl, CURLOPT_URL, config('app.UPLOAD_PHP_URL'));
                curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($curl, CURLOPT_POST, 1);
                curl_setopt($curl, CURLOPT_SAFE_UPLOAD, 1);
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                $result = curl_exec($curl);
                $aStatus = curl_getinfo($curl);
                curl_close($curl);
                file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/batchLog/fileUploadSuccess-'. date('Ymd') . '.txt', $targetFile.PHP_EOL,FILE_APPEND);
                @unlink($targetFile);
               /* $youdaoService = new YoudaoService();
                $postData = array(
                    'taskId'=>$data['task_id'],
                    'url'=>$data['fileUrl']
                );
                file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/batchLog/postDelDoc-'. date('Ymd') . '.txt', json_encode($postData).PHP_EOL,FILE_APPEND);
                $result = $youdaoService->deleteYoudaoDocUrl(config('app.YOUDAO_DELETE_DOC_URL'), $postData);*/

            }
        } catch (\Exception $e) {
            file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/batchLog/fileUploadError-'. date('Ymd') . '.txt', $data['task_id'].':failed,errorMsg:'.$e->getMessage().PHP_EOL,FILE_APPEND);
            //return response()->json(['errorMsg' => $e->getMessage()]);
        }

    }
}
