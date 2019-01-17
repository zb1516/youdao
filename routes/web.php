<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/', function () {
    return view('index');
});
//小程序接口
Route::group(['prefix'=>'wxprogram'],function($router){
    $router->get('wx/login','WxProgram\WxController@login');
    $router->get('paper/getPaperStatus','WxProgram\PaperController@getPaperStatus');
    $router->get('paper/getPaperImageList','WxProgram\PaperController@getPaperImageList');
    $router->get('paper/getPaperFirstImage','WxProgram\PaperController@getPaperFirstImage');
    $router->get('message/getMessageList','WxProgram\MessageController@getMessageList');
    $router->post('user/login','WxProgram\UserController@login');
    $router->get('user/getAgencyList','WxProgram\UserController@getAgencyList');
    $router->get('wx/getShareTemplate','WxProgram\WxController@getShareTemplate');
    $router->get('paper/getPaperInfo','WxProgram\PaperController@getPaperInfo');
    $router->get('paper/getPaperExaminedInfo','WxProgram\PaperController@getPaperExaminedInfo');
});

Route::group(['prefix'=>'wxprogram','middleware'=>'checkUserToken'],function($router){
    $router->post('paper/addPaperImage','WxProgram\PaperController@addPaperImage');
    $router->get('paper/getPaperCount','WxProgram\PaperController@getPaperCount');
    $router->get('paper/getPaperExaminedList','WxProgram\PaperController@getPaperExaminedList');
    $router->post('paper/editPaperImage','WxProgram\PaperController@editPaperImage');
    $router->get('message/getMessageCount','WxProgram\MessageController@getMessageCount');
    $router->post('message/setReadMessage','WxProgram\MessageController@setReadMessage');
    $router->get('user/logout','WxProgram\UserController@logout');
});

//以下为4.0路由

//获取公有信息
Route::group(['prefix'=>'common'],function($router){
    $router->get('common/getYear', 'Common\CommonController@getYear');
    $router->get('common/getPaperSourceAjaxSearch', 'Common\CommonController@getPaperSourceAjaxSearch');
    $router->get('common/getQuestionTypeAjaxSearch', 'Common\CommonController@getQuestionTypeAjaxSearch');
    $router->get('common/getMonthTime', 'Common\CommonController@getMonthTime');
    $router->get('common/getAllGrade', 'Common\CommonController@getAllGrade');
    $router->get('common/getPaperCitysAjaxSearch', 'Common\CommonController@getPaperCitysAjaxSearch');
    $router->get('common/getSubjects', 'Common\CommonController@getSubjects');
    $router->get('common/getProvince', 'Common\CommonController@getProvince');
    $router->get('common/getSubjectYD', 'Common\CommonController@getSubjectYD');
    $router->get('common/getYoudaoTask', 'Common\CommonController@getYoudaoTask');
    $router->get('common/getYoudaoAgency', 'Common\CommonController@getYoudaoAgency');
    $router->get('common/getPaperStatus', 'Common\CommonController@getPaperStatus');
    $router->get('common/getImageStatus', 'Common\CommonController@getImageStatus');
    $router->get('common/getAuditors', 'Common\CommonController@getAuditors');
    $router->get('common/getCitys','Common\CommonController@getCitys');
    $router->get('common/getPaperAreasAjaxSearch', 'Common\CommonController@getPaperAreasAjaxSearch');
    $router->get('common/getQuestionClient', 'Common\CommonController@getQuestionClient');//获取试题信息
    $router->get('common/getPaperClient', 'Common\CommonController@getPaperClient');//获取试卷信息



});


$router->group(['prefix' => 'youdao', 'middleware' => ['usertoken']], function () use ($router) {
    Route::get('user/getUserInfo', 'Youdao\UserController@getUserInfo');
    Route::get('paper/paperList', 'Youdao\PaperController@paperList');
    Route::get('paper/paperStatistic', 'Youdao\PaperController@paperStatistic');
    Route::get('paper/paperInfo', 'Youdao\PaperController@paperInfo');
    Route::get('imagePaper/paperList', 'Youdao\ImagePaperController@paperList');
    Route::get('imagePaper/imageExport', 'Youdao\ImagePaperController@imageExport');
    Route::get('imagePaper/imagePaper', 'Youdao\ImagePaperController@imagePaper');
    Route::get('paper/paperExport', 'Youdao\PaperController@paperExport');
    Route::get('paper/questionExport', 'Youdao\PaperController@questionExport');
    Route::get('imagePaper/imagePaperDetail', 'Youdao\ImagePaperController@imagePaperDetail');
    Route::get('imagePaper/repeatPaperRecord', 'Youdao\ImagePaperController@repeatPaperRecord');
    Route::get('imagePaper/paperReturn', 'Youdao\ImagePaperController@paperReturn');
    Route::get('imagePaper/paperPass', 'Youdao\ImagePaperController@paperPass');
    Route::get('paper/paperExaminedOne', 'Youdao\PaperController@paperExaminedOne');
    Route::get('paper/paperExaminedTwo', 'Youdao\PaperController@paperExaminedTwo');
    Route::get('paper/batchPaperExamined', 'Youdao\PaperController@batchPaperExamined');


});

//不需要登录验证的路由
$router->group(['prefix' => 'youdao'], function () use ($router) {
    Route::get('paper/paperExamined', 'Youdao\PaperController@paperExamined');//有道第一次处理成功回调地址
    Route::get('paper/questionError', 'Youdao\PaperController@questionError');//有道处理问题试题成功后回调地址
    Route::get('paper/batchPaperExamin', 'Youdao\PaperController@batchPaperExamin');//计划任务批处理通过审核
});


