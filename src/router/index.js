import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Rigister from '@/components/rigister'
import Login from '@/components/login'
import Admin from '@/components/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/rigister',
      name: 'rigister',
      component: Rigister
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/my',
      component: Admin
    }
  ]
})
