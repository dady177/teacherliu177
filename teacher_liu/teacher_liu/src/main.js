// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入axios
import axios from 'axios'
// 配置axios
axios.defaults.baseURL = 'http://127.0.0.1:4000'
Vue.prototype.axios = axios;
// 引入vue-infinite-scroll插件
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

import router from './router'

import { DatetimePicker } from "mint-ui";
Vue.component(DatetimePicker.name, DatetimePicker);

import '../reset.css'
// 引入 lib-flexible.js
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
