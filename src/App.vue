<template>
  <div>
    <router-view/>
    <FootGuide v-show="$route.meta.ShowFoot"/>
  </div>
</template>
<script>
  import FootGuide from './components/FootGuide/FootGuibe.vue'

  export default{
    components:{
      FootGuide

    }
  }
</script>
<style>
</style>
