/*
  vue 入口
 */
import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'
import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import VueLazyload from 'vue-lazyload'
import './filters' // 加载过滤器
// 注册全局组件标签
Vue.component(Button.name, Button)
Vue.use(VueLazyload, {
  loading
})
const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
console.log(vm)
