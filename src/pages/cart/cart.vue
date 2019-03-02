<template>
  <div class="cart">
    <Header>
      <p slot="center">购物车</p>
    </Header>
    <CartList></CartList>
  </div>
</template>
<script>
  import Header from '@/components/Header/Header';
  import CartList from './Children/CartList';
  export default {
      name:'cart',
      components:{
        Header,
        CartList,
      },
      created(){
        this.$store.dispatch("requestCart");
      }
  }
</script>
<style scoped lang="less">
    .cart{
      width: 100%;
      background: #fff;
      padding-bottom: 215px;
      box-sizing: border-box;
    }
</style>