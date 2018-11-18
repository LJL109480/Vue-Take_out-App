/**
 * Created by Administrator on 2018/11/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from  '../pages/Login/Login.vue'
Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
   routes:[
     {
       path: '/msite',
       component: MSite,
       meta:{
         ShowFoot:true
       }
     },
     {
       path:'/order',
       component: Order,
       meta:{
         ShowFoot:true
       }
     },
     {
       path:'/profile',
       component: Profile,
       meta:{
         ShowFoot:true
       }
     },
     {
       path:'/login',
       component:Login,
       meta:{
         ShowFoot:false
       }
     },
     {
       path:'/search',
       component: Search,
       meta:{
         ShowFoot:true
       }
     },
     {
       path:'/',
       redirect:'/msite'
     }
   ]
})
