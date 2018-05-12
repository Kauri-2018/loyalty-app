import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/login'
import {CHECKIN_REQUEST, CHECKIN_SUCCESS, CHECKIN_FAILURE} from '../actions/checkin'
import {LOGOUT} from '../actions/logout'
// import {UPDATE_USER} from '../actions/index'

const initState = {
  isFetching: false,
  isAuthenticated: false,
  errorMessage: '',
  user: null
}

export default function (state = initState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      }
    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case CHECKIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isCheckedin: false
      }
    case CHECKIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isCheckedin: true,
        count: action.count
      }
    case CHECKIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isCheckedin: false,
        errorMessage: action.message
      }
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: null
      }
    // case UPDATE_USER:
    //   return {
    //     ...state,
    //     user: action.user
    //   }
    default:
      return state
  }
}
