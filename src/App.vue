<template>
  <div>
    <router-view/>
    <FootGuide v-show="$route.meta.ShowFoot"/>
  </div>
</template>
<script>
  import FootGuide from './components/FootGuide/FootGuibe.vue'

  export default{
    mounted(){
     this.$store.dispatch('getAddress')
    },
    components:{
      FootGuide
    }
  }
</script>
<style>
</style>
