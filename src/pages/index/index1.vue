<template>
    <div class="home">
        <Header></Header>
        <Banner></Banner>
        <Notice></Notice>
		<Navgation></Navgation>
        <Seckiller></Seckiller>
        <Coupon></Coupon>
        <Pintuan></Pintuan>
        <Topic></Topic>
        <Goods></Goods>
    </div>
</template>
<script>
    import Header from './Children/Header';
    import Banner from './Children/Banner';
    import Notice from './Children/Notice';
    import Navgation from './Children/Navgation';
    import Seckiller from './Children/Seckiller';
    import Coupon from './Children/Coupon';
    import Pintuan from './Children/Pintuan';
    import Topic from './Children/Topic';
    import Goods from './Children/Goods';
    export default {
        name:'index',
        created(){
            this.$store.dispatch('requestHome');
        },
        computed:{
            modulelist(){
                return this.$store.state.homeInfo.module_list;
            }
        },
        components: {
            Header,
            Banner,
            Notice,
            Navgation,
            Seckiller,
            Coupon,
            Pintuan,
            Topic,
            Goods
        }
    }
</script>
<style scoped lang="less">
    .home{
        padding-bottom: 114px;
        background: #e4e0e1;
    }
</style>