import {
  setResource,
  updateResource,
  removeResource,
} from 'ducks/resources'

// Action Creators
export function setUsers(payload) {
  return setResource('users', payload)
}

export function updateUser(userId, payload) {
  return updateResource('users', userId, payload)
}

export function removeUser(userId) {
  return removeResource('users', userId)
}

// Side Effects
export function fetchUsers() {
  return async (dispatch) => {
    const url = 'http://localhost:3042/users'
    try {
      const response = await fetch(url)
      const payload = await response.json()

      dispatch(setUsers(payload))
    } catch (e) {
      throw new Error(e)
    }
  }
}
