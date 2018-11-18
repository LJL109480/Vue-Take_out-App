/**
 * Created by Administrator on 2018/11/17.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'
/* eslint-disable no-new */
Vue.component('TopHeader',TopHeader);
new Vue({
  el:'#app',
  render: h=>h(App),
  router
})
