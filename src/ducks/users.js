import { unionBy } from 'lodash'
import schema from 'schm'

// Actions
const UPDATE_USERS = 'iguinition/users/UPDATE'

// Reducer
const initalState = []

export default function users(state = initalState, action) {
  switch (action.type) {
    case UPDATE_USERS:
      return unionBy(state, action.payload, 'id')
    default:
      return state
  }
}

// Action Creators
export function updateUsers(usersList) {
  return {
    type: UPDATE_USERS,
    payload: usersList,
  }
}

// Side effects
const userSchema = schema({
  id: { type: Number, required: true },
  name: String,
  username: String,
  email: String,
})

export function getUsers() {
  return async (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    try {
      const response = await fetch(url)
      const jsonResponse = await response.json()
      const parsedResponse = jsonResponse.map(
        user => userSchema.parse(user),
      )
      dispatch(updateUsers(parsedResponse))
    } catch (e) {
      throw new Error(e)
    }
  }
}
