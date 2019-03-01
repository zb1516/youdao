<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */

    'name' => env('APP_NAME', 'Laravel'),

    /*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" your application is currently
    | running in. This may determine how you prefer to configure various
    | services your application utilizes. Set this in your ".env" file.
    |
    */

    'env' => env('APP_ENV', 'production'),

    /*
    |--------------------------------------------------------------------------
    | Application Debug Mode
    |--------------------------------------------------------------------------
    |
    | When your application is in debug mode, detailed error messages with
    | stack traces will be shown on every error that occurs within your
    | application. If disabled, a simple generic error page is shown.
    |
    */

    'debug' => env('APP_DEBUG', false),

    /*
    |--------------------------------------------------------------------------
    | Application URL
    |--------------------------------------------------------------------------
    |
    | This URL is used by the console to properly generate URLs when using
    | the Artisan command line tool. You should set this to the root of
    | your application so that it is used when running Artisan tasks.
    |
    */

    'url' => env('APP_URL', 'http://localhost'),

    /*
    |--------------------------------------------------------------------------
    | Application Timezone
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default timezone for your application, which
    | will be used by the PHP date and date-time functions. We have gone
    | ahead and set this to a sensible default for you out of the box.
    |
    */

    'timezone' => 'PRC',

    /*
    |--------------------------------------------------------------------------
    | Application Locale Configuration
    |--------------------------------------------------------------------------
    |
    | The application locale determines the default locale that will be used
    | by the translation service provider. You are free to set this value
    | to any of the locales which will be supported by the application.
    |
    */

    'locale' => 'en',

    /*
    |--------------------------------------------------------------------------
    | Application Fallback Locale
    |--------------------------------------------------------------------------
    |
    | The fallback locale determines the locale to use when the current one
    | is not available. You may change the value to correspond to any of
    | the language folders that are provided through your application.
    |
    */

    'fallback_locale' => 'en',

    /*
    |--------------------------------------------------------------------------
    | Encryption Key
    |--------------------------------------------------------------------------
    |
    | This key is used by the Illuminate encrypter service and should be set
    | to a random, 32 character string, otherwise these encrypted strings
    | will not be safe. Please do this before deploying an application!
    |
    */

    'key' => env('APP_KEY'),

    'cipher' => 'AES-256-CBC',

    /*
    |--------------------------------------------------------------------------
    | Logging Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure the log settings for your application. Out of
    | the box, Laravel uses the Monolog PHP logging library. This gives
    | you a variety of powerful log handlers / formatters to utilize.
    |
    | Available Settings: "single", "daily", "syslog", "errorlog"
    |
    */

    'log' => env('APP_LOG', 'single'),

    'log_level' => env('APP_LOG_LEVEL', 'debug'),

    /*
    |--------------------------------------------------------------------------
    | Autoloaded Service Providers
    |--------------------------------------------------------------------------
    |
    | The service providers listed here will be automatically loaded on the
    | request to your application. Feel free to add your own services to
    | this array to grant expanded functionality to your applications.
    |
    */

    'providers' => [

        /*
         * Laravel Framework Service Providers...
         */
        Illuminate\Auth\AuthServiceProvider::class,
        Illuminate\Broadcasting\BroadcastServiceProvider::class,
        Illuminate\Bus\BusServiceProvider::class,
        Illuminate\Cache\CacheServiceProvider::class,
        Illuminate\Foundation\Providers\ConsoleSupportServiceProvider::class,
        Illuminate\Cookie\CookieServiceProvider::class,
        Illuminate\Database\DatabaseServiceProvider::class,
        Illuminate\Encryption\EncryptionServiceProvider::class,
        Illuminate\Filesystem\FilesystemServiceProvider::class,
        Illuminate\Foundation\Providers\FoundationServiceProvider::class,
        Illuminate\Hashing\HashServiceProvider::class,
        Illuminate\Mail\MailServiceProvider::class,
        Illuminate\Notifications\NotificationServiceProvider::class,
        Illuminate\Pagination\PaginationServiceProvider::class,
        Illuminate\Pipeline\PipelineServiceProvider::class,
        Illuminate\Queue\QueueServiceProvider::class,
        Illuminate\Redis\RedisServiceProvider::class,
        Illuminate\Auth\Passwords\PasswordResetServiceProvider::class,
        Illuminate\Session\SessionServiceProvider::class,
        Illuminate\Translation\TranslationServiceProvider::class,
        Illuminate\Validation\ValidationServiceProvider::class,
        Illuminate\View\ViewServiceProvider::class,

        /*
         * Package Service Providers...
         */

        /*
         * Application Service Providers...
         */
        App\Providers\AppServiceProvider::class,
        App\Providers\AuthServiceProvider::class,
        // App\Providers\BroadcastServiceProvider::class,
        App\Providers\EventServiceProvider::class,
        App\Providers\RouteServiceProvider::class,
        E421083458\Wxxcx\WxxcxServiceProvider::class,
        SwooleTW\Http\LaravelServiceProvider::class,
        Overtrue\LaravelWechat\ServiceProvider::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | Class Aliases
    |--------------------------------------------------------------------------
    |
    | This array of class aliases will be registered when this application
    | is started. However, feel free to register as many as you wish as
    | the aliases are "lazy" loaded so they don't hinder performance.
    |
    */

    'aliases' => [

        'App' => Illuminate\Support\Facades\App::class,
        'Artisan' => Illuminate\Support\Facades\Artisan::class,
        'Auth' => Illuminate\Support\Facades\Auth::class,
        'Blade' => Illuminate\Support\Facades\Blade::class,
        'Broadcast' => Illuminate\Support\Facades\Broadcast::class,
        'Bus' => Illuminate\Support\Facades\Bus::class,
        'Cache' => Illuminate\Support\Facades\Cache::class,
        'Config' => Illuminate\Support\Facades\Config::class,
        'Cookie' => Illuminate\Support\Facades\Cookie::class,
        'Crypt' => Illuminate\Support\Facades\Crypt::class,
        'DB' => Illuminate\Support\Facades\DB::class,
        'Eloquent' => Illuminate\Database\Eloquent\Model::class,
        'Event' => Illuminate\Support\Facades\Event::class,
        'File' => Illuminate\Support\Facades\File::class,
        'Gate' => Illuminate\Support\Facades\Gate::class,
        'Hash' => Illuminate\Support\Facades\Hash::class,
        'Lang' => Illuminate\Support\Facades\Lang::class,
        'Log' => Illuminate\Support\Facades\Log::class,
        'Mail' => Illuminate\Support\Facades\Mail::class,
        'Notification' => Illuminate\Support\Facades\Notification::class,
        'Password' => Illuminate\Support\Facades\Password::class,
        'Queue' => Illuminate\Support\Facades\Queue::class,
        'Redirect' => Illuminate\Support\Facades\Redirect::class,
        'Redis' => Illuminate\Support\Facades\Redis::class,
        'Request' => Illuminate\Support\Facades\Request::class,
        'Response' => Illuminate\Support\Facades\Response::class,
        'Route' => Illuminate\Support\Facades\Route::class,
        'Schema' => Illuminate\Support\Facades\Schema::class,
        'Session' => Illuminate\Support\Facades\Session::class,
        'Storage' => Illuminate\Support\Facades\Storage::class,
        'URL' => Illuminate\Support\Facades\URL::class,
        'Validator' => Illuminate\Support\Facades\Validator::class,
        'View' => Illuminate\Support\Facades\View::class,
    ],
    'QUESTION_MANAGEMENT' => '试题管理',//试题管理
    'TEACHER_LABELLING' => '教师贴标签',//教师贴标签
    'JUDGE_LABELLING' => '判定人贴标签',//判定人贴标签
    'YEAR' => [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],//年份
    'JUDGE_TYPE' => ['题型','难度','年级','题类','知识点','同步升学'],//判定类型
    'JUDGE_TYPE_VALUE' => ['题型' => 'questionType','难度' => 'difficulty','年级' => 'grade','题类' => 'questionCategory','知识点' => 'knowledge','同步升学' => 'type'],//判定类型
    'QUESTION_CATEGORY_OPTION'=>[
        ['id'=>1,'name'=>'物理'],
        ['id'=>2,'name'=>'化学'],
        ['id'=>3,'name'=>'生物'],
        ['id'=>4,'name'=>'地理'],
        ['id'=>5,'name'=>'综合']
    ],
    'QUESTION_DIFFICULTY_OPTION'=>[
        ['id'=>1,'name'=>'易'],
        ['id'=>2,'name'=>'中'],
        ['id'=>3,'name'=>'难']
    ],
    'DIFFICULTY'=> [
        '1' => '易',
        '2' => '中',
        '3' => '难',
    ],
    'MIDDLE_TIME'=>strtotime(date('2018-11-07')),
    'AGENCY_UPLOAD_NUMBER'=>20,
    'TEST_APP_KEY' => 'zhudytest123',
    'TEST_APP_SECRET' => 'IoyvG6Zb98nEUA4nIGwkEPUXILBYgrGs',
    'TEST_YOUDAO_URL' => 'test-s4eu.youdao.com',
    'IMAGE_EXAMINED_STATUS'=> [
        '1' => '待审核',
        '2' => '已通过',
        '3' => '退回',
        '4' => '试卷重复',
    ],
    'AUTH_KEY'=>'wx_mini_program',
    'PAPER_AUDITOR'=>'试卷审核人',
    'IMG_AUDITOR'=>'图片审核人',
    'DATA_MANAGER'=>'数据统计管理人',
    'YOUDAO_TASK_RESULT_URL' => '/api/gaosi/taskResult',
    'YOUDAO_FEEDBACK_URL'=>'/api/gaosi/feedback',
    'PAPER_EXAMINED_STATUS'=> [
        '1' => '处理中',
        '2' => '待审核',
        '3' => '已审核',
        '4' => '已退回',
        '5' => '已关闭',
    ],
    'OFFICE_DOCUMENT_BUCKET'=>'atf-uploads',
    'GRADE_NAME'=> [
        '1' => '一年级',
        '2' => '二年级',
        '3' => '三年级',
        '4' => '四年级',
        '5' => '五年级',
        '6' => '六年级',
        '7' => '初一',
        '8' => '初二',
        '9' => '初三',
        '10' => '高一',
        '11' => '高二',
        '12' => '高三',
    ],
    'YOUDAO_DELIVER_TASK'=>'/api/gaosi/deliverTask',
    'LOCAL_IMAGE_URL'=>'/data/wwwroot/Production/AtfApps/youdao/public/',
    'AUTO_AUDIT_DAYS'=>9,//套卷超过9个工作日自动审核通过
    'YOUDAO_COMPLETE_URL'=>'/api/gaosi/complete',
    'UPLOAD_PHP_URL'=>'http://ksrc2.gaosiedu.com/upload_yd.php',
    'KMS_GRADE_LIST'=>[
        "小学"=>[
            [
                'gradeId'=>1,
                'gradeName'=>'一年级'
            ],
            [
                'gradeId'=>2,
                'gradeName'=>'二年级'
            ],
            [
                'gradeId'=>3,
                'gradeName'=>'三年级'
            ],
            [
                'gradeId'=>4,
                'gradeName'=>'四年级'
            ],
            [
                'gradeId'=>5,
                'gradeName'=>'五年级'
            ],
            [
                'gradeId'=>6,
                'gradeName'=>'六年级'
            ]
        ],
        "初中"=>[
            [
                'gradeId'=>7,
                'gradeName'=>'初一'
            ],
            [
                'gradeId'=>8,
                'gradeName'=>'初二'
            ],
            [
                'gradeId'=>9,
                'gradeName'=>'初三'
            ]
        ],
        "高中"=>[
            [
                'gradeId'=>10,
                'gradeName'=>'高一'
            ],
            [
                'gradeId'=>11,
                'gradeName'=>'高二'
            ],
            [
                'gradeId'=>12,
                'gradeName'=>'高三'
            ]
        ]
    ],
    'GRADE_VALUE'=> [
        '1' => '一年级',
        '2' => '二年级',
        '3' => '三年级',
        '4' => '四年级',
        '5' => '五年级',
        '6' => '六年级',
        '7' => '初一',
        '8' => '初二',
        '9' => '初三',
        '10' => '高一',
        '11' => '高二',
        '12' => '高三',
    ],
    'GRADE_NAME_VALUE'=> [
        '一年级' => 1,
        '二年级' => 2,
        '三年级' => 3,
        '四年级' => 4,
        '五年级' => 5,
        '六年级' => 6,
        '初一' => 7,
        '初二' => 8,
        '初三' => 9,
        '高一' => 10,
        '高二' => 11,
        '高三' => 12,
    ],
    'YOUDAO_SEND_TEMPLATE'=>'/WxService/sendTemplate',
    'EAP_GROUP_NAME'=>'Vip',//有道项目所属eap中的模块名称
];
