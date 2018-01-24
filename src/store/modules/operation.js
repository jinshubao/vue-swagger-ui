import * as types from '../mutation-types'

// initial state
const state = {
  apiDocs: {},
  operation: {}
}

// getters
const getters = {
  operation: (state) => state.operation,
  apiDocs: (state) => state.apiDocs,
  tags: (state) => {
    return state.apiDocs['tags']
  }
}

// actions
const actions = {

}

// mutations
const mutations = {
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
