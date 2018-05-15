import {getUserHistory} from '../../apiClient'
export const VISITS_REQUEST = 'VISITS_REQUEST'
export const VISITS_SUCCESS = 'VISITS_SUCCESS'
export const VISITS_FAILURE = 'VISITS_FAILURE'

function requestVisitsHistory () {
  return {
    type: VISITS_REQUEST
  }
}

export function receiveVisitsHistory (visits) {
  return {
    type: VISITS_SUCCESS,
    visits
  }
}

function visitsHistoryError (message) {
  return {
    type: VISITS_FAILURE,
    message
  }
}

export function getVisitsHistory () {
  return dispatch => {
    dispatch(requestVisitsHistory())
    return getUserHistory()
      .then(res => {
        if (res.length >= 0) {
          dispatch(receiveVisitsHistory(res))
        } else {
          dispatch(visitsHistoryError(res.message))
          return Promise.reject(res.message)
        }
      })
      .catch((err) => {
        // err.response.body.errorType: "NO_Authority"
        // err.message: "Bad Request"
        dispatch(visitsHistoryError(err.response.body.errorType))
        return Promise.reject(err.response.body.errorType)
      })
  }
}
