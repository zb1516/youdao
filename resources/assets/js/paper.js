import Main from './page/main.vue';

const routes = [
    {
        path: '/paper',
        component: Main,
        children:[
            {
                path:'paperList/:userKey',
                name:'paper-paperList',
                component:resolve => require(['./page/paper/paperList'], resolve),
                meta:{
                    title:'试卷审核',
                }
            },
            {
                 path:'paperExaminedOne/:userKey/:taskId',
                 name:'paper-paperExaminedOne',
                 component:resolve => require(['./page/paper/paperExaminedOne'], resolve),
                 meta:{
                     title:'标识题目问题',
                 }
            },
            {
                path:'paperExaminedTwo/:userKey/:taskId',
                name:'paper-paperExaminedTwo',
                component:resolve => require(['./page/paper/paperExaminedTwo'], resolve),
                meta:{
                    title:'标识试卷问题',
                }
            },
            // {
            //     path:'question/:userKey',
            //     name:'manage-question',
            //     component:resolve => require(['./page/manage/Question'], resolve),
            //     meta:{
            //         title:'单题状态查询',
            //     }
            // },

        ]
    }
]
export default routes;