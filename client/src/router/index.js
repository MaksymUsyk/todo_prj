import { createRouter, createWebHistory } from "vue-router"

/**
 * Check if user has token
 * @type {boolean}
 */
const isAuthorized = localStorage.hasOwnProperty('token')

const authGuard = function (to, from, next) {
  if (to.meta.needAuth && !isAuthorized) {
    next({ name: 'AuthPage' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'AuthPage',
    component: () => import('@/pages/AuthPage.vue'),
    meta: {
      needAuth: false // Important to prevent infinity reloading
    }
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/Dashboard.vue'),
    meta: { needAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(authGuard)

export default router