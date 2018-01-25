import axios from 'axios'
import store from '../store'
axios.defaults.timeout = 60000
// axios.defaults.baseURL = process.env.API_URL

/**
 * request拦截器
 */
axios.interceptors.request.use(
  config => {
    console.log(localStorage.lastname)
    axios.defaults.baseURL = 'http://' + localStorage.lastname
    store.dispatch('showLoading')
    return config
  },
  err => {
    return Promise.reject(err)
  })

/**
 * response拦截器
 */
axios.interceptors.response.use(
  response => {
    store.dispatch('hideLoading')
    return response
  },
  error => {
    // TODO 错误处理
    return Promise.reject(error)
  })

export default axios
