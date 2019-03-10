<template>
    <div class="service">
        <ul v-if="servicelist">
            <li v-for="(value,index) in servicelist" :key="index">
                <div class="service-list">
                    <a href="javascript:;" class="iconfont">&#xe604;</a>
                    <p>{{value}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"ServiceList",
        computed:{
            servicelist(){
                // console.log(this.$store.state.productInfo.service_list);
                return this.$store.state.productInfo.service_list;
            }
        }
    }
</script>
<style scoped lang="less">
    .service{
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        margin-top: 2px;
        background: #fff;
        ul{
            display: flex;
            width: 100%;
            height: 100px;
            line-height: 100px;
            align-items: center;
            box-sizing: border-box;
            li{
                width: 180px;
                height: 50px;
                margin-left: 15px;
                line-height: 50px;
                box-sizing: border-box;
                float: left;
                .service-list{
                    width: 100%;
                    height: 100%;
                    margin-right: 10px;
                    display: flex;
                    float: left;
                    a{
                        color: skyblue;
                    }
                    p{
                        font-size: 30px;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>