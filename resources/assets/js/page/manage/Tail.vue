<template>
    <div class="container">
        <div class="main">
            <div class="search-bar">

                <div class="row">
                    <div class="col-md-4 search-condition">
                            <span class="s-date">
                              <span class="name">日期：</span>
                              <input class="t-datetime" id="datetimepicker1" type="text" v-model="beginDate">
                              <span>至</span>
                              <input class="t-datetime" id="datetimepicker2" type="text" v-model="endDate">
                            </span>
                    </div>
                    <div class="col-md-2 search-condition">
                            <span class="inlineblock">
                              <span class="s-label">学科：</span>
                              <select  class="selectpicker  form-control selectpicker" title="请选择学科"  v-model="subjectValue">
                                <option value="">请选择学科</option>
                                <option v-for="option in optionsSubject" v-bind:value="option.subjectId">
                                    {{ option.subjectName }}
                                </option>
                              </select>
                            </span>
                    </div>
                    <div class="col-md-2 search-condition">
                            <span class="inlineblock">
                              <span class="s-label">标签：</span>
                              <select class="selectpicker  form-control selectpicker" title="" v-model="isLabel"  @change="selectLabel">
                                <option value="">请选择</option>
                                <option value="0">未贴完</option>
                                <option value="1">已贴完</option>
                              </select>
                            </span>
                    </div>
                    <div class="col-md-2 search-condition"  id="judgeType"   v-show="typeShow">
                            <span class="inlineblock">
                              <span class="s-label">类型：</span>
                              <select  class="selectpicker  form-control selectpicker" title="请选择类型"  v-model="judgeType">
                                <option value="">请选择类型</option>
                                <option v-for="option in optionsJudgeType" v-bind:value="option.typeValue">
                                    {{ option.typeText }}
                                </option>
                              </select>
                            </span>
                    </div>
                    <div class="col-md-2 search-condition">
                            <span class="s-sele">
                              <button @click="doSearch">查询</button>
                            </span>
                    </div>
                </div>
            </div>
            <div class="loading-spinner" v-if="loading"></div>
            <div class="m-sum">总共：<span>{{paginationOption.count}}</span>&nbsp;题</div>
            <div class="data-list-wrapper">
                <table class="data-table">
                    <tr class="title">
                        <th class="t-number">题目ID</th>
                        <th class="t-number">学科</th>
                        <th class="t-name">套卷ID</th>
                        <th class="t-state">试卷名称</th>
                        <th class="t-person1">操作</th>

                    </tr>
                    <template v-for="tail in tailList">
                        <tr class="t-body">
                            <td class="b-number js-q-id"  @click="showQuestionPopout(tail.questionId)">{{tail.questionId}}</td>
                            <td class="t-number">{{tail.subjectName}}</td>
                            <td class="b-state">
                                <template v-if="tail.paperId">
                                    {{tail.paperId}}
                                </template>
                            </td>
                            <td class="b-state">{{tail.paperName}}</td>
                            <td class="b-person1"  style="color:deepskyblue;cursor:pointer"  @click="tailInfo(tail.questionId)">详情</td>

                        </tr>
                    </template>
                </table>
            </div>

            <v-pagination class="myadd-pag" :jumpShow="paginationOption.isShowJump" :pageIndex="paginationOption.currentPage" :total="paginationOption.count" :pageSize="paginationOption.pageSize" @change="pageChange" v-if="paginationOption.count>0"></v-pagination>
        </div>
        <div class="m-layer" style="display: none;">
        <div class="q-detial-dialog">
            <div class="title">单题详情<span class="icon-close"  @click="closePopout">×</span></div>
            <div class="con-wrapper">
                <div class="detial-box">
                    <div id="questionContent" v-html="detail.content"></div>
                    <div class="hide-answer" @click="showAnswer">{{isValue}}</div>
                    <div class="paper-answer" v-show="isShow">
                        <p class="answer">答案：<span id="answerContent" v-html="detail.answer"></span></p>
                        <p class="answer">解析：<span id="analysisContent" v-html="detail.analysis"></span></p>
                    </div>
                    <div class="paper-id">
                        <div class="id-box"><span>题目ID ：</span><span id="questionId"></span></div>
                        <span class="paper-label" v-for="item in detail.tagContent">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;教师<a id="teacherA">（{{item.user_name}}）</a>：</span>
                            <span class="p-label" id="teacherAlabel">{{item.tag_content}}</span>
                        </span>

                        <span class="paper-label judge" v-for="item in detail.judgeTagContent">
                            <span>判定人<a id="judgeA">（{{item.user_name}}）</a>：</span>
                            <span class="p-label" id="judgeAlabel">{{item.tag_content}}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 操作详情 -->
        <div class="q-detial-dialog-ops">
            <div class="title">详情<span class="icon-close"  @click="closePopoutGet">×</span></div>
            <div class="con-wrapper">
                <div class="detial-box">
                    <!--单项式的相关概念,单选题,易,同步,初一,-->
                    <!--$types = array('knowledge','questionType', 'difficulty', 'type', 'grade', 'questionCategory');-->
                    <template v-for="(info,item) in tailUserInfo.teacherTag">
                        <p class="list">
                            <span>教师：<i>{{info.user_name}}</i></span>
                            <template v-for="(value,index) in info.tag_content">
                                <template v-if="diffTag[info.user_name][index]">
                                    <span v-bind:class="item==1 ? 'orange' : 'blue'">

                                           {{value}}

                                    </span>
                                </template>
                                <template v-else>
                                    <span>

                                           {{value}}

                                    </span>
                                </template>
                            </template>
                        </p>
                    </template>
                    <template v-for="info in judgeTag">
                        <p class="list">
                            <span>判定人：<i>{{info.user_name}}</i></span>
                            <template v-for="value in info.tag_content">
                                <span>{{value}}</span>
                            </template>
                        </p>
                    </template>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
    import "../../static/js/jquery-1.12.2.min.js"
    import "../../static/js/loading/js/loading.js"
    import "../../static/js/datetimepicker/jquery.datetimepicker.full.js"
    import Pagination from '../../components/Pagination'
    import {mapGetters} from 'vuex'
    export default {
        components:{
            'v-pagination':Pagination
        },
        data(){
            return {
                beginDate: '',
                endDate: '',
                subjectValue: '',
                optionsSubject: '',
                judgeType: '',
                optionsJudgeType: '',
                tailList: [],
                isShow:false,
                isValue:'显示答案',
                isLabel: '',
                tailUserInfo:[],
                paginationOption: {
                    //分页组件数据
                    pageSize: 15, //每页显示10条数据
                    currentPage: 1, //当前页码
                    count: 0, //总记录数
                    isShowJump:true,  //是否显示跳页
                },
                detail: {
                    content: '',
                    answer: '',
                    analysis: '',
                    tagContent: '',
                    judgeTagContent: '',
                },
                //loading:false,
                judgeTag:[],
                diffTag:[],
                _difficultyValue:[],
                typeShow:false
            }
        },
        watch:{
            searchArgs:function() {
                var that = this;
                that.paginationOption.currentPage = 1;
            },
        },
        computed: {
            searchArgs: function () {
                var that = this;
                return {
                    beginDate: that.beginDate,
                    endDate: that.endDate,
                    subjectId: that.subjectValue,
                    type: that.judgeType,
                    isLabel: that.isLabel,
                    pageSize:that.paginationOption.pageSize
                };
            },
            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },
        mounted(){
            var that = this;
            that.subjectList();
            that.judgeTypeList();
            that.timeList();
            $('#datetimepicker1,#datetimepicker2').datetimepicker({
                format:"Y-m-d",
                timepicker:false,
                onChangeDateTime: function(dp, $input) {
                    that.beginDate = $("#datetimepicker1").val();
                    that.endDate = $("#datetimepicker2").val();
                },
            });


        },
        methods:{
            //从page组件传递过来的当前page
            pageChange(page) {
                this.paginationOption.currentPage = page;
                this.doSearch();  //查询数据
            },
            doSearch: function () {
                var that = this;
                var searchArgs = $.extend(true, {}, that.searchArgs);
                searchArgs.currentPage = that.paginationOption.currentPage;
                searchArgs.pageSize = that.paginationOption.pageSize;
                searchArgs.userKey = that.userKey;
                //that.loading=true;
                axios.get('label/manage/tail',{params:searchArgs}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.$nextTick(function () {
                            //that.loading=false;
                            that.tailList = data.data.rows;
                            if(data.data.total){
                                that.paginationOption.count=data.data.total
                            }else{
                                that.paginationOption.count = 0;
                            }
                        });
                    }

                })
            },
            tailInfo(questionId){
                var that = this
                axios.get('label/manage/getTailInfo',{params:{questionId:questionId}}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.tailUserInfo = data.data;
                        that.judgeTag = data.data['judgeTag'][questionId];
                        that.diffTag = data.data['diffTag'];
                        that._difficultyValue = data.data['difficulty'];
                    }

                })
                $('.m-layer').show();
                $('.q-detial-dialog-ops').show();

            },
            closePopoutGet: function () {
                $('.m-layer').hide();
                $('.q-detial-dialog-ops').hide();
            },
            showQuestionPopout: function (qid) {

                $('#questionId').html(qid);
                var that = this;
                axios.get('label/manage/questionDetailAjaxSearch',{params:{questionId:qid}}).then(function(data){

                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.detail.content = data.data.content
                        that.detail.answer = data.data.answer
                        that.detail.analysis = data.data.analysis
                        that.detail.tagContent = data.data.tagContent
                        that.detail.judgeTagContent = data.data.judgeTagContent
                    }

                })
                $('.m-layer').show();
                $('.q-detial-dialog').show();

            },
            showAnswer: function () {
                //隐藏答案
                var that = this;
                if(!that.isShow){
                    that.isValue = '隐藏答案';
                }else{
                    that.isValue = '显示答案';
                }
                that.isShow =! that.isShow;
            },
            closePopout: function () {
                var that = this;
                that.isValue = '显示答案';
                that.isShow = false;
                $('.m-layer').hide();
                $('.q-detial-dialog').hide();
            },
            subjectList(){
                var that = this;
                axios.get('label/common/getSubjects',{params:{userKey:that.userKey}}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.optionsSubject = data.data;
                    }

                })
            },
            judgeTypeList(){
                var that = this;
                axios.get('label/common/getJudgeType',{params:{userKey:that.userKey}}).then(function(data){
                    that.optionsJudgeType = data.data;
                })
            },
            timeList(){
                var that = this;
                axios.get('label/common/getMonthTime',{params:{userKey:that.userKey}}).then(function(data){
                    that.$nextTick(function () {
                        that.beginDate = data.data.fristday;
                        that.endDate = data.data.lastday;
                        that.doSearch();
                    });
                })
            },
            //关闭Loading
            removeLoading(loadingName){
                var loadingName = loadingName || '';
                $('body,html').css({
                    overflow:'auto',
                });
                if(loadingName == ''){
                    $(".cpt-loading-mask").remove();
                }else{
                    var name = loadingName || 'loadingName';
                    $(".cpt-loading-mask[data-name="+name+"]").remove();
                }
            },

            selectLabel: function () {
                var that = this;
                if(that.isLabel == 0){
                    that.judgeType = '';
                    // $("#judgeType").css("display","none");
                    // $('#judgeType').hide();
                    that.typeShow = false;
                }
                if(that.isLabel !=0 && that.isLabel!=''){
                    // $("#judgeType").css("display","block");
                    // $('#judgeType').show();
                    that.typeShow = true;
                }
            },
        },

    }
</script>
<style scoped src="../../static/css/pass.css"></style>
<style  src="../../static/js/datetimepicker/jquery.datetimepicker.min.css"></style>