<template>
  <div class="swiper-container" v-if="categorys.length">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
        <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
          <div class="food_container">
            <img :src="'https://fuss10.elemecdn.com' + category.image_url">
          </div>
          <span>{{category.title}}</span>
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
  <img src="./images/msite_back.svg" alt="loading" v-else>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default{
    computed:{
      ...mapState(['categorys']),
      categorysArr () {
        const {categorys} = this
        // 二维数组
        const arr = []
        // 内部的小数组(最大长度为8)
        let smallArr = []
        // 遍历categorys
        categorys.forEach(c => {

          // 将smallArr保存大数组(只能一次)
          if(smallArr.length===0) {
            arr.push(smallArr)
          }

          // 将c保存到smallArr
          smallArr.push(c)

          // 一旦小数组满了, 准备一个新的空小数组
          if(smallArr.length===8) {
            smallArr = []
          }
        })

        return arr
      }
    },
    /*
     bug: 分类轮播有问题
     解决: watch + nextTick()
     新的语法vm.$nextTick()创建按回调函数，延迟下次DOM的更新循环
     */
    /* 实时监听页面更新轮播实行的步骤// 更新状态数据==>调用监视的回调函数 ==> 异步更新界面 ==> 执行$nextTick()指定的回调函数*/
    watch: {
      categorys () { // categorys的状态更新了
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width 50px
              height 50px
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #02a774
</style>
