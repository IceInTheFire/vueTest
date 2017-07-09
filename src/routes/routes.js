import App from "../App.vue";
/*
* auth true 登录才能访问，false不需要登录，默认true
* */

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/home',
                meta: { auth: false },
                component: resolve => require(["../pages/home/"], resolve )
            },
            // {
            //     path: '/imgViewload',
            //     meta: { auth: false },
            //     component: resolve => require(["../pages/test/imgViewload/"], resolve )
            // },
            {
                path: '/imglazyload',
                meta: { auth: false },
                component: resolve => require(["../pages/test/imglazyload/"], resolve )
            },
            {
                path: '/loading',
                meta: { auth: false },
                component: resolve => require(["../pages/test/loading/"], resolve )
            },
            {
                path: '/carousel',
                meta: { auth: false },
                component: resolve => require(["../pages/test/carousel/"], resolve )
            },
            {
                path: '*', //其他页面
                redirect: '/home'
            },
            {
                path: '',
                redirect: '/home'
            }
        ]
    }
]