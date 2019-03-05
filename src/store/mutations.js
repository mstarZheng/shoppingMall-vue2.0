// 本文件是Vuex中直接操作State中数据的
//引入方法名称变量
import {
    DEFAULT_NAVBAR,
    DEFAULT_HOME,
    DEFAULT_CAT,
    DEFAULT_CART,
    DEFAULT_USER,
    PRODUCT_DETAIL,
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
    [DEFAULT_USER](state,result){
        state.userInfo = result;
    },
    [PRODUCT_DETAIL](state,result){
        state.productInfo = result;
    },
}