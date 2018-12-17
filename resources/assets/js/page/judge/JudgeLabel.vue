<template>
    <div v-if="errorShow">
        <div class="m-main">
            <div class="paper-detail">
                <p class="grades-select">
                    <label class="radio-inline__label math" v-for="(subject,index) in subjectList"
                           :class="{active:index==subjectIndex}" @click="subjectCheck(index)">
                        <input class="radio-inline__input" type="radio" name="accessible" :value="subject.subjectId"/>
                        <label>{{subject.subjectName}}</label>
                    </label>
                </p>
                <div class="paper-content" v-if="questionShow">
                    <p class="judge-paper-id">
                        <span>题目ID：</span><i>{{question.ques_id}}</i>
                        <input type="text" class="id-search" placeholder="搜索题目id" v-model="questionId" @focus="keySpace" @blur="keyBindSapce">
                        <span class="search-icon" @click="getJudgeQuestionSearch"></span>
                    </p>
                    <div class="move">
                        <p class="q-title"  v-html="question.ques_content"></p>
                        <span class="hide-answer" :id="'questionShow_'+ question.ques_id" @click="showAnswer(question.ques_id)">显示答案</span>
                        <div class="paper-answer">
                            <p class="answer">答案：
                                <span class="answer1" v-html="question.ques_answer"></span>
                            </p>
                            <p class="answer">解析：
                                <span class="answer2" v-html="question.ques_analysis"></span>
                            </p>
                        </div>
                        <div class="paper-info">
                            <div class="title">{{question.paper_name}}</div>
                            <span class="paper-label teacher" v-for="(label,index) in question.labelData">
                                <a>{{label.user_realname}}：</a>
                                <span class="teacher1-label"><i v-for="options in label.tag_content">{{options}}</i></span>
                              </span>
                        </div>
                        <p class="judge-label-wrapper" v-if="labelShow">
                          <span class="paper-label judge-label">
                            <a>判定人：</a>
                            <span class="j-label"><i class="diffrence z-label" v-for="label in labelList">{{label.tag_content}}</i></span>
                          </span>
                        </p>
                    </div>
                </div>
                <div v-else>
                    该学科下暂无任务
                </div>
            </div>
            <v-question-options :subjectId="getSubjectId" :userKey="userKey" @boundSpace="boundSpace" @unBoundSpace="unboundSpace"  :questionNoFinishCount="questionOption.questionNoFinishCount" :questionFinishCount="questionOption.questionFinishCount" ref="questionType"></v-question-options>
        </div>
        <!-- 领取成功 -->
        <div class="status-success" v-if="successShow">保存成功</div>
        <div class="paper-btn" style="width:1200px; margin:30px auto; padding:0 !important;">
            <div style="width:722px; padding:0 39px">
                <button class="btn paper-error" @click="errorReport">报错</button>
                <button class="btn paper-slip" @click="jumpQuestion">跳过</button>
                <button class="btn paper-save" @click="questionSave">保存</button>
            </div>
        </div>
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
            <router-link :to="{name:'judges-judgeTask',params:{userKey:userKey}}">领取任务</router-link>
        </div>
    </div>
</template>
<script>
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
                errorShow: false,
                questionErrorShow: false,
                successShow:false,
                subjectIndex: 0,
                subjectId: 1,
                questionId:'',
                question:{},
                questionOption: {
                    questionNoFinishCount: 0,
                    questionFinishCount: 0
                },
                labelList:[]
            }
        },
        methods: {
            getJudgeQuestion() {
                let that = this;
                axios.get("/label/question/getJudgeQuestion", {
                    params: {userKey: that.userKey}
                }).then(res => {
                    if (res.data.status == 0) {
                        that.$message.error(res.data.errorMsg);return false;
                    } else {
                        if(Object.keys(res.data.data).length >0){
                            that.errorShow=true;
                            that.getJudgeQuestionInfo();                //获取待判定试题
                        }else{
                            that.errorShow=false;
                        }
                    }
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            getJudgeQuestionInfo(){
                let that=this;
                axios.get("/label/question/getJudgeQuestionInfo",{
                    params:{
                        userKey:that.userKey,
                        subjectId:that.subjectId
                    }
                }).then(res=>{
                    that.question=res.data.data;
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            getJudgeQuestionSearch(){
                let that=this;
                axios.get("/label/question/getJudgeQuestionSearch",{
                    params:{
                        userKey:that.userKey,
                        questionId:that.questionId
                    }
                }).then(res=>{
                    that.question = res.data.data;
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            subjectCheck(index) {
                let that = this;
                that.subjectIndex = index;
                that.subjectId = that.subjectList[index].subjectId;
                that.getJudgeQuestion();
                that.$refs.questionType.getQuestionType(that.subjectId);
                that.$refs.questionType.getKnowledge(that.subjectId);
            },
            errorReport() {
                let that = this;
                that.questionId = that.question == null ? 0 : that.question.ques_id;
                that.questionErrorShow = true;
                that.unboundSpace();
            },
            errorClose() {
                let that = this;
                that.questionErrorShow = false;
                that.boundSpace;
            },
            getJudgeQuestionCount() {
                let that = this;
                axios.get('/label/question/getJudgeQuestionCount', {
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
            //跳过
            jumpQuestion() {
                let that = this;
                if (that.question == null) {
                    that.$message.error('抱歉，没有下一道了！');
                    return false;
                }
                axios.get('/label/question/jumpJudgeQuestion', {
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
                    that.$message.error('请选择试题');return false;
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
                if(that.$refs.questionType.typeId <=0 ){
                    that.$message.error('请选择类型');return false;
                }
                if(that.$refs.questionType.questionTypeId <=0 ){
                    that.$message.error('请选择题型');return false;
                }
                if(that.subjectId == 60 && that.$refs.questionType.questionCategoryId <=0 ){
                    that.$message.error('请选择题类');return false;
                }
                let obj=that.$qs.stringify({
                    questionId:that.question.ques_id,
                    paperId:that.question.paper_id,
                    subjectId:that.subjectId,
                    userKey:that.userKey,
                    userType:'judge',
                    questionType:'question',
                    gradeId:that.$refs.questionType.gradeId,                                //年级
                    difficultyId:that.$refs.questionType.difficultyId,                      //难度
                    knowledgeId:that.$refs.questionType.nodeModel.id,                       //知识点id
                    knowledgeName:that.$refs.questionType.nodeModel.title,                   //知识点名称
                    typeId:that.$refs.questionType.typeId,                                  //类型
                    questionTypeId:that.$refs.questionType.questionTypeId,                  //题型
                    getQuestionCategoryId:that.$refs.questionType.questionCategoryId,       //题类
                    gradeName:that.$refs.questionType.gradeName,                            //年级
                    difficultyName:that.$refs.questionType.difficultyName,                  //难度
                    type:that.$refs.questionType.type,                                      //类型
                    questionTypeName:that.$refs.questionType.questionTypeName,              //题型
                    questionCategoryName:that.$refs.questionType.questionCategoryName       //题类
                });
                axios.post("/label/question/questionSave",obj).then(res=>{
                    if(res.data.status == 0)
                    {
                        alert(res.data.errorMsg);return false;
                    }else{
                        that.labelList=res.data.data;
                        that.successShow=true;
                        setTimeout(function(){
                            that.successShow=false;
                            that.labelList=[];                  //清空标签数组
                            that.jumpQuestion();                 //获取试题列表
                            that.getJudgeQuestionCount();            //调用获取试题统计
                        },1000);
                    }
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            showAnswer(qid) {
                $('#questionShow_' + qid).next(".paper-answer").css('display') == 'block' ? $('#questionShow_' + qid).next(".paper-answer").hide() : $('#questionShow_' + qid).next(".paper-answer").show();
                $('#questionShow_' + qid).next(".paper-answer").css('display') == 'block' ? $('#questionShow_' + qid).html('隐藏答案') : $('#questionShow_' + qid).html('显示答案');
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
            unboundSpace() {
                document.onkeydown = '';
            },
            keySpace(){
                this.unboundSpace();
            },
            keyBindSapce(){
                this.boundSpace();
            },
        },
        computed: {
            getSubjectId() {
                let that = this;
                return that.subjectId;
            },
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
            that.getJudgeQuestion();
            that.getJudgeQuestionCount();
        },
        created(){
            document.onkeydown = this.spacePreventDefault;
        }
    }
</script>
<style src="../../static/js/ztree/css/zTreeStyle/zTreeStyle.css"></style>
<style src="../../static/js/icheck/skins/minimal/minimal.css"></style>
<style scoped src="../../static/css/singleQuestion.css"></style>
<style scoped src="../../static/css/noTask.css"></style>