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
        $this->serv=new \swoole_server('127.0.0.1',9503);
        $this->serv->on('connect',[$this,'onConnect']);
        $this->serv->on('receive',[$this,'onReceive']);
        $this->serv->on('task',[$this,'onTask']);
        $this->serv->on('finish',[$this,'onFinish']);
        $this->serv->start();
    }

    /**
     * 有客户端连接时执行
     * @param $serv
     * @param $fd
     */
    protected function onConnect($serv,$fd)
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
    protected function onReceive($serv,$fd,$from_id,$data)
    {
        $this->task($data);
    }

    /**
     * 有任务的时候执行
     * @param $serv
     * @param $task_id
     * @param $from_id
     * @param $data
     */
    protected function onTask($serv,$task_id,$from_id,$data)
    {
        $this->sernd();         //发送数据
        $this->onFinish($data);
    }

    /**
     * 任务结束时执行
     * @param $serv
     * @param $task_id
     * @param $data
     * @return string
     */
    protected function onFinish($serv,$task_id,$data)
    {
        return "发送成功";
    }
}
