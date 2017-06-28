<!-- 简单写个title和一个循环 -->
<template>
    <div id="example">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="n in 5">{{ n }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/css">
    #example {
        background: skyblue;
        /*height: 100vh;*/
        height: 1000px;
    }
</style>