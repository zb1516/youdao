export default {
    //提交mutations方法
    setUserMutations({commit}){
        commit("setUser");
    },
    setUserKeyMutations({commit},userKey){
        commit('setUserKey',userKey);
    },
    setPaperMutations({commit},paperId)
    {
        commit('setPaperId',paperId);
    },
    setSubjectMutations({commit})
    {
        commit('setSubject');
    }
}