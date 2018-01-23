import OperationDetail from '../components/OperationDetail'

let routes = [
  {
    path: '/operation/:operationId',
    name: '接口详情',
    component: OperationDetail
  },
  {
    path: '/error',
    name: '错误',
    component: Error,
    hidden: true,
    children: []
  }
]

export default routes
