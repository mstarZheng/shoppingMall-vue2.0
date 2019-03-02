// 本文件是Vuex中直接操作State中数据的
//引入方法名称变量
import {
    DEFAULT_NAVBAR,
    DEFAULT_HOME,
    DEFAULT_CAT,
    DEFAULT_CART,
} from './mutations-type'

export default {
    [DEFAULT_NAVBAR](state,result){
        state.navbarInfo = result;
    },
    [DEFAULT_HOME](state,result){
        state.homeInfo = result;
    },
    [DEFAULT_CAT](state,result){
        state.catInfo = result;
    },
    [DEFAULT_CART](state,result){
        state.cartInfo = result;
    }
}