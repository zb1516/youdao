<template>
    <div class="main table-list">
        <!-- search -->
        <div class="filter-form-box">
          <div class="inner cf">
              <div class="input-wrapper">
                  <label for="" class="title">学科</label>
                  <div class="input-box">
                      <select class="subject-select-box" id="subject-select-box" name="subject-select-box" v-model="subjectValue" data-options="width: 100">
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
                      <select class="grade-select-box" id="grade-select-box" name="grade-select-box" v-model="gradeValue" data-options="width: 100">
                          <option value="0">全部</option>
                          <option value="1">小学</option>
                          <option value="2">初中</option>
                          <option value="3">高中</option>
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
                  <label for="" class="title">有道处理成功</label>
                  <div class="input-box">
                      <div class="date-range-box paper-list">
                          <input type="hidden" name="">
                      </div>
                      <div class="input-inner">
                          <input type="text" class="input-text input-date-range" readonly="readonly">
                      </div>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">状态</label>
                  <div class="input-box">
                      <select class="status-select-box" id="status-select-box" name="status-select-box" data-options="width: 100">
                          <option value="0">待审核</option>
                          <option value="1">已通过</option>
                          <option value="2">退回</option>
                          <option value="3">试卷重复</option>
                      </select>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">机构</label>
                  <div class="input-box">
                      <select class="mechanism-select-box" id="mechanism-select-box" name="mechanism-select-box" data-options="width: 100" data-live-search="true">
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
        <div class="pic-list-wrapper">
          <div class="pic-number-wrapper">
            <span class="info-n sum">共<span class="num">100</span>套</span>
            <span class="info-n vertify">待审核<span class="num yellow">40</span>套</span>
            <span class="info-n right">已通过<span class="num green">52</span>套</span>
            <span class="info-n pass">退回<span class="num red">5</span>套</span>
            <div class="search-wrapper">
              <input type="text" class="s-input" value="" placeholder="试卷名称">
              <span class="search-btn"></span>
            </div>
          </div>
          <div class="pic-form-wrapper">
            <table id="pic-form-box" class="pic-form-box dataTable no-footer" role="grid" style="width: 1400px;">
                 <thead>
                     <tr role="row">
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="任务ID" style="width: 84px;">任务ID</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="试卷名称" style="width: 518px;">试卷名称</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="机构名称" style="width: 308px;">机构名称</th>
                         <th :class="isTrue?'sorting':(isShow?'sorting_desc':'sorting_asc')" id='finalProcessingTime' tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="有道处理成功时间: activate to sort column ascending" style="width: 140px;" @click="selectGet">有道处理成功</th>
                         <th class="sorting asc" tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="审核时间: activate to sort column ascending" style="width: 140px;" orderable="true">审核时间</th>
                         <th class="sorting" tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="审核状态: activate to sort column ascending" style="width: 112px;">审核状态</th>
                         <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="操作" style="width: 98px;">操作</th>
                     </tr>
                 </thead>
                 <tbody>
                     <template v-for="paper in paperList">
                         <tr role="row" class="odd">
                             <td class="sorting_1">{{paper.task_id}}</td>
                             <td><span class="color-black">{{paper.paper_name}}</span></td>
                             <td>{{paper.agency_name}}</td>
                             <td>{{paper.final_processing_time}}</td>
                             <td>{{paper.paper_examined_time}}</td>
                             <td>
                                 <template v-if="paper.paper_examined_status_name == '已通过'">
                                     <span class="status green">{{paper.paper_examined_status_name}}</span>
                                 </template>
                                 <template v-else-if="imagePaper.imageExaminedStatusName == '已退回'">
                                     <span class="status red">{{paper.paper_examined_status_name}}</span>
                                 </template>
                                 <template v-else>
                                     <span class="status">{{paper.paper_examined_status_name}}</span>
                                 </template>
                             </td>
                             <td>
                                 <template v-if="paper.paper_examined_status_name == '待审核'">
                                     <a href="reviewPic1.html" class="reviewBtn">审核</a>
                                 </template>
                             </td>
                         </tr>
                     </template>
                 </tbody>
            </table>
            <div id="paginationBox" class="m-pages"></div>
          </div>
        </div>
    </div>
</template>
<script>
    //
    import "../../static/js/jquery-1.12.2.min.js"
    import "../../static/js/jquery.plugin.js"
    import "../../static/js/jquery.dataTables.min.js"
    import "../../static/css/jquery.dataTables.min.css"
    import "../../static/js/pagination/pagination.css"
    import "../../static/js/datetimepicker/jquery.datetimepicker.full.js"
    import "../../static/js/pagination/pagination.min.js"
    import "../../static/js/jquery.common.js"



    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                subjectValue:'',
                optionsSubject:'',
                agencyValue:'',
                optionsAgency:'',
                paperList: '',
                pageSize: 5,
                currentPage:1,
                curGrade:'',
                _total:0,
                totalNum:0,
                listCount:'',
                isShow:0,
                isTrue:1,
                isSort:'desc'

            }
        },


        computed: {
            searchArgs: function () {
                var that = this;
                return {
                    grade: that.curGrade,
                    subjectId: that.subjectValue,
                    pageSize:that.pageSize,
                    isSort: that.isSort,
                };
            },
            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },
        mounted(){
            var that = this;
            that.subjectList();
            that.agencyList();
            that.doSearch();
            that.doSearchStatic();

        },
        watch:{
            searchArgs:function() {
                var that = this;
                that.currentPage = 1;
            },
            imagePaperList:function(){
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
                            //alert(that.currentPage)
                            that.pageSize = 5;
                            //alert(that.pageSize)
                            that.doSearch();
                            console.log('currPage:' + currPage + '     pageSize:' + that.pageSize);
                        }
                    });

                }

            },
            doSearch(){


                // alert($(".drop-city-ul").html());
                // alert($(".drop-city-ul").find('.selected').attr('data-val'));
                var that = this;
                var searchArgs = $.extend(true, {}, that.searchArgs);
                searchArgs.currentPage = that.currentPage;
                searchArgs.pageSize = that.pageSize;
                searchArgs.userKey = that.userKey;
                axios.get('youdao/paper/paperList',{params:searchArgs}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.$nextTick(function () {
                            that.paperList = data.data.rows;
                            that._total = data.data.total;
                            that.totalNum = data.data.totalNum;
                            that.listCount = data.data.listCount;
                            //that.jsPage();
                        });
                    }
                })
            },
            selectGet: function () {

                var that = this;
                that.doSearch();
                that.isTrue = 0;
                if(!that.isShow){
                    //alert('down')
                    that.isSort = 'desc';
                    that.isShow = 1;
                }else{
                    //alert('up')
                    that.isSort = 'asc';
                    that.isShow = 0;
                }


                    // $('#isTag').hide();

            },

            doSearchStatic: function(){
                var that = this;
                var searchArgs = $.extend(true, {}, that.searchArgs);
                searchArgs.userKey = that.userKey;
                axios.get('youdao/paper/paperStatistic',{params:searchArgs}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.$nextTick(function () {
                            that.totalNum = data.data.totalNum;
                            that.listCount = data.data.listCount;

                        });
                    }
                })
            }
        }
    }

</script>