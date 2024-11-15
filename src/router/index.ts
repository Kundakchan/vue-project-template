import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import { collectMatchedMiddleware, middlewarePipeline } from '@/router/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const middleware = collectMatchedMiddleware(to.matched)
  const context = { to, from, next }

  middlewarePipeline(context, middleware)
})
export default router
