<template>
    <div class="main">
        <div class="pic-review1 review2">
            <div class="nav-wrapper">
                <a href="reviewPicList.html" class="back-btn">返回</a>
                <span class="nav-con">
            <span>操作说明：</span>
            <span class="tab select"><span class="circle">1</span><span class="tab-text">贴标签</span></span>
            <span class="tab select"><span class="circle">2</span><span class="tab-text">搜索排重</span></span>
            <span class="tab"><span class="circle">3</span><span class="tab-text">审核图片</span></span>
            <span class=""><span class="circle">4</span><span class="tab-text">完成审核</span></span>
          </span>
            </div>
            <div class="tab-con-wrapper">
                <h2 class="title">第二步 搜索排重</h2>
                <div class="search-form">
                    <h3 class="title2">自动根据标签搜索的试卷</h3>
                    <template v-for="(paper,index) in paperList">
                    <p class="paper-name">
                        <template v-if="index == 0">
                            <span class="checkbox js-radio select firstSelectValue" :data-val="paper.id"></span>
                        </template>
                        <template v-else>
                            <span class="checkbox js-radio" :data-val="paper.id"></span>
                        </template>
                        <span>
                            <template v-if="paper.showName">
                               {{paper.showName}}
                            </template>
                            <template v-else>
                                {{paper.fileName}}
                            </template>
                        </span>
                    </p>

                    </template>
                </div>
                <div class="pic-paper-form">
                    <div class="page-turn">
                        <span class="prev" @click="doPage(currentPage-1)"></span>
                        <span class="page-number"><span class="curren-p">{{currentPage}}</span>/<span class="sum-p">{{papeNum}}</span></span>
                        <span class="next" @click="doPage(currentPage+1)"></span>
                    </div>
                    <div class="pic-paper-box">
                        <div class="pic-list-wrapper">
                            <ul class="pic-list cf">
                                <template v-for="(item,index) in imagePaperDetailContent">
                                    <li class="pic-box js-pic-box">
                                        <a :href="item.image_url" data-fancybox-group="gallery">
                                            <p class="image">
                                                <img :src="item.image_url" alt=""/>
                                            </p>
                                            <span class="tab-index">{{index+1}}</span>
                                        </a>
                                    </li>
                                </template>
                            </ul>
                        </div>

                        <div id="paper-box" class="paper-box">
                            <h2 class="title">{{paperContent.title}}</h2>
                            <template v-for="item in paperContent.module">
                            <p class="question-type">{{item.title}}（合计{{item.total_score}}分）</p>
                                <template v-if="item.questions">
                                <template v-for="(it,index) in item.questions">

                                    <dl class="question-wrapper">
                                        <dt class="question-name" v-html="questionContent[it.ques_id].content"></dt>

                                        <dd class="analyze">
                                            <p class="a-answer">答案：<div v-html="questionContent[it.ques_id].answer"></div></p>
                                            <p class="a-info">解析：<div v-html="questionContent[it.ques_id].analysis"></div></p>
                                        </dd>
                                    </dl>
                                </template>
                                </template>
                            </template>
                        </div>
                    </div>
                    <div class="btn-wrapper cf">
                        <button type="button" name="button" class="next-btn review2-btn">此卷重复</button>
                        <a href="reviewPic3.html" class="next-btn review2-btn">下一步</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import "../../static/css/jquery.fancybox.css"
    import "../../static/js/jquery.plugin.js"
    import "../../static/js/jquery-ui.min.js"
    import common from "../../static/js/jquery.common.js"
    import "../../static/js/jquery.fancybox.js"
    import "../../static/js/jquery.fancybox-buttons.js"
    import {mapGetters} from 'vuex'

    export default {
        data(){
            return {
                imagePaperDetailContent:'',
                paperList:'',
                isShow:0,
                papeNum:0,
                currentPage:1,
                pageSize: 4,
                paperId:0,
                paperContent:'',
                questionContent:'',
            }
        },
        computed: {
            searchArgs: function () {
                var that = this;
                return {

                    pageSize:that.pageSize,

                };
            },
            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },
        watch:{
            searchArgs:function() {
                var that = this;
                that.currentPage = 1;
            },
            // paperList:function(){
            //     var that = this;
            //     that.doPage(that.currentPage);
            // }

        },
        mounted(){

            var that = this;
            that.taskId = this.$route.params.taskId;
            that.paperType = this.$route.params.paperType;
            that.imagePaperDetail();

            that.doSearch();
            that.doSelect();

            common.init();


        },
        methods:{
            imagePaperDetail(){
                var that = this;
                axios.get('youdao/imagePaper/imagePaperDetail',{params:{userKey:that.userKey,taskId:that.taskId,paperType:that.paperType,allType:1}}).then(function(data){
                    if(data.data){

                            that.imagePaperDetailContent = data.data;

                    }
                    that.$nextTick(function() {
                        common.init();
                    });
                })
            },
            doSearch(){
                var that = this;

                var searchArgs = JSON.parse(localStorage.getItem("paperSearchArgs"));
                searchArgs.currentPage = that.currentPage;
                searchArgs.pageSize = that.pageSize;
               // console.log(searchArgs);
                axios.get('youdao/imagePaper/paperList',{params:searchArgs}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        //that.$nextTick(function () {
                            that.paperList = data.data.rows;
                       // });
                        //that.paperList = data.data.rows;
                        //console.log(that.paperList)
                        that.papeNum = data.data.totalPage;
                        that.$nextTick(function () {
                            that.doPaperContent();
                        });
                   }
                })
            },
            doSelect(){
                var that = this;
                $(document).on('click','.js-radio',function(){
                    var $this = $(this);
                    //console.log($this.hasClass('select'));
                    $this.hasClass('select') ? $this.removeClass('select') :
                        $this.addClass('select').parent().siblings('p').find('.js-radio').removeClass('select');


                    that.paperId = $this.has('select') ? $this.attr('data-val') : "";
                    axios.get('common/common/getPaperClient',{params:{paperId:that.paperId,userKey:that.userKey}}).then(function(data){

                        that.$nextTick(function () {
                            that.paperContent = data.data;
                            axios.post('common/common/getQuestionClient',{questionIds:that.paperContent.ques_ids.join(','),userKey:that.userKey}).then(function(data){
                                that.questionContent = data.data.rows;
                                that.$nextTick(() => {
                                    MathJax.Hub.Queue(["Typeset",MathJax.Hub], document.getElementById('paper-box'));
                                });

                            })
                        });

                        //console.log(that.paperContent.ques_ids);return false;





                    })





                });


            },
            doPage(curPage){
                var that = this;
                if(curPage == 0){
                    curPage = 1;
                }
                if(curPage > that.papeNum){
                    curPage = that.papeNum;
                }
                that.currentPage = curPage;
                that.doSearch();

            },
            doPaperContent(aa){
alert(1)
                var $firstTab = $('.firstSelectValue');


                // $('.firstSelectValue').attr('data-val');
                // $('.firstSelectValue').addClass('data-val')
                $firstTab.addClass('select').parent().siblings('p').find('.js-radio').removeClass('select');
                //console.log($firstTab.attr('data-val'));
                var that = this;
                that.paperId = $firstTab.attr('data-val');
               // alert(that.paperId)
                axios.get('common/common/getPaperClient',{params:{paperId:that.paperId,userKey:that.userKey}}).then(function(data){

                    that.paperContent = data.data;
                    //console.log(that.paperContent.ques_ids);return false;
                    axios.post('common/common/getQuestionClient',{questionIds:that.paperContent.ques_ids.join(','),userKey:that.userKey}).then(function(data){

                        that.questionContent = data.data.rows;
                        that.$nextTick(() => {
                            MathJax.Hub.Queue(["Typeset",MathJax.Hub], document.getElementById('paper-box'));
                        });

                    })




                })
            },
            doPaperContent1(){
                alert(12)
            }

        }

    }
</script>