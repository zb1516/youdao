<template>
    <div class="m-layer" v-if="errorShow">
        <div class="mask-error">
            <div class="mask-error-title">纠错
                <span class="icon-close" @click="close">×</span>
            </div>
            <div class="mask-error-con">
                <div class="mask-error-con-title">错误类型</div>
                <div>
                    <div id="check_css3">
                        <div>
                            <input class="magic-checkbox"  id="check1" type="checkbox" value="题干有误" v-model="errorType">
                            <label for="check1">题干有误</label>
                        </div>
                        <div>
                            <input  class="magic-checkbox"  id="check2" type="checkbox" value="答案有误" v-model="errorType">
                            <label for="check2">答案有误</label>
                        </div>
                        <div>
                            <input  class="magic-checkbox"  id="check3" type="checkbox" value="解析有误" v-model="errorType">
                            <label for="check3">解析有误</label>
                        </div>
                        <div>
                            <input  class="magic-checkbox"  id="check4" type="checkbox" value="知识点标注有误" v-model="errorType">
                            <label for="check4">知识点标注有误</label>
                        </div>
                    </div>
                </div>
                <div class="mask-error-con-title">错误描述:</div>
                <textarea name="" v-model="errorDesc" placeholder="请输入错误描述，最多100字。"></textarea>
                <div class="mask-error-tip">字数不能超过100字哦。</div>
                <div class="mask-error-btn">
                    <button class="mask-error-confirm" @click="errorSubmit">确认</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        props:['errorShow','errorClose','questionId'],
        data(){
            return {
                errorType:[],
                errorDesc:''
            }
        },
        methods:{
            close(){
                this.$emit('errorClose');
            },
            errorSubmit(){
                let that=this;
                if(that.questionId<=0 || that.errorType.length<=0 || that.errorDesc.length<=0)
                {
                    that.$message.error('请将纠错表单填写完整');return false;
                }
                let obj=that.$qs.stringify({
                    questionId:that.questionId,
                    errorType:that.errorType,
                    errorDesc:that.errorDesc,
                    userKey:that.userKey,
                    agencyId:that.user.agency_id,
                    agencyName:that.user.agency_name,
                    userName:that.user.user_name,
                    userRealname:that.user.user_realname
                });
                axios.post("/label/question/questionErrorReport",obj).then(res=>{
                   if(res.status == 0)
                   {
                       that.$message.error(res.errorMsg);return false;
                   }
                   that.close();
                }).catch(function (error) {
                    that.$message.error(error.message);
                })
            }
        },
        computed:{
            ...mapGetters({
                user:'getUser',
                userKey:'getUserKey'
            })
        }
    }
</script>