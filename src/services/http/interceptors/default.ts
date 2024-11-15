import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export const defaultErrorInterceptor = (error: AxiosError) => Promise.reject(error)
export const defaultRequestInterceptor = (config: InternalAxiosRequestConfig) => config
export const defaultResponseInterceptor = (response: AxiosResponse) => response
