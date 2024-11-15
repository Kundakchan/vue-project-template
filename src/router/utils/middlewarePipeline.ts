import type { Middleware, Context } from '@/router/types'

export function pipeline(context: Context, middlewares: Middleware[]) {
  return async () => {
    let next = null
    for (const fn of middlewares) {
      next = await fn(context)
      if (next) break
    }
    return next
  }
}

export default function middlewarePipeline(context: Context, middlewares: Middleware[]) {
  const middlewarePipelineRun = pipeline(context, middlewares)
  const { next } = context
  middlewarePipelineRun().then((result) => {
    if (result) {
      result()
    } else {
      next()
    }
  })
}
