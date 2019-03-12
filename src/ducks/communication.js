import produce from 'immer'
import _ from 'lodash'
import { createSelector } from 'reselect'

// Constants
const LOADING = 'LOADING'
const FAIL = 'FAIL'
const DONE = 'DONE'

function generateAction(operation, descriptor) {
  return `app/communication/${operation}/${descriptor}`
}

// Reducer
const initialState = {}
export default function communication(state = initialState, action) {
  // gets the operation part of the action type
  switch (action.type.split('/')[2]) {
    case LOADING:
      return produce(state, (draft) => {
        draft[action.meta.descriptor] = {
          isLoading: true,
          error: {},
        }
      })
    case FAIL:
      return produce(state, (draft) => {
        draft[action.meta.descriptor].error = action.meta.error
      })
    case DONE:
      return produce(state, draft => (
        _.pick(draft, _.keys(draft).filter(key => key !== action.meta.descriptor))),
      )
    default:
      return state
  }
}

// Action creators
export function loading(descriptor) {
  return {
    type: generateAction(LOADING, descriptor),
    meta: { descriptor },
  }
}

export function fail(descriptor, error) {
  return {
    type: generateAction(FAIL, descriptor),
    meta: { descriptor, error },
  }
}

export function finish(descriptor) {
  return {
    type: generateAction(DONE, descriptor),
    meta: { descriptor },
  }
}


// Selectors
const selectCommunicationState = state => _.get(state, 'communication')

export const selectCommunication = (descriptor = '') => createSelector(
  selectCommunicationState,
  substate => _.get(substate, descriptor, {}),
)
