import * as types from './authorizationTypes'

const INITIAL_STATE = {
  loggedIn: false,
  user: {},
  meta: {
    loggingIn: false,
    error: ''
  }
}

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case types.USER_LOGGED_IN_BEGIN: {
      return {
        ...state,
        loggedIn: false,
        meta: {
          ...state.meta,
          loggingIn: true,
          error: false
        }
      }
    }
    case types.USER_LOGGED_IN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        meta: {
          ...state.meta,
          loggingIn: false,
          error: false
        }
      }
    }
    case types.USER_LOGGED_IN_FAIL: {
      return {
        ...state,
        loggedIn: false,
        meta: {
          ...state.meta,
          loggingIn: false,
          error: action.payload
        }
      }
    }
    default: return state
  }
}