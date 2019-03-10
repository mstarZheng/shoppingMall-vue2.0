<template>
    <div class="user">
       <Header>
            <p slot="center">个人中心</p>
       </Header>
       <UserTop></UserTop>
       <Orders></Orders>
       <Menus class="menu"></Menus>
    </div>
</template>
<script>
    import Header from '@/components/Header/Header';
    import UserTop from './Children/UserTop';
    import Orders from './Children/Orders';
    import Menus from './Children/Menus'
    export default {
        name:'user',
        components:{
            Header,
            UserTop,
            Orders,
            Menus
        },
        created(){
            this.$store.dispatch("requestUser");
        },
    }
</script>
<style scoped lang="less">
    .user{
        color:#666;
        background: #f7f7f7;
        .menu{
            margin-top: 20px;
        }
    }
</style>