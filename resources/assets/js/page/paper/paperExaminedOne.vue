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
                <h2 class="title">{{paperInfo.paper_name}}</h2>
                <!--<p class="question-type">选择题（共24小题，每小题2分，合计48分）</p>-->
                <template v-for="(question, index) in questions">
                    <dl class="question-wrapper">
                      <dt class="question-name">{{question.quesNumber}}、{{question.quesLatextContent.content}}</dt>
                      <template v-if="question.hasOptions == 1">
                          <template v-for="(option, i) in question.options">
                          <dd class="option">{{option.label}}.{{option.latexContent}}</dd>
                          </template>
                      </template>
                      <dd class="analyze" v-if="question.quesLatextAnswer || question.quesLatextAnalysis">
                         <p class="a-answer" v-if="question.quesLatextAnswer ">答案：{{question.quesLatextAnswer.content}}</p>
                         <p class="a-info" v-if="question.quesLatextAnalysis ">解析：{{question.quesLatextAnalysis.content}}</p>
                      </dd>
                      <div class="q-operational">
                        <div class="q-o-con">
                          <span class="r-option">
                            <span class="checkbox js-checkbox" @click="doCheck(index)" :class="{ 'select': index === selected }"></span>
                            <span>题干不完整</span>
                          </span>
                          <span class="r-option">
                            <span class="checkbox js-checkbox" @click="doCheck(index)" :class="{ 'select': index === selected }"></span>
                            <span>答案不完整</span>
                          </span>
                          <span class="r-option mr-n">
                            <span class="checkbox js-checkbox" @click="doCheck(index)" :class="{ 'select': index === selected }"></span>
                            <span>解析不完整</span>
                          </span>
                          <span class="r-option">
                            <span class="checkbox js-checkbox" @click="doCheck(index)" :class="{ 'select': index === selected }"></span>
                            <span>题干错误</span>
                          </span>
                          <span class="r-option">
                            <span class="checkbox js-checkbox" @click="doCheck(index)" :class="{ 'select': index === selected }"></span>
                            <span>错误答案</span>
                          </span>
                          <span class="r-option mr-n">
                            <span class="checkbox js-checkbox" @click="doCheck(index)" :class="{ 'select': index === selected }"></span>
                            <span>解析错误</span>
                          </span>
                        </div>
                      </div>
                   </dl>
               </template>
              </div>
            </div>
            <div class="btn-wrapper cf">
                <router-link  :to="{name:'paper-paperExaminedTwo',params:{userKey:userKey}}" target="_blank"><a class="next-btn review2-btn">下一步</a></router-link>
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
                    questions:'',
                    selected:'',
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
                doCheck(index){
                    alert(index);
                    this.selected = index;
                    //$(this).hasClass('select') ? $(this).removeClass('select') : $(this).addClass('select');
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
                                that.questions = that.paperInfo.youdao_info.questions;
                            });
                        }
                    })
                }
            }
        }
</script>
