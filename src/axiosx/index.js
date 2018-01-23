import axios from 'axios'

axios.defaults.timeout = 60000
axios.defaults.baseURL = process.env.API_URL

axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // TODO 错误处理
    return Promise.reject(error)
  })

export default axios
