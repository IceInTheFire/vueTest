<template>
    <div class="bodyMiddle">
        <div class="h70">
            <v-head :change = "change" class = "head"></v-head>
        </div>
        <button v-show="!loading" @click="resetLoading" class="btn btn-blue">开始loading</button>
        <button v-show="loading" @click="resetLoading" class="btn btn-blue">关闭loading</button>
        <br>
        <br>
        <button @click="onClickGet" class="btn btn-blue">获取</button>
        <br>
        <br>
        <table v-show="datas.length">
            <thead>
                <tr>
                    <td>uid</td>
                    <td>uname</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in datas">
                    <td>{{ data.uid }}</td>
                    <td>{{ data.uname }}</td>
                </tr>
            </tbody>
        </table>
        <img src="../../img/loading.gif" alt="">
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less" type="text/css">
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
                msg: 'home',
                change : false,
                loading : true,
                datas: []
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
            onClickGet() {
                var that = this;
                core.api.shuju.shuju({}).then(function(response){
                    if(response.code == 'success') {
                        that.datas = response.model.dataList;
                    }
                }).catch(function(reason){
                    if(reason == '接口出错') {
                        console.log("接口出错");
                    } else {
                        console.log("错误信息");
                    }
                })
            }
        }
    }
</script>
