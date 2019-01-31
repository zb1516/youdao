<template>
    <div class="main">
      <div class="pic-review1 review4">
        <div class="nav-wrapper">
          <router-link  :to="{name:'paper-paperExaminedOne',params:{userKey:userKey,taskId:taskId}}" target="_blank"><a class="back-btn">返回</a></router-link>
          <span class="nav-con">
            <span>操作说明：</span>
            <span class="tab select"><span class="circle">1</span><span class="tab-text">标识题目问题</span></span>
            <span class="tab select"><span class="circle">2</span><span class="tab-text">标识试卷问题</span></span>
            <span class="nav-select"><span class="circle">3</span><span class="tab-text">完成审核</span></span>
          </span>
        </div>
        <div class="result-wrapper">
          <div class="scuess-box" v-if="status == 1">
            <p class="icon-scuess"></p>
            <p class="scuess-text">试卷审核通过</p>
            <p class="time-box"><span class="time"><span class="time-num js-time-num">3</span>秒</span><router-link  :to="{name:'paper-paperList',params:{userKey:userKey}}" target="_blank"><a class="back-btn">返回列表</a></router-link></p>
          </div>
          <div class="error-box" v-if="status == 2">
            <p class="icon-error"></p>
            <p class="error-title">试卷审核未通过</p>
            <div class="error-info-box" v-if="error > 0">
              <p class="mb">未通过原因</p>
              <p class="mb" v-if="error == 1">1.题目问题</p>
              <p class="mb" v-if="error == 2">1.试卷问题</p>
              <template v-if="error == 3">
                  <p class="mb">1.题目问题</p>
                  <p class="mb">2.试卷问题</p>
              </template>
            </div>
            <p class="time-box"><span class="time"><span class="time-num js-time-num">3</span>秒</span><router-link  :to="{name:'paper-paperList',params:{userKey:userKey}}" target="_blank"><a class="back-btn">返回列表</a></router-link></p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import "../../static/js/jquery-1.12.2.min.js"
    import "../../static/js/jquery.plugin.js"
    import common from "../../static/js/jquery.common.js"
    import {mapGetters} from 'vuex'

    export default {
            data(){
                return {
                    taskId:0,
                    status:'',
                    timeCount:3,
                    error:0
                }
            },
            computed: {
                ...mapGetters({
                    userKey:'getUserKey',
                })
            },
            mounted(){
                var that = this;
                that.taskId = this.$route.params.taskId;
                that.status = this.$route.params.status;
                that.error = this.$route.params.error;
                that.returnList();
            },
            watch:{

            },
            methods:{
                returnList(){
                    var that = this;
                    var time = 3;
                    setInterval(function(){
                        time--;
                        $(".js-time-num").html(time);
                        if(time == 0){
                            that.$router.push({
                                name: 'paper-paperList',
                                params:{userKey:that.userKey}
                            });
                        }
                    },1000)
                }
            }
    }
</script>