<template>
    <div class="no-data text-center">
        <NavHeader :mainTitle="NavHeader.title" :selfBack="true" @backPage="backPage"></NavHeader>
        {{title}}
    </div>
</template>

<script type="text/ecmascript-6">
    import NavHeader from '@/common/components/mainTitle/index'  //导入公共的title
    import * as Local from '@/common/utils/localStorage' //导入page的类
    export default {
        props: {
            title: {
                type: String,
                default: 'Opos！数据有点异常请返回重试~'
            },
        },
        data(){
            return {
                NavHeader:{
                    title:'提示'
                }
            }
        },
        components:{
            NavHeader
        },
        methods:{
            backPage(){
                //跳到订单页
                if(!Local.getBackPage()){
                    this.$toast('back page is null');
                    return;
                };
                window.location=Local.getBackPage();
            }
        }
    }
</script>

<style scoped lang="scss">
    .no-data {
        font-size: 24px;
        padding-top: 100px
    }
</style>
