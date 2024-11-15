import type { RouteRecordNormalized } from 'vue-router'
import type { Middleware } from '@/router/types'

export default function collectMatchedMiddleware(
  matchedRoutes: RouteRecordNormalized[]
): Middleware[] {
  return matchedRoutes.reduce<Middleware[]>((guards, matchedRoute) => {
    const routeGuards: Middleware[] | undefined = matchedRoute.meta.middleware as
      | Middleware[]
      | undefined

    if (routeGuards && routeGuards.length) {
      const uniqueGuards = routeGuards.filter((guard) => !guards.some((g) => g.name === guard.name))
      return [...guards, ...uniqueGuards]
    }

    return guards
  }, [])
}
