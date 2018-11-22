<template>
  <div class="cartcontrol">
    <transition name="bounce">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click="UpdateCount(false)"></div>
    </transition>
    <div class="cart-count"  v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click="UpdateCount(true)"></div>
  </div>
</template>
<script>
  export default{
    props:{
      food:Object
    },
    methods:{
      UpdateCount(isAdd){
        this.$store.dispatch('UpdateCount', {food:this.food, isAdd})
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.bounce-enter-active, &.bounce-leave-active
        transition all 1s
      &.bounce-enter, &.bounce-leave-to
        opacity 0
        transform translateX(20px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>
