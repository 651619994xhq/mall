<template>
    <div class="container">
        <div class="commodity col flex-item flex-justify-start">
            <div class="commodity-item row flex-item flex-justify-start" v-for="(item,index) in list" :key="index">
                  <div class="select-btn col flex-item flex-justify">
                      <div class="btn1">

                      </div>
                  </div>
                  <div class="img-view"></div>
                  <div class="content"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shop",
        data() {
            return {
                list:[{},{},{},{},{}]







            }
        },
//组件
        components: {},
//初始化数据
        created() {

        },
//一些自定义方法
        methods: {}
    }
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .commodity{
       width: 100%;
       overflow: hidden;
    }
    .commodity-item{
        margin-top: 20px;
        width: 710px;
        height: 300px;
        border-radius: 20px;
        background: #FFFFFF;
        overflow: hidden;
        .select-btn{
            width: 76px;
            height: 100%;
            .btn1{
                width:28px;
                height:28px;
                border:3px solid rgba(136,136,136,1);
                border-radius:50%;
            }
        }
        .img-view{
            width: 127px;
            height: 176px;
            background: #F7F6FB;
        }
        .content{
            width: 450px;
            height: 100%;
            background: #888888;
            margin-left: 36px;
        }
    }
</style>
