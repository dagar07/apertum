const actions = {
  USER_LIST_REQUEST: 'USER_LIST_REQUEST',
  USER_LIST_SUCCESS: 'USER_LIST_SUCCESS',
  USER_LIST_FAILURE: 'USER_LIST_FAILURE',

  getUsersList: (payload) => ({
    type: actions.USER_LIST_REQUEST,
    payload
  })
}

export default actions
