<template>
    <div class="bodyMidde">
        <div class="h70">
            <v-head :change = "change" class = "head"></v-head>
        </div>

        <!--zfl pc端-->

        <div class="activityBox">
            <div class="activityLump">
                <img src="" alt="">
            </div>
            <div class="activityLump">
                <img src="" alt="">
            </div>
            <div class="activityLump">
                <img src="" alt="">
            </div>
            <div class="activityLump">
                <img src="" alt="">
            </div>
            <div class="activityLump">
                <img src="" alt="">
            </div>
        </div>

        <button v-show="!loading" @click="resetLoading" class="btn btn-blue">开始loading</button>
        <button v-show="loading" @click="resetLoading" class="btn btn-blue">关闭loading</button>
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
    //    import util from 'util'
    export default{
        data(){
            return {
                msg: 'zfl home',
                change : false,
                loading : true,
            }
        },
        created(){

        },
        mounted(){
            core.loading.showLoading();
        },
        beforeDestroy(){
            core.loading.hideLoading();
        },
        destroyed(){
            core.loading.hideLoading();
        },
        components: {},
        methods: {
            resetLoading(){
                if(this.loading) {
                    core.loading.hideLoading();
                    this.loading = false;
                } else {
                    core.loading.showLoading();
                    this.loading = true;
                }
            },
        }
    }
</script>
