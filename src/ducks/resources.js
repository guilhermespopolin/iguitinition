import produce from 'immer'
import { createSelector } from 'reselect'
import _ from 'lodash'

import { normalizePayload } from 'ducks/utils'

// Contants
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
        draft[action.meta.resourceType] = normalizedPayload
      })
    case UPDATE:
      return produce(state, (draft) => {
        if (!_.isNil(_.get(draft, action.meta.resourceType))) {
          draft[action.meta.resourceId] = {
            ...draft[action.meta.resourceId],
            ...action.payload,
          }
        }
      })
    case REMOVE:
      return produce(state, (draft) => {
        if (!_.isNil(_.get(draft, action.meta.resourceType))) {
          return _.pick(draft, _.keys(draft).filter(key => key !== action.meta.resourceId))
        }

        return draft
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

// Selectors
const selectResourcesState = state => _.get(state, 'resources')

export const selectResource = (resource = '', resourceId) => createSelector(
  selectResourcesState,
  substate => _.get(substate, resource.concat(resourceId ? `.${resourceId}` : '')),
)
