<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Database Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for all database work. Of course
    | you may use many connections at once using the Database library.
    |
    */

    'default' => env('DB_CONNECTION', 'mysql'),


    /*
    |--------------------------------------------------------------------------
    | Database Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the database connections setup for your application.
    | Of course, examples of configuring each database platform that is
    | supported by Laravel is shown below to make development simple.
    |
    |
    | All database work in Laravel is done through the PHP PDO facilities
    | so make sure you have the driver for your particular database of
    | choice installed on your machine before you begin development.
    |
    */

    'connections' => [

        'sqlite' => [
            'driver' => 'sqlite',
            'database' => env('DB_DATABASE', database_path('database.sqlite')),
            'prefix' => '',
        ],

        'mysql_kms' => [
            'driver' => 'mysql',
            'host' => env('DB_HOST'),
            'port' => env('DB_PORT'),
            'database' => env('DB_DATABASE'),
            'username' => env('DB_USERNAME'),
            'password' => env('DB_PASSWORD'),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'strict' =>false,
            'engine' => null
        ],
        'mysql_crm' => [
            'driver' => 'mysql',
            'host' => env('DB_HOST_CRM'),
            'port' => env('DB_PORT_CRM'),
            'database' => env('DB_DATABASE_CRM'),
            'username' => env('DB_USERNAME_CRM'),
            'password' => env('DB_PASSWORD_CRM'),
            'charset' => 'utf8',
            'prefix' => '',
        ],
        'mysql_enroll' => [
            'driver' => 'mysql',
            'host' => env('DB_HOST_ENROLL'),
            'port' => env('DB_PORT_ENROLL'),
            'database' => env('DB_DATABASE_ENROLL'),
            'username' => env('DB_USERNAME_ENROLL'),
            'password' => env('DB_PASSWORD_ENROLL'),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'strict' => false,
            'engine' => null,
        ],
        'mysql_enroll_oss' => [
            'driver' => 'mysql',
            'host' => env('DB_HOST_ENROLL_OSS'),
            'port' => env('DB_PORT_ENROLL_OSS'),
            'database' => env('DB_DATABASE_ENROLL_OSS'),
            'username' => env('DB_USERNAME_ENROLL_OSS'),
            'password' => env('DB_PASSWORD_ENROLL_OSS'),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'strict' => false,
            'engine' => null,
        ],

        'pgsql' => [
            'driver' => 'pgsql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '5432'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8',
            'prefix' => '',
            'schema' => 'public',
            'sslmode' => 'prefer',
        ],

        'sqlsrv_server' => [
            'driver' => 'sqlsrv',
            'host' => env('DB_HOST_SERVER'),
            'port' => env('DB_PORT_SERVER'),
            'database' => env('DB_DATABASE_SERVER'),
            'username' => env('DB_USERNAME_SERVER'),
            'password' => env('DB_PASSWORD_SERVER'),
            'charset' => 'utf8',
            'prefix' => '',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Migration Repository Table
    |--------------------------------------------------------------------------
    |
    | This table keeps track of all the migrations that have already run for
    | your application. Using this information, we can determine which of
    | the migrations on disk haven't actually been run in the database.
    |
    */

    'migrations' => 'migrations',

    /*
    |--------------------------------------------------------------------------
    | Redis Databases
    |--------------------------------------------------------------------------
    |
    | Redis is an open source, fast, and advanced key-value store that also
    | provides a richer set of commands than a typical key-value systems
    | such as APC or Memcached. Laravel makes it easy to dig right in.
    |
    */

    'redis' => [

        'client' => 'predis',

        'default' => [
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'password' => env('REDIS_PASSWORD', null),
            'port' => env('REDIS_PORT', 6379),
            'database' => 0,
        ],

    ],

];
