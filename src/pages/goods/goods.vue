<template>
    <div class="goods">
        <Header class="header">
            <p slot="center">商品详情</p>
        </Header>
        <Banner></Banner>
        <ServiceList></ServiceList>
        <ProductDetail></ProductDetail>
    </div>
</template>
<script>
    import Header from '@/components/Header/Header';
    import Banner from './Children/Banner';
    import ProductDetail from './Children/ProductDetail';
    import ServiceList from './Children/ServiceList';

    export default {
        name:"goods",
        created(){
            this.$store.dispatch("requestProductDetail",this.$route.query.id);
        },
        components:{
            Banner,
            Header,
            ProductDetail,
            ServiceList
        }
    }
</script>
<style scoped lang="less">
    .goods{
        background: #f7f7f7;
        .header{
            border: none;
        }
    }
</style>