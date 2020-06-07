import actions from './actions'

const initState = {
  usersList: [],
  userListStatus: ''
}

export default function userReducer (state = initState, action) {
  switch (action.type) {
    case actions.USER_LIST_SUCCESS:
    case actions.USER_LIST_FAILURE:
      return {
        ...state,
        usersList: action.data,
        userListStatus: action.message
      }
    default:
      return state
  }
}
