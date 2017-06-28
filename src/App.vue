<!-- 简单写个title和一个循环 -->
<template>
    <div id="example">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="n in 5">{{ n }}</li>
        </ul>
        <img src="img/1_bai.png" alt="">
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

<style scoped>
    #example {
        background: skyblue;
        /*height: 100vh;*/
        height:100px;
    }
</style>