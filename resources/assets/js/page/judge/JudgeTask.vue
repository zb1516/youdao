<template>
    <div>
        <div class="m-main">
            <div class="m-wrapper">
                <div class="m-subject">
                    <div class="title-box">
                        <span class="m-title fl">学科</span>
                        <a class="return-task fr" href="javascript:;" @click="showRefundTask()">退回任务</a>
                    </div>
                    <ul class="label-list">
                        <li>
                            <label class="label" :class="{checked:index==subjectIndex}" v-for="(subject,index) in subjectList"  @click="subjectCheck(index)">{{subject.subjectName}}</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="m-wrapper">
                <div class="m-cateory">
                    <p class="m-title">单题</p>
                    <ul class="label-list">
                        <li>
                            <label class="label" :class="{checked:index==questionIndex}" v-for="(question,index) in questionList" @click="questionCheck(index)">{{question.name}}</label>
                        </li>
                    </ul>
                </div>
            </div>
            <button class="btn-get-task" @click="showTask()" v-if="subjectIndex>=0 && questionIndex>=0">领取任务</button>
            <button class="inactive" v-else>领取任务</button>
            <!-- inactive -->
        </div>
        <!-- 遮罩 -->
        <div class="m-layer"  v-if="taskIsShow">
            <div class="mask-ok">
                <div class="mask-title">领取任务<span class="icon-close" @click="closeTask">×</span></div>
                <div class="mask-con">
                    <p class="mask-q">待判定试题：<span>{{questionShowCount}}</span>道，确认领取吗？</p>
                    <div class="btn-group">
                        <button class="btn cancel" @click="closeTask">取消</button>
                        <button class="btn confirm receive-href" @click="addTask" :disabled="isDisable">确认</button>
                    </div>
                </div>
            </div>
        </div>
        <!--不能领取弹窗-->
        <div class="m-layer"  v-if="errorIsShow">
            <div class="mask-ok">
                <div class="mask-title">领取任务<span class="icon-close" @click="closeTask">×</span></div>
                <div class="mask-con">
                    <p class="mask-q">剩余待判定试题有0道，无法领取!</p>
                </div>
            </div>
        </div>
        <!-- 领取成功 -->
        <div class="status-success" v-if="successIsShow">领取成功</div>
        <div class="status-success" v-if="successRefundShow">操作成功</div>
        <!-- loading -->
        <div class="loading-spinner" v-if="loading"></div>
        <!-- 退回任务 -->
        <div class="m-layer"  v-if="refundTaskIsShow">
            <div class="mask-return">
                <div class="makk-return-title">退回任务
                    <span class="icon-close"  @click="closeRefundTask()">×</span>
                </div>
                <div class="mask-return-subject-wrapper">
                    <div class="mask-return-subject">
                        <p class="grades-select">
                            <span class="radio-inline__label" v-for="(subject,index) in subjectList" :class="{active:index==refundSubjectIndex}" @click="refundSubjectCheck(index)">
                                <input  class="radio-inline__input" type="radio" name="accessible"  :value="subject.subjectId" />
                                <label>{{subject.subjectName}}</label>
                            </span>
                        </p>
                    </div>
                </div>
                <div class="mask-return-con">
                    <div id="check_css3">
                        <div>
                            <input class="magic-checkbox" id="check1" type="checkbox" v-model="taskCheck" value="question">
                            <label class="mask-return-s" for="check1">{{subjectName}}</label>剩余
                            <label class="mask-return-s-count">{{taskQuestionCount}}</label> 道
                        </div>
                        <div class="s-padding"></div>
                    </div>
                    <div class="mask-return-btn-group">
                        <button class="btn mask-return-cancel" @click="closeRefundTask()">取消</button>
                        <button class="btn mask-return-confirm" @click="removeTask()" :disabled="isDisable">确认</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                loading:false,
                successRefundShow:false,
                refundTaskIsShow:false,
                taskIsShow:false,
                isDisable:false,
                successIsShow:false,
                errorIsShow:false,
                subjectIndex: -1,
                questionIndex: -1,
                subjectId:0,
                subjectName:'',
                questionCount:0,
                questionShowCount:0,
                taskQuestionCount:0,
                refundSubjectIndex:0,
                taskCheck:[],
                questionList: [
                    {id: 100, name: '100道'},
                    {id: 300, name: '300道'},
                    {id: 500, name: '500道'}
                ]
            }
        },
        methods:{
            //显示退回任务弹出窗
            showRefundTask(){
                let that=this;
                that.subjectId=that.subjectList[that.refundSubjectIndex].subjectId;          //显示页面给选中科目赋值
                that.subjectName=that.subjectList[that.refundSubjectIndex].subjectName;          //显示页面给选中科目赋值
                that.getRefundCount();                                                          //获取可退回任务数
            },
            //获取可退回任务数
            getRefundCount(){
                let that=this;
                //获取退回
                axios.get("label/task/getJudgeQuesReturnCount",{
                    params:{
                        subjectId:that.subjectId,
                        userKey:that.userKey
                    }
                }).then(res=>{
                    that.taskQuestionCount=res.data.data.questionCount;
                    that.refundTaskIsShow=true;
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            //关闭可退回任务弹出窗
            closeRefundTask(){
                this.taskQuestionCount=0;
                this.refundTaskIsShow=false;
                this.taskCheck=[];
            },
            //选中可退回任务
            refundSubjectCheck(index){
                let that= this;
                that.refundSubjectIndex=index;
                that.subjectId=that.subjectList[index].subjectId;          //选中学科id
                that.subjectName=that.subjectList[index].subjectName;      //选中学科名
                that.getRefundCount();                                     //获取可退回任务数
            },
            //选中单题
            questionCheck(index){
                let that=this;
                if(that.questionIndex== index)
                {
                    that.questionIndex=-1;
                    that.questionCount=0;
                }else{
                    that.questionIndex=index;
                    that.questionCount=that.questionList[index].id;
                }
            },
            //选中科目
            subjectCheck(index){
                let that= this;
                //判断是否选中
                if(that.subjectIndex == index)
                {
                    that.subjectIndex=-1;
                    that.subjectId=0;
                }else{
                    that.subjectIndex=index;
                    that.subjectId=that.subjectList[index].subjectId;
                }
            },
            //关闭领取任务弹出窗
            closeTask(){
                let that=this;
                that.taskIsShow=false;
                that.errorIsShow=false;
            },
            //领取任务弹出窗
            addTask(){
                let that=this,questionNums;
                that.isDisable=true;
                //发送请求
                axios.post("label/task/addJudgeQuestion",this.$qs.stringify({
                    subjectId:that.subjectId,
                    questionCount:that.questionCount,
                    userKey:that.userKey
                })).then(res=>{
                    that.isDisable=false;
                    if(res.data.status == 0)
                    {
                        that.$message.error(res.data.errorMsg);return false;
                    }else{
                        that.taskIsShow=false;
                        that.successIsShow=true;
                        setTimeout(function(){
                            that.successIsShow=false;
                        },3000)
                    }
                }).catch(function (error) {
                    that.$message.error(error.message);
                });

            },
            //显示领取任务弹出窗
            showTask(){
                let that=this;
                that.loading=true;
                //获取剩余套卷数
                axios.get("/label/task/getJudgeQuestionCount",{
                    params:{
                        subjectId:that.subjectId,
                        userKey:that.userKey
                    }
                }).then(res=>{
                    that.loading=false;
                    if(res.data.status == 0)
                    {
                        that.errorIsShow=true;
                    }else{
                        if(res.data.data.questionCount <= 0)
                        {
                            that.questionCount=0;
                            that.errorIsShow=true;
                        }else{
                            that.questionShowCount=res.data.data.questionCount;
                            that.taskIsShow=true;
                        }
                    }
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            //删除已领取的任务
            removeTask(){
                let that=this;
                that.isDisable=true;
                if(Object.keys(that.taskCheck).length <= 0)
                {
                    that.$message.error('请选择要退回的任务类型');return false;
                }
                axios.post("label/task/removeJudgeQuestion",
                    this.$qs.stringify({
                            userKey:that.userKey,
                            subjectId:that.subjectId
                        }
                    )).then(res=>{
                    that.isDisable=false;
                    if(res.data.status == 0)
                    {
                        that.$message.error(res.data.errorMsg);return false;
                    }else
                    {
                        that.refundTaskIsShow=false;
                        that.successRefundShow=true;
                        setTimeout(function(){
                            that.successRefundShow=false;
                            that.taskCheck=[];
                        },1000);
                    }
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            }
        },
        computed: {
            ...mapGetters({
                userKey: 'getUserKey',
                subjectList:'getSubject'
            })
        }
    }
</script>
<style scoped src="../../static/css/getTasks.css"></style>
