<template>
    <div class = "head" :class = "mode" >
        <div class = "middle cf">
            <!--<div class = "logo" ><img :src = "imgSrc" /></div>-->
            <div class = "logo" ></div>
            <div class = "pull-right navWrap">
                <router-link class = "nav" :class = "{ active : $route.path == nav.path }" v-for = "nav in navs" :to = "nav.path">
                    {{ nav.title }}
                </router-link>
            </div>
            <router-link v-show = "!hasToken" class = "logn" :to = "{ path:'/login/in' }">
                登录
            </router-link>
            <router-link v-show = "!hasToken" class = "register" :to = "{ path:'/login/register' }">
                注册
            </router-link>
            <router-link :to = "'/userInfo'" class = "userInfo" v-if = "hasToken"  >
                <img class = "avatar" :src = "userInfo.avatar" /><span class = "nickName" > {{ userInfo.userName }}</span>
            </router-link>
        </div>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less" type="text/css">
    @h-font-size: 14px;
    @h-line-height: 20px;
    @h-distance-to-top: 25px;
    .head{
        width:100%;
        height: 70px;
        position: relative;
    }
    .transparent{
        background: rgba(255,255,255,0);
    }
    .middle{
        margin: 0 auto;
        width: 1200px;
        position: relative;
    .logo{
        width: 122px;
        height: 31px;
        margin-top: 20px;
        margin-left: 23px;
        float:left;
        border: 1px solid #979797;
    img{
        width: 100%;
        display: block;
    }
    }
    .navWrap{
        margin-right: 197px;
    .nav{
        float: left;
        margin-left: 36px;
        margin-right: 36px;
        line-height: @h-line-height;
        font-size: @h-font-size;
        padding-top: @h-distance-to-top;
        padding-bottom: 21px;
        display: block;
        color:#fff;
    }
    }
    .nav.active{

    }
    .logn{
        height: @h-line-height;
        line-height: @h-line-height;
        font-size: @h-font-size;
        padding-top: @h-distance-to-top;
        position: absolute;
        top:0px;
        right: 144px;
        color:#fff;
    }
    .register{
        position: absolute;
        height: @h-line-height;
        line-height: @h-line-height;
        font-size: @h-font-size;
        padding-top: @h-distance-to-top;
        right: 40px;
        top:0px;
        color:#fff;
    }
    }
    .userInfo{
        display:block;
        position: absolute;
        font-size: 0px;
        right: 41px;
        top:25px;
    .avatar{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: top;
    }
    .nickName{
        display: inline-block;
        line-height: 20px;
        font-size: 14px;
        color:#fff;
    }
    }
    .head.mode-1{
        background: rgba( 255,255,255,0.4 );
    }
    .head.mode-1 .middle .navWrap .nav{
        color: #333;
    }
    .head.mode-1 .middle .logn{
        color: #333;
    }
    .head.mode-1 .middle .register{
        color: #333;
    }
    .head.mode-1 .middle .nickName{
        color:#333;
    }


    .head.mode-2{
        background: #fff;
        box-shadow: 0 2px 4px 0px rgba(0,0,0,0.5);
    }
    .head.mode-2 .middle .navWrap .nav{
        color: #4C4C4C;
    }
    .head.mode-2 .middle .logn{
        color: #4C4C4C;
    }
    .head.mode-2 .middle .register{
        color: #4C4C4C;
    }
    .head.mode-2 .middle .nickName{
        color:#4C4C4C;
    }


</style>
<script>
//    import img from "../img/dsbLogo.png";
//    import img_1 from "../img/dsbLogo-1.png";
//    import img_2 from "../img/dsbLogo-2.png";

    export default{
        data(){
            return{
                navs:[
                    {
                        title:"首页",
                        path :"/home"
                    },
                    {
                        title:'loading',
                        path :"/loading"
                    },
                    {
                        title: "图片懒加载",
                        path: "/imgViewload"
                    },
                    {
                        title: "图片懒加载(lazyLoad)",
                        path: "/imglazyload"
                    },
                    {
                        title:"轮播",
                        path: "/carousel"
                    }
                ]
            }
        },
        props:["mode","change"],
        computed:{
            hasToken(){
                console.log( "hasToken run!" );
//                return Boolean( this.$store.state.user.UserInfo.token );
//                return Boolean( this.$store.state.user.UserInfo );
                return false;
            },
            userInfo(){
                return this.$store.state.user.UserInfo;
            },
            imgSrc(){
//                if( this.mode == "mode-1" ){
//                    return img_1;
//                }else if( this.mode == "mode-2" ){
//                    return img_2;
//                }else{
//                    return img;
//                }
            }
        },
        components:{

        },
        watch:{
            change(){
                console.log( "change!!" );
                this.hasToken = this.hasToken;
//                this.userInfo = this.userInfo;
            }
        }
    }
</script>
