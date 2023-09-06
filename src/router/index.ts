import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './publicRoutes'
import privateRoutes from './privateRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...privateRoutes]
})

// todo: check isAuthenticated before go to dashboard
// https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields

// router.beforeEach((to, from, next) => {
//   const auth = useAuthStore()

//   if (to.meta.requiresAuth && !auth.isAuthenticated) {
//     next({ name: "Login" });
//   } else if (auth.isAuthenticated) {
//     next({ name: "Dashboard" });
//   } else {
//     next();
//   }
// });

export default router
