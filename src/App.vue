<template>
  <div id="app">
    <!-- 需要根据路由切换内容 -->
    <router-view></router-view>
    <!-- 底部工具条，用于控制切换内容 -->
    <TabBar ref="tabbar"></TabBar>
  </div>
</template>

<script>
  import TabBar from './components/TabBar/TabBar'
  
  export default {
    name: 'App',
    components:{
      TabBar,
    }
  }
</script>

<style scoped lang="less">
  #app{
    // position: relative;
    width: 100%;
    height: 100%;
    background:#ccc;
  }
</style>
