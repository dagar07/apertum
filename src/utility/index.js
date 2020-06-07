import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const saveTokenInCookies = (token) => {
  cookies.set('userToken', token, {
    path: '/'
  })
}
