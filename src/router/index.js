import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import Operation from '../components/Operation'
import Index from '../components/Index'
import Group from '../components/group/Group'
import GroupIndex from '../components/group/Index'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
    ]
  },
  {
    path: '/group',
    component: Group,
    children: [
      {
        path: '',
        name: 'groupIndex',
        component: GroupIndex
      },
      {
        path: 'operation',
        name: 'operation',
        component: Operation
      }
    ]
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
