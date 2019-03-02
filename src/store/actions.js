// 本文件是vuex中专门用于组件修改State中的数据，或者从网络获取数据使用的
//1、引入网络请求api
import {getNavbar,getHome,getCat,getCart} from './../api/index'

//2、引入方法名称变量
import {
    DEFAULT_NAVBAR,
    DEFAULT_HOME, 
    DEFAULT_CAT,
    DEFAULT_CART,
    
} from './mutations-type'
export default {
    //1、获取全局底部工具条数据
    async requestNavbar({commit}){
        //从服务器获取数据
        const result = await getNavbar();
        // console.log(result);
        //进行安全校验
        if(result.code === 0){
            //告诉mutations将数据保存起来
            commit(DEFAULT_NAVBAR,result.data);
        }else{
            console.log("获取全局底部工具条数据");
        } 
    },
    // 保存工具条的高度
    // saveTabbarHeight({commit},height){
    //     commit(DEFAULT_TABBAR_HEIGHT,height);
    // },
    //2获取商城首页
    async requestHome({commit}){
        //从服务器获取首页数据
        const result = await getHome();
        // console.log(result);
        //进行安全校验
        if(result.code === 0){
            //告诉mutations将数据保存起来
            commit(DEFAULT_HOME,result.data);
        }else{
            console.log("获取商城首页数据");
        } 
    },
    //3、获取分类页数据
    async requestCat({commit}){
        //从服务器获取数据
        const result = await getCat();
        // console.log(result);
        //进行安全校验
        if(result.code === 0){
            //告诉mutations将数据保存起来
            commit(DEFAULT_CAT,result.data);
        }else{
            console.log("获取分类页面的数据");
        } 
    },
    //4、获取购物页面数据
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
}