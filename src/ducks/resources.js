import _ from 'lodash'
import produce from 'immer'

import { normalizePayload } from 'ducks/utils'

// Utils
const SET = 'SET'
const UPDATE = 'UPDATE'
const REMOVE = 'REMOVE'

function generateAction(operation, resourceType, resourceId) {
  return `app/resources/${operation}/${resourceType.toUpperCase()}${resourceId ? `:${resourceId}` : ''}`
}

// Reducer
const initialState = {}
export default function resources(state = initialState, action) {
  const normalizedPayload = normalizePayload(action.payload)

  // gets the operation part of the action type
  switch (action.type.split('/')[2]) {
    case SET:
      return produce(state, (draft) => {
        draft[action.meta.resourceType] = {
          ids: normalizedPayload.ids,
          content: normalizedPayload.content,
        }
      })
    case UPDATE:
      return produce(state, (draft) => {
        if (_.get(draft, `${action.meta.resourceType}.ids`, []).includes(action.meta.resourceId)) {
          draft[action.meta.resourceType].content[action.meta.resourceId] = {
            ...draft[action.meta.resourceType].content[action.meta.resourceId],
            ...action.payload,
          }
        }
      })
    case REMOVE:
      return produce(state, (draft) => {
        if (_.get(draft, `${action.meta.resourceType}.ids`, []).includes(action.meta.resourceId)) {
          draft[action.meta.resourceType] = {
            ids: draft[action.meta.resourceType].ids.filter(id => id !== action.meta.resourceId),
            content: _.omit(draft[action.meta.resourceType].content, action.meta.resourceId),
          }
        }
      })
    default:
      return state
  }
}

// Action Creators
export function setResource(resourceType, payload) {
  return {
    type: generateAction(SET, resourceType),
    meta: { resourceType },
    payload,
  }
}

export function updateResource(resourceType, resourceId, payload) {
  return {
    type: generateAction(UPDATE, resourceType, resourceId),
    meta: {
      resourceType,
      resourceId,
    },
    payload,
  }
}

export function removeResource(resourceType, resourceId) {
  return {
    type: generateAction(REMOVE, resourceType, resourceId),
    meta: {
      resourceType,
      resourceId,
    },
  }
}
