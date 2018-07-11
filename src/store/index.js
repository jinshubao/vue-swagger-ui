/**
 * 状态管理
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import swagger from './modules/swagger'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    swagger
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
