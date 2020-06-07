import { all } from 'redux-saga/effects'
import authSagas from './auth/sagas'
import appSagas from './app/sagas'
import userSagas from './users/saga'

export default function * rootSaga () {
  yield all([
    authSagas(),
    appSagas(),
    userSagas()
  ])
}
