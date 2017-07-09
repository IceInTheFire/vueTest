import ajax from "./ajax.js";
import apiUrlList from "./api.js";
import util from "./util.js";
import cookie from "./cookie.js";
import loading from "./loading.js";
import toast from "./toast.js";

ajax.beforeEach((res,next) => {
    //res.url = 'http://localhost:7777' + res.url;
    res.data.s = '测试专用';
    res.url = 'http://yueqingfang.cn' + res.url
    //其他信息处理内容区域


    //-----------------
    next();
})

ajax.afterEach((res,next) => {
    if (res) {
        next();
        // if(res.code == 'success') {
        //     next()
        // } else if(res.code == "ERR_TOKEN_EXPIRED") {
        //     toast('token过期，请重新登录');
        //
        //     var set = setTimeout(function() {
        //
        //         localStorage.removeItem('user');
        //         // location.href = "http://yueqingfang.cn/pc/login/in";
        //         location.href = "http://localhost:3011/pc/login/in";
        //         clearTimeout(set);
        //         set = null;
        //         exports.default.set;
        //     },500);
        //
        // } else {
        //     exports.default.toast(res.message);
        // }

    } else {
        exports.default.toast('加载失败')
        next();
    }
});

function _filter(str){
    str += '' //隐式转换
    str = str.replace(/%/g, '%25')
    str = str.replace(/\+/g, '%2B')
    str = str.replace(/ /g, '%20')
    str = str.replace(/\//g, '%2F')
    str = str.replace(/\?/g, '%3F')
    str = str.replace(/&/g, '%26')
    str = str.replace(/\=/g, '%3D')
    str = str.replace(/#/g, '%23')
    return str
}

var _ajax = {
    defaultSetting:{
        url : window.location,
        type : 'GET',
        data : {},
        dataType : 'json',
        success:function(){

        },
        error:function(){

        }
    },
    send:function(option){
        option = Object.assign( this.defaultSetting, option );
        var query = [];
        var xhr = new XMLHttpRequest();
        for( var key in option.data ){
            query.push( key + "=" + _filter( option.data[key] ) );
        }
        if( option.type.toUpperCase() == "GET" ){
            xhr.open( "GET" , option.url + "?" + query.join("&") , true );
            xhr.send();
        }else{
            xhr.open(setting.type, setting.url, true)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhr.send(query.join('&'))
        }
        xhr.onreadystatechange = function(){
            if( xhr.readyState == 4 ){
                if( xhr.status == 200 ){
                    option.success( JSON.parse( xhr.responseText ) );
                }else{
                    option.error();
                }
            }
        }
    }
}

//post 请求封装
var post = (url, data = {}, success = () => { }, error = () => { }, head = {}) => {
    ajax({ url, data, success, error, type: 'POST',head })
};


//promise 请求封装
var pPost = (url, data) => {
    loading.showLoading();
    return new Promise(function(resolve,reject){
        post(url, data, (res) => {
            loading.hideLoading();
            if(res.code == "success") {
                resolve(res);
            }
            else {
                toast(res.message);
                loading.hideLoading();
                reject(res);
            }
        }, (error) => {
            console.log("error");
            console.log(error);
            loading.hideLoading();
            toast('接口出错');  //网络不好还是服务器错误，后期再做区分
            reject('接口出错');
        },(error) =>{
            loading.hideLoading();
            toast('网络出错');  //网络不好还是服务器错误，后期再做区分
        })
    });
};
//请求封装
var api = {};
for( let itemFirst of Object.keys(apiUrlList.apiUrlList) ) {
    api[itemFirst] = {};

    for( let item of Object.keys(apiUrlList.apiUrlList[itemFirst]) ) {

        var config = apiUrlList.apiUrlList[itemFirst][item];
        api[itemFirst][item] = (function (config) {
            return function () {
                var action = config;
                return pPost(action, arguments[0]);
            }
        })(config);
    }
}


export default {
    get(url, data = {}, success = () => { }, error = () => { },head = {}) {
        ajax({ url, data, success, error, type: 'GET' },head)
    },
    post: post,
    api: api,
    toast: toast,
    loading:loading,
    operateCookie:cookie,
    util:util,
    // _ajax:_ajax
}
