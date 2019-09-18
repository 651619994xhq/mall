<template>
    <div class="container">
        <div class="row flex-item flex-justify-start wrap">
           <div class="item col flex-item flex-justify-start" v-for="(item,index) in list" :key="index" @click="hanldeTest">
               <div class="img-view">
                   {{item.url}}
               </div>
               <div class="item-content">
                   {{item.content}}
               </div>
               <div class="item-buy row flex-item flex-justify-between">
                   <div class="row flex-item flex-justify-start">
                       <div class="money">￥{{item.money}}</div>
                       <div class="mid" style="color: 888888">起</div>
                   </div>
                   <div class="add">
                       <img src="~image/shop2.png" alt="">
                   </div>
               </div>
           </div>
        </div>
        <div class="bottom">
            更多商品正上架中，敬请期待...
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                list:[
                    {
                      url:'',
                      content:'荣耀9X PRO 麒麟810 4000mAh超强续航 4800万超广角夜' ,
                      money:600,
                    },
                    {
                        url:'',
                        content:'荣耀9X PRO 麒麟810 4000mAh超强续航 4800万超广角夜' ,
                        money:600,
                    },
                    {
                        url:'',
                        content:'荣耀9X PRO 麒麟810 4000mAh超强续航 4800万超广角夜' ,
                        money:600,
                    },
                    {
                        url:'',
                        content:'荣耀9X PRO 麒麟810 4000mAh超强续航 4800万超广角夜' ,
                        money:600,
                    },
                    {
                        url:'',
                        content:'荣耀9X PRO 麒麟810 4000mAh超强续航 4800万超广角夜' ,
                        money:600,
                    },
                ]
            }
        },
//组件
        components: {},
//初始化数据
        created() {

        },
//一些自定义方法
        methods: {
            hanldeTest(){
                this.$router.push({
                    path:'/order'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background:#F7F6FB;
        padding-bottom: 120px;
    }
    .item{
        margin-left: 20px;
        margin-top: 20px;
        width: 345px;
        height: 560px;
        background: #FFFFFF;
        overflow: hidden;
        .img-view{
            width: 200px;
            height: 234px;
            background: #F7F6FB;
            margin-top: 53px;
        }
        .item-content{
            margin-top: 72px;
            width: 290px;
            height: 110px;
            color: #3A3E51;
            overflow: hidden;
            font-size: 28px;
            line-height: 34px;
        }
        .item-buy{
            margin-top: 17px;
            height: 50px;
            width: 290px;
            overflow: hidden;
            .money{
                font-size: 36px;
                color: #ff6666;
            }
            .mid{
                margin-left: 10px;
                font-size: 24px;
            }
            .add{
                width: 40px;
                height: 40px;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
        }
    }

    .bottom{
        font-size: 28px;
        line-height: 80px;
        text-align: center;
        color: #888888;
    }

</style>
