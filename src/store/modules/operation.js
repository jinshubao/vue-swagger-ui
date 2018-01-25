import * as types from '../mutation-types'

const state = {
  apiHost: '',
  apiDocs: {},
  operation: {}
}

const getters = {
  apiHost: (state) => state.apiHost,
  operation: (state) => state.operation,
  apiDocs: (state) => state.apiDocs,
  tags: (state) => {
    return state.apiDocs['tags']
  }
}

const actions = {

}

const mutations = {
  [types.ADD_API_HOST] (state, host) {
    state.apiHost = host
  },
  [types.ADD_API_DOCS] (state, apiDocs) {
    state.apiDocs = apiDocs
  },
  [types.ADD_OPERATION] (state, operation) {
    state.operation = operation
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
