import { $fetch } from 'ohmyfetch'
import { Getter, Setter } from './types'
import { camelizeKeys, decamelizeKeys } from '~~/utils/humps'

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://127.0.0.1:8000/api/'
    : 'https://aria-api-prod.herokuapp.com/api/'

export const apiService = $fetch.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  onRequestError: async function ({ request, options, error }) {
    console.log('[fetch request error]', request, error)
  },
  onResponseError: async function ({ request, response, options }) {
    console.log('[fetch response error]', request, response.status, response.body)
  },
})

export async function getter<T>(url: string, options: any = {}): Promise<T> {
  if (!url) {
    throw new Error('Url was not provided.')
  }

  const response = await apiService(url, {
    ...options,
    headers: {
      Authorization: process.client ? `JWT ${localStorage.getItem('access_token')}` : null,
      ...options.headers,
    },
  })

  const formattedData = response ? camelizeKeys(response) : null

  if (!response.ok) {
    // do stuff
  }

  return formattedData
}

export const setter =
  (method: string): Setter =>
  <T>(url: string, data: unknown, options: any = {}) => {
    const formattedData = decamelizeKeys(data)
    const payload = JSON.stringify(formattedData)

    console.log(payload)

    return getter<T>(url, {
      body: payload,
      method,
      ...options,
      headers: {
        ...options.headers,
      },
    })
  }
