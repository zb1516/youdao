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
                    title:'贴标签',
                }
            },
            {
                path:'imageSearch/:userKey/:taskId/:paperType/:allType',
                name:'imagePaper-imagePaperList-imageSearch',
                component:resolve => require(['./page/imagePaper/imageSearch'], resolve),
                meta:{
                    title:'搜索排重',
                }
            },
            {
                path:'imageExamined/:userKey/:taskId/:paperType/:allType',
                name:'imagePaper-imagePaperList-imageExamined',
                component:resolve => require(['./page/imagePaper/imageExamined'], resolve),
                meta:{
                    title:'审核图片',
                }
            },
            {
                path:'imageResult/:userKey/:imageStatus',
                name:'imagePaper-imagePaperList-imageResult',
                component:resolve => require(['./page/imagePaper/imageResult'], resolve),
                meta:{
                    title:'完成审核',
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