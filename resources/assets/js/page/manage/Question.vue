<template>

    <!-- <p class="location">当前位置：<span>单题状态查询</span></p> -->
    <div class="container">
        <div class="main">
            <div class="search-bar">

                <div class="row">
                    <div class="col-md-4 search-condition">
                            <span class="s-date">
                              <span class="name">导入日期：</span>
                              <input class="t-datetime" id="datetimepicker1" type="text" v-model="beginDate">
                              <span>至</span>
                              <input class="t-datetime" id="datetimepicker2" type="text" v-model="endDate">
                            </span>
                    </div>
                    <div class="col-md-2 search-condition">
                            <span class="inlineblock">
                              <span class="s-label">学科：</span>
                              <select class="selectpicker  form-control selectpicker" title="请选择学科" v-model="subjectValue"  @change="selectQuestionType">
                                <option value="">请选择学科</option>
                                <option v-for="option in optionsSubject" v-bind:value="option.subjectId">
                                    {{ option.subjectName }}
                                </option>
                              </select>
                            </span>
                    </div>
                    <div class="col-md-2 search-condition">
                            <span class="inlineblock">
                              <span class="s-label">题型：</span>
                              <select class="selectpicker  form-control selectpicker" title="请选择题型" v-model="curQuestionType">
                                <option value="">请选择题型</option>
                                <option v-for="option in ajaxAllSubjectQuestionType" v-bind:value="option.id">
                                    {{ option.title }}
                                </option>
                              </select>
                            </span>
                    </div>
                    <div class="col-md-2 search-condition">
                            <span class="inlineblock">
                              <span class="s-label">年级：</span>
                              <select class="selectpicker  form-control selectpicker" title="请选择年级" v-model="curGrade">
                                <option value="">请选择类型</option>
                                <option v-for="option in optionsGrade" v-bind:value="option.gradeId">
                                    {{ option.gradeName }}
                                </option>
                              </select>
                            </span>
                    </div>
                    <div class="col-md-2 search-condition">
                            <span class="inlineblock">
                              <span class="s-label">领取：</span>
                              <select class="selectpicker  form-control selectpicker" title="" v-model="isGet" @change="selectGet">
                                <option value="">请选择</option>
                                <option value="0">未领取</option>
                                <option value="1">已领取</option>
                              </select>
                            </span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 search-condition" v-show="labelShow">
                            <span class="inlineblock">
                              <span class="s-label">标签：</span>
                              <select class="selectpicker  form-control selectpicker" title="" v-model="isLabel">
                                <option value="">请选择</option>
                                <option value="0">未贴完</option>
                                <option value="1">已贴完</option>
                              </select>
                            </span>
                    </div>
                    <div class="col-md-4 search-condition">
                          <span class="s-sele">
                            <input type="text" placeholder="请输入试题ID" v-model="questionId">
                            <button @click="doSearch">查询</button>
                          </span>
                    </div>
                </div>
            </div>
            <div class="loading-spinner" v-if="loading"></div>
            <div class="m-sum">总试题数：<span>{{paginationOption.count}}</span>&nbsp;道</div>

            <div class="data-list-wrapper">
                <table class="data-table">
                    <tr class="title">
                        <th class="t-number">序号</th>
                        <th class="t-name">题目ID</th>
                        <th class="t-state">学科</th>
                        <th class="t-state">任务状态</th>
                        <th class="t-time3">操作</th>
                    </tr>
                    <template v-for="question in questionList">
                        <tr class="t-body">
                            <td class="b-number">{{question.number}}</td>
                            <td class="b-name js-q-id" @click="showQuestionPopout(question.questionId)">
                                {{question.questionId}}
                            </td>
                            <td class="b-state">{{question.subjectName}}</td>
                            <template v-if="question.isGet > 0">
                                <td class="t-state b-receive">
                                    已领取
                                </td>
                            </template>
                            <template v-else>
                                <td class="b-state">
                                    未领取
                                </td>
                            </template>

                            <td class="t-time3" style="color:deepskyblue;cursor:pointer" @click="questionInfo(question.questionId)">详情</td>
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
                            <span>教师<a id="teacherA">（{{item.user_name}}）</a>：</span>
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
            <div class="title">详情<span class="icon-close" @click="closePopoutGet">×</span></div>
            <div class="con-wrapper">
                <div class="detial-box">
                    <template v-if="questionUserInfo">
                        <template v-for="info in questionUserInfo">
                            <p class="list">
                                <span>领取人：<i>{{info.user_name}}</i></span>
                                <span v-if="info.create_time">领取时间：<i>{{info.create_time}}</i></span>
                                <span v-if="info.tag_time">贴标签时间：<i>{{info.tag_time}}</i></span>
                            </p>
                        </template>
                    </template>
                    <template v-else>
                        暂时没有领取人
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
                isGet: '',
                isLabel: '',
                questionId: '',
                curGrade: '',
                optionsGrade: '',
                subjectValue: '',
                optionsSubject: '',
                curQuestionType: '',
                ajaxAllSubjectQuestionType: '',
                questionList: [],
                questionUserInfo:[],
                isShow:false,
                isValue:'显示答案',
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
                labelShow:false
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
                    gradeNum: that.curGrade,
                    subjectId: that.subjectValue,
                    questionTypeId: that.curQuestionType,
                    questionId: that.questionId,
                    isLabel: that.isLabel,
                    isGet: that.isGet,
                    pageSize:that.paginationOption.pageSize
                };
            },
            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },
        mounted(){
            var that = this;
            that.timeList();
            that.subjectList();
            that.getAllGrade();
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
            showQuestionPopout: function (qid) {

                $('#questionId').html(qid);
                var that = this;
                axios.get('label/manage/questionDetailAjaxSearch',{params:{questionId:qid}}).then(function(data){

                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.detail.content = data.data.content;
                        that.detail.answer = data.data.answer;
                        that.detail.analysis = data.data.analysis;
                        that.detail.tagContent = data.data.tagContent;
                        that.detail.judgeTagContent = data.data.judgeTagContent;
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
            questionInfo(questionId){
                var that = this
                axios.get('label/manage/getQuestionInfo',{params:{questionId:questionId}}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        if(data.data['paper_id']){
                            that.questionUserInfo = data.data[data.data['paper_id']];
                        }else{
                            that.questionUserInfo = data.data[questionId];
                        }
                    }

                })
                $('.m-layer').show();
                $('.q-detial-dialog-ops').show();

            },
            closePopoutGet: function () {
                $('.m-layer').hide();
                $('.q-detial-dialog-ops').hide();
            },
            //从page组件传递过来的当前page
            pageChange(page) {
                this.paginationOption.currentPage = page;
                this.doSearch();  //查询数据
            },
            subjectList(){
                var that = this
                axios.get('label/common/getSubjects',{params:{userKey:that.userKey}}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.optionsSubject = data.data;
                    }

                })
            },
            selectQuestionType() {
                var that = this;
                that.curPaperSource = '';
                axios.get('label/common/getQuestionTypeAjaxSearch',{params:{subjectId:that.subjectValue,userKey:that.userKey}}).then(function(data){
                    that.$nextTick(function () {
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.ajaxAllSubjectQuestionType = data.data;
                        }
                    });
                })
            },
            getAllGrade(){
                var that = this
                axios.get('label/common/getAllGrade',{params:{}}).then(function(data){
                    that.optionsGrade = data.data;
                })
            },
            timeList(){
                var that = this
                axios.get('label/common/getMonthTime',{params:{userKey:that.userKey}}).then(function(data){
                    that.$nextTick(function () {
                        that.beginDate = data.data.fristday;
                        that.endDate = data.data.lastday;
                        that.doSearch();
                    });
                })
            },
            selectGet: function () {
                var that = this;
                if(that.isGet == 0){
                    that.isLabel = '';
                    // $("#isTag").css("display","none");
                    // $('#isTag').hide();
                    that.labelShow = false;
                }
                if(that.isGet !=0 && that.isGet!=''){
                    // $("#isTag").css("display","block");
                    // $('#isTag').show();
                    that.labelShow = true;
                }
            },
            doSearch: function () {
                var that = this;
                var searchArgs = $.extend(true, {}, that.searchArgs);
                searchArgs.currentPage = that.paginationOption.currentPage;
                searchArgs.pageSize = that.paginationOption.pageSize;
                searchArgs.userKey = that.userKey;
                //that.loading=true;
                axios.get('label/manage/question',{params:searchArgs}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.$nextTick(function () {
                            //that.loading=false;
                            that.questionList = data.data.rows;
                            if(data.data.total){
                                that.paginationOption.count=data.data.total
                            }else{
                                that.paginationOption.count = 0;
                            }
                        });
                    }

                })
            },
        },
    }
</script>
<style scoped src="../../static/css/topic.css"></style>
<style  src="../../static/js/datetimepicker/jquery.datetimepicker.min.css"></style>