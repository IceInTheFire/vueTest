/* 引入vue和主页 */
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import routes from './routes/routes'
import  storeInfo  from './store/'



console.log("靠你大爷");

Vue.use(VueRouter);
Vue.use( Vuex );


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
}).$mount('#app')
console.log("router");
console.log(router);
console.log(store);
console.log("store");

// new Vue({ router,store }).$mount('#app');
