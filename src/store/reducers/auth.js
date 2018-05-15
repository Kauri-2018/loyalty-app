import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/login'
import {CHECKIN_REQUEST, CHECKIN_SUCCESS, CHECKIN_FAILURE} from '../actions/checkin'
import {VISITS_REQUEST, VISITS_SUCCESS, VISITS_FAILURE} from '../actions/visits'
import {USER_REQUEST, USER_SUCCESS, USER_FAILURE} from '../actions/profile'
import {LOGOUT} from '../actions/logout'
// import {UPDATE_USER} from '../actions/index'

const initState = {
  isFetching: false,
  isAuthenticated: false,
  isCheckedin: false,
  isVisits: false,
  isAccount: false,
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
    case VISITS_REQUEST:
      return {
        ...state,
        isVisits: false,
        isFetching: true
      }
    case VISITS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAccount: false,
        isVisits: true,
        visits: action.visits
      }
    case VISITS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isVisits: false,
        errorMessage: action.message
      }
    case USER_REQUEST:
      return {
        ...state,
        isAccount: false,
        isFetching: true
      }
    case USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAccount: true,
        isVisits: false,
        profile: action.profile
      }
    case USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAccount: false,
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
