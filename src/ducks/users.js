import {
  setResource,
  updateResource,
  removeResource,
  selectResource,
} from 'ducks/resources'
import {
  loading,
  fail,
  finish,
  selectCommunication,
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

// Selectors
export const selectUsers = selectResource('users')
export const selectUser = id => selectResource('users', id)
export const selectUsersCommunication = selectCommunication('users')
export const selectUserCommunication = id => selectCommunication(`users:${id}`)

// Side Effects
export function fetchUsers() {
  return async (dispatch) => {
    // you need to run mock-server script in order this to work
    const url = 'http://localhost:3042/users'
    dispatch(loading('users'))
    try {
      const response = await fetch(url)
      const payload = await response.json()

      dispatch(setUsers(payload))
      dispatch(finish('users'))
    } catch (e) {
      fail('users', e)
    }
  }
}
