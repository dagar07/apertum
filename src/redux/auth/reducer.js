import actions from './actions'

const initState = {
  userToken: '',
  loggedIn: false
}

export default function authReducer (state = initState, action) {
  switch (action.type) {
    case actions.CHECK_AUTHORIZATION_SUCCESS:
      return {
        ...state,
        userToken: action.userToken,
        loggedIn: !!action.userToken
      }
    case actions.LOGIN_SUCCESS:
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: !!action.userToken,
        loginStatus: action.message,
        userToken: action.userToken
      }
    case actions.LOGOUT_SUCCESS:
    case actions.LOGOUT_FAILURE:
      return initState
    default:
      return state
  }
}
