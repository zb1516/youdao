<template>
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
                              <select  class="selectpicker  form-control selectpicker" title="请选择学科" v-model="subjectValue"  @change="selectPaperSource">
                                <option value="">请选择学科</option>
                                <option v-for="option in optionsSubject" v-bind:value="option.subjectId">
                                    {{ option.subjectName }}
                                </option>
                              </select>
                            </span>
                </div>
                <div class="col-md-2 search-condition">
                            <span class="inlineblock">
                              <span class="s-label">来源：</span>
                              <select  class="selectpicker  form-control selectpicker" title="请选择来源" v-model="curPaperSource">
                                <option value="">请选择来源</option>
                                <option v-for="option in ajaxAllSubjectPaperSource" v-bind:value="option.sourceName">
                                    {{ option.sourceName }}
                                </option>
                              </select>
                            </span>
                </div>

                <div class="col-md-2 search-condition">
                            <span class="inlineblock">
                              <span class="s-label">省份：</span>
                              <select  class="selectpicker  form-control selectpicker" title="请选择省份"  v-model="curProvince" @change="selectPaperCitys">
                                <option value="">请选择省份</option>
                                <option v-for="option in optionsProvinces" v-bind:value="option.id">
                                    {{ option.city }}
                                </option>
                              </select>
                            </span>
                </div>

                <div class="col-md-2 search-condition">
                         <span class="inlineblock">
                              <span class="s-label">地区：</span>
                              <select  class="selectpicker  form-control selectpicker" title="请选择地区"  v-model="curCity">
                                <option value="">请选择市区</option>
                                <option v-for="option in ajaxAllPaperCitys" v-bind:value="option.id">
                                    {{ option.city }}
                                </option>
                              </select>
                            </span>
                </div>

            </div>

            <div class="row">
                <div class="col-md-2 search-condition">
                            <span class="inlineblock">
                              <span class="s-label">年份：</span>
                              <select  class="selectpicker  form-control selectpicker" title="请选择年份"  v-model="curYear">
                                <option value="">请选择年份</option>
                                <option v-for="option in optionsYears" v-bind:value="option.yearText">
                                    {{ option.yearValue }}
                                </option>
                              </select>
                            </span>
                </div>


                <div class="col-md-2 search-condition">
                            <span class="inlineblock">
                              <span class="s-label">领取：</span>
                              <select  class="selectpicker  form-control selectpicker" title="" v-model="isGet" @change="selectGet">
                                <option value="">请选择</option>
                                <option value="0">未领取</option>
                                <option value="1">已领取</option>
                              </select>
                            </span>
                </div>
                <div class="col-md-2 search-condition" v-show="labelShow">
                            <span class="inlineblock">
                              <span class="s-label">标签：</span>
                              <select  class="selectpicker  form-control selectpicker" title="" v-model="isLabel">
                                <option value="">请选择</option>
                                <option value="0">未贴完</option>
                                <option value="1">已贴完</option>
                              </select>
                            </span>
                </div>


                <div class="col-md-4 search-condition">
                            <span class="s-sele">
                              <input type="text" placeholder="请输入试卷名称" v-model="paperName">
                              <button @click="doSearch">查询</button>
                            </span>
                </div>
            </div>
        </div>
        <div class="loading-spinner" v-if="loading"></div>
        <div class="m-sum">总试卷数：<span>{{paginationOption.count}}</span>&nbsp;套</div>

        <div class="data-list-wrapper">
            <table class="data-table">
                <tr class="title">
                    <th class="t-number">序号</th>
                    <th class="t-name">试卷名称</th>
                    <th class="t-state">任务状态</th>
                    <th class="t-time3">操作</th>
                </tr>

                <template v-for="paper in paperList">
                    <tr class="t-body">
                        <td class="t-number">{{paper.number}}</td>
                        <td class="t-name">
                            <template v-if="paper.showName">
                                <router-link  :to="{name:'manage-paper-paperManageDetail',params:{userKey:userKey,paperId:paper.id,paperName:paper.showName}}" target="_blank">{{paper.showName}}</router-link>
                            </template>
                            <template v-else>
                                <router-link :to="{name:'manage-paper-paperManageDetail',params:{userKey:userKey,paperId:paper.id,paperName:paper.fileName}}"  target="_blank">{{paper.fileName}}</router-link>
                            </template>
                        </td>
                        <template v-if="paper.isGet > 0">
                            <td class="t-state b-receive">
                                已领取
                            </td>
                        </template>
                        <template v-else>
                            <td class="t-state">
                                未领取
                            </td>
                        </template>
                        <td class="t-time3" style="color:deepskyblue;cursor:pointer" @click="paperInfo(paper.id)">详情</td>
                    </tr>
                </template>


            </table>
        </div>

        <v-pagination class="myadd-pag" :jumpShow="paginationOption.isShowJump" :pageIndex="paginationOption.currentPage" :total="paginationOption.count" :pageSize="paginationOption.pageSize" @change="pageChange" v-if="paginationOption.count>0"></v-pagination>
    </div>
        <div class="m-layer" style="display: none;">
        <div class="q-detial-dialog">
            <div class="title">详情<span class="icon-close"  @click="closePopoutGet">×</span></div>
            <div class="con-wrapper">
                <div class="detial-box">
                    <template v-if="paperUserInfo">
                        <template v-for="info in paperUserInfo">

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
        <!-- 遮罩 -->
        </div>
    </div>
</template>
<script>
    import "../../static/js/jquery-1.12.2.min.js"

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
                paperName: '',
                curYear:'',
                optionsYears:'',
                subjectValue:'',
                optionsSubject:'',
                curProvince:'',
                optionsProvinces:'',
                curCity:'',
                ajaxAllPaperCitys:'',
                curPaperSource:'',
                ajaxAllSubjectPaperSource:'',
                paperList: [],
                paperUserInfo:[],
                paginationOption: {
                    //分页组件数据
                    pageSize: 15, //每页显示10条数据
                    currentPage: 1, //当前页码
                    count: 0, //总记录数
                    isShowJump:true,  //是否显示跳页
                },
                //loading:false,
                labelShow:false,

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
                    province: that.curProvince,
                    country: that.curCity,
                    year: that.curYear,
                    subjectId: that.subjectValue,
                    source: that.curPaperSource,
                    paperName: that.paperName,
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
            that.provinceList();
            that.yearList();
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
            paperInfo(paperId){
                var that = this
                axios.get('label/manage/getPaperInfo',{params:{paperId:paperId}}).then(function(data){

                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.paperUserInfo = data.data[paperId];
                    }

                })
                $('.m-layer').show();
                $('.q-detial-dialog').show();

            },
            closePopoutGet: function () {
                $('.m-layer').hide();
                $('.q-detial-dialog').hide();
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
            selectPaperSource() {
                var that = this;
                that.curPaperSource = '';
                axios.get('label/common/getPaperSourceAjaxSearch',{params:{subjectId:that.subjectValue,userKey:that.userKey}}).then(function(data){
                    that.$nextTick(function () {
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.ajaxAllSubjectPaperSource = data.data;
                        }
                    });
                })
            },
            provinceList(){
                var that = this;
                axios.get('label/common/getProvince',{params:{userKey:that.userKey}}).then(function(data){

                    that.optionsProvinces = data.data;
                })
            },
            selectPaperCitys() {
                var that = this;
                that.curCity = '';
                axios.get('label/common/getPaperCitysAjaxSearch',{params:{provinceId:that.curProvince,userKey:that.userKey}}).then(function(data){
                    that.$nextTick(function () {
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.ajaxAllPaperCitys = data.data;
                        }
                    });
                })
            },
            yearList(){
                var that = this;
                axios.get('label/common/getYear',{params:{userKey:that.userKey}}).then(function(data){
                    that.optionsYears = data.data;
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
                axios.get('label/manage/paper',{params:searchArgs}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.$nextTick(function () {
                            //that.loading=false;
                            that.paperList = data.data.rows;
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

<style scoped src="../../static/css/paperManage.css"></style>
<style  src="../../static/js/datetimepicker/jquery.datetimepicker.min.css"></style>

