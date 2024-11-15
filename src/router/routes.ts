import { ROUTES_NAME } from '@/router/constants'
import { LAYOUTS } from '@/layouts/types'
import { checkAuth, loadProfile, loadLayout } from '@/router/middleware'

export default [
  {
    path: '/',
    name: ROUTES_NAME.dashboard,
    component: () => import('@/pages/Dashboard.vue'),
    meta: {
      middleware: [checkAuth, loadProfile, loadLayout]
    }
  },
  {
    path: '/login',
    name: ROUTES_NAME.login,
    component: () => import('@/pages/Login.vue'),
    meta: {
      layout: LAYOUTS.login,
      middleware: [loadLayout]
    }
  },
  {
    path: '/register',
    name: ROUTES_NAME.register,
    component: () => import('@/pages/Register.vue'),
    meta: {
      layout: LAYOUTS.login,
      middleware: [loadLayout]
    }
  },
  {
    path: '/internet-error',
    name: ROUTES_NAME.internetError,
    component: () => import('@/pages/InternetError.vue'),
    meta: {
      layout: LAYOUTS.empty,
      middleware: [loadLayout]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: ROUTES_NAME.notFound,
    component: () => import('@/pages/NotFound.vue'),
    meta: {
      layout: LAYOUTS.empty,
      middleware: [loadLayout]
    }
  }
]
