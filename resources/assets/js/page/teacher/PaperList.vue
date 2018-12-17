<template>
    <div>
        <v-breadcrumb></v-breadcrumb>
        <div class="m-main" v-if="errorShow">
            <div class="paper-count-wrapper">
                <div class="paper-count">
                    <span>剩余 <i class="paper-remain-count">{{questionOption.questionNoFinishCount}}</i> 套，</span>
                    <span>累计完成 <i class="paper-complete-count">{{questionOption.questionFinishCount}}</i> 套</span>
                </div>
            </div>
            <div class="grades-select-wrapper">
                <div class="m-sele">
                    <p class="m-label">学科:</p>
                    <p class="grades-select">
                        <label class="radio-inline__label" v-for="(subject,index) in subjectList"
                               :class="{active:index==subjectIndex}" @click="subjectCheck(index)">
                            <input class="radio-inline__input" type="radio" name="accessible" :value="subject.subjectId"/>
                            <label>{{subject.subjectName}}</label>
                        </label>
                    </p>
                </div>
                <div class="m-sele">
                    <p class="m-label">状态:</p>
                    <p class="grades-select">
                        <label class="radio-inline__label" v-for="(status,index) in statusList"
                               :class="{active:index==finishIndex}"><input class="radio-inline__input" type="radio"
                                                                           name="is_finish" value=""
                                                                           @click="statusCheck(index)">
                            {{status.name}}</label>
                    </p>
                </div>
            </div>
            <div class="m-paper-list">
                <p class="m-paper-amount"><span>共</span><span>{{paginationOption.count}}</span><span>套题</span></p>
                <div class="paper-box" v-for="paper in paperList">
                    <p class="icon-image"><img src="../../static/images/paper-no.png"></p>
                    <div class="m-paper-detail">
                        <p class="paper-title">
                            <a href="javascript:void (0);" @click="handlePaperDetail(paper.task_id,paper.subject_id)">{{paper.file_name}}</a>
                        </p>
                        <p class="m-paper-desc">
                            <span class="info">年份：<i class="info-data">{{paper.year}}</i></span>
                            <span class="info">年级：<i class="info-data">{{paper.grades}}</i></span>
                            <span class="info">来源：<i class="info-data">{{paper.source}}</i></span>
                            <span class="info">地区：<i class="info-data">{{paper.province}}</i></span>
                            <span class="info">学科：<i class="info-data">{{paper.subject_name}}</i></span>
                            <span class="info">领取日期：<i class="info-data">{{paper.create_time}}</i></span>
                            <span class="info">状态：<i class="info-data red" v-if="paper.is_finish == 0">未完成</i><i
                                    class="info-data red" v-else>已完成</i></span>
                        </p>
                    </div>
                </div>
            </div>
            <v-pagination class="myadd-pag" :jumpShow="paginationOption.isShowJump"
                          :pageIndex="paginationOption.currentPage" :total="paginationOption.count"
                          :pageSize="paginationOption.pageSize" @change="pageChange" v-if="paperList.length>0"></v-pagination>
        </div>
        <!--没有领取任务-->
        <div class="m-no-main" v-else>
            <div class="m-no-icon">
                <img src="../../static/images/no-task-icon.png" alt="无任务" width="204" height="181">
            </div>
            <div class="m-no-txt">
                <p class="line1">矮油，没有领取任务</p>
                <p class="line2">快去领取任务吧...</p>
                <router-link :to="{name:'tasks-task',params:{userKey:userKey}}">领取任务</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import "../../static/js/icheck/icheck.min.js"
    import Breadcrumb from '../../components/Breadcrumb'
    import Pagination from '../../components/Pagination'
    import {mapGetters} from 'vuex'
    export default {
        components: {
            'v-pagination': Pagination,
            'v-breadcrumb':Breadcrumb
        },
        data() {
            return {
                errorShow:false,
                finishIndex: 0,
                statusId: 0,
                statusList: [
                    {id: 0, name: '未完成'},
                    {id: 1, name: '已完成'}
                ],
                subjectIndex: -1,
                subjectId: 0,
                paperList: [],
                questionOption: {
                    questionFinishCount: 0,
                    questionNoFinishCount: 0
                },
                paginationOption: {
                    //分页组件数据
                    pageSize: 10, //每页显示10条数据
                    currentPage: 1, //当前页码
                    count: 0, //总记录数
                    isShowJump: true,  //是否显示跳页
                }
            }
        },
        methods: {
            handlePaperDetail(paperId,subjectId){
                let that=this;
                that.$router.push({
                    name:'tasks-paperList-paperDetail',
                    params:{
                        userKey:that.userKey,
                        paperId:paperId,
                        subjectId:subjectId
                    }
                })
            },
            //从page组件传递过来的当前page
            pageChange(page) {
                this.paginationOption.currentPage = page;
                this.getPaperList();  //查询数据
            },
            getPaperCount() {
                let that = this;
                axios.get('/label/question/getPaperCount', {
                    params: {
                        userKey: that.userKey
                    }
                }).then(res => {
                    that.questionOption.questionFinishCount = res.data.data.questionFinishCount;
                    that.questionOption.questionNoFinishCount = res.data.data.questionNoFinishCount;
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            getPaperList() {
                let that = this;
                axios.get('label/question/getPaperList', {
                    params: {
                        userKey: that.userKey,
                        subjectId: that.subjectId,
                        is_finish: that.statusId,
                        currentPage: that.paginationOption.currentPage,
                        pageSize: that.paginationOption.pageSize
                    }
                }).then(res => {
                    that.paperList = res.data.data.data;
                    that.paginationOption.count = res.data.data.total;
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            getPaper() {
                let that = this;
                axios.get('/label/question/getPaper', {
                    params: {
                        userKey: that.userKey
                    }
                }).then(res => {
                    if(Object.keys(res.data.data).length>0){
                        that.errorShow=true;
                        that.getPaperList();                //获取套卷列表
                    }
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            //选中学科
            subjectCheck(index) {
                let that = this;
                that.subjectIndex = index;
                that.subjectId = that.subjectList[index].subjectId;
                that.getPaperList();
            },
            //选中状态
            statusCheck(index) {
                let that = this;
                that.finishIndex = index;
                that.statusId = that.statusList[index].id;
                that.getPaperList();
            }
        },
        mounted() {
            let that = this;
            that.getPaperCount();
            that.getPaper();
        },
        computed: {
            ...mapGetters({
                userKey: 'getUserKey',
                subjectList:'getSubject'
            })
        }
    }
</script>
<style scoped src="../../static/css/teacherPapersList.css"></style>
<style scoped src="../../static/css/noTask.css"></style>
<style  src="../../static/js/icheck/skins/minimal/minimal.css"></style>