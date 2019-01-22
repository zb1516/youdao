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
            // {
            //     path:'paperManageDetail/:userKey/:paperId/:paperName',
            //     name:'manage-paper-paperManageDetail',
            //     component:resolve => require(['./page/manage/PaperDetail'], resolve),
            //     meta:{
            //         title:'套卷详情',
            //     }
            // },
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