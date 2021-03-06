//1、导入Vue和Router路由
import Vue from 'vue'
import Router from 'vue-router'

//2、导入路由的相关组件
import index from './../pages/index/index'
import cat from './../pages/cat/cat'
import user from './../pages/user/user'
import cart from './../pages/cart/cart'
import goods from './../pages/goods/goods'
import detail from './../pages/goods/Children/Detail'
import common from './../pages/goods/Children/Common'

//声明在Vue中使用路由
Vue.use(Router)

//对外暴露一个路由对象
export default new Router({
  routes: [
    {path:'/pages/index/index',component:index},
    {
      path:'/pages/goods/goods',
      component:goods,
      children: [
        // 注意点：子路由的path前面不加/，会自动匹配/onpage/sub1page
        {path:'detail',component:detail},
        {path:'common',component:common},
        {path:'/pages/goods/goods',redirect:'/pages/goods/goods/detail'}
      ]
    },
    {path:'/pages/cart/cart',component:cart},
    {path:'/pages/cat/cat',component:cat},
    {path:'/pages/user/user',component:user},
    {path:'/',redirect:'/pages/index/index'}
  ]
})
