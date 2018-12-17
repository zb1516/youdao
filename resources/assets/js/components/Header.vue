<template>

    <div class="header">
        <div class="m-con">
            <a href="#" class="logo">
                <img src="../static/images/logo-mini.png" alt="logo">
            </a>
            <ul class="nav-wrapper">
                <li class="nav" v-for="(item,index) in list" :key="item.name" :class="getActive(item)" @click="handleRouter(item)">
                    <a href="javascript:void(0);" class="topbar-item">{{ item.title }}</a>
                    <div class="triangle"></div>
                </li>
            </ul>
            <div class="user-wrapper">
                <p class="image"><img src="../static/images/header_headimg.png" alt="avatar"></p>
                <div class="info">
                    <span class="t">Hi~</span>
                    <span class="t">{{user.user_realname}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "magic-check/css/magic-check.css"
    import { mapGetters } from 'vuex'
    export default {
        data(){
            return {
                routeName:'',
                routeModule:'',
                list: [
                    {
                        title: '判定人贴标签',
                        name: 'judges-judgeLabel',
                        url:'/judge/judgeLabel'
                    },
                    {
                        title: '判断人领任务',
                        name: 'judges-judgeTask',
                        url:'/judge/judgeTask'
                    },
                    {
                        title: '贴套卷标签',
                        name: 'tasks-paperList',
                        url:'/task/paperList'
                    },
                    {
                        title: '贴单题标签',
                        name: 'tasks-singleQuestion',
                        url:'/task/singleQuestion'
                    },
                    {
                        title: '领任务',
                        name: 'tasks-task',
                        url:'/task/task'
                    },
                    {
                        title: '套卷状态查询',
                        name: 'manage-paper',
                        url:'/manage/paper'
                    },
                    {
                        title: '单题状态查询',
                        name: 'manage-question',
                        url:'/manage/question'
                    },
                    {
                        title: '教师工作量统计',
                        name: 'manage-teacherWork',
                        url:'/manage/teacherWork'
                    },
                    {
                        title: '判定人工作量统计',
                        name: 'manage-judgeWork',
                        url:'/manage/judgeWork'
                    },
                    {
                        title: '不合格题目跟踪',
                        name: 'manage-tail',
                        url:'/manage/tail'
                    },
                    {
                        title: '任务管理',
                        name: 'manage-taskPaper',
                        url:'/manage/taskPaper'
                    }
                ]
            }
        },
        computed: {
            routeList() {
                return this.$router.options.routes;
            },
            ...mapGetters({
                userKey:'getUserKey',
                user:'getUser'
            })
        },
        methods:{
            getActive(item) {
                let name = this.$route.name;
                let moduleName = item.name.split('-')[0];
                if (name.indexOf(moduleName) === -1) {
                    return ['sk-hide'];
                }
                return name.indexOf(item.name) ? '' : ['active'];
            },
            // 跳转路由
            handleRouter(item) {
                let { url } = item;
                let path = `${url}/${this.userKey}`;
                this.$router.push({
                    path
                })
            }
        }
    }
</script>
<style src="../static/css/common.css"></style>
<style src="../static/js/datetimepicker/jquery.datetimepicker.min.css"></style>
<style>
    .sk-hide {
        display: none;
    }
</style>