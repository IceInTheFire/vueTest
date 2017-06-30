<template>
    <div class="bodyMidde carousel-box">
        <v-head :change = "change" class = "head"></v-head>
        <div v-if="anchor == 'main'">
            <swiper :options="swiperOption"  ref="mySwiper" class="carousel">
                <!--&lt;!&ndash; 这部分放你要渲染的那些内容 &ndash;&gt;-->
                <swiper-slide v-for="item in items">
                    Slide {{item}}
                </swiper-slide>
                <!-- 这是轮播的小圆点 -->
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
            </swiper>

            <br>

            <swiper :options="swiperOption2" class="carousel">
                <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
                <swiper-slide v-for="item in items">
                    Slide {{item}}
                </swiper-slide>
            </swiper>
            <br>
            <swiper :options="swiperOption3"  ref="mySwiper" class="carousel swiper-no-swiping">
                <!--&lt;!&ndash; 这部分放你要渲染的那些内容 &ndash;&gt;-->
                <swiper-slide v-for="list in lists">
                    <img :src="list" alt="" @click="click" ondragstart="return false;">
                </swiper-slide>
                <!-- 这是轮播的小圆点 -->
                <div class="swiper-pagination swiper3-pagination" slot="pagination"></div>
                <div class="swiper-button-prev swiper3-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next swiper3-button-next" slot="button-next"></div>
                <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
            </swiper>
        </div>

        <img-lazy v-if="anchor == 'img'"></img-lazy>

        <br>
        <div class="bar" v-for="data in datas" @click="change(data)" :class="data.anchor == anchor? 'active':''">
            {{ data.title }}
        </div>

    </div>
</template>
<style lang="less" scoped>
    .carousel-box{
        .carousel{
            width: 1200px;
            height: 300px;
            background:skyblue;
            img{
                width: 100%;
                height: 100%;
                /*width: 1200px;*/
                /*height: 300px;*/
                /*-webkit-background-size:cover;*/
                /*background-size:cover;*/
            }
        }
        .bar{
            width: 100px;
            line-height: 30px;
            padding-left:10px;
            min-height: 30px;
            margin-bottom: 10px;
            border: 1px solid #979797;
            cursor: pointer;
        }
        .active{
            background:lightskyblue;
        }
    }
</style>
<script>
    import core from "core";
    import imgLazy from "./img-lazy.vue";
//    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        computed:{
//            swiper() {
//                return this.$refs.mySwiper.swiper;
//            }
        },
        data(){
            return {
                datas: [
                    {title:'主页', anchor:'main'},
                    {title:'轮播图页', anchor:'img'}
                ],
                anchor:'img',
                swiperOption: {
                    //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
//                    notNextTick: true,
                    pagination: '.swiper-pagination',
                    slidesPerView: 'auto',
//                    centeredSlides: true,
                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
//                    spaceBetween: 30,
                    loop: true,//循环
                    keyboardControl: true,//键盘控制器
                    mousewheelControl: true, //滚轮控制器
                    autoHeight: true,
//                    grabCursor: true,
//                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: 2500,
//                    parallax: true,
                    speed: 700,
                    centeredSlides: true,
                    paginationClickable: true,
                    autoplayDisableOnInteraction: false,
                    zoom:true, //聚焦变大
//                    paginationType: 'progress',
                    onSlideChangeEnd: swiper => {
                        //这个位置放swiper的回调方法
                        this.page = swiper.realIndex+1;
                        this.index = swiper.realIndex;
                        console.log("aaaa");
                    }
                },
                items:[1,2,3,4,5,6,7,8,9,10],
                swiperOption2: {
//                    scrollbar: '.swiper-scrollbar',
                    scrollbarHide: true,
                    slidesPerView: 'auto',
//                    centeredSlides: true,
//                    spaceBetween: 30,
//                    grabCursor: true,
//                    direction:'vertical',
                    paginationType: 'progress',
                },
                lists: [
                    'http://pics.sc.chinaz.com/files/pic/pic9/201702/zzpic1399.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201612/fpic9875.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201610/fpic8220.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201611/fpic8607.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201611/fpic8745.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201701/zzpic437.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201610/apic23881.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201608/fpic5949.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201608/fpic6419.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201609/fpic7403.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201609/fpic7317.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201605/fpic1376.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201606/apic21195.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201606/apic21465.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201604/apic20040.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201604/fpic914.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201604/fpic873.jpg',
                    'http://pics.sc.chinaz.com/files/pic/pic9/201605/fpic1208.jpg'
                ],
                swiperOption3: {
                    //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    pagination: '.swiper3-pagination',
                    slidesPerView: 'auto',
//                    paginationClickable: true,
                    nextButton: '.swiper3-button-next',
                    prevButton: '.swiper3-button-prev',
//                    spaceBetween: 30,  //slider之间的间距
                    loop: true,//循环
                    keyboardControl: true,//键盘控制器
                    mousewheelControl: true, //滚轮控制器
                    autoHeight: true,
//                    grabCursor: true,
//                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: 2500,
//                    parallax: true,
//                    speed: 700,
                    centeredSlides: true,
                    paginationClickable: true,
                    autoplayDisableOnInteraction: false,
                    zoom:true, //聚焦变大
                    hashnav: true,
//                    paginationType: 'progress',
                    onSlideChangeEnd: swiper => {
                        //这个位置放swiper的回调方法
                        this.page = swiper.realIndex+1;
                        this.index = swiper.realIndex;
//                        console.log("aaaa");
                    }
                },
            }
        },
        created(){

        },
        mounted(){
//            console.log("like");
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
//            this.swiper.slideTo(0, 0, false);
        },
        components: {
//            swiper,
//            swiperSlide
            imgLazy,
        },
        methods: {
            click() {
              console.log("click");
            },
            change(data) {
                this.anchor = data.anchor;
                console.log(this.anchor);
            },
        }
    }
</script>
