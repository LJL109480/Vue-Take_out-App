/*
Vuex最核心的管理对象
 */
import {
  reqAddress,
  reqShops,
  reqFoodCategorys,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  LOGOUT_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_FOODS
} from './mutation-types'

export default {

  // 异步获取地址信息的异步action
  async getAddress ({commit, state}) {
    // 发ajax请求
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    // 根据结果提交mutation
    if(result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取食品分类列表的异步action
  async getFoodCategorys ({commit}) {
    // 发ajax请求
    const result = await reqFoodCategorys()
    // 根据结果提交mutation
    if(result.code===0) {
      const foodCategorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys: foodCategorys})
    }
  },

  // 异步获取商家列表的异步action
  async getShops ({commit, state}) {
    // 发ajax请求
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    // 根据结果提交mutation
    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //保存user的信息同步action
  saveUser({commit}, user){
    commit(RECEIVE_USER,{user})
  },
  //异步获取用户信息
  async getUserInfo ({commit}){
    const result = await reqUserInfo()
    if(result.code===0){
      const user = result.data
      commit(RECEIVE_USER,{user})
    }
  },
  //异步退出登陆
  async logout({commit}){
    const result = await reqLogout()
    if(result.code ===0 ){
      commit(LOGOUT_USER)
    }
  },
  //异步获取商家信息列表
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code === 0){
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  //异步获取食品列表
  async getShopGoods({commit}, cb){
    const result = await reqShopGoods()
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      typeof cb==='function' && cb()
    }
  },
  //异步获取商家评论列表
  async getShopRatings({commit}, cb){
    const result = await reqShopRatings()
    if(result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
      typeof cb==='function' && cb()
    }
  },
  //定义同步更新food食物的数据请求
  UpdateCount({commit}, {food, isAdd}){
    if(isAdd){
      commit(ADD_FOOD_COUNT, {food})
    }else{
      commit(REDUCE_FOOD_COUNT, {food})
    }
  },
    //同步定义清空购物车列表
  clearFoods({commit}){
    commit(CLEAR_FOODS)
  }
}
