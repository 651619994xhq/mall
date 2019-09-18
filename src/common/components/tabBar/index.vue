<template>
    <div class="footer row flex-item  flex-justify-around">
        <div class="item col flex-item flex-justify" @click="switchTab('home')">
            <img src="~image/active-home-icon.png" alt="" class="item-image" v-if="currentType=='home'">
            <img src="~image/home-icon.png" alt="" class="item-image" v-else>
            <span class="item-title" :class="(currentType=='home')?'active-item-title':''">主页</span>
        </div>
        <div class="item col flex-item flex-justify" @click="switchTab('shop')">
            <img src="~image/active-shop-icon.png" alt="" class="item-image" v-if="currentType=='shop'">
            <img src="~image/shop-icon.png" alt="" class="item-image" v-else>
            <span class="item-title" :class="(currentType=='shop')?'active-item-title':''">购物车</span>
        </div>
        <div class="item col flex-item flex-justify" @click="switchTab('mine')">
            <img src="~image/active-mine-icon.png" alt="" class="item-image" v-if="currentType=='mine'">
            <img src="~image/mine-icon.png" alt="" class="item-image" v-else>
            <span class="item-title" :class="(currentType=='mine')?'active-item-title':''">我的</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                currentType:'home'
            }
        },
//组件
        components: {},
//初始化数据
        created() {

        },
//一些自定义方法
        methods: {
            switchTab(type){
                this.currentType=type;
                if(type=='home'){
                    this.$router.replace({
                       path:'/index/home'
                    });
                    return;
                };
                if(type=='shop'){
                    this.$router.replace({
                        path:'/index/shop'
                    });
                    return;
                };
                if(type=='mine'){
                    this.$router.replace({
                        path:'/index/mine'
                    });
                    return;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 104px;
    border-top: 1px solid #cecece;
    z-index: 1;
    background: #ffffff;
    .item{
        width: 104px;
        height: 104px;
    }
    .item-image{
        width: 37px;
        height: 38.5px;
        display: block;
    }
    .item-title{
        margin-top: 12px;
        font-size: 24px;
        color: #3A3E51;
    }
    .active-item-title{
        color: #ff6666;
    }
}
</style>
