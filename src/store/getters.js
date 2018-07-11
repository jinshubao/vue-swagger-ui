const getters = {
  getOperation: (state) => (operationId) => {
    let opt = {}
    let apiDocs = state.swagger.apiDocs
    if (apiDocs && apiDocs['tags']) {
      apiDocs['tags'].forEach((v, tindex, arr) => {
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
  apiDocs: (state) => state.swagger.apiDocs,
  tags: (state) => {
    return state.swagger.apiDocs['tags']
  },
  getInfo: (state) => {
    let apiDocs = state.swagger.apiDocs
    if (apiDocs) {
      return apiDocs['info']
    }
    return {}
  },
  getHost: (state) => state.swagger.apiDocs['host'],
  getBasePath: (state) => state.swagger.apiDocs['basePath'],
  getDefinition: (state) => (ref) => state.swagger.apiDocs['definitions'][ref],
  getDefinitions: (state) => state.swagger.apiDocs['definitions']
}
export default getters
