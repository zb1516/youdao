<template>
    <div class="main table-list">
        <!-- search -->
        <div class="filter-form-box">
          <div class="inner cf">
              <div class="input-wrapper">
                  <label for="" class="title">学科</label>
                  <div class="input-box">
                      <select class="subject-select-box" id="subject-select-box" name="subject-select-box" v-model="subjectValue" data-options="width: 100" >
                          <option value="0">全部</option>
                          <option v-for="option in optionsSubject" :value="option.subjectId">
                              {{option.subjectName}}
                          </option>
                      </select>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">年级</label>
                  <div class="input-box">
                      <select class="grade-select-box" id="grade-select-box" name="grade-select-box"  v-model="gradeValue" data-options="width: 100" >
                          <option value="0">全部</option>
                          <option v-for="(option,index) in optionsGrade" :value="index">
                              {{option}}
                          </option>
                      </select>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">省市</label>
                  <div class="input-box">
                      <div class="address-search-box">
                          <div class="city-select cf">
                              <input class="value prov-name" type="text" placeholder="省" readonly="readonly">
                              <input class="value city-name" type="text" placeholder="市" readonly="readonly">
                          </div>
                          <div class="drop-down">
                              <div class="drop-prov">
                                  <ul class="drop-prov-ul drop-ul"></ul>
                              </div>
                              <div class="drop-city">
                                  <ul class="drop-city-ul drop-ul"></ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">最终审核试卷</label>
                  <div class="input-box">
                      <div class="date-range-box paper-list">
                          <input type="hidden" name="">
                      </div>
                      <div class="input-inner">
                          <input type="text" class="input-text input-date-range" readonly="readonly">
                      </div>
                      <!--<div class="date-range-box">
                          <input type="hidden" name="" v-model="beginDate" ref="beginDate">
                      </div>
                      <div class="input-inner">
                          <input type="text" v-model="endDate" ref="endDate" class="input-text input-date-range" readonly="readonly">
                      </div>-->
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">试卷审核人</label>
                  <div class="input-box">
                      <select class="author-select-box" id="author-select-box" name="status-select-box" v-model="authorValue" data-options="width: 100">
                          <option value="0">全部</option>
                          <option v-for="(option,index) in optionsAuthor" :value="index">
                              {{ option }}
                          </option>
                      </select>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">机构</label>
                  <div class="input-box">
                      <select class="mechanism-select-box" id="mechanism-select-box" name="mechanism-select-box" v-model="agencyValue" data-options="width: 100" data-live-search="true">
                          <option value="0">全部</option>
                          <option v-for="option in optionsAgency" v-bind:value="option.agencyId">
                              {{ option.agencyName }}
                          </option>
                      </select>
                  </div>
              </div>
              <button type="button" name="button" class="list-search-btn" @click="doSearchClick">搜索</button>
          </div>
        </div>
        <!-- list -->
        <div class="pic-list-wrapper statistic-paper">
          <div class="pic-number-wrapper">
            <span class="info-n sum">共<span class="num">{{totalNum}}</span>套</span>
            <div class="tool-box">
              <div class="search-wrapper">
                  <input type="text" v-model="paperName" class="s-input" value="" placeholder="试卷名称">
                  <span class="search-btn" @click="doSearchClick"></span>
              </div>
              <button type="button" name="button" class="export-btn" @click="questionExport()">导出试题</button>
              <button type="button" name="button" class="export-btn" @click="paperExport()">导出试卷</button>
            </div>
          </div>
          <div class="pic-form-wrapper">
            <table id="pic-form-box" class="pic-form-box dataTable no-footer" role="grid" style="width: 1400px;">
                <thead>
                     <tr role="row">
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="序号" style="width: 5%;">序号</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="试卷名称" style="width: 32%;">试卷名称</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="机构名称" style="width: 9%;">机构名称</th>
                         <th :class="sortField!='upload_time'?'sorting':(sortType=='asc'?'sorting_asc':'sorting_desc')" id='upload_time' tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="上传图片: activate to sort column ascending" style="width: 9%" @click="selectGet(1)" >上传图片</th>
                         <th :class="sortField!='paper_examined_time'?'sorting':(sortType=='asc'?'sorting_asc':'sorting_desc')" id="paper_examined_time" tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="最终审核试卷: activate to sort column ascending" style="width: 9%;" orderable="true" @click="selectGet(2)">最终审核试卷</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="审核图片" style="width: 6%;" >审核图片</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="有道加工" style="width: 6%;" >有道加工</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="审核试题" style="width: 6%;" >审核试题</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="图片审核" style="width: 6%;" >图片审核</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="试卷审核" style="width: 6%;" >试卷审核</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="操作" style="width: 98px;">操作</th>
                     </tr>
                </thead>
                <tbody>
                    <template v-if="isContent == 1">
                        <template v-for="(paper,index) in paperList">
                            <tr role="row" :class="index%2 != 1 ?'odd':'even'">
                                <td class="sorting_1">{{paper.num}}</td>
                                <td><span class="color-black" @click="showPaper(paper.task_id)" style="cursor: pointer">{{paper.paper_name}}</span></td>
                                <td>{{paper.agency_name}}</td>
                                <td>{{paper.upload_time}}</td>
                                <td>{{paper.paper_examined_time}}</td>
                                <td>{{paper.image_processing_days}}</td>
                                <td>{{paper.final_processing_days}}</td>
                                <td>{{paper.paper_examined_days}}</td>
                                <td>{{paper.image_examined_auditor_name}}</td>
                                <td>{{paper.paper_examined_auditor_name}}</td>
                                <td>
                                    <a href='javascript:;' class='status green js-detial' :id="'detail' + paper.task_id" @mouseenter.prevent="detailMouseEnter(paper.task_id)" @mouseleave.prevent="detailMouseLeave(paper.task_id)">查看详情</a>
                                </td>
                            </tr>
                        </template>
                    </template>
                </tbody>
            </table>
            <div id="paginationBox" class="m-pages"></div>
            <!-- 审核流程 -->
            <div class="review-process-wrapper js-process" @mouseenter="processMouseEnter()" @mouseleave="processMouseLeave()">
              <h3 class="title">审核流程</h3>
              <div class="process-list">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="w9">序号</th>
                      <th class="w24">处理步骤</th>
                      <th class="w35">处理时间</th>
                      <th class="w13">处理人</th>
                      <th class="w13">状态</th>
                    </tr>
                  </thead>
                  <tbody>
                      <template v-for="(process,index) in processList">
                          <tr class="tr-row" >
                              <td>{{index+1}}</td>
                              <td>{{process.process_name}}</td>
                              <td>{{process.process_time}}</td>
                              <td>{{process.process_user}}</td>
                              <td v-if="process.status === 1" class="status yes">通过</td>
                              <td v-if="process.status === 0" class="status no">退回</td>
                          </tr>
                      </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- 遮罩 -->
        <div class="dialog-balck-cover" @click="hidePaper()"></div>
        <!-- 试卷详情 -->
        <div class="dialog-paper-detial-wrapper " >
          <h2 class="title" >{{paperInfo.title}}</h2>
          <!--<p class="question-type">一、单选题（共2题，共10分）</p>-->
          <template v-for="(question,index) in questions">
              <dl class="question-wrapper q-radio" v-if="question.ques_options">
                  <dt class="question-name">
                      <template v-if="question.ques_number">{{question.ques_number}}</template>
                      <template v-else="!question.ques_number">{{index+1}}</template>
                      、（{{question.ques_score}}分）
                      <span v-html="question.ques_content"></span>
                  </dt>
                  <div v-if="question.ques_answer">
                      答案：<span v-html="question.ques_answer"></span>
                  </div>
                  <div v-if="question.ques_analysis">
                      解析：<span v-html="question.ques_analysis"></span>
                  </div>
               </dl>
           </template>
        </div>
    </div>
</template>
<script>
    import "../../static/js/jquery-1.12.2.min.js"
    import "../../static/js/jquery.plugin.js"
    import "../../static/js/jquery.dataTables.min.js"
    import "../../static/css/jquery.dataTables.min.css"
    import "../../static/js/pagination/pagination.css"
    import "../../static/js/datetimepicker/jquery.datetimepicker.full.js"
    import "../../static/js/pagination/pagination.min.js"
    import common from "../../static/js/jquery.common.js"
    import {mapGetters} from 'vuex'

    export default {
            data(){
                return {
                    subjectValue:0,
                    optionsSubject:'',
                    gradeValue:0,
                    optionsGrade:'',
                    province:'',
                    city:'',
                    agencyValue:0,
                    optionsAgency:'',
                    authorValue:0,
                    optionsAuthor:'',
                    beginDate:'',
                    endDate:'',
                    paperName:'',
                    paperList: '',
                    pageSize: 5,
                    currentPage:1,
                    curGrade:'',
                    _total:0,
                    totalNum:0,
                    listCount:'',
                    sortField:'',
                    sortType:'asc',
                    isContent:1,
                    status:3,
                    processList:'',
                    paperInfo:'',
                    questions:'',
                    timer:'',
                    isSort:false
                }
            },
            computed: {
                searchArgs: function () {
                    var that = this;
                    return {
                        gradeId: that.gradeValue,
                        subjectId: that.subjectValue,
                        province: that.province,
                        city: that.city,
                        auditBeginDate: that.beginDate,
                        auditEndDate: that.endDate,
                        agencyId: that.agencyValue,
                        status: that.status,
                        auditorId:that.authorValue,
                        paperName: that.paperName,
                        pageSize:that.pageSize,
                        sortField: that.sortField,
                        sortType: that.sortType,
                    };
                },
                ...mapGetters({
                    userKey:'getUserKey',
                })
            },
            mounted(){
                var that = this;
                that.subjectList();
                that.gradeList();
                that.agencyList();
                that.authorList();

                /*var nowdate = new Date();
                that.endDate = nowdate.getFullYear() + '/' + ('0' + (nowdate.getMonth() + 1)).slice(-2) + '/' + ('0' + nowdate.getDate()).slice(-2);
                that.beginDate = nowdate.getFullYear() + '/' + ('0' + (nowdate.getMonth() + 1)).slice(-2) + '/' + '01';
                $('.input-date-range').val(that.beginDate + ' - ' + that.endDate);*/

                that.doSearch();
                common.init();

            },
            watch:{
                searchArgs:function() {
                    var that = this;
                    that.currentPage = 1;
                },
                paperList:function(){
                    var that = this;
                    that.jsPage();
                }
            },
            methods:{
                detailMouseEnter(taskId){
                    // 查看详情 移入
                    var $this = $('#detail' + taskId);
                    var $processList = $('.js-process');
                    var offsetTop = $this.offset().top;
                    var offsetLeft = $this.offset().left;
                    var positionTop = parseInt(offsetTop - 20);
                    var positionLeft = parseInt(offsetLeft - 570);
                    var positionStr = 'top:'+ positionTop + 'px;' + 'left:' + positionLeft + 'px';

                    // 渲染数据
                    var that = this;
                    that.processList = [];
                    axios.get('youdao/paper/getProcessList',{params:{userKey:that.userKey,taskId:taskId}}).then(function(data){
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.processList = data.data;
                        }
                    })

                    // 定位 显示
                     $processList.attr('style',positionStr);
                     $processList.show();

                },
                detailMouseLeave(taskId){
                    var that = this;
                    // 查看详情 移出
                    var $processList = $('.js-process');
                    that.timer = setTimeout(function(){
                        $processList.hide();
                    },300);
                },
                processMouseEnter(){
                    var that = this;
                    clearTimeout(that.timer);
                },
                processMouseLeave(){
                    var that = this;
                    var $processList = $('.js-process');
                    that.timer = setTimeout(function(){
                        $processList.hide();
                    },300);
                },
                agencyList(){
                    var that = this;
                    axios.get('common/common/getYoudaoAgency',{params:{userKey:that.userKey}}).then(function(data){
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.optionsAgency = data.data;
                            that.$nextTick(function() {
                                $('#mechanism-select-box').selectpicker('refresh');
                            });
                        }
                    })
                },
                subjectList(){
                    var that = this;
                    axios.get('common/common/getSubjects',{params:{userKey:that.userKey}}).then(function(data){
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.$nextTick(function(){
                                that.optionsSubject = data.data;
                                that.$nextTick(function() {
                                    $('#subject-select-box').selectpicker('refresh');
                                });

                            })

                        }
                    })
                },
                gradeList(){
                    var that = this;
                    axios.get('common/common/getAllGrade',{params:{userKey:that.userKey}}).then(function(data){
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.$nextTick(function(){
                                that.optionsGrade = data.data;
                                that.$nextTick(function() {
                                    $('#grade-select-box').selectpicker('refresh');
                                });

                            })

                        }
                    })
                },
                authorList(){
                    var that = this;
                    axios.get('common/common/getAuditors',{params:{userKey:that.userKey,roleName:'试卷审核人'}}).then(function(data){
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.$nextTick(function(){
                                that.optionsAuthor = data.data;
                                that.$nextTick(function() {
                                    $('#author-select-box').selectpicker('refresh');
                                });

                            })

                        }
                    })
                },
                jsPage(){
                    var that = this;
                    if($("#paginationBox").html() != '') {
                        $("#paginationBox").pagination('setPage', that.currentPage, that._total);
                    } else {
                        $("#paginationBox").pagination({
                            totalPage: that._total,
                            showPageNum: 5,
                            isShowPageSizeOpt: false,
                            isShowFL: false,
                            isShowRefresh: false,
                            callBack: function (currPage, pageSize) {
                                that.isSort = true;
                                that.currentPage = currPage;
                                that.doSearch();
                                console.log('currPage:' + currPage + '     pageSize:' + that.pageSize);
                            }
                        });

                    }

                },
                doSearch(){
                    var that = this;
                    if(that.isSort == false){
                        that.currentPage = 1;
                    }
                    if($("input[name='start-date']").val()){
                       that.beginDate = $("input[name='start-date']").val();
                       that.endDate = $("input[name='end-date']").val();
                    }
                    if($(".drop-prov-ul").find('.selected').attr('data-val')){
                        that.province = $(".drop-prov-ul").find('.selected').attr('data-val');;
                        that.city = $(".drop-city-ul").find('.selected').attr('data-val');
                    }

                    var searchArgs = $.extend(true, {}, that.searchArgs);
                    searchArgs.currentPage = that.currentPage;
                    searchArgs.pageSize = that.pageSize;
                    searchArgs.userKey = that.userKey;
                    searchArgs.status = that.status;
                    axios.get('youdao/paper/paperList',{params:searchArgs}).then(function(data){
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);

                        } else {
                            that.$nextTick(function () {
                                if(data.data.rows != ''){
                                    that.isContent = 1;
                                    that.paperList = data.data.rows;
                                }else{
                                    that.isContent = 0;
                                }
                                that._total = data.data.totalPage;
                                that.totalNum = data.data.total;
                                that.listCount = data.data.listCount;
                                that.currentPage = searchArgs.currentPage;
                                //that.jsPage();
                            });
                        }
                    })
                },
                selectGet: function (type) {
                    var that = this;
                    if(type == 1){
                        that.sortField = 'upload_time';
                        if(that.sortType == 'desc'){
                           that.sortType = 'asc';
                        }else{
                           that.sortType = 'desc';
                        }

                    }else if(type == 2){
                        that.sortField = 'paper_examined_time';
                        if(that.sortType == 'desc'){
                           that.sortType = 'asc';
                        }else{
                           that.sortType = 'desc';
                        }
                    }
                    that.isSort = false;
                    that.currentPage = 1;
                    that.doSearch();
                },
                showPaper(taskId){
                    var that = this;
                    axios.get('youdao/paper/getSKPaperInfo',{params:{userKey:that.userKey,taskId:taskId}}).then(function(data){
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                            return false;
                        } else {
                            that.paperInfo = data.data;
                            that.questions = [];
                            that.questions = data.data.questions;
                            that.$nextTick(() => {
                                MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById('paper-box')]);
                            });
                            $('.dialog-paper-detial-wrapper,.dialog-balck-cover').show();


                        }
                    })

                },
                hidePaper(){
                    $('.dialog-paper-detial-wrapper').hide();
                    $('.dialog-balck-cover').hide();
                },
                questionExport(){
                    var that = this;
                    var questionExportUrl = 'youdao/paper/questionExport?userKey='+that.userKey;
                    var searchArgs = $.extend(true, {}, that.searchArgs);
                    if (confirm('确定要导出试题吗?')) {
                        location.href =
                            questionExportUrl +
                            '&subjectId=' + searchArgs.subjectId +
                            '&gradeId=' + searchArgs.gradeId +
                            '&province=' + searchArgs.province +
                            '&city=' + searchArgs.city +
                            '&auditBeginDate=' + searchArgs.auditBeginDate +
                            '&auditEndDate=' + searchArgs.auditEndDate+
                            '&status=' + that.status+
                            '&authorId=' + searchArgs.authorId+
                            '&agencyId=' + searchArgs.agencyId;
                    }
                },
                paperExport(){
                    var that = this;
                    var paperExportUrl = 'youdao/paper/paperExport?userKey='+that.userKey;
                    var searchArgs = $.extend(true, {}, that.searchArgs);
                    if (confirm('确定要导出试卷吗?')) {
                        location.href =
                            paperExportUrl +
                            '&subjectId=' + searchArgs.subjectId +
                            '&gradeId=' + searchArgs.gradeId +
                            '&province=' + searchArgs.province +
                            '&city=' + searchArgs.city +
                            '&auditBeginDate=' + searchArgs.auditBeginDate +
                            '&auditEndDate=' + searchArgs.auditEndDate+
                            '&status=' + that.status+
                            '&authorId=' + searchArgs.authorId+
                            '&agencyId=' + searchArgs.agencyId;
                    }
                },
                doSearchClick(){
                    var that = this;
                    that.isSort = false;
                    that.doSearch();
                }
            }
        }
</script>
