import * as types from '../mutation-types'

const state = {
  loadingStatus: false
}

const getters = {
  loadingStatus (state) {
    return state.loadingStatus
  }
}

const actions = {
}

const mutations = {
  [types.SHOW_LOADING] (state) {
    state.loadingStatus = true
  },
  [types.HIDE_LOADING] (state) {
    state.loadingStatus = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
