<?php
/**
 * Created by PhpStorm.
 * User: shenjianguo
 * Date: 2018/9/6
 * Time: 16:39
 */

namespace App\Libs;
class Export{
    public static function export($filename='',$header=array(),$content=array())
    {
        $filename=$filename.date('Ymd');
        header("Content-Type: application/vnd.ms-excel; charset=GBK");
        header("Pragma: public");
        header("Expires: 0");
        header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
        header("Content-Type: application/force-download");
        header("Content-Type: application/octet-stream");
        header("Content-Type: application/download");
        header("Content-Disposition: attachment;filename=$filename.xls ");

        $str="<table border='1'><tr>";
        if(!empty($header))
        {
            foreach($header as $v)
            {

                //$str .= " <th>".@iconv("UTF-8", "GBK//IGNORE",$v)."</th>";
                $str.= " <th>".@mb_convert_encoding($v, "gb18030", "utf-8") ."</th>";
            }
            //echo $str;
            //print "\n";
            $str .= " </tr>";
        }
        if(!empty($content))
        {
            if(self::isArray($content) == 1)
            {
                $str .= "<tr>";
                //把关联数组转换成索引数组
                foreach($content as $v)
                {
                    //echo " ".iconv("utf-8", "gb2312",$v)." \t";
                    //$str .= "<td style='vnd.ms-excel.numberformat:@'>".@iconv("utf-8", "gbk",$v)."</td>";
                    $str .= "<td style='vnd.ms-excel.numberformat:@'>".@mb_convert_encoding($v, "gb18030", "utf-8")."</td>";
                }
                //print "\n";
                $str .= "</tr>";

            }elseif(self::isArray($content) == 2)
            {
                foreach($content as $v)
                {
                    $str .= "<tr>";
                    foreach($v as $v2)
                    {
                        //echo " ".iconv("utf-8", "gb2312",$v2)." \t";
                        //$str .= "<td style='vnd.ms-excel.numberformat:@'>".@iconv("utf-8", "gbk",$v2)."</td>";
                        $str .= "<td style='vnd.ms-excel.numberformat:@'>".@mb_convert_encoding($v2, "gb18030", "utf-8")."</td>";
                    }
                    //print "\n";
                    $str .= "</tr>";
                }
            }
        }
        $str .= "</table>";
        echo $str;
    }

    //判断数组是一维数组还是二维数组
    public static function isArray($content)
    {
        if(!is_array($content))
        {
            return 0;
        }else
        {
            $num=0;
            foreach($content as $v)
            {
                $t1=self::isArray($v);
                if($t1 > $num)
                {
                    $num=$t1;
                }
                return $num+1;
            }
        }
    }

}