import axios from '../axiosx'

export default {
  loadGroups: () => {
    return axios.get('/swagger-resources', {params: {}})
  },
  loadDocs: (params) => {
    return axios.get('/v2/api-docs', {params: params})
  }
}
