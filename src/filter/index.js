/**
 *解析时间字符串的模块
 */
import moment from 'moment'
import Vue from 'vue'

Vue.filter('data-format',(value,format)=>{
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
})
