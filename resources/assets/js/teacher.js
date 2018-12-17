import Main from './page/main.vue';

const routes = [
    {
        path: '/task',
        component: Main,
        children: [
            {
                path: 'task/:userKey',
                name: 'tasks-task',
                component: resolve => require(['./page/teacher/Task'], resolve),
                meta: {
                    title: '领任务',
                }
            },
            {
                path: 'paperList/:userKey',
                name: 'tasks-paperList',
                component: resolve => require(['./page/teacher/PaperList'], resolve),
                meta: {
                    title: '贴套卷标签',
                },
            },
            {
                path: 'paperDetail/:userKey/:paperId/:subjectId',
                name: 'tasks-paperList-paperDetail',
                component: resolve => require(['./page/teacher/PaperDetail'], resolve),
                meta: {
                    title: '贴套卷标签详情',
                },
            },
            {
                path: 'singleQuestion/:userKey',
                name: 'tasks-singleQuestion',
                component: resolve => require(['./page/teacher/SingleQuestion'], resolve),
                meta: {
                    title: '贴单题标签',
                }
            }
        ]
    },

]
export default routes;