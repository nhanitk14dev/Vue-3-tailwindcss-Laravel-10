import NotFound from '@/components/NotFound.vue'
import LoginView from '@/views/auth/LoginView.vue'

const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      layout: 'auth'
    }
  },
  // will match everything and put it under `$route.params.pathMatch`
  // https://router.vuejs.org/guide/essentials/dynamic-matching.html
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

export default publicRoutes
