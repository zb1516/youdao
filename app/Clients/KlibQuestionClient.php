<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/8/31
 * Time: 17:36
 */

namespace App\Clients;

use Hprose\Http\Client;

class KlibQuestionClient
{
    public static function getQuestion($questionIds)
    {
        $user = new Client(env('KLIB_SERVICE_HOST') . ':' . env('KLIB_SERVICE_PORT') . '/quesService', false);
        $res = $user->getQuesInfoById($questionIds, false, intval(env('QUES_ATTR_DEFAULT',7)) | intval(env('QUES_ATTR_PAPER',32)));
        if(count($res) == count($res,1)){
            $quesOptions=isset($res['ques_options'])?trim($res['ques_options']):'';
            $quesContent=isset($res['ques_content'])?trim($res['ques_content']):'';
            $res['ques_content']=$quesContent.$quesOptions;
        }else {
            foreach ($res as $key => &$val) {
                $quesOptions = isset($val['ques_options']) ? trim($val['ques_options']) : '';
                $quesContent = isset($val['ques_content']) ? trim($val['ques_content']) : '';
                $val['ques_content'] = $quesContent . $quesOptions;
            }
        }
        return $res;
    }
}