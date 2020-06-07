import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function getAuthHeader () {
  // this function used to get auth headers
  const token = cookies.get('userToken')
  return {
    'Content-Type': 'application/json',
    Authorization: `${token ? `Bearer ${token}` : ''}`
  }
}

export const postRequest = ({ url = '', body = {}, headers = {} }) => {
  return axios
    .post(url, { ...body }, { headers })
    .catch(error => {
      if (error.response) {
        throw error.response
      } else {
        throw error
      }
    })
    .then(response => {
      return response
    })
}

export const getRequest = ({ url = '', query = '', headers = {} }) => {
  const finalUrl = query ? `${url}${query}` : url
  return axios
    .get(finalUrl, { headers })
    .catch(error => {
      if (error.response) {
        throw error.response
      } else {
        throw error
      }
    })
    .then(response => {
      return response
    })
}
