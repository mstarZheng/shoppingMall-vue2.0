<template>
    <div class="orders">
        <div class="orders-top">
            <p>我的订单</p>
        </div>
        <div class="orders-bottom">
            <ul v-if="orders">
                <li v-for="(value,key,index) in orders" :key="index">
                    <img :src="value.icon" alt="">
                    <p>{{value.text}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:"Orders",
        computed:{
            orders(){
                // console.log(this.$store.state.userInfo);
                return this.$store.state.userInfo.orders;
            }
        }
    }
</script>
<style scoped lang="less">
   .orders{
       box-sizing: border-box;
       margin-top: 10px;
       .orders-top{
           background: #fff;
           width: 100%;
           height: 100px;
           line-height: 100px;
           align-items: center;
           p{
               font-size: 35px;
               margin-left: 20px;
           }
       }
       .orders-bottom{
            width: 100%;
            height: 180px;
            background: #fff;
            margin-top: 1px;
            ul{
                height: 100%;
                display: flex;
                align-items: center;
            }
            li{
                flex: 1;
                text-align: center;
                box-sizing: border-box;
                img{
                    width: 50px;
                }
                p{
                    font-size: 30px;
                    margin-top: 20px;
                }
            }
        }
   }
</style>