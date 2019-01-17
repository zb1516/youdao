import axios from 'axios'
export default {
    //方法
    setUser(state){
        //发送请求获取用户信息
        axios.get("/youdao/user/getUserInfo",{params:{userKey:state.userKey}}).then(res=>{
            state.user=res.data;
        });
    },
    setUserKey(state,userKey){
        state.userKey=userKey;
    }
    // setPaperId(state,paperId)
    // {
    //     state.paperId=paperId;
    // },
    // setSubject(state,subject)
    // {
    //     axios.get("label/common/getSubjects",{params:{userKey:state.userKey}}).then(res=>{
    //         state.subjectList=res.data;
    //     });
    // }
}