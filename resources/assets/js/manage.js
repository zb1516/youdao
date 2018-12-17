import Main from './page/main.vue';

const routes = [
    {
        path: '/manage',
        component: Main,
        children:[
            {
                path:'paper/:userKey',
                name:'manage-paper',
                component:resolve => require(['./page/manage/Paper'], resolve),
                meta:{
                    title:'套卷状态查询',
                }
            },
            {
                path:'paperManageDetail/:userKey/:paperId/:paperName',
                name:'manage-paper-paperManageDetail',
                component:resolve => require(['./page/manage/PaperDetail'], resolve),
                meta:{
                    title:'套卷详情',
                }
            },
            {
                path:'question/:userKey',
                name:'manage-question',
                component:resolve => require(['./page/manage/Question'], resolve),
                meta:{
                    title:'单题状态查询',
                }
            },
            {
                path:'teacherWork/:userKey',
                name:'manage-teacherWork',
                component:resolve => require(['./page/manage/TeacherWork'], resolve),
                meta:{
                    title:'教师工作量统计',
                }
            },
            {
                path:'judgeWork/:userKey',
                name:'manage-judgeWork',
                component:resolve => require(['./page/manage/JudgeWork'], resolve),
                meta:{
                    title:'判定人工作量统计',
                }
            },
            {
                path:'tail/:userKey',
                name:'manage-tail',
                component:resolve => require(['./page/manage/Tail'], resolve),
                meta:{
                    title:'不合格题目跟踪',
                }
            },
            {
                path:'taskPaper/:userKey',
                name:'manage-taskPaper',
                component:resolve => require(['./page/manage/taskPaper'], resolve),
                meta:{
                    title:'任务管理',
                }
            }
        ]
    }
]
export default routes;