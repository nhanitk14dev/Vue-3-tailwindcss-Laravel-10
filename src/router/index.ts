import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import AppLayout from '@/components/layouts/AppLayout.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: AppLayout,
    meta: { isGuest: true },
    children: [
      { path: '/home', name: 'Home', component: Home },
      {
        path: '/hello-word',
        name: 'HelloWord',
        // route level code-splitting
        // this generates a separate chunk (HellowWord.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // https://router.vuejs.org/guide/advanced/lazy-loading.html
        component: () => import('../views/examples/HelloWorld.vue')
      }
    ]
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
