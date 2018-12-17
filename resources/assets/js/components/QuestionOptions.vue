<template>
    <div class="opration-wrapper">
        <div class="paper-label-select">
            <div class="title">
                <span class="t t1">累计完成 <i class="count1">{{questionFinishCount}}</i> 道</span>
                <span class="t t2">剩余：<i class="count2">{{questionNoFinishCount}}</i> 道</span>
            </div>
            <div class="option-box">
                <span class="label">题型：</span>
                <label class="radio-inline__label" v-for="(questionType,index) in questionTypeList"
                       @click="questionTypeCheck(index)" :class="{checked:index==questionTypeIndex}"><input
                        class="radio-inline__input" type="radio" name="accessible-radio" value=""/>
                    <label>{{questionType.title}}</label>
                </label>
            </div>
            <div class="option-box">
                <span class="label">难度：</span>
                <label class="radio-inline__label" v-for="(difficulty,index) in difficultyList"
                       :class="{checked:index==difficultyIndex}" @click="difficultyCheck(index)"><input
                        class="radio-inline__input" type="radio" name="accessible-radio1" value=""/>
                    <label>{{difficulty.title}}</label>
                </label>
            </div>
            <div class="option-box">
                <span class="label">类型：</span>
                <label class="radio-inline__label" v-for="(type,index) in typeList" :class="{checked:index===typeIndex}"
                       @click="typeCheck(index)"><input class="radio-inline__input" type="radio"
                                                        name="accessible-radio4" value=""/>
                    <label>{{type.title}}</label>
                </label>
            </div>
            <div class="option-box grade">
                <span class="label grade">年级：</span>
                <div class="grade-data">
                    <label class="radio-inline__label" v-for="(grade,index) in gradeList" @click="gradeCheck(index)"
                           :class="{checked:index==gradeIndex}"><input class="radio-inline__input" type="radio"
                                                                       name="accessible-radio2" value=""/>
                        <label>{{grade.gradeName}}</label>
                    </label>
                </div>
            </div>
            <div class="option-box grade" v-if="subjectIsShow">
                <span class="label grade">题类：</span>
                <label class="radio-inline__label" v-for="(questionCategory,index) in questionCategoryList" :class="{checked:index==questionCategoryIndex}" @click="questionCategoryCheck(index)"><input class="radio-inline__input" type="radio" name="accessible-radio3" value="" />
                <label>{{questionCategory.name}}</label>
                </label>
            </div>
        </div>
        <div class="paper-topic">
            <p class="topic-title">知识点体系</p>
            <div class="i-wrap" style="margin: 10px 0px 10px 10px">
                <input type="text" class="i-input" placeholder="请输入..." v-model="knowledgeKeyword"  @focus="keySpace" @blur="keyBindSapce">
                <button class="i-btn" @click="knowledgeSearch" :disabled="knowledgeDisabled">搜索</button>
            </div>
            <vue-ztree :list.sync='ztreeDataSource' :func='nodeClick' ref="ztreeType"></vue-ztree>
        </div>
    </div>
</template>
<script>
    import "../static/css/questionOptions.css"
    import VueZtree from "vue-ztree/src/components/vue-ztree"
    export default {
        components:{
            VueZtree
        },
        props: ['subjectId', 'userKey','questionNoFinishCount','questionFinishCount'],
        data() {
            return {
                questionTypeList: [],
                questionTypeIndex: 0,
                questionTypeId:0,
                questionTypeName: '',
                gradeList: [],
                gradeIndex: 0,
                gradeName: '',
                gradeId:0,
                knowledgeDisabled:false,
                difficultyId: 1,
                difficultyName: '',
                difficultyIndex: 0,
                difficultyList: [
                    {id:1,title: '易'},
                    {id:2,title: '中'},
                    {id:3,title: '难'},
                ],
                typeList: [
                    {id:1,title: '同步'},
                    {id:2,title: '升学'}
                ],
                typeId:1,
                typeIndex: 0,
                type: '同步',
                questionCategoryList:[],
                questionCategoryIndex:0,
                questionCategoryId:0,
                questionCategoryName:'',
                ztreeDataSource:[],
                dataList:[],
                treeDeepCopy:[],
                parentNodeModel:[],//当前点击节点父亲对象
                nodeModel:null, // 当前点击节点对象,
                knowledgeKeyword:''
            }
        },
        methods: {
            findById:function(data,parentId) {
                var vm =this;

                for(var i = 0;i<data.length;i++){
                    if (parentId == data[i].id){
                        vm.dataList.push(data[i]);
                        vm.findById(vm.ztreeDataSource, data[i].parentId)
                        return data[i]
                    }

                    if (data[i].hasOwnProperty('children')){
                        vm.findById(data[i].nodes,parentId)
                    }

                }
            },
            // 点击节点
            nodeClick:function(m, parent, trees){
                this.treeDeepCopy = trees;
                this.nodeModel = m;  // 当前点击节点对象
                this.parentNodeModel = parent; //当前点击节点父亲对象
                // 导航菜单
                this.dataList=[]
                this.findById(this.ztreeDataSource,m.parentId)
                this.dataList= this.dataList.reverse();
                this.dataList.push(m);
            },
            knowledgeSearch(){
                let that=this;
                if(that.knowledgeKeyword == ''){
                    that.$message.error('请输入搜索知识点');return false;
                }
                that.knowledgeDisabled=true;
                axios.get("/label/knowledge/getKnowledgeSearch",{
                    params: {
                        userKey: that.userKey,
                        subjectId: that.subjectId,
                        keyword:that.knowledgeKeyword
                    }
                }).then(res=>{
                    that.knowledgeDisabled=false;
                    if(res.data.status == 0)
                    {
                        that.$message.error(res.data.errorMsg);return false;
                    }else{
                        that.ztreeDataSource=res.data.data;
                        that.$refs.ztreeType.initTreeData();
                    }
                })
            },
            keySpace(){
                this.$emit('unBoundSpace');
            },
            keyBindSapce(){
                this.$emit('boundSpace');
            },
            questionCategoryCheck(index){
                let that=this;
                that.questionCategoryIndex=index;
                that.questionCategoryId=that.questionCategoryList[index].id;
                that.questionCategoryName=that.questionCategoryList[index].name;
            },
            typeCheck(index) {
                let that = this;
                that.typeIndex = index;
                that.typeId = that.typeList[index].id;
                that.type = that.typeList[index].title;
            },
            difficultyCheck(index) {
                let that = this;
                that.difficultyIndex = index;
                that.difficultyId=that.difficultyList[index].id;
                that.difficultyName = that.difficultyList[index].title;
            },
            gradeCheck(index) {
                let that = this;
                that.gradeIndex = index;
                that.gradeId=that.gradeList[index].gradeId;
                that.gradeName = that.gradeList[index].gradeName;
            },
            getGrade() {
                let that = this;
                axios.get('label/common/getAllGrade').then(res => {
                    that.gradeList = res.data;
                    that.gradeId=that.gradeList[that.gradeIndex].gradeId;
                    that.gradeName=that.gradeList[that.gradeIndex].gradeName;
                });
            },
            questionTypeCheck(index) {
                let that = this;
                that.questionTypeIndex = index;
                that.questionTypeId=that.questionTypeList[index].id;
                that.questionTypeName = that.questionTypeList[index].title;
            },
            getQuestionType(subjectId) {
                let that = this;
                axios.get('label/common/getQuestionTypeAjaxSearch', {
                    params: {
                        subjectId:subjectId
                    }
                }).then(res => {
                    that.questionTypeList = res.data;
                    that.questionTypeId=that.questionTypeList[that.questionTypeIndex].id;
                    that.questionTypeName=that.questionTypeList[that.questionTypeIndex].title;
                });
            },
            getKnowledge(subjectId) {
                let that = this;
                axios.get("/label/knowledge/getKnowledgeList", {
                    params: {
                        userKey: that.userKey,
                        subjectId: subjectId
                    }
                }).then(res => {
                    if(res.data.status == 0)
                    {
                        that.$message.error(res.data.errorMsg);return false;
                    }else{
                        that.ztreeDataSource=res.data.data;
                    }
                });
            },
            getQuestionCategory(){
                let that=this;
                axios.get('/label/common/getQuestionCategorySearch',{
                    params:{
                        userKey: that.userKey,
                        subjectId:that.subjectId
                    }
                }).then(res=>{
                    that.questionCategoryList=res.data;
                    that.questionCategoryId=that.questionCategoryList[that.questionCategoryIndex].id;
                    that.questionCategoryName=that.questionCategoryList[that.questionCategoryIndex].name;
                });
            },
            getDifficulty() {
                let that = this;
                that.difficultyId=that.difficultyList[that.difficultyIndex].id;
                that.difficultyName = that.difficultyList[that.difficultyIndex].title;
            },
            getType() {
                let that = this;
                that.typeId = that.typeList[that.typeIndex].id;
                that.type = that.typeList[that.typeIndex].title;
            }
        },
        computed:{
            subjectIsShow(){
                if(this.subjectId==60){
                    this.getQuestionCategory();              //请求获取题类
                    return true;
                }else{
                    return false;
                }
            }
        },
        mounted() {
            let that = this;
            that.getQuestionType(that.subjectId);
            that.getGrade();
            that.getKnowledge(that.subjectId); //获取知识点
            that.getDifficulty();
            that.getType();
        }
    }
</script>
<style>
    .m-main .opration-wrapper .paper-topic  .ztree{ overflow: auto;height: 493px;}
    .m-main .opration-wrapper .paper-topic  .ztree * {font-size:14px;}

    .m-main .opration-wrapper .paper-topic .ztree li {
        line-height: 30px; }
    .m-main .opration-wrapper .paper-topic .ztree li a {
        width: 200px;
        height: 30px;
        padding-top: 0px; }
    .m-main .opration-wrapper .paper-topic .ztree li a:hover {
        color:#333;
        text-decoration: none;
        background-color: #E7E7E7; }
    .m-main .opration-wrapper .paper-topic .ztree li a span.button.switch {
        visibility: hidden; }
    .m-main .opration-wrapper .paper-topic .ztree.showIcon li a span.button.switch {
        visibility: visible; }
    .m-main .opration-wrapper .paper-topic .ztree li a.curSelectedNode {
        color:#333;
        background-color: #D4D4D4;
        border: 0;
        height: 30px; }
    .m-main .opration-wrapper .paper-topic .ztree li span {
        line-height: 30px; }
    .m-main .opration-wrapper .paper-topic .ztree li span.button {
        margin-top: -7px; }
    .m-main .opration-wrapper .paper-topic .ztree li span.button.switch {
        width: 16px;
        height: 16px; }
    .m-main  .ztree > li > a .node_name {
        font-size: 14px;
        font-weight: bold; }
    .m-main .opration-wrapper .paper-topic .ztree li span.button {
        background-repeat:inherit;
        background-image: url("../static/images/left_menuForOutLook.png");
        *background-image: url("../static/images/left_menuForOutLook.gif"); }
    .m-main .opration-wrapper .paper-topic .ztree li span.button.switch.level0 {
        width: 20px;
        height: 20px; }
    .m-main .opration-wrapper .paper-topic .ztree li span.button.switch.level1 {
        width: 20px;
        height: 20px; }
    .m-main .opration-wrapper .paper-topic .ztree li span.button.noline_open {
        background-position: 0 0; }
    .m-main .opration-wrapper .paper-topic .ztree li span.button.noline_close {
        background-position: -18px 0; }
    .m-main .opration-wrapper .paper-topic .ztree li span.button.noline_open.level0 {
        background-position: 0 -18px; }
    .m-main .opration-wrapper .paper-topic .ztree li span.button.noline_close.level0 {
        background-position: -18px -18px; }

    .m-main .opration-wrapper .paper-topic .ztree li span.button {background-position:-92px -18px}
    .m-main .opration-wrapper .paper-topic .ztree li span.button.center_open{background-position:-74px -18px}
    .m-main .opration-wrapper .paper-topic .ztree li span.button.center_close{background-position:-92px -18px}
    .m-main .ztree li li span.button.bottom_docu {background-position: -18px -36px!important;}
    .m-main .ztree li li a .node_name {font-size: 13px!important;}
    .i-btn {
        display: inline-block;
        width: 80px;
        height: 32px;
        line-height: 30px;
        color: #FFFFFF;
        font-size: 14px;
        text-align: center;
        background: #6699ff;
        outline: 0;
        border: 0;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .i-input {
        display: inline-block;
        width: 280px;
        height: 32px;
        line-height: 1.5;
        padding: 4px 7px;
        font-size: 12px;
        border: 1px solid #dddee1;
        border-radius: 4px;
        color: #495060;
        background-color: #fff;
        background-image: none;
        position: relative;
        cursor: text;
        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>