<template>
  <section class="msite">
    <!--首页头部-->
    <TopHeader title="昌平区北七家宏福科技园(337省道北)">
      <a class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </a>
      <a class="header_login" slot="right" @click="$router.push('/login')">
        <span class="header_login_text">登录|注册</span>
      </a>
    </TopHeader>
    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <MSiteSwiper/>
    </nav>
    <!--首页附近商家-->

    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>
<script>
  import ShopList from '../../components/ShopList/ShopList.vue'
  import MSiteSwiper  from  '../../components/MSiteSwiper/MSiteSwiper.vue'
  export default{
    components:{
      ShopList,
      MSiteSwiper
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
