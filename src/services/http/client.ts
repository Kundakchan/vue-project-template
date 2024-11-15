import axios from 'axios'
import type { SetHeader, UnsetHeader, AddRequestInterceptor, AddResponseInterceptor } from './types'
import {
  defaultErrorInterceptor,
  defaultRequestInterceptor,
  defaultResponseInterceptor
} from './interceptors/default'

const instance = axios.create({
  // TODO: Поменять baseURL на актуальный
  baseURL: 'https://66a23eec967c89168f1f55dc.mockapi.io/api/v1',
  timeout: 3000
})

export const setHeader: SetHeader = (key: string, value: string) => {
  instance.defaults.headers.common[key] = value
}

export const unsetHeader: UnsetHeader = (key: string) => {
  delete instance.defaults.headers.common[key]
}

export const addRequestInterceptor: AddRequestInterceptor = ({ request, error }) => {
  const interceptor = instance.interceptors.request.use(
    request ?? defaultRequestInterceptor,
    error ?? defaultErrorInterceptor
  )
  return () => {
    instance.interceptors.request.eject(interceptor)
  }
}

export const addResponseInterceptor: AddResponseInterceptor = ({ response, error }) => {
  const interceptor = instance.interceptors.response.use(
    response ?? defaultResponseInterceptor,
    error ?? defaultErrorInterceptor
  )
  return () => {
    instance.interceptors.response.eject(interceptor)
  }
}

const client = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  patch: instance.patch,
  delete: instance.delete
}

export default client
