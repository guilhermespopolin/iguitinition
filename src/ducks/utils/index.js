import { keyBy } from 'lodash'

export function normalizePayload(payload) {
  return keyBy(payload, 'id')
}

export default {
  normalizePayload,
}
