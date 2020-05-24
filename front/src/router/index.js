import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import(/* webpackChunkName: "Config" */ '../views/Config.vue')
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: () => import(/* webpackChunkName: "Transaction" */ '../views/Transaction.vue')
  },
  {
    path: '/block',
    name: 'Block',
    component: () => import(/* webpackChunkName: "Block" */ '../views/Block.vue')
  },
  {
    path: '/ledger',
    name: 'Ledger',
    component: () => import(/* webpackChunkName: "Ledger" */ '../views/Ledger.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
