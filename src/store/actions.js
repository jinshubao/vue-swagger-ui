import * as types from './mutation-types'

export const addApiHost = ({ commit }, host) => commit(types.ADD_API_HOST, host)

export const addApiDocs = ({ commit }, apiDocs) => commit(types.ADD_API_DOCS, apiDocs)

export const addOperation = ({ commit }, operation) => commit(types.ADD_OPERATION, operation)

export const showLoading = ({ commit }) => commit(types.SHOW_LOADING)

export const hideLoading = ({ commit }) => commit(types.HIDE_LOADING)
