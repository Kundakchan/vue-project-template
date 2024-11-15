import type { Middleware } from '@/router/types'

export const checkAuth: Middleware = async ({ next }) => {
  console.log('checkAuth')
  // return () => next({ name: 'page-name' })
}

export default checkAuth
