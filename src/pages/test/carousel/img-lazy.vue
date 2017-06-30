<template>
    <div class="lazy-img">

        <!--asdasd-->
        <!--<swiper :options="swiperOption4"  ref="mySwiper" class="carousel swiper-no-swiping">-->
        <swiper :options="swiperOption4"  ref="mySwiper" class="carousel swiper-no-swiping">
            <!--&lt;!&ndash; 这部分放你要渲染的那些内容 &ndash;&gt;-->
            <swiper-slide v-for="list in lists">
                <img :src="list" alt="" @click="click" ondragstart="return false;">
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination swiper4-pagination" slot="pagination"></div>
            <div class="swiper-button-prev swiper4-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next swiper4-button-next" slot="button-next"></div>
            <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
        <button  @click.stop.prevent="clickPrev()" class="btn btn-blue">PREV</button>
        <button  @click.stop.prevent="clickNext()" class="btn btn-blue">NEXT</button>
        <ul class="box">
            <li :class="index == i? 'active':''" v-for="(list, i) in lists" @click.stop.prevent="clickIndex(i)"></li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    .lazy-img{
        .carousel{
            width: 1200px;
            height: 500px;
            background:skyblue;
            img{
                width: 100%;
                height: 100%;
                /*width: 1200px;*/
                /*height: 300px;*/
                /*-webkit-background-size:cover;*/
                /*background-size:cover;*/
                cursor: pointer;
            }
        }
        .box{
            padding:10px 10px 10px 0;
            li{
                width: 10px;
                height: 10px;
                border-radius: 5px;
                background: #666666;
                float: left;
                margin-right: 5px;
                cursor: pointer;
            }
            li:hover{
                background:skyblue;
            }
            .active{
                background:skyblue;
            }
        }
    }
</style>
<script>
    import core from "core";
    export default{
        data(){
            return {
                index: 0,
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
                swiperOption4: {
                    //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    pagination: '.swiper4-pagination',
                    slidesPerView: 'auto',
//                    paginationClickable: true,
                    nextButton: '.swiper4-button-next',
                    prevButton: '.swiper4-button-prev',
//                    spaceBetween: 30,  //slider之间的间距
                    loop: true,//循环
                    keyboardControl: true,//键盘控制器
                    mousewheelControl: true, //滚轮控制器
                    autoHeight: true,
//                    grabCursor: true,
//                    centeredSlides: true,
                    autoplay: 2500,
//                    parallax: true,
//                    speed: 450,
                    paginationClickable: true,
//                    freeMode: true, //自由滑动
                    autoplayDisableOnInteraction: false,
//                    noSwiping: true,
//                    noSwipingClass: 'swiper-no-swiping',
//                    zoom:true, //聚焦变大
//                    hashnav: true,
//                    paginationType: 'progress',
                    onSlideChangeStart: swiper => {
                        //这个位置放swiper的回调方法
//                        console.log(swiper.realIndex+1);
//                        this.page = swiper.realIndex+1;
                        this.index = swiper.realIndex;
//                        console.log("aaaa");
                    },
                    onSlideChangeEnd: swiper => {
                        //这个位置放swiper的回调方法
//                        console.log(swiper.realIndex+1);
//                        this.page = swiper.realIndex+1;
                        this.index = swiper.realIndex;
//                        console.log("aaaa");
                    },
                },
            }
        },
        computed: {
            //定义这个sweiper对象
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        created(){

        },
        mounted(){
//            this.swiper.slideTo(0, 0, false);
            console.log("====");
            console.log(this.swiper);
        },
        components: {
        },
        methods: {
            clickPrev() {
                this.swiper.slidePrev();
            },
            clickNext() {
                this.swiper.slideNext();
            },
            clickIndex(i) {
                console.log(i);
                this.swiper.slideTo(i);
//                this.swiper.slideTo(index, speed, runCallbacks);
            },
            click(){
                console.log("asdasd");
            }
        }
    }
</script>
