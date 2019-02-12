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
                                <input class="value prov-name" type="text"  placeholder="省" readonly="readonly">
                                <input class="value city-name" type="text"  placeholder="市" readonly="readonly">
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
                        <!--<div class="date-range-box paper-list">
                            <input type="hidden" name="" v-model="beginDate" ref="beginDate">
                        </div>
                        <div class="input-inner">
                            <input type="text" v-model="endDate" ref="endDate" class="input-text input-date-range" readonly="readonly">
                        </div>-->
                    </div>
                </div>
                <div class="input-wrapper">
                    <label for="" class="title">状态</label>
                    <div class="input-box">
                        <select class="status-select-box" id="status-select-box" name="status-select-box" v-model="statusValue" data-options="width: 100">
                            <option value="0">全部</option>
                            <option v-for="(option,index) in optionsStatus" :value="index">
                                {{option}}
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
        <div class="pic-list-wrapper">
            <div class="pic-number-wrapper">
                <span class="info-n sum">共<span class="num">{{totalNum}}</span>套</span>
                <span class="info-n vertify">待审核<span class="num yellow">{{listCount.waitCount}}</span>套</span>
                <span class="info-n right">已通过<span class="num green">{{listCount.passCount}}</span>套</span>
                <span class="info-n pass">退回<span class="num red">{{listCount.returnCount}}</span>套</span>
                <div class="search-wrapper">
                    <input type="text" v-model="paperName" class="s-input" value="" placeholder="试卷名称">
                    <span class="search-btn" @click="doSearch"></span>
                </div>
            </div>
            <div class="pic-form-wrapper">
                <table id="pic-form-box" class="pic-form-box dataTable no-footer" role="grid" style="width: 1400px;">
                    <thead>
                    <tr role="row">
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="任务ID" style="width: 84px;">任务ID</th>
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="试卷名称" style="width: 518px;">试卷名称</th>
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="机构名称" style="width: 308px;">机构名称</th>
                        <th :class="sortField!='final_processing_time'?'sorting':(sortType=='asc'?'sorting_asc':'sorting_desc')" id='finalProcessingTime' tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="有道处理成功时间: activate to sort column ascending" style="width: 140px;" @click="selectGet(1)" >有道处理成功</th>
                        <th :class="sortField!='paper_examined_time'?'sorting':(sortType=='asc'?'sorting_asc':'sorting_desc')" id="paper_examined_time" tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="审核时间: activate to sort column ascending" style="width: 140px;" orderable="true" @click="selectGet(2)">审核试卷时间</th>
                        <th :class="sortField!='paper_examined_status'?'sorting':(sortType=='asc'?'sorting_asc':'sorting_desc')" id="paper_examined_status" tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="审核状态: activate to sort column ascending" style="width: 112px;" @click="selectGet(3)">审核状态</th>
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="操作" style="width: 98px;">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-if="isContent == 1">
                        <template v-for="(paper,index) in paperList">
                            <tr role="row" :class="index%2 != 1 ?'odd':'even'">
                                <td class="sorting_1">{{paper.num}}</td>
                                <td><span class="color-black">{{paper.paper_name}}</span></td>
                                <td>{{paper.agency_name}}</td>
                                <td>
                                    <template v-if="paper.final_processing_time == null">
                                        {{paper.first_processing_time}}
                                    </template>
                                    <template v-else-if="paper.final_processing_time != null">
                                        {{paper.final_processing_time}}
                                    </template>
                                </td>
                                <td>{{paper.paper_examined_time}}</td>
                                <td>
                                    <template v-if="paper.paper_examined_status == 3">
                                        <span class="status green">已通过</span>
                                    </template>
                                    <template v-else-if="paper.paper_examined_status == 4">
                                        <span class="status red">已退回</span>
                                    </template>
                                    <template v-else-if="paper.paper_examined_status == 2">
                                        <span class="status">待审核</span>
                                    </template>
                                    <template v-else-if="paper.paper_examined_status == 1">
                                        <span class="status">处理中</span>
                                    </template>
                                    <template v-else-if="paper.paper_examined_status == 5">
                                        <span class="status">已关闭</span>
                                    </template>
                                </td>
                                <td>
                                    <template v-if="paper.paper_examined_status == 2">
                                        <router-link  :to="{name:'paper-paperExaminedOne',params:{userKey:userKey,taskId:paper.task_id}}" target="_blank"><a class="reviewBtn">审核</a></router-link>
                                    </template>
                                </td>
                            </tr>
                        </template>
                    </template>
                    <template v-else>
                        <!--<p style="text-align:center;">暂无数据</p>-->
                    </template>
                    </tbody>
                </table>
                <!--<template v-if="isContent == 1">-->
                <div id="paginationBox" class="m-pages" :style="isContent?'display:block':'display:none'"></div>
                <!--</template>-->
                <!--<template v-else>-->
                <!--<div id="paginationBox" class="m-pages"></div>-->
                <!--</template>-->
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
                statusValue:0,
                optionsStatus:'',
                agencyValue:0,
                optionsAgency:'',
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
                    gradeId: that.gradeValue,
                    subjectId: that.subjectValue,
                    province: that.province,
                    city: that.city,
                    beginDate: that.beginDate,
                    endDate: that.endDate,
                    agencyId: that.agencyValue,
                    status: that.statusValue,
                    paperName: that.paperName,
                    pageSize:that.pageSize,
                    sortField: that.sortField,
                    sortType: that.sortType,
                };
            },
            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },
        mounted(){
            var that = this;
            that.subjectList();
            that.gradeList();
            that.agencyList();
            that.statusList();

            var nowdate = new Date();
            that.endDate = nowdate.getFullYear() + '/' + ('0' + (nowdate.getMonth() + 1)).slice(-2) + '/' + ('0' + nowdate.getDate()).slice(-2);
            nowdate.setMonth(nowdate.getMonth()-1);
            that.beginDate = nowdate.getFullYear() + '/' + ('0' + (nowdate.getMonth() + 1)).slice(-2) + '/' + ('0' + nowdate.getDate()).slice(-2);
            $('.input-date-range').val(that.beginDate + ' - ' + that.endDate);

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
            statusList(){
                var that = this;
                axios.get('common/common/getPaperStatus',{params:{userKey:that.userKey}}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.$nextTick(function(){
                            that.optionsStatus = data.data;
                            that.$nextTick(function() {
                                $('#status-select-box').selectpicker('refresh');
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
                            that.doSearch();
                            //console.log('currPage:' + currPage + '     pageSize:' + that.pageSize);
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
                    that.province = $(".drop-prov-ul").find('.selected').attr('data-val');;
                    that.city = $(".drop-city-ul").find('.selected').attr('data-val');
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
            selectGet: function (type) {
                var that = this;
                if(type == 1){
                    that.sortField = 'final_processing_time';
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
                }else if(type == 3){
                    that.sortField = 'paper_examined_status';
                    if(that.sortType == 'desc'){
                        that.sortType = 'asc';
                    }else{
                        that.sortType = 'desc';
                    }
                }
                that.currentPage = 1;
                that.doSearch();

            },


        }
    }

</script>