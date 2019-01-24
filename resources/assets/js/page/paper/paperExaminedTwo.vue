<template>
    <div class="main">
      <div class="pic-review1 review3 paper-review2">
        <div class="nav-wrapper">
          <a href="reviewPicList.html" class="back-btn">返回</a>
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
                <span class="radio select js-radio"></span>
                <span>试卷有问题</span>
              </span>
              <span class="r-type">
                <span class="radio  js-radio js-error"></span>
                <span>试卷无问题</span>
              </span>
            </div>
            <textarea class="error-paper-info js-error-box">

            </textarea>
            <router-link  :to="{name:'paper-paperExaminedResult',params:{userKey:userKey,taskId:paper.task_id}}" target="_blank"><a class="next-btn review2-btn">下一步</a></router-link>
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

                }
            },
            computed: {
                searchArgs: function () {
                    var that = this;
                    return {

                    };
                },
                ...mapGetters({
                    userKey:'getUserKey',            //this.userKey  ==  this.$store.getters.getUserKey
                })
            },
            mounted(){
                var that = this;
                common.init();
            },
            watch:{

            },
            methods:{

            }
        }
</script>
