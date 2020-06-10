import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import actions from './actions'
import { postRequest } from '../../serviceRequests'
import apiUrls from '../../apiUrls'

export function * checkAuthrization () {
  yield takeEvery(actions.CHECK_AUTHORIZATION_REQUEST, function * ({ payload }) {
    if (payload.userToken !== undefined) {
      yield put({
        type: actions.CHECK_AUTHORIZATION_SUCCESS,
        userToken: payload.userToken,
        message: 'success'
      })
      yield put(push('/user/list'))
    } else {
      yield put({
        type: actions.CHECK_AUTHORIZATION_FAILURE,
        message: 'failure',
        userToken: null
      })
    }
  })
}

export function * login () {
  yield takeEvery(actions.LOGIN_REQUEST, function * ({ payload }) {
    try {
      const res = yield call(postRequest, { body: payload, url: apiUrls.login })
      if (res) {
        yield put({
          type: actions.LOGIN_SUCCESS,
          userToken: res.data && res.data.token,
          message: 'success'
        })
      } else {
        yield put({
          type: actions.LOGIN_FAILURE,
          data: res.messge
        })
      }
    } catch (res) {
      yield put({
        type: actions.LOGIN_FAILURE,
        data: res.status
      })
    }
  })
}

export default function * rootSaga () {
  yield all([
    fork(checkAuthrization),
    fork(login)
  ])
}
