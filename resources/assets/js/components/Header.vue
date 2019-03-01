<template>
    <div class="header">
        <div class="inner cf">
            <h1 class="logo"><img src="../static/images/logo.png" alt="爱提分" /></h1>
            <div class="head-user-box">
                <p class="picture">
                    <a href="#"><img src="../static/images/user_picture.jpg" alt="詹志明"></a>
                </p>
                <span class="name">{{user.user_realname}}<span class="icon"></span></span>
            </div>
            <div class="nav">
                <ul class="list">
                    <li :class="imageShow?'nav-box current':'nav-box'" @click="selectImage" v-if="isImageShow==1">
                        <router-link  :to="{name:'imagePaper-imagePaperList',params:{userKey:userKey}}" class="back-btn">图片审核</router-link>
                    </li>
                    <li :class="paperShow?'nav-box current':'nav-box'" @click="selectPaper" v-if="isPaperShow==1">
                        <router-link  :to="{name:'paper-paperList',params:{userKey:userKey}}" class="back-btn">试卷审核</router-link>
                    </li>
                    <li :class="statisticShow?'nav-box current':'nav-box'" v-if="isStatisticShow==1">
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
                isImageShow:0,
                isPaperShow:0,
                isStatisticShow:0
            }
        },
        computed: {

            ...mapGetters({
                userKey:'getUserKey',
                user:'getUser'
            })
        },
        mounted(){
            var strName = this.$route.path.split("/");
            var that = this;
            that.doCheckAuth();
            if(strName[2] == 'paperList' || strName[2] == 'paperExaminedOne' || strName[2] == 'paperExaminedTwo' ||strName[2] == 'paperExaminedResult'){
                that.paperShow = 1;
                that.imageShow = 0;
                that.statisticShow = 0;
            }else if(strName[2] == 'imagePaperList' || strName[2] == 'imagePaperDetail' || strName[2] == 'imageSearch' || strName[2] == 'imageExamined' || strName[2] == 'imageResult'){
                that.paperShow = 0;
                that.imageShow = 1;
                that.statisticShow = 0;
            }else{
                that.paperShow = 0;
                that.imageShow = 0;
                that.statisticShow = 1;
            }
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
            doCheckAuth: function (){
                var that = this;
                var searchArgs = $.extend(true, {}, that.searchArgs);
                searchArgs.userKey = that.userKey;
                axios.get('youdao/user/checkAuth',{params:searchArgs}).then(function(data){
                    if(data.data){
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                            return false;
                        } else {
                            that.isImageShow = data.data.isImageShow;
                            that.isPaperShow = data.data.isPaperShow;
                            that.isStatisticShow = data.data.isStatisticShow;
                        }
                    }

                })
            }
        }
    }
</script>
