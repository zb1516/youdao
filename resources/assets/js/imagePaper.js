import Main from './page/main.vue';

const routes = [
    {
        path: '/imagePaper',
        component: Main,
        children:[
            {
                path:'imagePaperList/:userKey',
                name:'imagePaper-imagePaperList',
                component:resolve => require(['./page/imagePaper/imagePaperList'], resolve),
                meta:{
                    title:'图片审核',
                }
            },
            {
                path:'imagePaperDetail/:userKey/:taskId/:paperType',
                name:'imagePaper-imagePaperList-imagePaperDetail',
                component:resolve => require(['./page/imagePaper/imagePaperDetail'], resolve),
                meta:{
                    title:'套卷详情',
                }
            },
            {
                path:'imageSearch/:userKey/:taskId/:allType',
                name:'imagePaper-imagePaperList-imageSearch',
                component:resolve => require(['./page/imagePaper/imageSearch'], resolve),
                meta:{
                    title:'套卷详情',
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