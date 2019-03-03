//等价于mutations-type.js
export const DEFAULT_CART = "default_cart";
export const CHANGE_CHECK_ALL_STATE = "change_check_all_state";
export const CHANGE_CHECK_ITEM_STATE = "change_check_item_state";
export const CHANGE_PRODUCT_NUM = "change_product_num";
import {getCart} from "./../../api/index"

//等价于state.js
const state = {
    //存储购物车中所有的商品
    all:[],
    //存储购物车全选状态
    checkAllState:false,
    //存储每一个商品选中的状态
    checkItemState:[],
};

// 等价于mutations.js
const mutations = {
    //保存所有购物车中从网络获取到的数据
    [DEFAULT_CART](state,result){
        state.all = result.list;
        state.checkItemState = state.all.map(function(){
            return false;
        });
    },
    //修改全局选中状态
    [CHANGE_CHECK_ALL_STATE](state){
        //1、修改全局的选中状态
        state.checkAllState = !state.checkAllState;
        //修改每一个商品的选中状态
        state.checkItemState.forEach(function(item,index){
            state.checkItemState.splice(index,1,!item);
        });
    },
    //修改某一个商品的选中状态
    [CHANGE_CHECK_ITEM_STATE](state,index){
        //在Vue中无法动态的监听到数组元素和对象属性的变化，如果想让Vue监听到数据元素或者对象属性的变化，那么可以使用
        //vue.$set设置值，或者可以使用数组的splice。
        //state.checkItemsState[index] = !state.checkItemsState[index]
        //1、修改当前商品的选中状态
        state.checkItemState.splice(index,1,!state.checkItemState[index]);
        //2、检查全局选中状态
        let result = state.checkItemState.find(function(item,index){
            return item === false;
        });
        state.checkAllState = result !== false;
    }
};

//等价于actuions.js
const actions = {
    //1、获取全局购物车数据
    async requestCart({commit}){
        //从服务器获取数据
        const result = await getCart();
        // console.log(result);
        //进行安全校验
        if(result.code === 0){
            //告诉mutations将数据保存起来
            commit(DEFAULT_CART,result.data);
        }else{
            console.log("获取分类页面的数据");
        } 
    },
    //2、修改全局购物车全选状态
    changeCheckAllState({commit}){
       commit(CHANGE_CHECK_ALL_STATE);
    },
    //3、修改全局购物车某一个商品选中的状态
    changeCheckItemState({commit},index){
        commit(CHANGE_CHECK_ITEM_STATE,index);
    },
    //4、修改商品的数量
    //5、保存用户修改之后的商品
};

//等价于getters.js
const getters = {
    totalPrice(state){
        let total = 0;
        state.checkItemState.forEach(function(value,index){
            if(value === true){
                let product = state.all[index];
                total += product.num * product.price;
            }
        });
        return total;
    }
};

//等价于index.js
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}