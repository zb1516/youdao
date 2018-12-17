
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import App from './App.vue'
import qs from 'qs'
import VueRouter from 'vue-router'
import store from './vuex/store'
import index from './routes'
import teacher from './teacher'
import manage from './manage'
import error from './error'
import "./http"
import Message from 'vue-multiple-message'

Vue.prototype.$message = Message
Vue.prototype.$qs=qs;
Vue.use(VueRouter)
const router=new VueRouter({
    routes: [
        ...index,
        ...teacher,
        ...manage,
        ...error
    ]
})
//路由拦截器
router.beforeEach((to, from, next) => {
    if(to.params.userKey == ''){
        next('/');
    }
    if(store.state.userKey == '')
    {
        let userKey = to.params.userKey;                //获取userKey
        store.dispatch('setUserKeyMutations',userKey);  //设置userKey
        store.dispatch('setUserMutations');             //设置用户信息
    }
    //判断学科是否存在
    if(Object.keys(store.state.subjectList).length<=0)
    {
        //获取学科
        store.dispatch('setSubjectMutations');
    }
    next();
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
})
