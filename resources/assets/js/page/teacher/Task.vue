<template>
    <div>
        <v-breadcrumb></v-breadcrumb>
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
                    <p class="m-title">套卷</p>
                    <ul class="label-list">
                        <li>
                            <label class="label" :class="{checked:index==paperIndex}" v-for="(paper,index) in paperList" @click="paperCheck(index)">{{paper.name}}</label>
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

            <button class="btn-get-task" @click="showTask" v-if="subjectIndex>=0 && (paperIndex>=0 || questionIndex>=0)">领取任务</button>
            <button class="inactive" v-else>领取任务</button>
            <!-- inactive -->
        </div>
        <!-- 遮罩 -->
        <div class="m-layer"  v-if="taskIsShow">
            <div class="mask-ok">
                <div class="mask-title">领取任务<span class="icon-close" @click="closeTask">×</span></div>
                <div class="mask-con">
                    <p class="mask-q">套卷：<span>{{paperCount}}</span> 套，单题：<span>{{questionCount}}</span>道，确认领取吗？</p>
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
                    <p class="mask-q">领取任务，任务不足</p>
                </div>
            </div>
        </div>
        <!-- 领取成功 -->
        <div class="status-success" v-if="successShow">领取成功</div>
        <!-- 退回成功 -->
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
                    <div>
                        <div>
                            <input class="magic-checkbox" type="checkbox" id="check1"  v-model="taskCheck" value="question">
                            <label class="mask-return-s"  for="check1">{{subjectCheckName}}</label>单题：剩余
                            <label class="mask-return-s-count">{{taskQuestionCount}}</label> 道
                        </div>
                        <div class="s-padding"></div>
                        <div>
                            <input class="magic-checkbox" type="checkbox" id="check2" v-model="taskCheck" value="paper">
                            <label class="mask-return-s" for="check2">{{subjectCheckName}}</label>套卷：剩余
                            <label class="mask-return-s-count">{{taskPaperCount}}</label> 套
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
    import Breadcrumb from '../../components/Breadcrumb'
    import {mapGetters} from 'vuex'
    export default{
        components:{
            'v-breadcrumb':Breadcrumb
        },
        data(){
            return {
                refundTaskIsShow:false,
                successRefundShow:false,
                taskIsShow:false,
                isDisable:false,
                successShow:false,
                errorIsShow:false,
                loading:false,
                taskCheck:[],
                subjectIndex:-1,
                paperIndex:-1,
                questionIndex:-1,
                subjectCheckId:0,
                subjectCheckName:'',
                paperCount:0,
                questionCount:0,
                taskPaperCount:0,
                taskQuestionCount:0,
                refundSubjectIndex:0,
                paperList:[
                    {id:10,name:'10套'},
                    {id:30,name:'30套'},
                    {id:50,name:'50套'},
                ],
                questionList:[
                    {id:100,name:'100道'},
                    {id:300,name:'300道'},
                    {id:500,name:'500道'}
                ]
            }
        },
        methods:{
            //显示退回任务弹出窗
            showRefundTask(){
                let that=this;
                that.subjectCheckId=that.subjectList[that.refundSubjectIndex].subjectId;          //显示页面给选中科目赋值
                that.subjectCheckName=that.subjectList[that.refundSubjectIndex].subjectName;      //显示选中科目名称
                that.getRefundCount();                                                          //获取可退回任务数
            },
            //获取可退回任务数
            getRefundCount(){
                let that=this;
                //获取退回
                axios.get("label/task/getReturnCountByUserKey",{
                    params:{
                        subjectId:that.subjectCheckId,
                        userKey:that.userKey
                    }
                }).then(res=>{
                    that.taskPaperCount=res.data.paperCount;
                    that.taskQuestionCount=res.data.questionCount;
                    that.refundTaskIsShow=true;
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            //关闭可退回任务弹出窗
            closeRefundTask(){
                let that=this;
                that.taskQuestionCount=0;
                that.taskPaperCount=0;
                that.refundTaskIsShow=false;
            },
            //领取任务弹出窗
            addTask(){
                let that=this;
                that.isDisable=true;
                //发送请求
                axios.post("label/task/addTask",this.$qs.stringify({
                    subjectId:that.subjectCheckId,
                    subjectName:that.subjectCheckName,
                    paperCount:that.paperCount,
                    questionCount:that.questionCount,
                    userKey:that.userKey
                })).then(res=>{
                    that.isDisable = false
                    if(res.data.status == 0)
                    {
                        that.$message.error(res.data.errorMsg);return false;
                    }else{
                        that.taskIsShow=false;
                        that.successShow=true;
                        setTimeout(function(){
                            that.successShow=false;
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
                axios.get("label/task/getPaperQuestionCount",{
                    params:{
                        subjectId:that.subjectCheckId,
                        paperCount:that.paperCount,
                        questionCount:that.questionCount,
                        userKey:that.userKey
                    }
                }).then(res=>{
                    that.loading=false;
                    if(res.data.status == 0)
                    {
                        that.errorIsShow=true;
                    }else{
                        //判断套卷数和单题数是否不足
                        if(res.data.data.paperCount <= 0 && res.data.data.questionCount<=0)
                        {
                            that.taskIsShow=false;
                            that.errorIsShow=true;
                        }else{
                            that.paperCount=res.data.data.paperCount;
                            that.questionCount=res.data.data.questionCount;
                            that.taskIsShow=true;
                        }
                    }
                }).catch(function (error) {
                    that.loading=false;
                    that.$message.error(error.message);
                });
            },
            //关闭领取任务弹出窗
            closeTask(){
                let that=this;
                that.taskIsShow=false;
                that.errorIsShow=false;
            },
            //选中科目
            subjectCheck(index){
                let that= this;
                //判断是否选中
                if(that.subjectIndex == index)
                {
                    that.subjectIndex=-1;
                    that.subjectCheckId=0;
                    that.subjectCheckName='';
                }else{
                    that.subjectIndex=index;
                    that.subjectCheckId=that.subjectList[index].subjectId;
                    that.subjectCheckName=that.subjectList[index].subjectName;
                }
            },
            //选中套卷
            paperCheck(index){
                let that=this;
                if(that.paperIndex == index)
                {
                    that.paperIndex=-1;
                    that.paperCount=0;
                }else{
                    that.paperIndex=index;
                    that.paperCount=that.paperList[index].id;
                }
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
            //选中可退回任务
            refundSubjectCheck(index){
                let that= this;
                that.refundSubjectIndex=index;
                that.subjectCheckId=that.subjectList[index].subjectId;          //选中学科id
                that.subjectCheckName=that.subjectList[index].subjectName;      //选中学科名
                that.getRefundCount();                                          //获取可退回任务数
            },
            //删除已领取的任务
            removeTask(){
                let that=this;
                that.isDisable=true;
                //判断是否选中
                if(Object.keys(that.taskCheck).length <= 0)
                {
                    alert('请选择要退回的任务类型');return false;
                }
                axios.post("label/task/removeTask",
                    this.$qs.stringify({
                        userKey:that.userKey,
                        subjectId:that.subjectCheckId,
                        taskCheck:that.taskCheck
                    }
                )).then(res=>{
                    that.isDisable=false;
                    if(res.data.status == 0)
                    {
                        that.$message.error(res.data.errorMsg);return false;
                    }else
                    {
                        that.refundTaskIsShow=false;
                        that.taskCheck=[];
                        that.successRefundShow=true;
                        setTimeout(function(){
                            that.successRefundShow=false;
                        },1000);
                    }
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            }
        },
        computed:{
            ...mapGetters({
                userKey:'getUserKey',
                subjectList:'getSubject'
            })
        },
    }
</script>
<style scoped src="../../static/css/getTasks.css"></style>
