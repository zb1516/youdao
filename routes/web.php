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
Route::get('label/tag/index', 'Label\TagController@index');

$router->group(['prefix' => 'label', 'middleware' => ['usertoken']], function () use ($router) {
    Route::get('user/getUserInfo', 'Label\UserController@getUserInfo');

    Route::get('manage/paper', 'Label\ManageController@paper');
    Route::get('common/getSubjects', 'Label\CommonController@getSubjects');
    Route::get('common/getProvince', 'Label\CommonController@getProvince');
    //贴标签领任务
    Route::post('task/addTask','Label\TaskController@addTask');
    Route::get('task/getPaperQuestionCount','Label\TaskController@getPaperQuestionCount');
    Route::get('task/getReturnCountByUserKey','Label\TaskController@getReturnCountByUserKey');
    Route::post('task/removeTask','Label\TaskController@removeTask');
    Route::get('question/getPaperList','Label\QuestionController@getPaperList');
    Route::get('question/getPaper','Label\QuestionController@getPaper');
    Route::get('question/getQuestion','Label\QuestionController@getQuestion');
    Route::get('question/getPaperCount','Label\QuestionController@getPaperCount');
    Route::get('question/getPaperQuestionList','Label\QuestionController@getPaperQuestionList');
    Route::get('question/getQuestionInfo','Label\QuestionController@getQuestionInfo');
    Route::post('question/questionErrorReport','Label\QuestionController@questionErrorReport');
    Route::get('question/jumpQuestion','Label\QuestionController@jumpQuestion');
    Route::get('question/getQuestionCount','Label\QuestionController@getQuestionCount');
    Route::get('task/getJudgeQuestionCount','Label\TaskController@getJudgeQuestionCount');
    Route::post('task/addJudgeQuestion','Label\TaskController@addJudgeQuestion');
    Route::get('task/getJudgeQuesReturnCount','Label\TaskController@getJudgeQuesReturnCount');
    Route::post('task/removeJudgeQuestion','Label\TaskController@removeJudgeQuestion');
    Route::get('knowledge/getKnowledgeList','Label\KnowledgeController@getKnowledgeList');
    Route::get('knowledge/getKnowledgeSearch', 'Label\KnowledgeController@getKnowledgeSearch');
    Route::get('common/getQuestionCategorySearch','Label\CommonController@getQuestionCategorySearch');
    Route::post('question/questionSave','Label\QuestionController@questionSave');
    Route::get('question/getTeacherLabelContent','Label\QuestionController@getTeacherLabelContent');
    Route::get('question/getJudgeQuestion','Label\QuestionController@getJudgeQuestion');
    Route::get('question/getJudgeQuestionInfo','Label\QuestionController@getJudgeQuestionInfo');
    Route::get('question/getJudgeQuestionSearch','Label\QuestionController@getJudgeQuestionSearch');
    Route::get('question/getJudgeQuestionCount','Label\QuestionController@getJudgeQuestionCount');
    Route::get('question/jumpJudgeQuestion','Label\QuestionController@jumpJudgeQuestion');
    Route::post('question/questionFinish','Label\QuestionController@questionFinish');
    Route::post('question/paperIsFinish','Label\QuestionController@paperIsFinish');
    Route::get('question/checkIsRemind','Label\QuestionController@checkIsRemind');
    Route::post('question/addRemind','Label\QuestionController@addRemind');
});


Route::get('label/manage/getPaperInfo', 'Label\ManageController@getPaperInfo');
Route::get('label/manage/getQuestionInfo', 'Label\ManageController@getQuestionInfo');
Route::get('label/manage/paperDetailAjaxSearch', 'Label\ManageController@paperDetailAjaxSearch');
Route::get('label/manage/tail', 'Label\ManageController@tail');
Route::get('label/manage/getTailInfo', 'Label\ManageController@getTailInfo');
Route::get('label/manage/judgeWork', 'Label\ManageController@judgeWork');
Route::get('label/manage/teacherWork', 'Label\ManageController@teacherWork');
Route::get('label/manage/judgeExport', 'Label\ManageController@judgeExport');
Route::get('label/manage/teacherExport', 'Label\ManageController@teacherExport');
Route::get('label/manage/taskPaper', 'Label\ManageController@taskPaper');
Route::get('label/manage/getTokenRedis', 'Label\ManageController@getTokenRedis');
Route::post('label/manage/judgeEmptyingTask', 'Label\ManageController@judgeEmptyingTask');
Route::post('label/manage/teacherEmptyingTask', 'Label\ManageController@teacherEmptyingTask');
Route::post('label/manage/taskSort', 'Label\ManageController@taskSort');


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
});

Route::group(['prefix'=>'wxprogram','middleware'=>'checkUserToken'],function($router){
    $router->post('paper/addPaperImage','WxProgram\PaperController@addPaperImage');
    $router->get('paper/getPaperCount','WxProgram\PaperController@getPaperCount');
    $router->get('paper/getPaperExaminedList','WxProgram\PaperController@getPaperExaminedList');
    $router->post('paper/editPaperImage','WxProgram\PaperController@editPaperImage');
    $router->get('message/getMessageCount','WxProgram\MessageController@getMessageCount');
    $router->post('message/setReadMessage','WxProgram\MessageController@setReadMessage');
    $router->post('user/logout','WxProgram\UserController@logout');
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
    Route::get('paper/paperExaminOne', 'Youdao\PaperController@paperExaminOne');
    Route::get('paper/paperExaminTwo', 'Youdao\PaperController@paperExaminTwo');


});

//不需要登录验证的路由
$router->group(['prefix' => 'youdao'], function () use ($router) {
    Route::get('paper/paperExamined', 'Youdao\PaperController@paperExamined');
});


