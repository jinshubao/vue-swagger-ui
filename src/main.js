import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './router'
import * as getters from './vuex/getters'
import * as actions from './vuex/actions'
import state from './vuex/state'
import mutations from './vuex/mutations'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({routes})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

// 创建 store 实例
const store = new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
