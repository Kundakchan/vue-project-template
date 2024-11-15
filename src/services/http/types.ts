import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface SetHeader {
  (key: string, value: string): void
}

export interface UnsetHeader {
  (key: string): void
}

export interface ClientError {
  (error: AxiosError): Promise<AxiosError>
}

export interface AddRequestInterceptorParams {
  request: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
  error?: ClientError
}

export interface AddResponseInterceptorParams {
  response: (response: AxiosResponse) => AxiosResponse
  error?: ClientError
}

export interface AddRequestInterceptor {
  (config: AddRequestInterceptorParams): () => void
}

export interface AddResponseInterceptor {
  (params: AddResponseInterceptorParams): () => void
}
