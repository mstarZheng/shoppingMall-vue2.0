<template>
    <div class="goods">
        <Header>
            <p slot="center">商品详情</p>
        </Header>
        <Banner></Banner>
        <ProductDetail></ProductDetail>
    </div>
</template>
<script>
    import Header from '@/components/Header/Header';
    import Banner from './Children/Banner';
    import ProductDetail from './Children/ProductDetail';

    export default {
        name:"goods",
        created(){
            this.$store.dispatch("requestProductDetail",this.$route.query.id);
        },
        components:{
            Banner,
            Header,
            ProductDetail,
        }
    }
</script>
<style scoped lang="less">
    .goods{
        color:#666;
    }
</style>