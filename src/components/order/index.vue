<template>
    <div class="container">this is order
     <button @click="handleBack">返回上一页</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
//组件
        components: {},
//初始化数据
        created() {

        },
//一些自定义方法
        methods: {
            handleBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    height: 100%;
    background: #ff6666;
}
</style>
