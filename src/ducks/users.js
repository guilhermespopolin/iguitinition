import {
  setResource,
  updateResource,
  removeResource,
} from 'ducks/resources'
import {
  loading,
  fail,
  finish,
} from 'ducks/communication'

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
    // you need to run mock-server script in order this to work
    const url = 'http://localhost:3042/users'
    dispatch(loading('USERS'))
    try {
      const response = await fetch(url)
      const payload = await response.json()

      dispatch(setUsers(payload))
      dispatch(finish('USERS'))
    } catch (e) {
      fail('USERS', e)
    }
  }
}
