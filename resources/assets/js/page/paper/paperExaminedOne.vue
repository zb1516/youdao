<template>
    <div class="main">
      <div class="pic-review1 review2 paper-review1">
        <div class="nav-wrapper">
          <a href="reviewPaperList.html" class="back-btn">返回</a>
          <span class="nav-con">
            <span>操作说明：</span>
            <span class="tab select"><span class="circle">1</span><span class="tab-text">标识题目问题</span></span>
            <span class="tab"><span class="circle">2</span><span class="tab-text">标识试卷问题</span></span>
            <span class=""><span class="circle">3</span><span class="tab-text">完成审核</span></span>
          </span>
        </div>
        <div class="tab-con-wrapper">
          <h2 class="title">第一步 标识题目问题</h2>
          <div class="pic-paper-form">
            <div class="pic-paper-box">
              <div class="pic-list-wrapper">
                  <ul class="pic-list cf" >
                    <template v-for="(img, index) in paperInfo.images">
                        <li class="pic-box js-pic-box" >
                          <a :href="img.image_url" data-fancybox-group="gallery">
                              <p class="image">
                                <img :src='img.image_url' alt=""/>
                              </p>
                              <span class="tab-index">{{index+1}}</span>
                          </a>
                        </li>
                    </template>
                  </ul>
              </div>
              <div class="paper-box">
                <h2 class="title">2018年初中数学</h2>
                <p class="question-type">选择题（共24小题，每小题2分，合计48分）</p>
                <dl class="question-wrapper">
                  <dt class="question-name">1、硫隔绝空气加热后的蒸气中有一种物质的化学式为S8，关于S8的叙述不正确的是（    ）</dt>
                  <dd class="option">A.它是一种新型的化合物</dd>
                  <dd class="option"> B.它是一种单质</dd>
                  <dd class="option selecter"> C.它的一个分子中有8个硫原子 </dd>
                  <dd class="option"> D.相对分子质量为256</dd>
                  <dd class="analyze">
                    <p class="a-answer">答案：B</p>
                    <p class="a-info">解析：硫隔绝空气加热后的蒸气中有一种物质的化学式,硫隔绝空气加热后的蒸气中有一种物质的化学式</p>
                  </dd>
                  <div class="q-operational">
                    <div class="q-o-con">
                      <span class="r-option">
                        <span class="checkbox js-checkbox" @click="doCheck()"></span>
                        <span>题干不完整</span>
                      </span>
                      <span class="r-option">
                        <span class="checkbox js-checkbox" @click="doCheck()"></span>
                        <span>答案不完整</span>
                      </span>
                      <span class="r-option mr-n">
                        <span class="checkbox js-checkbox" @click="doCheck()"></span>
                        <span>解析不完整</span>
                      </span>
                      <span class="r-option">
                        <span class="checkbox js-checkbox" @click="doCheck()"></span>
                        <span>题干错误</span>
                      </span>
                      <span class="r-option">
                        <span class="checkbox js-checkbox" @click="doCheck()"></span>
                        <span>错误答案</span>
                      </span>
                      <span class="r-option mr-n">
                        <span class="checkbox js-checkbox" @click="doCheck()"></span>
                        <span>解析错误</span>
                      </span>
                    </div>
                  </div>
               </dl>
               <dl class="question-wrapper">
                 <dt class="question-name">2、硫隔绝空气加热后的蒸气中有一种物质的化学式为S8，关于S8的叙述不正确的是（    ）</dt>
                 <dd class="option">A.它是一种新型的化合物</dd>
                 <dd class="option"> B.它是一种单质</dd>
                 <dd class="option selecter"> C.它的一个分子中有8个硫原子 </dd>
                 <dd class="option"> D.相对分子质量为256</dd>
                 <dd class="analyze">
                   <p class="a-answer">答案：B</p>
                   <p class="a-info">解析：硫隔绝空气加热后的蒸气中有一种物质的化学式,硫隔绝空气加热后的蒸气中有一种物质的化学式</p>
                 </dd>
              </dl>
              </div>
            </div>
            <div class="btn-wrapper cf">
              <a href="reviewPaper2.html" class="next-btn review2-btn">下一步</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    //import "../../static/css/jquery-ui.min.css"
    import "../../static/css/jquery.fancybox.css"
    import "../../static/js/jquery-1.12.2.min.js"
    import "../../static/js/jquery.plugin.js"
    import "../../static/js/jquery.fancybox.js"
    import "../../static/js/jquery.fancybox-buttons.js"
    import "../../static/js/jquery.common.js"
    import "../../static/js/jquery-ui.min.js"


    import {mapGetters} from 'vuex'
    export default {
            data(){
                return {
                    paperInfo:'',
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
                //that.init();
                that.doGetPaperInfo();

            },
            watch:{

            },
            methods:{
                init(){
                    //initGallery($('.pic-list-wrapper'));
                },
                doCheck(){

                },

                doGetPaperInfo(){
                    var that = this;
                    var searchArgs = $.extend(true, {}, that.searchArgs);
                    searchArgs.userKey = that.userKey;
                    searchArgs.taskId = this.$route.params.taskId;
                    axios.get('youdao/paper/paperInfo',{params:searchArgs}).then(function(data){
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.$nextTick(function () {
                                that.paperInfo =  data.data;
                            });
                        }
                    })
                }
            }
        }
</script>
