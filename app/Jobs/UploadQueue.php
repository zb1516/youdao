<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
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
                @unlink($targetFile);

            }
        } catch (\Exception $e) {
            return response()->json(['errorMsg' => $e->getMessage()]);
        }

    }
}
