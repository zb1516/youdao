<template>
    <div class="main table-list">
        <!-- search -->
        <div class="filter-form-box">
            <div class="inner cf">
                <div class="input-wrapper">
                    <label for="" class="title">学科</label>
                    <div class="input-box">
                        <select class="subject-select-box" id="subject-select-box" name="subject-select-box" v-model="subjectValue" data-options="width: 100">
                            <option value="">全部</option>
                            <option v-for="option in optionsSubject" :value="option.subjectId">
                                {{option.subjectName}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="input-wrapper">
                    <label for="" class="title">年级</label>
                    <div class="input-box">
                        <select class="grade-select-box" id="grade-select-box" name="grade-select-box" v-model="curGrade" data-options="width: 100">
                            <option value="">全部</option>
                            <option value="1">一年级</option>
                            <option value="2">二年级</option>
                            <option value="3">三年级</option>
                            <option value="4">四年级</option>
                            <option value="5">五年级</option>
                            <option value="6">六年级</option>
                            <option value="7">初一</option>
                            <option value="8">初二</option>
                            <option value="9">初三</option>
                            <option value="10">高一</option>
                            <option value="11">高二</option>
                            <option value="12">高三</option>
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
                    <label for="" class="title">审核图片</label>
                    <div class="input-box">
                        <div class="date-range-box">
                            <input type="hidden" name="">
                        </div>
                        <div class="input-inner">
                            <input type="text" class="input-text input-date-range" readonly="readonly">
                        </div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <label for="" class="title">审核人</label>
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
                        <select class="mechanism-select-box" id="mechanism-select-box" name="mechanism-select-box" data-options="width: 100" v-model="agencyId" data-live-search="true">
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
        <div class="pic-list-wrapper statistic-pic">
            <div class="pic-number-wrapper">
                <span class="info-n sum">共<span class="num">{{totalNum}}</span>套</span>
                <div class="tool-box">
                    <div class="search-wrapper">
                        <input type="text" class="s-input" value="" placeholder="试卷名称" v-model="paperName">
                        <span class="search-btn"  @click="doSearchClick"></span>
                    </div>
                    <button type="button" name="button" class="export-btn" @click="doExport">导出</button>
                </div>
            </div>
            <div class="pic-form-wrapper">
                <table id="pic-form-box" class="pic-form-box dataTable no-footer" role="grid" style="width: 1400px;">
                    <thead>
                    <tr role="row">
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="序号" style="width: 84px;">序号</th>
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="试卷名称" style="width: 518px;">试卷名称</th>
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="学科" style="width: 308px;">学科</th>
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="省/市" style="width: 308px;">省/市</th>
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="机构名称" style="width: 308px;">机构名称</th>
                        <th :class="isUploadTimeTrue?'sorting':(isUploadTimeShow?'sorting_asc':'sorting_desc')" id="paginationBox1" tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="上传时间: activate to sort column ascending" style="width: 140px;" @click="selectUploadTimeGet">上传时间</th>
                        <th :class="isExaminedTimeTrue?'sorting':(isExaminedTimeShow?'sorting_asc':'sorting_desc')" tabindex="0" aria-controls="pic-form-box" rowspan="1" colspan="1" aria-label="审核时间: activate to sort column ascending" style="width: 140px;" orderable="true" @click="selectExaminedTimeGet">审核时间</th>
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="处理天数" style="width: 308px;">处理天数</th>
                        <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="审核人" style="width: 308px;">审核人</th>

                    </tr>
                    </thead>
                    <tbody>
                    <template v-if="isContent == 1">
                        <template v-for="imagePaper in imagePaperList">
                            <tr role="row" class="odd">
                                <td class="sorting_1">{{imagePaper.number}}</td>
                                <td><span class="color-black">{{imagePaper.paperName}}</span></td>
                                <td>{{imagePaper.subjectName}}</td>
                                <td>{{imagePaper.province}}/{{imagePaper.city}}</td>
                                <td>{{imagePaper.agencyName}}</td>
                                <td>{{imagePaper.uploadTime}}</td>
                                <td>{{imagePaper.imageExaminedTime}}</td>
                                <td>{{imagePaper.imageProcessingDays}}</td>
                                <td>{{imagePaper.imageExaminedAuditorName}}</td>
                            </tr>
                        </template>
                    </template>
                    <template v-else>
                        <!--<p style="text-align:center;">暂无数据</p>-->
                    </template>
                    </tbody>
                </table>

                <div id="paginationBox" class="m-pages" :style="isContent?'display:block':'display:none'"></div>

            </div>
        </div>
    </div>
</template>


<script>
    import "../../static/js/jquery-1.12.2.min.js"
    import "../../static/js/datetimepicker/jquery.datetimepicker.full.js"
    import "../../static/css/jquery.dataTables.min.css"
    import "../../static/js/pagination/pagination.css"
    import "../../static/js/jquery.min.js"
    import "../../static/js/jquery.plugin.js"
    import "../../static/js/jquery.dataTables.min.js"
    import common from "../../static/js/jquery.common.js"
    import "../../static/js/pagination/pagination.min.js"
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                subjectValue:'',
                optionsSubject:'',
                agencyValue:'',
                optionsAgency:'',
                imagePaperList: '',
                pageSize: 5,
                currentPage:1,
                curGrade:'',
                _total:0,
                totalNum:0,
                listCount:'',
                isUploadTimeShow:0,
                isUploadTimeTrue:1,
                isUploadTimeSort:'asc',
                isExaminedTimeShow:0,
                isExaminedTimeTrue:1,
                isExaminedTimeSort:'',
                isExaminedStatusShow:0,
                agencyId:0,
                curProvince:'',
                curCity:'',
                beginDate:'',
                endDate:'',
                isContent:1,
                paperName:'',
                isType:2,
                optionsAuthor:'',
                authorValue:0,
                isSort:false
            }
        },
        computed: {
            searchArgs: function () {
                var that = this;
                return {
                    grade: that.curGrade,
                    subjectId: that.subjectValue,
                    pageSize:that.pageSize,
                    isUploadTimeSort: that.isUploadTimeSort,
                    isExaminedTimeSort: that.isExaminedTimeSort,
                    agencyId:that.agencyId,
                    beginDate:that.beginDate,
                    endDate:that.endDate,
                    province:that.curProvince,
                    city:that.curCity,
                    paperName:that.paperName,
                    isType:that.isType,
                    authorId:that.authorValue,
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
            that.authorList();
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
                //alert($("#paginationBox").html())
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
                            that.pageSize = 5;
                            that.doSearch();
                            //console.log('currPage:' + currPage + '     pageSize:' + that.pageSize);

                        }
                    });
                }
            },
            doSearch(){
                // alert($(".drop-city-ul").html());
                //alert($(".drop-city-ul").find('.selected').attr('data-val'));
                var that = this;
                if($(".drop-prov-ul").find('.selected').attr('data-val')){
                    that.curProvince = $(".drop-prov-ul").find('.selected').attr('data-val');
                    that.curCity = $(".drop-city-ul").find('.selected').attr('data-val');
                }
                if($("input[name='start-date']").val()){
                    that.beginDate = $("input[name='start-date']").val();
                    that.endDate = $("input[name='end-date']").val();
                }
                var searchArgs = $.extend(true, {}, that.searchArgs);
                if(that.isSort == false){
                    that.currentPage = 1;
                }
                searchArgs.currentPage = that.currentPage;
                searchArgs.pageSize = that.pageSize;
                searchArgs.userKey = that.userKey;
                axios.get('youdao/imagePaper/imagePaper',{params:searchArgs}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.$nextTick(function () {
                            if(data.data.rows != ''){
                                that.isContent = 1;
                                that.imagePaperList = data.data.rows;
                            }else{
                                that.isContent = 0;
                            }
                            that._total = data.data.total;
                            that.totalNum = data.data.totalNum;
                            that.currentPage = searchArgs.currentPage;
                            //that.jsPage();
                        });
                    }
                })
            },
            selectUploadTimeGet: function () {
                var that = this;
                that.isUploadTimeTrue = 0;
                if(!that.isUploadTimeShow){
                    //alert('down')
                    that.isUploadTimeShow = 1;
                    that.isUploadTimeSort = 'asc';
                }else{
                    //alert('up')
                    that.isUploadTimeSort = 'desc';
                    that.isUploadTimeShow = 0;
                }
                that.isExaminedTimeTrue = 1;
                that.isExaminedTimeSort = '';
                that.doSearch();
            },
            selectExaminedTimeGet: function () {
                var that = this;
                that.isExaminedTimeTrue = 0;
                if(!that.isExaminedTimeShow){
                    that.isExaminedTimeShow = 1;
                    that.isExaminedTimeSort = 'asc';
                }else{
                    that.isExaminedTimeSort = 'desc';
                    that.isExaminedTimeShow = 0;
                }
                that.isUploadTimeTrue = 1;
                that.isUploadTimeSort = '';
                that.doSearch();
            },
            authorList(){
                var that = this;
                axios.get('common/common/getAuditors',{params:{userKey:that.userKey,roleName:'图片审核人'}}).then(function(data){
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

            doExport: function () {
                var that = this;
                var imageExportUrl = 'youdao/imagePaper/imageExport?userKey='+that.userKey;
                var searchArgs = $.extend(true, {}, that.searchArgs);
                if (confirm('确定要导出Excel吗?')) {
                    location.href =
                        imageExportUrl +
                        '&subjectId=' + searchArgs.subjectId +
                        '&grade=' + searchArgs.grade +
                        '&province=' + searchArgs.province +
                        '&city=' + searchArgs.city +
                        '&beginDate=' + searchArgs.beginDate +
                        '&endDate=' + searchArgs.endDate+
                        '&paperName=' + that.paperName+
                        '&authorId=' + searchArgs.authorId+
                        '&agencyId=' + searchArgs.agencyId;
                }
            },
            doSearchClick: function () {
                var that = this;
                that.isSort = false;
                that.doSearch();
            }

        }
    }

</script>
