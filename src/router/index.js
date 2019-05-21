import Vue from 'vue'
import Router from 'vue-router'
import foods from '@/pags/foods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'foods',
      component: foods
    }
  ]
})
