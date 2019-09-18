<template>
    <div class="container">
        <div class="header col flex-item flex-justify-start">
              <div class="img-view">
                  <img src="~image/header.png" alt="">
              </div>
               <div class="login-btn" @click="hanldeGoToLogin">登录</div>
        </div>
        <div class="main row flex-item flex-justify-between">
            <div class="item flex-grow col flex-item flex-justify" @click="handleGoToOrder">
                 <div class="img-icon1">

                 </div>
                <div class="img-title">我的订单</div>
            </div>
            <div class="item-border"></div>
            <div class="item flex-grow col flex-item flex-justify" @click="handleGoToAdress">
                <div class="img-icon2">

                </div>
                <div class="img-title">收货地址</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mine",
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
            handleGoToOrder(){
              this.$router.push({
                  path:'/order'
              })
            },
            handleGoToAdress(){
                this.$router.push({
                   path:'/address'
                });
            },
            hanldeGoToLogin(){
                this.$router.push({
                    path:'/login'
                })
            }

        }
    }
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .header{
        width:100%;
        height:426px;
        background:rgba(255,102,0,1);
        border-radius:0px 0px 60px 60px;
        overflow: hidden;
    }
    .main{
        margin: 28px auto;
        width:694px;
        height:280px;
        background:rgba(255,255,255,1);
        border-radius:10px;
        overflow: hidden;
    }
    .img-view{
        margin-top: 200px;
        width: 96px;
        height: 96px;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    .login-btn{
        margin-top: 38px;
        width: 187px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border: 1px solid #ffffff;
        border-radius: 30px;
        font-size: 24px;
        color: #ffffff;
    }
    .item{
        height: 100%;
        /*background: #ff6666;*/
    }
    .item:last-of-type{
        /*background: #0A81FB;*/
    }
    .item-border{
        width: 1px;
        height: 150px;
        background: #CBCCCC;
    }
    .img-icon1{
       width: 50px;
       height: 50px;
       background: #0A81FB;
    }
    .img-title{
      margin-top: 36px;
      font-size: 28px;
      height: 28px;
      line-height: 28px;
    }
    .img-icon2{
        width: 38px;
        height: 52px;
        background: #ff6666;
    }



</style>
