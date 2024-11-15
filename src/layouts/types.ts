export const LAYOUTS_FILE_MAP: Record<Layout, string> = {
  default: 'Default.vue',
  login: 'Login.vue',
  empty: 'Empty.vue'
}

export const LAYOUTS = {
  default: 'default',
  login: 'login',
  empty: 'empty'
} as const

export type Layout = (typeof LAYOUTS)[keyof typeof LAYOUTS]
