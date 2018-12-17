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
                    <div class="col-md-4 search-condition">
                            <span class="s-sele">
                              <input type="text" placeholder="请输入试卷名称" v-model="paperName">
                              <button @click="doSearch">查询</button>
                            </span>
                    </div>
                </div>
            </div>
            <div class="loading-spinner" v-if="loading"></div>
            <div class="m-sum">总试卷数：<span>{{paginationOption.count}}</span>&nbsp;套
                <button type="button" class="downBtn js-sort" @click="taskSort">任务排序</button>
            </div>

            <div class="data-list-wrapper">
                <table class="data-table">
                    <tr class="title">
                        <th class="t-number">
                            <label for="mepage">
                                <input type="checkbox" id="mepage" v-model='checked' @click="checkedAll">全选当前页
                            </label>
                        </th>
                        <!--<th class="t-number">序号</th>-->
                        <th class="t-name">试卷名称</th>
                        <th class="t-state">排序</th>
                        <th class="t-state">优先级</th>

                    </tr>

                    <template v-for="(paper,index) in paperList">
                        <tr class="t-body">
                            <td class="b-number">
                                <input type="checkbox" :id="index" name="" :value="paper.id" v-model='checkboxList'>
                            </td>
                            <!--<td class="t-number">{{paper.number}}</td>-->
                            <td class="t-name">
                                <template v-if="paper.showName">
                                    <router-link  :to="{name:'manage-paper-paperManageDetail',params:{userKey:userKey,paperId:paper.id,paperName:paper.showName}}" target="_blank">{{paper.showName}}</router-link>
                                </template>
                                <template v-else>
                                    <router-link :to="{name:'manage-paper-paperManageDetail',params:{userKey:userKey,paperId:paper.id,paperName:paper.fileName}}"  target="_blank">{{paper.fileName}}</router-link>
                                </template>
                            </td>
                            <td class="t-state">
                                {{paper.isSort}}
                            </td>
                            <td class="t-state">
                                {{paper.isSortValue}}
                            </td>
                        </tr>
                    </template>


                </table>
            </div>

            <v-pagination class="myadd-pag" :jumpShow="paginationOption.isShowJump" :pageIndex="paginationOption.currentPage" :total="paginationOption.count" :pageSize="paginationOption.pageSize" @change="pageChange" v-if="paginationOption.count>0"></v-pagination>
        </div>
        <!-- 排序面板 -->
        <div class="m-layer" style="display: none;">
        <div class="q-detial-dialog-ops">
            <div class="title">任务排序<span class="icon-close" @click="closePopout">×</span></div>
            <div class="con-wrapper">
                <div class="detial-box">
                    <p class="list">
                        <span>优先级：</span>
                        <label for="sort1">
                            <input type="radio" name="mepage" v-model="picked" value="3" id="sort1" checked >高
                        </label>

                        <label for="sort2">
                            <input type="radio" name="mepage" v-model="picked" value="2" id="sort2">中
                        </label>

                        <label for="sort3">
                            <input type="radio" name="mepage" v-model="picked" value="1" id="sort3">低
                        </label>
                    </p>
                    <button class="js-okbtn" @click="sureSort">确定</button>
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
                checkboxList:[],
                checked: false,
                picked:3

            }
        },
        watch:{
            searchArgs:function() {
                var that = this;
                that.paginationOption.currentPage = 1;
            },
            checkboxList: {
                handler: function (val, oldVal) {
                    if (this.checkboxList.length === this.paperList.length) {
                        this.checked=true;
                    } else {
                        this.checked=false;
                    }
                },
                deep: true
            }
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
            checkedAll: function() {
                if (this.checked) {//实现反选
                    this.checkboxList = [];
                } else { //实现全选
                    this.checkboxList = [];
                    this.paperList.forEach( (item) => {
                        this.checkboxList.push(item.id);
                    });
                }
            },
            paperInfo(paperId){
                var that = this
                axios.get('label/manage/getPaperInfo',{params:{paperId:paperId}}).then(function(data){

                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.paperUserInfo = data.data;
                    }

                })

            },

            //从page组件传递过来的当前page
            pageChange(page) {
                this.checked = false;
                this.checkboxList = [];
                this.paginationOption.currentPage = page;
                this.doSearch();  //查询数据
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
            doSearch: function () {
                var that = this;
                var searchArgs = $.extend(true, {}, that.searchArgs);
                searchArgs.currentPage = that.paginationOption.currentPage;
                searchArgs.pageSize = that.paginationOption.pageSize;
                searchArgs.userKey = that.userKey;
                //that.loading=true;
                axios.get('label/manage/taskPaper',{params:searchArgs}).then(function(data){
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
            closePopout: function () {
                $('.m-layer').hide();
                $('.q-detial-dialog-ops').hide();
            },
            sureSort: function () {
                var that = this
                if(that.checkboxList == ''){
                    that.$message.error('请先选择要排序的套卷');
                }
                axios.post('label/manage/taskSort',{paperIds:that.checkboxList,sortValue:that.picked}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    }
                    if (data.data == true) {
                        that.pageChange(1);
                        //that.doSearch();
                    }
                });
                $('.m-layer').hide();
                $('.q-detial-dialog-ops').hide();
            },
            taskSort: function () {
                var that = this
                that.picked = 3;
                $('.m-layer').show();
                $('.q-detial-dialog-ops').show();
            },
        },


    }
</script>
<style scoped src="../../static/css/paperManage.css"></style>
<style  src="../../static/js/datetimepicker/jquery.datetimepicker.min.css"></style>