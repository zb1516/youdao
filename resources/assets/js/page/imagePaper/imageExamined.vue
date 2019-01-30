<template>
    <div class="main">
        <div class="pic-review1 review3">
            <div class="nav-wrapper">
                <!--<a href="" class="back-btn">返回</a>-->
                <router-link  :to="{name:'imagePaper-imagePaperList-imageSearch',params:{userKey:userKey,paperType:paperType,taskId:taskId,allType:1}}" class="back-btn">返回</router-link>
                <span class="nav-con">
            <span>操作说明：</span>
            <span class="tab select"><span class="circle">1</span><span class="tab-text">贴标签</span></span>
            <span class="tab select"><span class="circle">2</span><span class="tab-text">搜索排重</span></span>
            <span class="tab select"><span class="circle">3</span><span class="tab-text">审核图片</span></span>
            <span class=""><span class="circle">4</span><span class="tab-text">完成审核</span></span>
          </span>
            </div>
            <div class="tab-con-wrapper">
                <h2 class="title">第三步 审核图片</h2>
                <div class="reviw-info-wrapper">
                    <div class="r-type-box">
              <span class="r-type">
                <span class="radio select js-radio"></span>
                <span>图片有问题</span>
              </span>
                        <span class="r-type">
                <span class="radio js-radio js-error"></span>
                <span>图片无问题</span>
              </span>
                    </div>
                    <div class="r-type1-info">
                        <div class="error-box js-error-box">
                            <p class="r-option">
                                <span class="checkbox js-checkbox"></span>
                                <span class="r-error-msg">图片不清晰</span>
                            </p>
                            <p class="r-option">
                                <span class="checkbox select js-checkbox"></span>
                                <span class="r-error-msg">图片太暗了</span>
                            </p>
                            <p class="r-option">
                                <span class="checkbox js-checkbox"></span>
                                <span class="r-error-msg">图片不完整</span>
                            </p>
                            <p class="r-option">
                                <span class="checkbox js-checkbox"></span>
                                <span class="r-error-msg">题目或答案缺失</span>
                            </p>
                            <input type="hidden" value="0" class="js-hidden-type-id"/>
                        </div>
                    </div>
                    <a href="javascript:;" class="next-btn review2-btn" @click="doNext">下一步</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "../../static/js/jquery.min.js"
    import "../../static/js/jquery.plugin.js"
    import common from "../../static/js/jquery.common.js"
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                isType:0,
                taskId:'',
                paperType:''
            }
        },
        computed: {

            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },
        watch:{

        },
        mounted(){
            var that = this;
            that.taskId = this.$route.params.taskId;
            that.paperType = this.$route.params.paperType;
            that.doSelect();

            common.init();
        },
        methods:{

            doSelect(){
                $('.js-radio').click(function(){
                    var $this = $(this),
                        $errorBox = $('.js-error-box'),
                        isError = $this.hasClass('js-error'),
                        $hiddenBox = $('.js-hidden-type-id'),
                        hiddenVal = '';

                    $this.hasClass('select') ? $this.removeClass('select') :
                        $this.addClass('select').parent().siblings('span').find('.js-radio').removeClass('select');
                    isError ? $errorBox.hide() : $errorBox.show();

                    hiddenVal = $this.next().html() == '图片有问题' ? 0 : 1;
                    $hiddenBox.val(hiddenVal);


                });
                $('.js-checkbox').click(function(){
                    $(this).hasClass('select') ? $(this).removeClass('select') : $(this).addClass('select');
                });
            },
            doNext(){
                var str = '',

                    typeVal = $('.js-hidden-type-id').val(),
                    that = this;

                if(parseInt(typeVal)){
                    var searchArgs = JSON.parse(localStorage.getItem("paperSearchArgs"));
                    searchArgs.userKey = that.userKey;
                    axios.get('youdao/imagePaper/paperPass',{params:searchArgs}).then(function(data){
                        // if (data.data.errorMsg) {
                        //     that.$message.error(data.data.errorMsg);
                        // }
                        if (data.data == true) {
                            that.$message({
                                message: '审核通过',
                                type: 'success'
                            });
                        }
                    })
                }else{
                    $(".js-error-box").find('.select').next('span').each(function(){
                        str += $(this).text()+',';

                    });
                    axios.get('youdao/imagePaper/paperReturn',{params:{userKey:that.userKey,taskId:that.taskId,imageErrorType:str}}).then(function(data){
                        if (data.data.errorMsg) {
                            that.$message.error(data.data.errorMsg);
                        }
                        if (data.data == true) {
                            that.$message({
                                message: '退回成功',
                                type: 'success'
                            });

                        }
                    })
                }
                that.$router.push({
                    name: 'imagePaper-imagePaperList-imageResult',
                    params:{userKey:that.userKey,imageStatus:typeVal}
                });
            },
        }

    }
</script>