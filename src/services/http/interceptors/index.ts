import { addRequestInterceptor, addResponseInterceptor } from '../client'

import { camelCaseKeysToSnakeCase, snakeCaseKeysToCamelCase } from '@/utils/formatters'
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export function requestCamelToSnake(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  return {
    ...config,
    params: camelCaseKeysToSnakeCase(config.params),
    data: camelCaseKeysToSnakeCase(config.data)
  }
}

export function responseSnakeToCamel(response: AxiosResponse) {
  return snakeCaseKeysToCamelCase(response.data)
}

export default function initializeHttpInterceptors() {
  addRequestInterceptor({ request: requestCamelToSnake })
  addResponseInterceptor({
    response: responseSnakeToCamel
  })
}
