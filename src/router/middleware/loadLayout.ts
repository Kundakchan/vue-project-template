import { LAYOUTS, LAYOUTS_FILE_MAP } from '@/layouts/types'
import type { Middleware } from '@/router/types'

export const loadLayout: Middleware = async ({ to }) => {
  const { layout } = to.meta
  const normalizedLayoutName = layout || LAYOUTS.default
  const fileName = LAYOUTS_FILE_MAP[normalizedLayoutName]
  const fileNameWithoutExtension = fileName.split('.vue')[0]

  const component = await import(`@/layouts/${fileNameWithoutExtension}.vue`)
  to.meta.layoutComponent = component.default

  console.log('loadLayout')
  // return () => next({ name: 'page-name' })
}

export default loadLayout
