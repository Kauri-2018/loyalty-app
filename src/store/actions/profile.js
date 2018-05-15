import {getUser} from '../../apiClient'
export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

function requestUser () {
  return {
    type: USER_REQUEST
  }
}

export function receiveUser (profile) {
  return {
    type: USER_SUCCESS,
    profile
  }
}

function userError (message) {
  return {
    type: USER_FAILURE,
    message
  }
}

export function getAccountInfo () {
  return dispatch => {
    dispatch(requestUser())
    return getUser()
      .then(res => {
        if (res.id) {
          dispatch(receiveUser(res))
        } else {
          dispatch(userError(res.message))
          return Promise.reject(res.message)
        }
      })
      .catch((err) => {
        // err.response.body.errorType: "NO_Authority"
        // err.message: "Bad Request"
        dispatch(userError(err.response.body.errorType))
        return Promise.reject(err.response.body.errorType)
      })
  }
}
