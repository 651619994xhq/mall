<template>
    <div class="no-data text-center">
        <div>
            <img src="@/image/noData@2x.png" alt="">
        </div>
        {{title}}
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            title: {
                type: String,
                default: '暂无数据'
            }
        }
    }
</script>

<style scoped lang="scss">
    .no-data{
        font-size: 24px;
        padding-top: 100px;
        text-align: center;
        img{
            width: 151px;
            height: 151px;
            margin-bottom: 43px;
        }
    }

</style>
