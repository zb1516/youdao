<template>
    <div v-if="errorShow">
        <div class="m-main">
            <div class="paper-detail" style="margin: 0px 0px 10px 0px;">
                <p class="grades-select">
                    <label class="radio-inline__label math" v-for="(subject,index) in subjectList"
                           :class="{active:index==subjectIndex}" @click="subjectCheck(index)">
                        <input class="radio-inline__input" type="radio" name="accessible" :value="subject.subjectId"/>
                        <label>{{subject.subjectName}}</label>
                    </label>
                </p>
                <div class="paper-content" v-if="questionShow">
                    <p class="q-title" v-html="question.ques_content"></p>
                    <span class="hide-answer" :id="'questionShow_'+ question.ques_id"
                          @click="showAnswer(question.ques_id)">显示答案</span>
                    <div class="paper-answer">
                        <p class="answer">答案：<span class="answer1" v-html="question.ques_answer"></span></p>
                        <p class="answer">解析：<span class="answer2" v-html="question.ques_analysis"></span></p>
                    </div>
                    <p class="paper-id">题目ID：<span>{{question.ques_id}}</span>
                        <span class="paper-label teacher" v-if="labelShow"><i class="z-label" v-for="label in labelList">{{label.tag_content}}</i></span></p>
                </div>
                <div v-else>
                    该学科下暂无任务
                </div>
            </div>
            <v-question-options :subjectId="subjectId" :userKey="userKey"  @boundSpace="boundSpace" @unBoundSpace="unboundSpace"  :questionNoFinishCount="questionOption.questionNoFinishCount" :questionFinishCount="questionOption.questionFinishCount" ref="questionType"></v-question-options>
        </div>
        <div class="paper-btn" style="width:1200px; margin:30px auto; padding:0 !important;">
            <div style="width:722px; padding:0 39px">
                <button class="btn paper-error" @click="errorReport">报错</button>
                <button class="btn paper-slip" @click="jumpQuestion">跳过</button>
                <button class="btn paper-save" id="paperSave" @click="questionSave" :disabled="isDisable">保存</button>
                <!-- 新手指引 -->
                <div class="m-layer"  v-if="guideIsShow">
                    <div class="guide-cover">
                        <div class="btn-know" @click="addRemind" :disabled="guideIsDisable">知道了</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 领取成功 -->
        <div class="status-success" v-if="successShow">保存成功</div>
        <v-question-error :errorShow="questionErrorShow" v-on:errorClose="errorClose" :questionId="questionId"></v-question-error>
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
</template>
<script>
    import "../../static/js/ztree/js/jquery.ztree.core.min.js"
    import "../../static/js/icheck/icheck.min.js"
    import QuestionOptions from '../../components/QuestionOptions'
    import QuestionError from '../../components/QuestionError'
    import {mapGetters} from 'vuex'
    export default {
        components: {
            'v-question-options': QuestionOptions,
            'v-question-error': QuestionError
        },
        data() {
            return {
                errorShow:false,
                successShow:false,
                questionErrorShow: false,
                guideIsShow:false,
                guideIsDisable:false,
                isDisable:false,
                subjectIndex:0,
                subjectId: 0,
                question: {},
                questionId: 0,
                labelList:[],
                questionOption: {
                    questionNoFinishCount: 0,
                    questionFinishCount: 0
                }
            }
        },
        methods: {
            subjectCheck(index) {
                let that = this;
                that.subjectIndex = index;
                that.subjectId = that.subjectList[index].subjectId;
                that.getQuestionInfo();
                that.$refs.questionType.getQuestionType(that.subjectId);    //调用子组件方法
                that.$refs.questionType.getKnowledge(that.subjectId);       //调用子组件方法
            },
            getQuestionInfo() {
                let that = this;
                axios.get("/label/question/getQuestionInfo", {
                    params: {
                        userKey: that.userKey,
                        subjectId:that.subjectId
                    }
                }).then(res => {
                    that.question = res.data.data;
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            //获取是否有领取单题
            getQuestion() {
                let that = this;
                axios.get('/label/question/getQuestion', {
                    params: {
                        userKey: that.userKey
                    }
                }).then(res => {
                    if(Object.keys(res.data.data).length>0){
                        that.errorShow=true;
                        that.getQuestionInfo();                //获取套卷列表
                    }else{
                        that.errorShow=false;
                    }
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            showAnswer(qid) {
                $('#questionShow_' + qid).next(".paper-answer").css('display') == 'block' ? $('#questionShow_' + qid).next(".paper-answer").hide() : $('#questionShow_' + qid).next(".paper-answer").show();
                $('#questionShow_' + qid).next(".paper-answer").css('display') == 'block' ? $('#questionShow_' + qid).html('隐藏答案') : $('#questionShow_' + qid).html('显示答案');
            },
            errorReport() {
                let that = this;
                that.questionId = Object.keys(that.question).length<=0 ? 0 : that.question.ques_id;
                that.questionErrorShow = true;
                that.unboundSpace();
            },
            errorClose() {
                let that = this;
                that.questionErrorShow = false;
                that.boundSpace;
            },
            //跳过
            jumpQuestion() {
                let that = this;
                if (that.question == null) {
                    that.$message.error('抱歉，没有下一道了！');
                    return false;
                }
                axios.get('/label/question/jumpQuestion', {
                    params: {
                        userKey: that.userKey,
                        subjectId: that.subjectId,
                        questionId: that.question.ques_id
                    }
                }).then(res => {
                    if (res.status == 0) {
                        that.$message.error(res.errorMsg);
                        return false;
                    }
                    if (res.data.data == null) {
                        that.$message.error('抱歉，没有下一道了！');
                        return false;
                    }
                    that.question = res.data.data;
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            questionSave(){
                let that=this;
                if(that.question.ques_id <=0 ){
                    that.$message.error('缺少试题id');return false;
                }
                if(that.$refs.questionType.nodeModel== null){
                    that.$message.error('请选择知识点');return false;
                }
                if(that.$refs.questionType.gradeId <=0 ){
                    that.$message.error('请选择年级');return false;
                }
                if(that.$refs.questionType.difficultyId <=0 ){
                    that.$message.error('请选择难度');return false;
                }
                if(that.$refs.questionType.typeId<=0 ){
                    that.$message.error('请选择类型');return false;
                }
                if(that.$refs.questionType.questionTypeId <=0 ){
                    that.$message.error('请选择题型');return false;
                }
                if(that.subjectId==60 && that.$refs.questionType.questionCategoryId<=0 ){
                    that.$message.error('请选择题类');return false;
                }
                that.isDisable=true;
                let obj=that.$qs.stringify({
                    questionId:that.question.ques_id,
                    paperId:that.question.paper_id,
                    subjectId:that.subjectId,
                    userKey:that.userKey,
                    userType:'teacher',
                    questionType:'question',
                    knowledgeId:that.$refs.questionType.nodeModel.id,                       //知识点id
                    knowledgeName:that.$refs.questionType.nodeModel.title,                   //知识点名称
                    gradeId:that.$refs.questionType.gradeId,                                //年级id
                    difficultyId:that.$refs.questionType.difficultyId,                      //难度id
                    typeId:that.$refs.questionType.typeId,                                  //类型id
                    questionTypeId:that.$refs.questionType.questionTypeId,                  //题型id
                    questionCategoryId:that.$refs.questionType.questionCategoryId,          //题类id
                    gradeName:that.$refs.questionType.gradeName,                            //年级名称
                    difficultyName:that.$refs.questionType.difficultyName,                  //难度名称
                    type:that.$refs.questionType.type,                                      //类型名称
                    questionTypeName:that.$refs.questionType.questionTypeName,              //题型名称
                    questionCategoryName:that.$refs.questionType.questionCategoryName       //题类名称
                });
                axios.post("/label/question/questionSave",obj).then(res=>{
                    that.isDisable = false
                    if(res.data.status == 0)
                    {
                        that.$message.error(res.data.errorMsg);return false;
                    }else{
                        that.labelList=res.data.data;
                        that.successShow=true;
                        setTimeout(function(){
                            that.successShow=false;
                            that.labelList=[];                  //清空标签数组
                            that.jumpQuestion();                 //获取试题列表
                            that.getQuestionCount();            //调用获取试题统计
                        },1000);
                    }
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            getQuestionCount() {
                let that = this;
                axios.get('/label/question/getQuestionCount', {
                    params: {
                        userKey: that.userKey
                    }
                }).then(res => {
                    that.questionOption.questionNoFinishCount = res.data.data.questionNoFinishCount;
                    that.questionOption.questionFinishCount = res.data.data.questionFinishCount;
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            checkIsRemind(){
                let that=this;
                axios.get("/label/question/checkIsRemind",{
                    params:{
                        userKey:that.userKey
                    }
                }).then(res=>{
                    if(res.data.status == 0){
                        that.guideIsShow=true;
                    }
                });
            },
            addRemind(){
                let that=this;
                let obj=that.$qs.stringify({
                    userKey:that.userKey
                });
                that.guideIsDisable=true;
                axios.post('/label/question/addRemind',obj).then(res=>{
                    that.guideIsDisable=false;
                    if(res.data.status == 1){
                        that.guideIsShow=false;
                    }
                });
            },
            init(){
                let that=this;
                axios.get("/label/common/getSubjects",{params:{userKey:that.userKey}}).then(res=>{
                    that.subjectId=res.data[that.subjectIndex].subjectId;
                    that.getQuestion();
                    that.getQuestionCount();
                });
            },
            spacePreventDefault (e) {
                e.preventDefault();
                var key = window.event.keyCode;
                if(key == 32){
                    this.questionSave();
                }
            },
            boundSpace () {
                document.onkeydown = this.spacePreventDefault;
            },
            unboundSpace () {
                document.onkeydown = '';
            },
        },
        computed: {
            questionShow(){
                let that=this;
                return Object.keys(that.question).length>0?true:false;
            },
            labelShow(){
                let that=this;
                return Object.keys(that.labelList).length>0?true:false;
            },
            ...mapGetters({
                userKey: 'getUserKey',
                subjectList:'getSubject'
            })
        },
        mounted() {
            let that = this;
            that.checkIsRemind();
            that.init();
        },
        created(){
            document.onkeydown = this.spacePreventDefault;
        }
    }
</script>
<style scoped src="../../static/css/noTask.css"></style>
<style scoped src="../../static/css/singleQuestion.css"></style>
