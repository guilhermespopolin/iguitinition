import produce from 'immer'

// Actions
const UPDATE_USERS = 'iguinition/users/UPDATE'

const initalState = {
  ids: [],
  content: {},
}

// Reducer
export default function users(state = initalState, action) {
  switch (action.type) {
    case UPDATE_USERS:
      return produce(state, (draft) => {
        draft.ids = action.payload.ids
        draft.content = action.payload.content
      })
    default:
      return state
  }
}

// Action Creators
export function updateUsers(ids, content) {
  return {
    type: UPDATE_USERS,
    payload: {
      ids,
      content,
    },
  }
}

// Side effects
export function getUsers() {
  return async (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    try {
      const response = await fetch(url)
      const parsedResponse = await response.json()
      const ids = parsedResponse.map(u => u.id)
      const content = parsedResponse.reduce((acc, u) => ({
        ...acc,
        [u.id]: u,
      }), {})
      dispatch(updateUsers(ids, content))
    } catch (e) {
      console.log(e)
    }
  }
}
