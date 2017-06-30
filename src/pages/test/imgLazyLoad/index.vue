<template>
    <div class="bodyMidde">
        <div class="h70">
            <v-head :change = "change" class = "head"></v-head>
        </div>
        <!--zfl pc端-->
        <div class="activityBox">
            <div class="activityLump" v-for="img in list">
                <!--<img v-lazy="img">-->
                <!--<img src="http://img.zcool.cn/community/0161f656b0663e6ac7256cb052d31a.gif" v-view="img">-->
                <!--<img src="image/loading.gif" v-view="img">-->
                <!--<img :src="loadgif" v-view="img">-->
                <img v-lazy="img">
                <!--<div v-lazy:background-image="img"></div>-->
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .head{
        position: fixed;
        left:0px;
        top:0px;
        z-index: 2;
    }
    .activityBox{
        width: 1200px;
        margin: 0 auto;
        padding: 0 25px;
    }
    .activityLump{
        width: 275px;
        margin-left:10px;
        /*border: 1px solid #979797;*/
        min-height:100px;
        float: left;
        margin-top: 10px;
    }
    .activityLump img{
        width: 275px;
        height: 100px;
    }
</style>
<script>
    import core from "core";
    export default{
        data(){
            return {
                msg: 'hello vue',
                list: [
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
                change: false
            }
        },
        created(){

        },
        mounted(){

        },
        components: {},
        beforeDestroy(){
        },
        destroyed(){
        },
        methods: {}
    }
</script>
