// 外界通过调用api文件夹中的index.js中的一些方法就或从网络获取数据
// 1.导入封装好的网络请求工具类
import http from './ajax'

// 2.封装不同API请求的函数
// 2.1获取全局底部工具条数据
// export const getNavbar = function () {
//   return http.get("default/navbar")
// };
export const getNavbar = () => http.get("default/navbar");

// 2.2获取首页数据
export const getHome = () => http.get("default/index");

// 2.3获取分类数据
export const getCat = () => http.get("default/cat-list");
// 2.4获取购物车数据
// 2.5获取个人中心数据
