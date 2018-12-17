<template>
<div>
    <p class="location">
        当前位置：
        <span>套卷详情</span>
    </p>

    <div class="container">

        <div class="main paper-detial">

            <router-link :to="{name:'manage-paper',params:{userKey:userKey}}" class="return-list">返回列表</router-link>
            <div class="paper-detial-wrapper">
                <h2 class="title">{{paperName}}</h2>
                <div class="detial-box" v-for="(question) in paperDetail">
                    {{question.i}}、<div v-html="question.content"></div>
                    <div class="hide-answer"  :id="'questionShow_'+ question.id" @click="showAnswer(question.id)">显示答案</div>
                    <div class="paper-answer" style="display: none;">
                        <div class="t-shiti-jiexi">
                            <p class="answer">答案： <span v-html="question.answer"></span></p>
                            <p class="answer">解析：<span v-html="question.analysis"></span></p>
                        </div>
                    </div>
                    <p class="paper-id">
                        <span>题目ID ：</span><span>{{question.id}}</span>
                        <span class="paper-label" v-if="question.fristTagContent">
                                <span class="p-label">
                                  {{question.fristTagContent}}
                                </span>
                            </span>
                        <span class="paper-label"  v-if="question.judgeTagContent && question.fristTagContent == ''">
                                <span class="p-label">
                                  {{question.judgeTagContent}}
                                </span>
                            </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import "../../static/js/jquery-1.12.2.min.js"
    import {mapGetters} from "vuex"
    export default {

        data(){
            return {
                paperName:'',
                paperId:'',
                paperDetail: [],
                isShow:false,
                isValue:'显示答案',
            }
        },
        computed: {
            searchArgs: function () {
                var that = this;
                return {
                    paperId: that.paperId,
                };
            },
            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },
        mounted(){
            var that = this;
            that.paperName = this.$route.params.paperName;
            that.doSearch();
        },
        methods:{
            doSearch: function () {
                var that = this;
                that.paperId = this.$route.params.paperId;
                var searchArgs = $.extend(true, {}, that.searchArgs);
                searchArgs.userKey = that.userKey;
                axios.get('label/manage/paperDetailAjaxSearch',{params:searchArgs}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.$nextTick(function () {
                            that.paperDetail = data.data.rows;
                        });
                    }

                })
            },
            showAnswer: function (qid) {
                $('#questionShow_'+qid).next(".paper-answer").css('display') == 'block' ? $('#questionShow_'+qid).next(".paper-answer").hide() : $('#questionShow_'+qid).next(".paper-answer").show();
                $('#questionShow_'+qid).next(".paper-answer").css('display') == 'block' ? $('#questionShow_'+qid).html('隐藏答案') : $('#questionShow_'+qid).html('显示答案');
            },

        },

    }
</script>
<style scoped src="../../static/css/paperManage.css"></style>
