const swagger = {
  state: {
    apiDocs: {}
  },
  actions: {
    addApiDocs: ({commit}, apiDocs) => commit('ADD_API_DOCS', apiDocs)
  },
  mutations: {
    ADD_API_DOCS (state, apiDocs) {
      state.apiDocs = apiDocs
    }
  }
}
export default swagger
