import Vue from 'vue'
import Router from 'vue-router'

import goods from './views/goods'
import ratings from './views/ratings'
import seller from './views/seller'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}]

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})
