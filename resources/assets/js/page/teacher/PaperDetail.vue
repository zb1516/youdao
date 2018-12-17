<template>
    <div>
        <div class="m-main">
            <div class="paper-detail" style="margin: 0px 0px 10px 0px;">
                <a href="javascript:;" @click="back()">返回列表</a>
                <div class="paper-title">{{paperName}}</div>
                <!-- 套卷单题内容 -->
                <div class="paper-content" v-for="(question,index) in questionList" @click="selectAnswer(index)"
                     :class="{'paper-checked':index===answerIndex}">
                    <p>{{index+1}}.<span v-html="question.ques_content"></span></p>
                    <span class="hide-answer" :id="'questionShow_'+ question.ques_id"
                          @click.stop="showAnswer(question.ques_id)">显示答案</span>
                    <div class="paper-answer">
                        <p class="answer">答案：<span v-html="question.ques_answer"></span></p>
                        <p class="answer">解析：<span v-html="question.ques_analysis"></span></p>
                    </div>
                    <p class="paper-id">题目ID：<span>{{question.ques_id}}</span>
                        <span class="paper-label teacher" v-if="labelShow(question.label)"><i class="z-label" v-for="label in question.label">{{label.tag_content}}</i></span>
                    </p>
                </div>
            </div>
            <v-question-options :subjectId="getSubjectId" :userKey="userKey" @boundSpace="boundSpace" @unBoundSpace="unboundSpace" :questionNoFinishCount="questionOption.questionNoFinishCount" :questionFinishCount="questionOption.questionFinishCount" ref="questionType"></v-question-options>
        </div>
        <div class="paper-btn" style="width:1200px; margin:30px auto; padding:0 !important;">
            <div style="width:722px; padding:0 39px">
                <button class="btn paper-error" @click="errorReport">报错</button>
                <button class="btn paper-slip" @click="paperFinish">完成</button>
                <button class="btn paper-save" @click="paperSave" :disabled="isDisable">保存</button>
                <!-- 新手指引 -->
                <div class="m-layer"  v-if="guideIsShow">
                    <div class="guide-cover" >
                        <div class="btn-know" @click="addRemind" :disabled="guideIsDisable">知道了</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 领取成功 -->
        <div class="status-success" v-if="successShow">保存成功</div>
        <v-question-error :errorShow="questionErrorShow" v-on:errorClose="errorClose" :questionId="questionId"></v-question-error>
    </div>

</template>
<script>
    import "../../static/js/ztree/js/jquery.ztree.core.min.js"
    import "../../static/js/icheck/icheck.min.js"
    import QuestionOptions from '../../components/QuestionOptions'
    import QuestionError from '../../components/QuestionError'
    import {mapActions, mapGetters} from 'vuex'
    export default {
        components: {
            'v-question-options': QuestionOptions,
            'v-question-error': QuestionError
        },
        data() {
            return {
                successShow:false,
                answerIndex: -1,
                questionErrorShow: false,
                guideIsShow:false,
                guideIsDisable:false,
                isDisable:false,
                paperName: '',
                questionList: [],
                questionId: 0,
                questionOption: {
                    questionNoFinishCount: 0,
                    questionFinishCount: 0
                },
                labelList:[]
            }
        },
        methods: {
            selectAnswer(index) {
                let that = this;
                if(that.questionList[index] == undefined){
                    that.$message.error('您贴完所有标签，请点击完成以保存套卷');return false;
                }
                that.questionId=that.questionList[index].ques_id;
                //判断是否贴过标签
                axios.get("/label/question/getTeacherLabelContent",{
                    params:{
                        questionId:that.questionId,
                        userKey:that.userKey
                    }
                }).then(res=>{
                    if(res.data.status == 0)
                    {
                        that.$message.error(res.data.errorMsg);return false;
                    }
                    that.answerIndex = index;           //选中效果
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
                let obj=that.$qs.stringify({
                    paperId:that.paperId,
                    userKey:that.userKey,
                });
                //判断套卷是否完成
                axios.post("/label/question/paperIsFinish",obj).then(res=>{
                    if(res.data.status == 0){
                        that.$message.error(res.data.errorMsg);return false;
                    }else{
                        //获取当前选中的试题
                        that.questionId = that.questionList[that.answerIndex] == null ? 0 : that.questionList[that.answerIndex].ques_id;
                        that.questionErrorShow = true;
                        that.unboundSpace();
                    }
                });
            },
            errorClose() {
                let that = this;
                that.questionErrorShow = false;
                that.boundSpace();
            },
            getQuestionList() {
                let that = this;
                axios.get("/label/question/getPaperQuestionList", {
                    params: {
                        userKey: that.userKey,
                        paperId: that.paperId
                    }
                }).then(res => {
                    that.paperName = res.data.data.paperName;
                    that.questionList = res.data.data.list;
                }).catch(function (error) {
                    that.$message.error(error.message);
                });
            },
            getQuestionCount() {
                let that = this;
                axios.get('/label/question/getPaperCount', {
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
            back() {
                this.$router.back();            //返回
            },
            paperSave(){
                let that=this;
                let obj=that.$qs.stringify({
                    paperId:that.paperId,
                    userKey:that.userKey,
                });
                //判断套卷是否完成
                axios.post("/label/question/paperIsFinish",obj).then(res=>{
                    if(res.data.status == 0){
                        that.$message.error(res.data.errorMsg);return false;
                    }else{
                        that.questionSave();
                    }
                });
            },
            questionSave(){
                let that=this;
                if(that.questionId <=0 ){
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
                if(that.$route.params.subjectId == 60 && that.$refs.questionType.questionCategoryId <=0 ){
                    that.$message.error('请选择题类');return false;
                }
                that.isDisable=true;
                let obj=that.$qs.stringify({
                    questionId:that.questionId,
                    paperId:that.paperId,
                    subjectId:that.$route.params.subjectId,
                    userKey:that.userKey,
                    userType:'teacher',
                    questionType:'paper',
                    knowledgeId:that.$refs.questionType.nodeModel.id,                       //知识点id
                    knowledgeName:that.$refs.questionType.nodeModel.title,                   //知识点名称
                    gradeId:that.$refs.questionType.gradeId,                                //年级
                    difficultyId:that.$refs.questionType.difficultyId,                      //难度
                    typeId:that.$refs.questionType.typeId,                                  //类型
                    questionTypeId:that.$refs.questionType.questionTypeId,                  //题型
                    questionCategoryId:that.$refs.questionType.questionCategoryId,          //题类
                    gradeName:that.$refs.questionType.gradeName,                            //年级
                    difficultyName:that.$refs.questionType.difficultyName,                  //难度
                    type:that.$refs.questionType.type,                                      //类型
                    questionTypeName:that.$refs.questionType.questionTypeName,              //题型
                    questionCategoryName:that.$refs.questionType.questionCategoryName       //题类
                });
                axios.post("/label/question/questionSave",obj).then(res=>{
                    that.isDisable = false
                    if(res.data.status == 0)
                    {
                        that.$message.error(res.data.errorMsg);return false;
                    }else{
                        that.successShow=true;
                        setTimeout(function(){
                            that.successShow=false;
                            that.getQuestionList();
                            that.getQuestionCount();            //调用获取试题统计
                            that.selectAnswer(that.answerIndex+1);
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
            labelShow(label){
                return Object.keys(label).length>0?true:false;
            },
            paperFinish(){
                let that=this;
                let obj=that.$qs.stringify({
                    userKey:that.userKey,
                    paperId:that.paperId
                });
                //判断套卷是否完成
                axios.post("/label/question/paperIsFinish",obj).then(res=>{
                    if(res.data.status == 0){
                        that.$message.error(res.data.errorMsg);return false;
                    }else{
                        that.questionFinish();
                    }
                });
            },
            questionFinish(){
                let that=this;
                let obj=that.$qs.stringify({
                    userKey:that.userKey,
                    paperId:that.paperId
                });
                axios.post('/label/question/questionFinish',obj).then(res=>{
                    if(res.data.status === 0){
                        that.$message.error(res.data.errorMsg);return false;
                    }else{
                        that.successShow=true;
                        setTimeout(function(){
                            that.successShow=false;
                            //跳转到列表
                            that.$router.push({
                                'name':'tasks-paperList',
                                'params':{
                                    'userKey':that.userKey
                                }
                            });
                        },1000);
                    }
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
            ...mapActions([
                'setPaperMutations'
            ])
        },
        computed: {
            getSubjectId() {
                let that = this;
                return that.$route.params.subjectId
            },
            ...mapGetters({
                userKey: 'getUserKey',
                paperId: 'getPaperId'
            })
        },
        mounted() {
            let that = this;
            that.$store.dispatch('setPaperMutations', that.$route.params.paperId);
            that.checkIsRemind();
            that.getQuestionList();
            that.getQuestionCount();
        },
        created(){
            document.onkeydown = this.spacePreventDefault;
        }
    }
</script>
<style src="../../static/js/ztree/css/zTreeStyle/zTreeStyle.css"></style>
<style src="../../static/js/icheck/skins/minimal/minimal.css"></style>
<style scoped src="../../static/css/teacherPapersDetail.css"></style>

