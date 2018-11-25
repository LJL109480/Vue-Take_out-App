/**
 * Created by Administrator on 2018/11/17.
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import router from './router'
import store from './store'
import TopHeader from './components/TopHeader/TopHeader.vue'
import Spilt from './components/Spilt/Spilt.vue'
import './mock/mockServer'
import './filter'
import loading from './common/imgs/loading.gif'
Vue.use(VueLazyload, {
  loading
})
/* eslint-disable no-new */
Vue.component('TopHeader',TopHeader);
Vue.component('Spilt',Spilt);
Vue.component(Button.name,Button);
new Vue({
  el:'#app',
  render: h=>h(App),
  router,
  store
})
