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
  },
  //评价的总数据
  ratingsCount(state){
    return state.ratings.length
  },
  //评价内容的总数据
  satisfactionratingsCount(state){
    return state.ratings.reduce((pre, rating) => pre+ (rating.rateType===0? 1 : 0), 0)
  }
}
