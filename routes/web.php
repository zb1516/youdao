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



Route::group(['prefix'=>'wxprogram'],function($router){
    $router->get('/wx/login','WxProgram\WxController@login');
    $router->post('/paper/addPaperImage','WxProgram\PaperController@addPaperImage');
    $router->get('/paper/getUploadCount','WxProgram\PaperController@getUploadCount');
    $router->get('/paper/getUserUploadMonthCount','WxProgram\PaperController@getUserUploadMonthCount');
    $router->get('/paper/getYDPaperCount','WxProgram\PaperController@getYDPaperCount');
    $router->get('/paper/getPaperImageList','WxProgram\PaperController@getPaperImageList');
    $router->get('/paper/getPaperExaminedList','WxProgram\PaperController@getPaperExaminedList');
    $router->get('/paper/getPaperFirstImage','WxProgram\PaperController@getPaperFirstImage');
    $router->post('/paper/editPaperImage','WxProgram\PaperController@editPaperImage');
    $router->get('/message/getMessageCount','WxProgram\MessageController@getMessageCount');
    $router->get('/message/getMessageList','WxProgram\MessageController@getMessageList');
    $router->get('/user/login','WxProgram\UserController@login');

});


//以下为4.0路由

//获取公有信息

Route::get('common/common/getYear', 'Common\CommonController@getYear');
Route::get('common/common/getPaperSourceAjaxSearch', 'Common\CommonController@getPaperSourceAjaxSearch');
Route::get('common/common/getQuestionTypeAjaxSearch', 'Common\CommonController@getQuestionTypeAjaxSearch');
Route::get('common/common/getMonthTime', 'Common\CommonController@getMonthTime');
Route::get('common/common/getAllGrade', 'Common\CommonController@getAllGrade');
Route::get('common/common/getPaperCitysAjaxSearch', 'Common\CommonController@getPaperCitysAjaxSearch');
Route::get('common/common/getSubjects', 'Common\CommonController@getSubjects');
Route::get('common/common/getProvince', 'Common\CommonController@getProvince');

$router->group(['prefix' => 'youdao', 'middleware' => ['usertoken']], function () use ($router) {
    Route::get('user/getUserInfo', 'Youdao\UserController@getUserInfo');
});


