import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import actions from './actions'
import { getAuthHeader, getRequest } from '../../serviceRequests'
import apiUrls from '../../apiUrls'

export function * usersListSaga () {
  console.log('tilka usersListSaga')
  yield takeEvery(actions.USER_LIST_REQUEST, function * ({ payload }) {
    try {
      const res = yield call(getRequest, {
        url: apiUrls.usersList,
        headers: getAuthHeader()
      })
      if (res) {
        yield put({
          type: actions.USER_LIST_SUCCESS,
          userToken: res.data,
          messge: 'success'
        })
      } else {
        yield put({
          type: actions.USER_LIST_FAILURE,
          data: res.messge
        })
      }
    } catch (res) {
      yield put({
        type: actions.USER_LIST_FAILURE,
        data: res.status
      })
    }
  })
}

export default function * rootSaga () {
  yield all([
    fork(usersListSaga)
  ])
}
