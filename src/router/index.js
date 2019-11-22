import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import("../views/home/Home")
const Category =()=>import("../views/category/Category")
const Cart=()=> import("../views/cart/Cart")
const Profile=()=>import("../views/profile/Profile")
// 解决两次访问相同路由地址报错
const routerReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error=> error)
}

Vue.use(Router)
const router= new Router({
  routes: [
    {
      path:"",
      redirect:"/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/category",
      component:Category
    },
    {
      path: "/cart",
      component:Cart
    },
    {
      path: "/profile",
      component:Profile
    }
  ],
  mode:"history"
});
export default router
