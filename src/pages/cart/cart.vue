<template>
  <div class="cart">
    <Header>
      <p slot="center">购物车</p>
    </Header>
    <CartList></CartList>
    <CartBottom></CartBottom>
  </div>
</template>
<script>
  import Header from '@/components/Header/Header';
  import CartList from './Children/CartList';
  import CartBottom from './Children/CartBottom';
  export default {
      name:'cart',
      components:{
        Header,
        CartList,
        CartBottom
      },
      created(){
        this.$store.dispatch("products/requestCart");
      },
      data(){
        return {
          flag:false
        }
      },
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