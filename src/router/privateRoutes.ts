import Dashboard from '@/views/DashboardView.vue'
const privateRoutes = [
  {
    path: '/',
    redirect: '/login',
    meta: { requiresAuth: true },
    children: [
      { path: '/dashboard', name: 'Dashboard', component: Dashboard },
      {
        path: '/administration',
        name: 'Administration',
        // https://router.vuejs.org/guide/advanced/lazy-loading.html
        component: () => import('@/views/AdministrationView.vue')
      },
      {
        path: '/customers',
        name: 'Customer',
        component: () => import('@/views/CustomerView.vue')
      }
    ]
  }
]

export default privateRoutes
