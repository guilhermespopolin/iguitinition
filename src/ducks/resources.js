import _ from 'lodash'
import produce from 'immer'

// Utils
const normalizePayload = _.flow([
  payload => _.keyBy(payload, 'id'),
  temp => ({ ids: _.keys(temp), content: temp }),
])

// Actions
const SET = 'app/resources/SET'
const UPDATE = 'app/resources/UPDATE'
const REMOVE = 'app/resources/REMOVE'

// Reducer
const initialState = {}
export default function resources(state = initialState, action) {
  const normalizedPayload = normalizePayload(action.payload)

  switch (action.type) {
    case UPDATE:
      return produce(state, (draft) => {
        if (_.get(draft, `${action.meta.resourceType}.ids`, []).includes(action.meta.resourceId)) {
          draft[action.meta.resourceType].content[action.meta.resourceId] = {
            ...draft[action.meta.resourceType].content[action.meta.resourceId],
            ...action.payload,
          }
        }
      })
    case SET:
      return produce(state, (draft) => {
        draft[action.meta.resourceType] = {
          ids: normalizedPayload.ids,
          content: normalizedPayload.content,
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
    type: SET,
    meta: { resourceType },
    payload,
  }
}

export function updateResource(resourceType, resourceId, payload) {
  return {
    type: UPDATE,
    meta: {
      resourceType,
      resourceId,
    },
    payload,
  }
}

export function removeResource(resourceType, resourceId) {
  return {
    type: REMOVE,
    meta: {
      resourceType,
      resourceId,
    },
  }
}
