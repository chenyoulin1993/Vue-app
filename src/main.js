// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//js
import fastClick from 'fastclick'
fastClick.attach(document.body);

//css
import 'css/reset.css'
import 'css/iconfont.css'


//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(VueAwesomeSwiper, )


import store from './store'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
