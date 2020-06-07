import { store } from './store'
import authActions from './auth/actions'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export default () =>
  new Promise(() => store.dispatch(
    authActions.checkAuthrization({
      userToken: cookies.get('userToken')
    })
  ))
