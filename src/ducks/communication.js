// Utils
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
      return {
        ...state,
        [action.meta.descriptor]: {
          ...state[action.meta.descriptor],
          isLoading: true,
          error: {},
        },
      }
    case FAIL:
      return {
        ...state,
        [action.meta.descriptor]: {
          ...state[action.meta.descriptor],
          error: action.meta.error,
        },
      }
    case DONE:
      return Object.keys(state).reduce((acc, key) => {
        if (key === action.meta.descriptor) {
          return acc
        }

        return {
          ...acc,
          [key]: state[key],
        }
      }, {})
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
