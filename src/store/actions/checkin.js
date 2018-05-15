import {checkinUser} from '../../apiClient'
export const CHECKIN_REQUEST = 'CHECKIN_REQUEST'
export const CHECKIN_SUCCESS = 'CHECKIN_SUCCESS'
export const CHECKIN_FAILURE = 'CHECKIN_FAILURE'

function requestCheckin () {
  return {
    type: CHECKIN_REQUEST
  }
}

export function receiveCheckin (count) {
  return {
    type: CHECKIN_SUCCESS,
    count
  }
}

function checkinError (message) {
  return {
    type: CHECKIN_FAILURE,
    message
  }
}

export function userAppCheckin (passcode) {
  return dispatch => {
    dispatch(requestCheckin())
    return checkinUser(passcode)
      .then(res => {
        if (res.status !== 200) {
          dispatch(checkinError(res.message))
          return Promise.reject(res.message)
        } else {
          dispatch(receiveCheckin(res.body))
        }
      })
      .catch((err) => {
        // err.response.body.errorType: "NO_Authority"
        // err.message: "Bad Request"
        dispatch(checkinError(err.response.body.errorType))
        return Promise.reject(err.response.body.errorType)
      })
  }
}
