/*
包含n个直接更新状态数据的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  LOGOUT_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [LOGOUT_USER] (state) {
    state.user = {}
  },
  [RECEIVE_GOODS](state, {goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, {ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state, {info}){
    state.info = info
  },
  [ADD_FOOD_COUNT](state, {food}){
    if(food.count){
      //第一次之后点击一次加1
      food.count++
    }else{
      //food.count第一次值为1, 使用Vue的set方法，向响应式对象添加数据，达到进行页面更新
      Vue.set(food,'count', 1)
      //将食物添加到购物车中
      state.shopping.push(food)
    }

  },
  [REDUCE_FOOD_COUNT](state, {food}){
   if(food.count){
     food.count--
     state.shopping.splice(this.shopping.indexOf(food), 1)
   }
  },
}
