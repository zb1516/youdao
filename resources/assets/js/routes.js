import Main from './page/main.vue';

const routes = [
    {
        path: '/judge',
        component: Main,
        children: [
            {
                path: 'judgeTask/:userKey',
                name: 'judges-judgeTask',
                component: resolve => require(['./page/judge/JudgeTask'], resolve),
                meta: {
                    title: "判断人领任务",
                }
            },
            {
                path: 'judgeLabel/:userKey',
                name: 'judges-judgeLabel',
                component: resolve => require(['./page/judge/JudgeLabel'], resolve),
                meta: {
                    title: '判定人贴标签',
                }
            }
        ]
    }
]

export default routes;