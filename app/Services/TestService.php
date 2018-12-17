<?php
namespace App\Http\Services;

use Hprose\Http\Server;
class TestService{
    public function init(){
        $server=new Server();
        $server->addMethod('test',$this);
        $server->start();
    }
    public function test(){
        return 'hello';
    }
}
?>