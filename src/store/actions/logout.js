import {set} from '../../utils/localStorage'

export const LOGOUT = 'LOGOUT'

export function logout () {
  set(null)
  return {
    type: LOGOUT
  }
}
