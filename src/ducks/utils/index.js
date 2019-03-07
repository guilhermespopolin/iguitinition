import { keyBy, keys } from 'lodash'

export function normalizePayload(payload) {
  const pipeline = [
    p => keyBy(p, 'id'),
    p => ({ ids: keys(p), content: p }),
  ]

  return pipeline.reduce((norlalizedPayload, fn) => fn(norlalizedPayload), payload)
}

export default {
  normalizePayload,
}
