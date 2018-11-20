/*
包含n个接口请求函数的模块
函数的返回值是promise对象
 */
import ajax from './ajax'
const BASE = '/api'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longitude, latitude) => ajax(BASE+`/position/${latitude},${longitude}`)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax(BASE+'/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = ({longitude, latitude}) => ajax(BASE+ '/shops', {latitude, longitude})

//4 发送短信验证码
export const reqSendcode = (phone) => ajax(BASE+'/sendcode', {phone})

//5.手机号验证码登陆
export const reqSmsLogin = (phone, code)=> ajax(BASE+'/login_sms', {phone, code}, 'POST')

//6.用户名密码登陆
export const reqPwdlogin = ({name, pwd, captcha}) => ajax(BASE+'/login_pwd', {name, pwd, captcha}, 'POST')
//7.获取用户信息
export const reqUserInfo = () => ajax(BASE+'/userinfo')
//8.用户登出
export const reqLogout = () => ajax(BASE+'/logout')
