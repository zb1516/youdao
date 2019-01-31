<template>
    <div class="header">
        <div class="inner cf">
            <h1 class="logo"><img src="../static/images/logo.png" alt="爱提分" /></h1>
            <div class="head-user-box">
                <p class="picture">
                    <a href="#"><img src="../static/images/user_picture.jpg" alt="詹志明"></a>
                </p>
                <span class="name"><a href="#">{{user.user_realname}}<span class="icon"></span></a></span>
            </div>
            <div class="nav">
                <ul class="list">
                    <li :class="imageShow?'nav-box current':'nav-box'" @click="selectImage">
                        <router-link  :to="{name:'imagePaper-imagePaperList',params:{userKey:userKey}}" class="back-btn">图片审核</router-link>
                    </li>
                    <li :class="paperShow?'nav-box current':'nav-box'" @click="selectPaper">
                        <router-link  :to="{name:'paper-paperList',params:{userKey:userKey}}" class="back-btn">试卷审核</router-link>
                    </li>
                    <li :class="statisticShow?'nav-box current':'nav-box'">
                        <a href="#">数据统计<span class="icon"></span></a>
                        <div class="child-nav">
                            <ul class="list">
                                <li class="link-box" @click="selectStatistic">
                                    <router-link  :to="{name:'statistic-imagePaperStatistic',params:{userKey:userKey}}">图片审核统计</router-link>
                                </li>
                                <li class="link-box" @click="selectStatistic">
                                    <router-link  :to="{name:'statistic-paperStatistic',params:{userKey:userKey}}">试卷审核统计</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

    import { mapGetters } from 'vuex'
    export default {
        data(){
            return {
                imageShow:1,
                paperShow:0,
                statisticShow:0,
            }
        },
        computed: {

            ...mapGetters({
                userKey:'getUserKey',
                user:'getUser'
            })
        },
        methods:{
            selectImage: function () {
                var that = this;
                that.imageShow = 1;
                that.paperShow = 0;
                that.statisticShow = 0;
            },
            selectPaper: function () {
                var that = this;
                that.paperShow = 1;
                that.imageShow = 0;
                that.statisticShow = 0;
            },
            selectStatistic: function () {
                var that = this;
                that.statisticShow = 1;
                that.imageShow = 0;
                that.paperShow = 0;
            },
        }
    }
</script>
