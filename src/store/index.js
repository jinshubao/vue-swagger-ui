/**
 * 状态管理
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import operation from './modules/operation'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    operation
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
