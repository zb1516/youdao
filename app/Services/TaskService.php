<?php
namespace App\Services;

class TaskService
{
    protected  $client;

    public function __construct()
    {
        $this->client=new \swoole_client(SWOOLE_SOCK_TCP);
    }

    /**
     * 连接服务器
     * @throws \Exception
     */
    public  function connect()
    {
        if(!$this->client->connect('127.0.0.1',9502)){
            throw new \Exception("client:connect \n");
        }
    }

    /**
     * 发送数据
     * @param $data
     */
    public  function send($data)
    {
        if($this->client->isConnected())
        {
            if(!is_string($data))
            {
                $data=json_encode($data);
            }
            $this->client->send($data);
        }else{
            throw new \Exception('swoole server does not connected');
        }
    }

    /**
     * 关闭连接
     */
    public function close()
    {
        $this->client->close();
    }
}