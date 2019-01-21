<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SwooleTaskServer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'swoole:start';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'swoole任务描述';

    protected $serv;
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->start();
    }

    protected function start()
    {
        $this->serv=new \swoole_server('0.0.0.0',9502);
        $this->serv->set([
            'reactor_num' => 2,
            'task_worker_num'=>1,
            'worker_num' => 4
        ]);
        $this->serv->on('Connect',[$this,'onConnect']);
        $this->serv->on('Receive',[$this,'onReceive']);
        $this->serv->on('Task',[$this,'onTask']);
        $this->serv->on('Finish',[$this,'onFinish']);
        $this->serv->start();
    }

    /**
     * 有客户端连接时执行
     * @param $serv
     * @param $fd
     */
    public function onConnect($serv,$fd)
    {
        echo "client:connect \n";
    }

    /**
     * 有数据进来的时候执行
     * @param $serv
     * @param $fd
     * @param $from_id
     * @param $data
     */
    public function onReceive($serv,$fd,$from_id,$data)
    {
          $serv->task($data);
    }

    /**
     * 有任务的时候执行
     * @param $serv
     * @param $task_id
     * @param $from_id
     * @param $data
     */
    public function onTask($serv,$task_id,$from_id,$data)
    {
        if(!empty($data) && is_string($data))
        {
            $data=json_decode($data,true);
        }
        //执行任务
        $result=httpPost($data['url'],$data['data']);
        $result=json_decode($result,true);
        $serv->finish($result);
    }

    /**
     * 任务结束时执行
     * @param $serv
     * @param $task_id
     * @param $data
     * @return string
     */
    public function onFinish($serv,$task_id,$data)
    {
        return "success";//这里告诉任务结束，于是上面的on('finish', array($this, 'onFinish'))就会执
    }
}
