import humps from 'lodash-humps'
import createHumps from 'lodash-humps/lib/createHumps'
import { snakeCase } from 'lodash-es'

export const camelizeKeys = humps
export const decamelizeKeys = createHumps(snakeCase)
