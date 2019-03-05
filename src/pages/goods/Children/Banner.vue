<template>
    <div class="detail-top">
        <swiper :options="swiperOption" ref="mySwiper" v-if="productInfo">
            <swiper-slide v-for="(item, index) in productInfo.pic_list" :key="index">
                <img :src="item.pic_url"/>
            </swiper-slide>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="banner-title">
            <p class="goods-name">{{productInfo.name}}</p>
            <p class="goods-price">{{productInfo.price}}</p>
            <p>
                <del class="goods-original-price">{{productInfo.original_price}}</del>
                <span class="goods-sales">销售量：{{productInfo.sales}} 件</span>
            </p>
        </div>
    </div>
</template>
<script>
    import {mapState} from "vuex";
    export default {
        name:"Banner",
        computed:mapState(['productInfo']),
        data() {
          return {
            swiperOption: {
              // some swiper options/callbacks
              // 所有的参数同 swiper 官方 api 参数
              // ...
              loop: true, // 循环模式选项
              autoplay: {
                delay:1000,//自动切换的时间间隔单位ms
                stopOnLastSlide:false,//当切换到最后一个slide时停止自动切换
                disableOnInteraction:false,//用户操作swiper之后，是否禁止
              },
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
              observer:true,
              observeParents:true,
            }
          }
        },
    
    }
</script>
<style scoped lang="less">
    .detail-top{
        background: #fff;
        padding-bottom: 35px;
        .banner-title{
            padding: 0 15px;
            box-sizing: border-box;
            .goods-name{
                font-size: 35px;
            }
            .goods-price{
                font-size: 35px;
                color: orangered;
                line-height: 80px;
                &::before{
                    font-family: "iconfont";
                    font-style: normal;
                    font-size: 40px;
                    content: "\eb1e";
                }
            }
            .gd-original-price{
                font-size: 20px;
                &::before{
                font-family: "iconfont";
                font-style: normal;
                font-size: 40px;
                content: "\eb1e";
                }
            }
            .goods-sales{
                font-size:20px;
            }
        }
    }
</style>