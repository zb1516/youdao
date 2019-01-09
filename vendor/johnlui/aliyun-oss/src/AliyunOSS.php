<?php

 public function exportHistoryList($data, $filename,$myTeacherId,$myAgencyId)
    {
        $redis = Redis::getRedis();
        try {
            require_once dirname(__FILE__) . '../../Libs/Classes/PHPExcel.php';
            require_once dirname(__FILE__) . '../../Libs/Classes/PHPExcel/IOFactory.php';
            require_once dirname(__FILE__) . '../../Libs/Classes/PHPExcel.php';
            require_once dirname(__FILE__) . '../../Libs/Classes/PHPExcel/Writer/Excel2007.php';

            $header_arr = array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

            $objPHPExcel = new \PHPExcel();                        //初始化PHPExcel(),不使用模板
//        $template = dirname(__FILE__).'/template.xls';   //使用模板
//        $objPHPExcel = \PHPExcel_IOFactory::load($template);   //加载excel文件,设置模板

            $objWriter = new \PHPExcel_Writer_Excel5($objPHPExcel);    //设置保存版本格式

            //接下来就是写数据到表格里面去
            $objActSheet = $objPHPExcel->getActiveSheet();
            $objActSheet->setCellValue('A1', "学员");
            $objActSheet->setCellValue('B1', "时间");
            $objActSheet->setCellValue('C1', "上课教师");
            $objActSheet->setCellValue('D1', "考勤");
            $objActSheet->setCellValue('E1', "评价状态");
            $objActSheet->setCellValue('F1', "学科");
            $objActSheet->setCellValue('G1', "课程名称");
            $objActSheet->setCellValue('H1', "时长");
            $objActSheet->setCellValue('I1', "课时");
            $i = 2;
            foreach ($data as $key => $item) {
                $j = 0;
                foreach ($item as $v) {
                    $objActSheet->setCellValue($header_arr[$j] . $i, $v);
                    $j++;
                }
                $i++;
            }
//            $objActSheet->setCellValue('A2',  "活动名称：江南极客");
//            $objActSheet->setCellValue('C2',  "导出时间：".date('Y-m-d H:i:s'));
//            $i = 4;
//            $list=[1=>1,2=>2,3=>3,4=>4];
//            $indexKey=array();
//            foreach ($list as $row) {
//                foreach ($indexKey as $key => $value){
//                    //这里是设置单元格的内容
//                    $objActSheet->setCellValue($header_arr[$key].$i,$row[$value]);
//                }
//                $i++;
//            }
            // 1.保存至本地Excel表格
            if(false == is_dir("/tmp/atf_upload")) {
                mkdir("/tmp/atf_upload", 0777, true);
            }
            $objWriter->save('/tmp/atf_upload/' . $filename . '.xls');
            $ossPATH="YKT_V2/".$myAgencyId."/"."$myTeacherId"."/";
            $res = Bucket::uploadFile( OFFICE_DOCUMENT_BUCKET,'/tmp/atf_upload/' . $filename . '.xls',$ossPATH.$filename . '.xls',false,"历史课节导出.xls");
            unlink('/tmp/atf_upload/' . $filename . '.xls');
            $redis->set($filename, $res["info"]["url"],7200);

        } catch (\Exception $e) {
            $redis->set($filename, -1,7200);
        }

        return 1;
    }