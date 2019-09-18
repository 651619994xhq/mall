<template>
    <div>
        <router-view></router-view>
        <tabBar></tabBar>
    </div>
</template>

<script>
    import tabBar from '@/common/components/tabBar/index'
    export default {
        name: "index",
        data() {
            return {}
        },
//组件
        components: {
            tabBar
        },
//初始化数据
        created() {

        },
//一些自定义方法
        methods: {}
    }
</script>

<style scoped lang="scss">

</style>
