import axios from 'axios'

const api = axios.create({
  baseURL: 'https://minha-api.com',
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
})

export default api
