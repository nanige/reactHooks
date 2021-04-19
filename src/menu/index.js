// import customerManage from './customerManage'
// import eduManage from './eduManage'
// import orderManage from './orderManage'
import systemSet from './systemSet'

let routerMenuList = [
  // ...customerManage.children,
  // ...eduManage.children,
  // ...orderManage.children,
  ...systemSet.children,
]

export default [
  // customerManage,
  // eduManage,
  // orderManage,
  systemSet,
]

export { routerMenuList }
