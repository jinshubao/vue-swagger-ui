import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import Operation from '../components/Operation'

Vue.use(VueRouter)

let routes = [
  {
    path: '/operation/:operationId',
    name: 'operation',
    component: Operation
  },
  {
    path: '/error',
    name: '错误',
    component: Error,
    hidden: true,
    children: []
  }
]
const router = new VueRouter({routes})

router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach(transition => {
  nprogress.done()
})

export default router
