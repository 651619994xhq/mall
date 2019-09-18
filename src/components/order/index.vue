<template>
    <div class="container">
      <div class="order-item col flex-item flex-justify-start">
           <div class="item" v-for="(item,index) in list" :key="index">
                <div class="item-header col flex-item-start flex-justify">
                    待发货
                </div>
                <div class="content row flex-item flex-justify-start">
                    <div class="left-img">

                    </div>
                    <div class="right-content">

                    </div>
                </div>
           </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
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
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
        height: 100%;
    }
    .order-item{
        width: 100%;
        overflow: hidden;
    }
    .item{
        width: 710px;
        height: 312px;
    }
    .item-header{
        height: 78px;
        width: 100%;
        color: #ff6666;
        font-size: 28px;
    }
    .content{
        width: 100%;
        height: 234px;
        border-radius: 20px 20px 20px 20px;
        background: #FFFFFF;
        overflow: hidden;
        .left-img{
            width: 127px;
            height: 176px;
            background: #F7F6FB;
            margin-left: 44px;
        }
        .right-content{
            width: 450px;
            height: 100%;
            background: #888888;
            margin-left: 58px;
        }
    }
</style>
