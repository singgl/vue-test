import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: '首页',
          hidden: false,
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/about',
          name: '测试表单',
          hidden: false,
          component: () => import('@/views/About.vue')
        },
        {
          path: '/404',
          hidden: true,
          component: () => import('@/views/404.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
