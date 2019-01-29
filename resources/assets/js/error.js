export default [
    {
        path: '/404',
        component: resolve => require(['./page/error/404'], resolve),
        meta: {
            title: '页面不存在',
            children:false,
            module: 'error'
        },
    },
    {
        path: '*',
        redirect: '/404',
        meta: {
            title: '页面不存在',
            children:false,
            module: 'error'
        },
    }
]