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
                      <div class="date-range-box">
                          <input type="hidden" name="" v-model="beginDate" ref="beginDate">
                      </div>
                      <div class="input-inner">
                          <input type="text" v-model="endDate" ref="endDate" class="input-text input-date-range" readonly="readonly">
                      </div>
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
              <button type="button" name="button" class="list-search-btn" @click="doSearch">搜索</button>
          </div>
        </div>
        <!-- list -->
        <div class="pic-list-wrapper statistic-paper">
          <div class="pic-number-wrapper">
            <span class="info-n sum">共<span class="num">100</span>套</span>
            <div class="tool-box">
              <div class="search-wrapper">
                  <input type="text" v-model="paperName" class="s-input" value="" placeholder="试卷名称">
                  <span class="search-btn" @click="doSearch"></span>
              </div>
              <button type="button" name="button" class="export-btn">导出试题</button>
              <button type="button" name="button" class="export-btn">导出试卷</button>
            </div>
          </div>
          <div class="pic-form-wrapper">
            <table id="pic-form-box" class="pic-form-box dataTable no-footer" role="grid" style="width: 1400px;">
                <thead>
                     <tr role="row">
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="序号" style="width: 5%;">序号</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="试卷名称" style="width: 32%;">试卷名称</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="机构名称" style="width: 9%;">机构名称</th>
                         <th :class="sortField!='final_processing_time'?'sorting':(sortType=='asc'?'sorting_asc':'sorting_desc')" id='finalProcessingTime' tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="上传图片: activate to sort column ascending" style="width: 9%" @click="selectGet(1)" >上传图片</th>
                         <th :class="sortField!='paper_examined_time'?'sorting':(sortType=='asc'?'sorting_asc':'sorting_desc')" id="paper_examined_time" tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="最终审核试卷: activate to sort column ascending" style="width: 9%;" orderable="true" @click="selectGet(2)">最终审核试卷</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="审核图片" style="width: 6%;" >审核图片</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="有道加工" style="width: 6%;" >有道加工</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="图片审核" style="width: 6%;" >图片审核</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="试卷审核" style="width: 6%;" >试卷审核</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="操作" style="width: 98px;">操作</th>
                     </tr>
                </thead>
                <tbody>
                    <template v-if="isContent == 1">
                        <template v-for="(paper,index) in paperList">
                            <tr role="row" :class="index%2 != 1 ?'odd':'even'">
                                <td class="sorting_1">{{index+1}}</td>
                                <td><span class="color-black">{{paper.paper_name}}</span></td>
                                <td>{{paper.agency_name}}</td>
                                <td>{{paper.upload_time}}</td>
                                <td>{{paper.paper_examined_time}}</td>
                                <td>{{paper.image_processing_days}}</td>
                                <td>{{paper.final_processing_days}}</td>
                                <td>{{paper.image_examined_auditor_name}}</td>
                                <td>{{paper.paper_examined_auditor_name}}</td>
                                <td>
                                    <a href='javascript:;' class='status green js-detial'>查看详情</a>
                                </td>
                            </tr>
                        </template>
                    </template>
                </tbody>
            </table>
            <div id="paginationBox" class="m-pages"></div>
            <!-- 审核流程 -->
            <div class="review-process-wrapper js-process">
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

                            <tr class="tr-row" >
                              <td></td>
                              <td>上传图片</td>
                              <td>2018-11-17 14:56</td>
                              <td>蒲公英</td>
                              <td></td>
                            </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- 遮罩 -->
        <div class="dialog-balck-cover"></div>
        <!-- 试卷详情 -->
        <div class="dialog-paper-detial-wrapper">
          <h2 class="title">初中数学</h2>
          <p class="question-type">一、单选题（共2题，共10分）</p>
          <dl class="question-wrapper q-radio">
              <dt class="question-name">1、下列事件中最适合使用普查方式收集数据的是（  ）</dt>
              <dd class="option">A.了解某班同学的体重情况</dd>
              <dd class="option"> B.了解我省初中学生的兴趣爱好情况</dd>
              <dd class="option"> C.了解我省初中学生的兴趣爱好情况 </dd>
              <dd class="option"> D.了解我省农民工的年收入情况</dd>
           </dl>
           <dl class="question-wrapper">
               <dt class="question-name">2、下列事件中最适合使用普查方式收集数据的是（  ）</dt>
               <dd class="option">A.了解某班同学的体重情况</dd>
               <dd class="option"> B.了解我省初中学生的兴趣爱好情况</dd>
               <dd class="option"> C.了解我省初中学生的兴趣爱好情况 </dd>
               <dd class="option"> D.了解我省农民工的年收入情况</dd>
           </dl>
          <p class="question-type">二、解答题（共2题，共10分）</p>
          <div class="question-wrapper q-answer">
            <p class="q-answer-con">
              1、 我市某中学决定在学生中开展丢沙包、打篮球、跳大绳和踢毽球四种项目的活动，为了解学生对四种项目的喜欢情况，随机调查了
                    必选且只能选择四种活动项目的一种），并将调查结果绘制成如下的不完整的统计图表：学生最喜欢的活动项目的人数统计表根图
                  <br/>（1）m＝________，n＝________，p＝________；
                  <br/>（2）请根据以上信息直接补全条形统计图；
                  <br/>（3）根据抽样调查结果，请你估计该校2000名学生中有多少名学生最喜欢跳大绳．
            </p>
          </div>
          <p class="question-type">二、填空题（共2题，共10分）</p>
          <div class="question-wrapper q-answer">
            <p class="q-answer-con mb">
              1、 且只能选择四种活动项目的一种），并将调查结果绘制成如下的不完整的统计图表：解答下列问题：
            </p>
            <p class="q-answer-con mb">
              2、 且只能选择四种活动项目的一种），并将调查结果绘制成如下的不完整的统计图表：解答下列问题：
            </p>
          </div>
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
                that.subjectList();
                that.gradeList();
                that.agencyList();
                that.authorList();
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
                                that.currentPage = currPage;
                                that.pageSize = 5;
                                that.doSearch();
                                console.log('currPage:' + currPage + '     pageSize:' + that.pageSize);
                            }
                        });

                    }

                },
                doSearch(){
                    var that = this;
                    if($("input[name='start-date']").val()){
                       that.beginDate = $("input[name='start-date']").val();
                       that.endDate = $("input[name='end-date']").val();
                    }
                    if($(".drop-prov-ul").find('.selected').attr('data-val')){
                        that.province = $(".drop-prov-ul").find('.selected').text();
                        that.city = $(".drop-city-ul").find('.selected').text();
                    }

                    var searchArgs = $.extend(true, {}, that.searchArgs);
                    searchArgs.currentPage = that.currentPage;
                    searchArgs.pageSize = that.pageSize;
                    searchArgs.userKey = that.userKey;
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

            }
        }
</script>
