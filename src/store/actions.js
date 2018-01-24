import * as types from './mutation-types'

export const addApiDocs = ({ commit }, apiDocs) => commit(types.ADD_API_DOCS, apiDocs)
export const addOperation = ({ commit }, operation) => commit(types.ADD_OPERATION, operation)
