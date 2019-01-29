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


        ]
    }
]
export default routes;