
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import App from './App.vue'
import VueRouter from 'vue-router'
import $ from 'jquery'
import store from './vuex/store'
import imagePaper from './imagePaper'
import paper from './paper'
import "./http"
import error from './error'
import "./http"
import Message from 'vue-multiple-message'

Vue.prototype.$message = Message


//
// import "./static/js/jquery.min.js"


//import "./static/js/pagination/pagination.min.js"

Vue.use(VueRouter)
const router=new VueRouter({
    routes: [
        ...imagePaper,
        ...paper,
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
