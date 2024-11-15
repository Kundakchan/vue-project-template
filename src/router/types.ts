import type { VueElement } from 'vue'
import type { Layout } from '@/layouts/types'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: Layout
    layoutComponent?: VueElement
  }
}

import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric
} from 'vue-router'

export interface Context {
  to: RouteLocationNormalizedGeneric
  from: RouteLocationNormalizedLoadedGeneric
  next: NavigationGuardNext
}

export interface Middleware {
  (context: Context): Promise<NavigationGuardNext | void>
}
