import * as types from '../mutation-types'

const state = {
  apiDocs: {}
}

const getters = {
  getOperation: (state) => (operationId) => {
    let opt = {}
    if (state.apiDocs && state.apiDocs['tags']) {
      state.apiDocs['tags'].forEach((v, tindex, arr) => {
        let tag = arr[tindex]
        if (tag && tag.operations) {
          tag.operations.forEach((pv, pindex, operations) => {
            let operation = operations[pindex]
            if (operation['operationId'] === operationId) {
              opt = operation
            }
          })
        }
      })
    }
    return opt
  },
  apiDocs: (state) => state.apiDocs,
  tags: (state) => {
    return state.apiDocs['tags']
  }
}

const actions = {

}

const mutations = {
  [types.ADD_API_DOCS] (state, apiDocs) {
    state.apiDocs = apiDocs
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
