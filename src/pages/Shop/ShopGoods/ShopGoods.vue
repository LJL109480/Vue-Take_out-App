<template>
  <div>
    <div class="goods">
    <div class="menu-wrapper">
      <ul ref="leftUl">
        <!--current-->
        <li class="menu-item " v-for="(good, index) in goods"
            :key="index" :class="{current:index===currentIndex} " @click="clickItem(index)"
        >
          <span class="text bottom-border-1px">
             <img class="icon" v-if="good.icon" :src="good.icon">
            {{good.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul ref="rightUl">
        <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
          <h1 class="title">{{good.name}}</h1>
          <ul>
            <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index" @click="ShowFood(food)">
              <div class="icon">
                <img width="57" height="57"
                     :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span></div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <CarControl :food="food"/>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
      <ShopCart/>
  </div>
    <Food :food="food" ref="UlFood"/>
  </div>
</template>
<script>
  import BScroll  from 'better-scroll'
  import {mapState} from 'vuex'
  import CarControl from '../../../components/CarControl/CarControl.vue'
  import ShopCart from '../../../components/ShopCart/ShopCart.vue'
  import Food from '../../../components/Food/Food.vue'
  export default{
   /* //右侧滑动，左侧根据右侧滑动距离对应到符合失误的标签上
    定义一个tops分类管理li标签的top值，当数据列表显示之后，不在变化
    定义一个scrollY，管理右侧Y轴在滑动过程中的不断变化
    列表显示之后，统计更新tops
    监视右侧滑动，调整更新scrollY的值
    */
    //左侧滑动点击，右侧要根据左侧点击滑动到相应的食物上
    data(){
      return{
        scrollY:0, //右侧的滑动位置
        tops:[], //右侧所有分类li标签的top值
        food:{}
      }
    },
    mounted(){
      this.$store.dispatch('getShopGoods',() =>{
        this.$nextTick(()=>{
          this._initSide()
          this._initTop()
        })

      })
    },
    computed:{
      ...mapState(['goods']),
      currentIndex(){
        const {scrollY, tops} = this
        //计算出最新的下标
        const index = tops.findIndex((top, index) =>{
          //scrollY固定时大于等于当前top，并且scrollY下于下一个top
          return scrollY>=top && scrollY< tops[index+1]
        })
        if(this.index !== index && this.leftScroll){
          this.index = index
          //将index对应到左侧li滚动上面（尽可能）
          const li = this.$refs.leftUl.children[index]
          this.leftScroll.scrollToElement(li, 200)
        }
        return index
      },
    },
    methods:{
      _initSide(){
        //左侧滑动
        this.leftScroll = new BScroll('.menu-wrapper',{
        click:true //由better-scroll库来禁止系统默认的点击事件，使用自身的click来分发事件
        })
        //右侧食品列表滑动
       this.rightScroll = new BScroll('.foods-wrapper',{
         //  probeType控制滑动速度
         probeType:1,
         click: true,
        })
        //绑定scroll的事件监听
        this.rightScroll.on('scroll', ({x, y}) => {
           this.scrollY = Math.abs(y)
         })
        //绑定scroll结束的事件监听
        this.rightScroll.on('scrollEnd', ({x,y})=>{
          this.scrollY = Math.abs(y)
        })
      },
      _initTop(){
        const  tops = []
        let topHight = 0
        //初始高度为0
        tops.push(topHight)
        const lis = this.$refs.rightUl.getElementsByClassName('food-list-hook')
        Array.prototype.slice.call(lis).forEach(li=>{
          topHight += li.clientHeight
          tops.push(topHight)
        })
        this.tops = tops
        console.log('tops', tops)
      },
      clickItem(index){
        //获取到滚动位置的坐标
        const y= -this.tops[index]
        // 更新scrollY为目标值
        this.scrollY = -y
        //让右侧跟着滑动到目标位置
        this.rightScroll.scrollTo(0, y, 500)
      },
      ShowFood(food){
        this.food=food
        this.$refs.UlFood.AriseFood()
      }
    },
    components:{
      CarControl,
      ShopCart,
      Food
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 224px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
