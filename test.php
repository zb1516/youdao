<?php
ini_set('memory_limit', '2000M');
header("content-type:text/html;charset=utf-8");
$dsn='mysql:host=atf.rds.aliyun.com;dbname=kms_gaosi';
$user='aitifen';
$password='Atf!@#456';
try {
    $pdo=new PDO($dsn,$user,$password);
    $sql="select id from vip_question where knowledge_id <> 0 and is_label = 0";
    $result=$pdo->prepare($sql);			//准备查询语句
    $result->execute();
    $res=$result->fetchAll(PDO::FETCH_ASSOC);
    foreach($res as $key => $val)
    {
        $sql='update vip_question set is_get=1,is_label=1 where id = '.$val['id'];
        $res=$pdo->exec($sql);
        if($res === false){
            echo "执行失败";
        }
        echo "执行成功".$res;
    }
} catch (PDOException $e) {
    echo 'SQL Query:'.$sql.'</br>';
    echo 'Connection failed:'.$e->getMessage();
}