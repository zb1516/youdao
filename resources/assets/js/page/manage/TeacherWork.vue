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
                    <div class="col-md-4 search-condition">
                            <span class="s-sele">
                              <button @click="doSearch">查询</button>
                              <button class="downBtn" @click="doExport">导出Excel</button>
                            </span>
                    </div>
                </div>
            </div>
            <div class="loading-spinner" v-if="loading"></div>
            <div class="data-list-wrapper">
                <table class="data-table">
                    <tr class="title">
                        <th class="t-number">教师ID/工号</th>
                        <th class="t-name">教师</th>
                        <th class="t-state">教师已贴题目总数</th>
                        <th class="t-person1">当前剩余任务数</th>
                        <th class="t-person1">通过率</th>
                        <th class="t-person1">操作</th>
                    </tr>
                    <template v-for="teacher in teacherList">
                        <tr class="t-body">
                            <td class="b-state">{{teacher.id}}</td>
                            <td class="b-state">{{teacher.userRealname}}</td>
                            <td class="b-state">{{teacher.teacherNum}}</td>
                            <td class="b-person1">{{teacher.surplusNum}}</td>
                            <td class="b-person1">{{teacher.passNum}}/{{teacher.twoTagNum}}&nbsp;&nbsp;&nbsp;&nbsp;{{teacher.ratePassing}}</td>
                            <td class="t-time3" style="color:deepskyblue;cursor:pointer" @click="teacherTask(teacher.userkey)">清空任务</td>
                        </tr>
                    </template>
                </table>
            </div>

            <v-pagination class="myadd-pag" :jumpShow="paginationOption.isShowJump" :pageIndex="paginationOption.currentPage" :total="paginationOption.count" :pageSize="paginationOption.pageSize" @change="pageChange" v-if="paginationOption.count>0"></v-pagination>
        </div>
        <div class="m-layer" style="display: none;">
        <div class="q-detial-dialog-ops">
            <div class="title">清空任务<span class="icon-close" @click="closePopout">×</span></div>
            <div class="con-wrapper">
                <div class="detial-box">
                    <p class="list">
                        <span>建议您先与该教师沟通再执行，确定清空任务吗？</span>
                    </p>
                    <div class="btns">
                        <button class="downBtn js-cle" @click="closePopout">取消</button>
                        <button class="js-ok"  @click="sureTeacherTask">确定</button>
                    </div>
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
                teacherList: [],
                paginationOption: {
                    //分页组件数据
                    pageSize: 15, //每页显示10条数据
                    currentPage: 1, //当前页码
                    count: 0, //总记录数
                    isShowJump:true,  //是否显示跳页
                },
                //loading:false,
                _teacherUserKey:''
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
                axios.get('label/manage/teacherWork',{params:searchArgs}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.$nextTick(function () {
                            //that.loading=false;
                            that.teacherList = data.data.rows;
                            if(data.data.total){
                                that.paginationOption.count=data.data.total
                            }else{
                                that.paginationOption.count = 0;
                            }
                        });
                    }

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
            doExport: function () {
                var that = this;
                var judgeExportUrl = '/label/manage/teacherExport?userKey'+that.userKey;
                var searchArgs = $.extend(true, {}, that.searchArgs);
                if (confirm('确定要导出Excel吗?')) {
                    location.href =
                        judgeExportUrl +
                        '&beginDate=' + searchArgs.beginDate +
                        '&endDate=' + searchArgs.endDate;
                }
            },
            teacherTask(teacherUserKey){
                var that = this
                that._teacherUserKey = teacherUserKey;
                $('.m-layer').show();
                $('.q-detial-dialog-ops').show();
            },
            closePopout: function () {
                $('.m-layer').hide();
                $('.q-detial-dialog-ops').hide();
            },
            sureTeacherTask: function () {
                var that = this;
                axios.post('label/manage/teacherEmptyingTask',{teacherUserKey:that._teacherUserKey}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    }
                    if (data.data.result == true) {
                        that.$message({
                            message: '清空任务成功',
                            type: 'success'
                        });
                        that.pageChange(that.paginationOption.currentPage);
                    }
                });
                $('.m-layer').hide();
                $('.q-detial-dialog-ops').hide();
            },
        },

    }
</script>
<style scoped src="../../static/css/teacher.css"></style>
<style  src="../../static/js/datetimepicker/jquery.datetimepicker.min.css"></style>