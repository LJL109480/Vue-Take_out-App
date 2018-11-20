/**
 * Created by Administrator on 2018/11/17.
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import TopHeader from './components/TopHeader/TopHeader.vue'
/* eslint-disable no-new */
Vue.component('TopHeader',TopHeader);
Vue.component(Button.name,Button);
new Vue({
  el:'#app',
  render: h=>h(App),
  router,
  store
})
