/* eslint-disable */
import { isObject } from '@/utils/common'
import { format } from 'date-fns'

/**
 * @param {string} str
 * @example
 * snakeToCamel("foo_bar") // return fooBar
 */
export function snakeToCamel(str: string): string {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  )
}

/**
 * @param {string} dateString
 */
export function getSimpleDate(dateString: string): string {
  const localDate = new Date(dateString)
  return format(localDate, 'dd.MM.yyyy')
}

/**
 *
 * @param {object} tempObj
 * @returns {object}
 * @example
 * snakeCaseKeysToCamelCase({ foo_bar: 'baz', bar_foo: { foo_bar: 'baz' } }) // return { fooBar: 'baz', barFoo: { fooBar: 'baz' } }
 */
export function snakeCaseKeysToCamelCase(value: any): any {
  if (Array.isArray(value)) {
    return value.map(snakeCaseKeysToCamelCase)
  }

  if (isObject(value)) {
    return Object.entries(value).reduce((result: any, [key, keyValue]) => {
      const newKey: string = snakeToCamel(key)
      const newKeyValue: any = snakeCaseKeysToCamelCase(keyValue)
      result[newKey] = newKeyValue
      return result
    }, {})
  }

  return value
}

/**
 * @param {string} str
 * @example
 * camelToSnake("fooBar") // return foo_bar
 */
export function camelToSnake(str: string): string {
  return str?.replace(/([A-Z])/g, function ($1: string) {
    return '_' + $1.toLowerCase()
  })
}

export function camelCaseKeysToSnakeCase(value: any): any {
  if (Array.isArray(value)) {
    return value.map(camelCaseKeysToSnakeCase)
  }

  if (isObject(value)) {
    return Object.entries(value).reduce((result: any, [key, keyValue]) => {
      const newKey: string = camelToSnake(key)
      const newKeyValue: any = camelCaseKeysToSnakeCase(keyValue)
      result[newKey] = newKeyValue
      return result
    }, {})
  }

  return value
}

/**
 *
 * @param {string} string
 * @param {object} param1
 */
export function middleTruncate(
  string: string,
  { maxLength = 15, separator }: { maxLength?: number; separator?: string } = {}
): string {
  if (string.length <= maxLength) return string

  const originSeparator: string = separator || '...'
  const left: number = Math.floor(maxLength / 2)
  const right: number = Math.ceil(maxLength / 2)

  return string.substr(0, left) + originSeparator + string.substr(-right)
}

export function capitalizeFirstLetter(string: string): string {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}
