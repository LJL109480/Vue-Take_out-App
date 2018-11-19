<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item on" v-for="(sc, index) in starClass" :key="index" :class="sc"></span>
  </div>
</template>
<script>
  export default{
    props:{
      size:Number,
      grade:Number
    },
    computed:{
      starClass(){
        const {grade} = this
        const gradeInteger = Math.floor(grade)
        const stc = []
        //向stc中添加on
        for (let i= 0; i<gradeInteger; i++){
          stc.push('on')
        }
        //向stc中添加half
        if(grade*10-gradeInteger*10>=5){
          stc.push('half')
        }
        //向stc中添加off
        while (grade.length<5){
          stc.push('off')
        }
        return stc
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>
