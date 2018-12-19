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


//获取公有信息

Route::get('label/common/getYear', 'Label\CommonController@getYear');
Route::get('label/common/getPaperSourceAjaxSearch', 'Label\CommonController@getPaperSourceAjaxSearch');
Route::get('label/common/getQuestionTypeAjaxSearch', 'Label\CommonController@getQuestionTypeAjaxSearch');
Route::get('label/manage/getPaperInfo', 'Label\ManageController@getPaperInfo');
Route::get('label/common/getMonthTime', 'Label\CommonController@getMonthTime');
Route::get('label/common/getAllGrade', 'Label\CommonController@getAllGrade');
Route::get('label/manage/question', 'Label\ManageController@question');
Route::get('label/manage/questionDetailAjaxSearch', 'Label\ManageController@questionDetailAjaxSearch');
Route::get('label/common/getJudgeType', 'Label\CommonController@getJudgeType');
Route::get('label/common/getPaperCitysAjaxSearch', 'Label\CommonController@getPaperCitysAjaxSearch');



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



Route::group(['prefix'=>'WxSmallProgram'],function($router){
    $router->post('/addPaperImage','WxSmallProgram\PaperController@addPaperImage');
    $router->get('/addPaperImage','WxSmallProgram\PaperController@addPaperImage');
    $router->get('/addPaperImage','WxSmallProgram\PaperController@addPaperImage');
    $router->get('/addPaperImage','WxSmallProgram\PaperController@addPaperImage');
    $router->get('/addPaperImage','WxSmallProgram\PaperController@addPaperImage');
    $router->get('/addPaperImage','WxSmallProgram\PaperController@addPaperImage');
    $router->get('/addPaperImage','WxSmallProgram\PaperController@addPaperImage');
});



