import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import AuthGuard from '../router/authGuard.js'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Layout,
      children: [
        {
          path: '/list',
          name: 'list',
          beforeEnter: AuthGuard,
          component: () => import('../views/List.vue')
        },
        {
          path: '',
          name: 'landing',
          beforeEnter: AuthGuard,
          component: () => import('../views/List.vue')
        },
        {
          path: '/create',
          name: 'create',
          beforeEnter: AuthGuard,
          component: () => import('../views/Create.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
