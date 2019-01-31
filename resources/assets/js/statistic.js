import Main from './page/main.vue';

const routes = [
    {
        path: '/statistic',
        component: Main,
        children:[
            {
                path:'paperStatistic/:userKey',
                name:'statistic-paperStatistic',
                component:resolve => require(['./page/statistic/paperStatistic'], resolve),
                meta:{
                    title:'试卷统计',
                }
            },
            {
                path:'imagePaperStatistic/:userKey',
                name:'statistic-imagePaperStatistic',
                component:resolve => require(['./page/statistic/imagePaperStatistic'], resolve),
                meta:{
                    title:'图片审核统计',
                }
            },

        ]
    }
]
export default routes;