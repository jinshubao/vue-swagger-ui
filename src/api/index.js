import axios from '../axios'

export default {

  resources: () => {
    return axios.get('/swagger-resources', {params: {}})
  },

  securityConfiguration: () => {
    return axios.get('/swagger-resources/configuration/security', {params: {}})
  },
  uiConfiguration: () => {
    return axios.get('/swagger-resources/configuration/ui', {params: {}})
  },

  apiDocs: (params) => {
    return axios.get('/v2/api-docs', {params: params})
  }
}
