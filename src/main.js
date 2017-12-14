/* 引入vue和主页 */
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import routes from './routes/routes';
import  storeInfo  from './store/';
import components from './components/'; //加载公共组件
import core from "./core";

// import VueViewload from 'vue-viewload';  //webpack2下出错  webpack1下成功
import VueAwesomeSwiper from 'vue-awesome-swiper';

// import VueLazyload from 'vue-lazyload/vue-lazyload-next';

// for Vue 1.0
import VueLazyload from 'vue-lazyload'
// for Vue 2.0
// import VueLazyload from 'vue-lazyload/vue-lazyload-next'




Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()); //首字母大写
    Vue.component(`v${name}`, components[key])
});


Vue.use(VueRouter);
Vue.use( Vuex );
// Vue.use(VueViewload);
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
    error: '/dist/js/../static/img/1_bai.png',
    // error: '',//页面若有大量图片最好不要传参数，默认空就好了
    loading: '/dist/js/../static/font/loading.gif',//页面若有大量图片最好不要传参数，默认空就好了
    try: 3, // default 1
    preLoad: 1,
    attempt:1    //可视加载一行
})


var store = new Vuex.Store( storeInfo );
const router = new VueRouter({
    routes,
    mode: 'history',
    base: '/dist/'
});

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta;

    // var isLogin = Boolean(store.state.user.UserInfo.token); //true用户已登录， false用户未登录
    var isLogin = Boolean(store.state.user.UserInfo); //true用户已登录， false用户未登录

    if( auth && !isLogin ) { //跳转到登录页面
        console.log("没有权限登录");
        // return next({ path: '/login/in' });
    }

    next();
})

/* 实例化一个vue */
new Vue({
    el: '#app',
    router,store,
    render: h => h(App)
})

// new Vue({ router,store }).$mount('#app');
