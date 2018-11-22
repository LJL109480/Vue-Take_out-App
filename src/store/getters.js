/*
Vuex最核心的管理对象
 */
export default {
  //食品总数量
  totalCount(state){
    return state.shopping.reduce((pre, food) => pre + food.count, 0)
  },
  //食品总价格
  totalPice(state){
    return state.shopping.reduce((pre, food) => pre + food.count*food.price, 0)
  }
}
