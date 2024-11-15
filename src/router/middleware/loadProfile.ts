import type { Middleware } from '@/router/types'

export const loadProfile: Middleware = async ({ next }) => {
  console.log('loadProfile')
  // return () => next({ name: 'page-name' })
}

export default loadProfile
