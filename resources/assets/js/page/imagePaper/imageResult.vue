<template>
    <div class="main">
        <div class="pic-review1 review4">
            <div class="nav-wrapper">

                <router-link  :to="{name:'imagePaper-imagePaperList-imageExamined',params:{userKey:userKey,taskId:taskId}}" class="back-btn">返回</router-link>
                <span class="nav-con">
            <span>操作说明：</span>
            <span class="tab select"><span class="circle">1</span><span class="tab-text">贴标签</span></span>
            <span class="tab select"><span class="circle">2</span><span class="tab-text">搜索排重</span></span>
            <span class="tab select"><span class="circle">3</span><span class="tab-text">审核图片</span></span>
            <span class="nav-select"><span class="circle">4</span><span class="tab-text">完成审核</span></span>
          </span>
            </div>
            <div class="result-wrapper">
                <template v-if="imageStatus == 1">
                    <div class="scuess-box">
                      <p class="icon-scuess"></p>
                      <p class="scuess-text">图片审核通过</p>
                      <p class="time-box"><span class="time"><span class="time-num js-time-num">3</span>秒</span><a href="reviewPicList.html">后返回列表</a></p>
                    </div>
                </template>
                <template v-else>
                    <div class="error-box">
                        <p class="icon-error"></p>
                        <p class="error-title">图片审核未通过</p>
                        <div class="error-info-box">
                            <p class="mb">未通过原因</p>
                            <template v-if="imageStatus == ''">
                                <p class="mb">已确认试卷重复</p>
                            </template>
                            <template v-else>
                                <p class="mb">{{imageStatus}}</p>
                            </template>
                        </div>
                        <p class="time-box"><span class="time"><span class="time-num js-time-num">3</span>秒</span><a href="reviewPicList.html">后返回列表</a></p>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import "../../static/js/jquery.min.js"
    import "../../static/js/jquery.plugin.js"
    import common from "../../static/js/jquery.common.js"
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                imageStatus:'',
                taskId:''
            }
        },
        computed: {

            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },
        watch:{



        },
        mounted(){
            var that = this;
            that.taskId =  localStorage.getItem("localTaskId");
            that.imageStatus = this.$route.params.imageStatus;
            if(that.imageStatus != 1 && that.imageStatus != ''){
                that.imageStatus = that.imageStatus + ",";
                that.imageStatus = that.imageStatus.replace(",,", "");
            }
            if(that.imageStatus == ''){
                that.imageStatus = '';
            }
            that.doSelect();
            common.init();
        },
        methods:{
            doSelect(){
                var time = 3;

                var that = this;
                setInterval(function(){
                    time--;
                    $(".js-time-num").html(time);
                    if(time == 0){

                        that.$router.push({
                            name: 'imagePaper-imagePaperList',
                            params:{userKey:that.userKey}
                        });
                    }
                },1000)
            }

        }

    }
</script>