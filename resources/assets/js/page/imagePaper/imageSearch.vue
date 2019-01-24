<template>
    <div class="main">
        <div class="pic-review1 review2">
            <div class="nav-wrapper">
                <a href="reviewPicList.html" class="back-btn">返回</a>
                <span class="nav-con">
            <span>操作说明：</span>
            <span class="tab select"><span class="circle">1</span><span class="tab-text">贴标签</span></span>
            <span class="tab select"><span class="circle">2</span><span class="tab-text">搜索排重</span></span>
            <span class="tab"><span class="circle">3</span><span class="tab-text">审核图片</span></span>
            <span class=""><span class="circle">4</span><span class="tab-text">完成审核</span></span>
          </span>
            </div>
            <div class="tab-con-wrapper">
                <h2 class="title">第二步 搜索排重</h2>
                <div class="search-form">
                    <h3 class="title2">自动根据标签搜索的试卷</h3>
                    <p class="paper-name">
                        <span class="checkbox js-radio"></span>
                        <span>套卷VIP-初中-数学------初三-上学期-章节测试卷</span>
                    </p>
                    <p class="paper-name">
                        <span class="checkbox select js-radio"></span>
                        <span>套卷VIP-初中-数学------初三-上学期-章节测试卷章节测试卷初三上学期-章节测试卷章节测试卷</span>
                    </p>
                    <p class="paper-name">
                        <span class="checkbox js-radio"></span>
                        <span>套卷VIP-初中-数学------初三-上学期-章节测试卷</span>
                    </p>
                    <p class="paper-name">
                        <span class="checkbox js-radio"></span>
                        <span>套卷VIP-初中-数学------初三-上学期-章节测试卷</span>
                    </p>
                </div>
                <div class="pic-paper-form">
                    <div class="page-turn">
                        <span class="prev"></span>
                        <span class="page-number"><span class="curren-p">1</span>/<span class="sum-p">2</span></span>
                        <span class="next"></span>
                    </div>
                    <div class="pic-paper-box">
                        <div class="pic-list-wrapper">
                            <ul class="pic-list cf">
                                <template v-for="(item,index) in imagePaperDetailContent">
                                    <li class="pic-box js-pic-box">
                                        <a :href="item.image_url" data-fancybox-group="gallery">
                                            <p class="image">
                                                <img :src="item.image_url" alt=""/>
                                            </p>
                                            <span class="tab-index">{{index+1}}</span>
                                        </a>
                                    </li>
                                </template>
                            </ul>
                        </div>

                        <div class="paper-box">
                            <h2 class="title">2018年初中数学</h2>
                            <p class="question-type">选择题（共24小题，每小题2分，合计48分）</p>
                            <dl class="question-wrapper">
                                <dt class="question-name">1、硫隔绝空气加热后的蒸气中有一种物质的化学式为S8，关于S8的叙述不正确的是（    ）</dt>
                                <dd class="option">A.它是一种新型的化合物</dd>
                                <dd class="option"> B.它是一种单质</dd>
                                <dd class="option selecter"> C.它的一个分子中有8个硫原子 </dd>
                                <dd class="option"> D.相对分子质量为256</dd>
                                <dd class="analyze">
                                    <p class="a-answer">答案：B</p>
                                    <p class="a-info">解析：硫隔绝空气加热后的蒸气中有一种物质的化学式,硫隔绝空气加热后的蒸气中有一种物质的化学式</p>
                                </dd>
                            </dl>
                            <dl class="question-wrapper">
                                <dt class="question-name">2、硫隔绝空气加热后的蒸气中有一种物质的化学式为S8，关于S8的叙述不正确的是（    ）</dt>
                                <dd class="option">A.它是一种新型的化合物</dd>
                                <dd class="option"> B.它是一种单质</dd>
                                <dd class="option selecter"> C.它的一个分子中有8个硫原子 </dd>
                                <dd class="option"> D.相对分子质量为256</dd>
                                <dd class="analyze">
                                    <p class="a-answer">答案：B</p>
                                    <p class="a-info">解析：硫隔绝空气加热后的蒸气中有一种物质的化学式,硫隔绝空气加热后的蒸气中有一种物质的化学式</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div class="btn-wrapper cf">
                        <button type="button" name="button" class="next-btn review2-btn">此卷重复</button>
                        <a href="reviewPic3.html" class="next-btn review2-btn">下一步</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

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
                imagePaperDetailContent:'',
            }
        },
        computed: {

            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },

        mounted(){

            var that = this;
            that.taskId = this.$route.params.taskId;
            that.paperType = this.$route.params.paperType;
            that.imagePaperDetail();
            that.doSearch();
            common.init();

        },
        methods:{
            imagePaperDetail(){
                var that = this;
                axios.get('youdao/imagePaper/imagePaperDetail',{params:{userKey:that.userKey,taskId:that.taskId,paperType:that.paperType,allType:1}}).then(function(data){
                    if(data.data){

                            that.imagePaperDetailContent = data.data;

                    }
                    that.$nextTick(function() {
                        common.init();
                    });
                })
            },
            doSearch(){
                var that = this;
                console.log(JSON.parse(localStorage.getItem("paperSearchArgs")));
                var searchArgs = JSON.parse(localStorage.getItem("paperSearchArgs"));

                axios.get('youdao/imagePaper/paperList',{params:searchArgs}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.$nextTick(function () {
                            console.log(data.data.rows);
                            //that.jsPage();
                        });
                    }
                })
            }

        }

    }
</script>