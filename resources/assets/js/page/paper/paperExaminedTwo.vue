<template>
    <div class="main">
      <div class="pic-review1 review3 paper-review2">
        <div class="nav-wrapper">
            <router-link  :to="{name:'paper-paperExaminedOne',params:{userKey:userKey,taskId:taskId}}" target="_blank"><a class="back-btn">返回</a></router-link>
          <span class="nav-con">
            <span>操作说明：</span>
            <span class="tab select"><span class="circle">1</span><span class="tab-text">标识题目问题</span></span>
            <span class="tab select"><span class="circle">2</span><span class="tab-text">标识试卷问题</span></span>
            <span class=""><span class="circle">3</span><span class="tab-text">完成审核</span></span>
          </span>
        </div>
        <div class="tab-con-wrapper">
          <h2 class="title">第二步 标识试卷问题</h2>
          <div class="reviw-info-wrapper">
            <div class="r-type-box">
              <span class="r-type">
                <span class="radio js-radio" @click="doCheck(1)" :class="{ 'select': 1 === isPaperError }"></span>
                <span>试卷有问题</span>
              </span>
              <span class="r-type">
                <span class="radio  js-radio js-error" @click="doCheck(0)" :class="{ 'select': 0 === isPaperError }"></span>
                <span>试卷无问题</span>
              </span>
            </div>
            <textarea class="error-paper-info js-error-box" v-if="isPaperError == 1" name="paperErrorDesc">

            </textarea>
            <a class="next-btn review2-btn" @click="doPaperExaminedTwo">下一步</a>
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
                    isPaperError:'',
                    status:'',
                    error:'',
                }
            },
            computed: {
                searchArgs: function () {
                    var that = this;
                    return {

                    };
                },
                ...mapGetters({
                    userKey:'getUserKey',
                })
            },
            mounted(){
                var that = this;
                that.taskId = this.$route.params.taskId;
            },
            watch:{

            },
            methods:{
                doCheck(type){
                    this.isPaperError = type;
                },
                doPaperExaminedTwo(){
                    var that = this;
                    if(that.isPaperError == 1){
                        if($("textarea[name='paperErrorDesc']").val() == ''){
                            alert('请填写试卷存在的问题');
                            return false;
                            //that.$message.error('请填写试卷存在的问题');
                        }else{
                            that.paperErrorDesc = $("textarea[name='paperErrorDesc']").val();
                        }
                    }else{
                        that.paperErrorDesc = '';
                    }

                    axios.post('youdao/paper/paperExaminedTwo',"userKey='"+that.userKey+"'&taskId="+that.taskId+"&isPaperError="+that.isPaperError+"&paperErrorDesc='"+that.paperErrorDesc+"'").then(function(data){
                        if(data.data){
                            if (data.data.errorMsg) {
                                that.$message.error(data.data.errorMsg);
                            } else {
                                if(data.data.status == 1){
                                    that.status = data.data.status;
                                    that.error = data.data.error;
                                    /*that.$router.push({
                                        name: 'paper-paperExaminedResult',
                                        params:{userKey:that.userKey,taskId:that.taskId,status:that.status,error:that.error}
                                    });*/
                                }else{
                                    that.$message.error('题目问题提交失败！');
                                }
                            }
                        }
                    })
                }
            }
        }
</script>
