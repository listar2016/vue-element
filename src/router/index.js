import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Login from '../views/Login'
import UserList from '../views/UserList'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user-list',
    name: 'user-list',
    component: UserList,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.authorized) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
export default router
