//1、导入相应的包
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

//导入独立的Store模块
import products from './modules/products'

//2、声明vuex
Vue.use(Vuex);

//3、对外暴露一个vuex的store对象
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        products
    }
});