<template lang="html">
    <div class="main">
        <div class="pic-review1">
            <div class="nav-wrapper">

                <router-link  :to="{name:'imagePaper-imagePaperList',params:{userKey:userKey}}" class="back-btn">返回</router-link>
                <span class="nav-con">
          <span>操作说明：</span>
          <span class="tab select"><span class="circle">1</span><span class="tab-text">贴标签</span></span>
          <span class="tab"><span class="circle">2</span><span class="tab-text">搜索排重</span></span>
          <span class="tab"><span class="circle">3</span><span class="tab-text">审核图片</span></span>
          <span class=""><span class="circle">4</span><span class="tab-text">完成审核</span></span>
        </span>
            </div>
            <div class="tab-con-wrapper">
                <h2 class="title">第一步 贴标签</h2>
                <div class="search-form inner cf">
                    <div class="input-wrapper">
                        <label for="" class="in-name required min-w1">学科</label>
                        <div class="input-box js-verif-input">
                            <select class="grade-select-box" id="grade-select-box5" name="grade-select-box" data-options="width: 200" v-model="subjectValue"  @change="selectPaperSource">
                                <option value="">请选择</option>
                                <option v-for="option in optionsSubject" v-bind:value="option.subjectId">
                                    {{ option.subjectName }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <label for="" class="in-name required">年份</label>

                        <div class="input-box js-verif-input">

                            <select class="grade-select-box" id="grade-select-box" name="grade-select-box" v-model="curYear" data-options="width: 200">

                                <option value="">请选择</option>
                                <option v-for="option in optionsYears" v-bind:value="option.yearText">
                                    {{ option.yearValue }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="input-wrapper mr-none">
                        <label for="" class="in-name min-w3">考试总分</label>
                        <div class="input-box">
                            <input type="text" class="input" value="" placeholder="请输入" v-model="score">
                        </div>
                    </div>

                    <div class="input-wrapper">
                        <label for="" class="in-name required">来源</label>
                        <div class="input-box js-verif-input">
                            <select class="grade-select-box" id="grade-select-box1" name="grade-select-box" data-options="width: 200" v-model="curPaperSource">
                                <option value="">请选择</option>
                                <option v-for="option in ajaxAllSubjectPaperSource" v-bind:value="option.sourceName">
                                    {{ option.sourceName }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <label for="" class="in-name required">学期</label>
                        <div class="input-box js-verif-input">
                            <select class="grade-select-box" id="grade-select-box2" name="grade-select-box" data-options="width: 200" v-model="term">
                                <option value="">请选择</option>
                                <option value="上学期">上学期</option>
                                <option value="下学期">下学期</option>

                            </select>
                        </div>
                    </div>
                    <div class="input-wrapper mr-none">
                        <label for="" class="in-name min-w3">题目数量</label>
                        <div class="input-box">
                            <input type="text" class="input" value="" placeholder="请输入" v-model="questionNumber">
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <label for="" class="in-name required min-w1">省</label>
                        <div class="input-box js-verif-input">
                            <select class="grade-select-box" id="prev-select-box" name="grade-select-box" data-options="width: 200" v-model="curProvince" @change="selectPaperCitys">
                                <option value="">请选择</option>
                                <option v-for="option in optionsProvinces" v-bind:value="option.id">
                                    {{ option.city }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <label for="" class="in-name required">年级</label>
                        <div class="input-box js-verif-input">
                            <select class="grade-select-box" id="grade-select-box3" name="grade-select-box" data-options="width: 200" v-model="curGrade">
                                <option value="">请选择</option>
                                <option value="1">一年级</option>
                                <option value="2">二年级</option>
                                <option value="3">三年级</option>
                                <option value="4">四年级</option>
                                <option value="5">五年级</option>
                                <option value="6">六年级</option>
                                <option value="7">初一</option>
                                <option value="8">初二</option>
                                <option value="9">初三</option>
                                <option value="10">高一</option>
                                <option value="11">高二</option>
                                <option value="12">高三</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-wrapper mr-none">
                        <label for="" class="in-name min-w3">其他信息1</label>
                        <div class="input-box">
                            <input type="text" class="input" value="" placeholder="请输入" v-model="other1">
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <label for="" class="in-name required min-w1">市</label>
                        <div class="input-box js-verif-input">
                            <select class="grade-select-box" id="city-select-box" name="grade-select-box" data-options="width: 200" v-model="curCity" @change="selectPaperAreas">
                                <option value="">请选择</option>
                                <option v-for="option in ajaxAllPaperCitys" v-bind:value="option.id">
                                    {{ option.city }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <label for="" class="in-name">学校</label>
                        <div class="input-box">
                            <input type="text" class="input" value="" placeholder="请输入" v-model="school">
                        </div>
                    </div>
                    <div class="input-wrapper mr-none">
                        <label for="" class="in-name min-w3">其他信息2</label>
                        <div class="input-box">
                            <input type="text" class="input" value="" placeholder="请输入" v-model="other2">
                        </div>
                    </div>
                    <div class="input-wrapper mr2">
                        <label for="" class="in-name min-w1">区</label>
                        <div class="input-box">
                            <select class="grade-select-box" id="area-select-box" name="grade-select-box" data-options="width: 200" v-model="curArea">
                                <option value="">请选择</option>
                                <option v-for="option in ajaxAllPaperAreas" v-bind:value="option.id">
                                    {{ option.city }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="input-wrapper">
                        <label for="" class="in-name">考试时长</label>
                        <div class="input-box">
                            <input type="text" class="input" value="" placeholder="请输入" v-model="duration">
                        </div>
                    </div>
                </div>
                <template v-if="paperType == 2">
                <div class="pic-form">
                    <h2 class="title2">试题</h2>
                    <ul class="pic-list cf js-pic-list" id="questionImage">
                        <template v-for="(item,index) in questionContent">
                        <li class="pic-box">
                            <a :href="item.image_url" data-fancybox-group="gallery">
                                <p class="image">
                                    <img :src="item.image_url" alt=""/>
                                </p>
                                <span class="tab-index">{{index+1}}</span>
                            </a>
                        </li>
                        </template>
                    </ul>
                    <h2 class="title2">答案</h2>
                    <ul class="pic-list cf js-st-list"  id="questionAnswer">
                        <template v-for="(item,index) in answerContent">
                            <li class="pic-box">
                                <a :href="item.image_url" data-fancybox-group="gallery">
                                    <p class="image">
                                        <img :src="item.image_url" alt=""/>
                                    </p>
                                    <span class="tab-index">{{index+1}}</span>
                                </a>
                            </li>
                        </template>
                    </ul>
                    <span class="next-btn"  @click="doSearch">下一步</span>
                </div>
                </template>
                <template v-else>
                <div class="pic-form">
                    <ul class="pic-list cf js-pic-list"  id="questionAll">
                        <template v-for="(item,index) in imagePaperDetailContent">
                            <li class="pic-box">
                                <a :href="item.image_url" data-fancybox-group="gallery">
                                    <p class="image">
                                        <img :src="item.image_url" alt=""/>
                                    </p>
                                    <span class="tab-index">{{index+1}}</span>
                                </a>
                            </li>
                        </template>
                    </ul>
                    <span class="next-btn"  @click="doSearch">下一步</span>
                </div>
                </template>
                <div class="error-box" v-show="errorShow">{{errorMssage}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import "../../static/js/jquery.mloading.js"
    import "../../static/css/jquery.mloading.css"
    import "../../static/css/jquery.fancybox.css"
    import "../../static/js/jquery.plugin.js"
    import "../../static/js/jquery-ui.min.js"
    import common from "../../static/js/jquery.common.js"
    import "../../static/js/jquery.fancybox.js"
    import "../../static/js/jquery.fancybox-buttons.js"
    import {mapGetters} from 'vuex'

    export default {
        data(){
            return {
                curYear:'',
                optionsYears:'',
                subjectValue:'',
                optionsSubject:'',
                curPaperSource:'',
                ajaxAllSubjectPaperSource:'',
                curProvince:'',
                optionsProvinces:'',
                curCity:'',
                ajaxAllPaperCitys:'',
                curArea:'',
                ajaxAllPaperAreas:'',
                curGrade:'',
                school: '',
                term: '',
                duration: '',
                score:'',
                questionNumber: '',
                other1: '',
                other2: '',
                taskId:'',
                paperType:'',
                imagePaperDetailContent:'',
                questionContent:'',
                answerContent:'',
                sortTaskId:[],
                errorShow:false,
                errorMssage: "请选择必填项",
                sortTaskIdQuestion:[],
                sortTaskIdAnswer:[],
            }
        },
        computed: {
            searchArgs: function () {
                var that = this;
                return {
                    subjectId: that.subjectValue,
                    year: that.curYear,
                    grade: that.curGrade,
                    province: that.curProvince,
                    city: that.curCity,
                    country: that.curArea,
                    source: that.curPaperSource,
                    term: that.term,
                    school: that.school,
                    duration: that.duration,
                    score: that.score,
                    questionNumber: that.questionNumber,
                    other1: that.other1,
                    other2: that.other2,
                    sortTaskId: that.sortTaskId,
                    sortTaskIdQuestion: that.sortTaskIdQuestion,
                    sortTaskIdAnswer: that.sortTaskIdAnswer,
                };
            },
            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },

        mounted(){

            var that = this;
            that.taskId = this.$route.params.taskId;
            that.paperType = this.$route.params.paperType;
            that.yearList();
            that.subjectList();
            that.provinceList();
            that.imagePaperDetail();
            common.init();

        },
        methods:{
            subjectList(){
                var that = this
                axios.get('common/common/getSubjects',{params:{userKey:that.userKey}}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.optionsSubject = data.data;
                        that.$nextTick(function() {
                            $('.grade-select-box').selectpicker('refresh');
                        });
                    }

                })
            },
            selectPaperSource() {
                var that = this;
                that.curPaperSource = '';
                axios.get('common/common/getPaperSourceAjaxSearch',{params:{subjectId:that.subjectValue,userKey:that.userKey}}).then(function(data){
                    that.$nextTick(function () {
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.ajaxAllSubjectPaperSource = data.data;
                            that.$nextTick(function() {
                                $('.grade-select-box').selectpicker('refresh');
                            });
                        }
                    });
                })
            },
            provinceList(){
                var that = this;
                axios.get('common/common/getProvince',{params:{userKey:that.userKey}}).then(function(data){
                    that.optionsProvinces = data.data;
                    that.$nextTick(function() {
                        $('#prev-select-box').selectpicker('refresh');
                    });
                })
            },
            selectPaperCitys() {
                var that = this;
                that.curCity = '';
                axios.get('common/common/getPaperCitysAjaxSearch',{params:{provinceId:that.curProvince,userKey:that.userKey}}).then(function(data){
                    that.$nextTick(function () {
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.ajaxAllPaperCitys = data.data;
                            that.$nextTick(function() {
                               $('#city-select-box').selectpicker('refresh');
                            });
                        }
                    });
                })
            },
            selectPaperAreas() {
                var that = this;
                that.curArea = '';
                axios.get('common/common/getPaperAreasAjaxSearch',{params:{provinceId:that.curProvince+'-'+that.curCity,userKey:that.userKey}}).then(function(data){
                    that.$nextTick(function () {
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        } else {
                            that.ajaxAllPaperAreas = data.data;
                            that.$nextTick(function() {
                                $('.grade-select-box').selectpicker('refresh');
                            });
                        }
                    });
                })
            },

            yearList(){
                var that = this;
                axios.get('common/common/getYear',{params:{userKey:that.userKey}}).then(function(data){

                    that.optionsYears = data.data;
                    that.$nextTick(function() {
                        $('.grade-select-box').selectpicker('refresh');
                    });
                })
            },
            doSearch(){
                //if (this.isLoading) return;
                var resultImage = new Array();
                //var imageData = new Array();
                if(this.$route.params.paperType == 1){
                    var i = 0;
                    $("#questionAll").find('img').each(function(){
                        resultImage[i] = $(this).attr('src');
                        i++
                    });
                }else{

                    var resultImageQuestion = new Array();
                    var resultImageAnswer = new Array();
                    var k = 0;
                    var j = 0;
                    $("#questionImage").find('img').each(function(){
                        resultImageQuestion[k] = $(this).attr('src');
                        //alert($(this).attr('src'))
                        k++
                    });
                    $("#questionAnswer").find('img').each(function(){
                        resultImageAnswer[j] = $(this).attr('src');
                        j++
                    });
                    // imageData[0] = resultImageQuestion;
                    // imageData[1] = resultImageAnswer;
                }
                var that = this;
                $('.js-verif-input').each(function(){
                    var $selectedBox = $(this).find('select').find("option:selected");

                    if($selectedBox.val() == 0){
                        that.errorShow = true;
                        return false;
                    }
                    that.errorShow = false;
                });
                var searchArgs = $.extend(true, {}, that.searchArgs);
                searchArgs.userKey = that.userKey;
                searchArgs.taskId = that.taskId;
                searchArgs.paperType = that.paperType;
                if(this.$route.params.paperType == 1){
                    searchArgs.sortTaskId = resultImage;
                }else{
                    //searchArgs.sortTaskId = imageData;
                    searchArgs.sortTaskIdQuestion = resultImageQuestion;
                    searchArgs.sortTaskIdAnswer = resultImageAnswer;
                }
                localStorage.setItem("paperSearchArgs",JSON.stringify(searchArgs));
                localStorage.setItem("localTaskId",that.taskId);
                if(!that.errorShow){
                    that.$router.push({
                        name: 'imagePaper-imagePaperList-imageSearch',
                        params:{userKey:that.userKey,taskId:that.taskId,allType:1}
                    });
                }

                // location.href = 'http://www.shenlabel.org/#/manage/question/eW0mf2QYMxNu0TJDssBMuRgj_21kwTMt';
                // axios.get('youdao/imagePaper/paperPass',{params:searchArgs}).then(function(data){
                //     if (data.data.errorMsg) {
                //         that.$message.error(data.data.errorMsg);
                //     } else {
                //         that.$nextTick(function () {
                //             console.log(data.data);
                //             //that.jsPage();
                //         });
                //     }
                // })
            },
            imagePaperDetail(){
                var that = this;
                $("body").mLoading('show');
                axios.get('youdao/imagePaper/imagePaperDetail',{params:{userKey:that.userKey,taskId:that.taskId,paperType:that.paperType}}).then(function(data){
                    $("body").mLoading('hide');
                    if(data.data){
                        if(that.paperType == 1){
                            that.imagePaperDetailContent = data.data;
                        }else{
                            that.questionContent = data.data['question'];
                            that.answerContent = data.data['answer'];
                        }
                    }
                    that.$nextTick(function() {
                        common.init();
                    });
                })
            },



        }
    }
</script>