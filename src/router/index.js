import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import City from '@/components/City/City.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/City',
      name: 'City',
      component: City
    }
  ]
})
