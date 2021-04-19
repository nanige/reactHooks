import AuthManage from '../views/systemSet/authManage'
import CampusManage from '../views/systemSet/campusManage'
import LeadsChannelManage from '../views/systemSet/leadsChannelManage'

export default {
  name: 'systemSet',
  path: '/systemSet',
  auth: 0,
  redirect: '/systemSet/campusManage',
  meta: {
    title: '系统设置',
    icon: 'el-icon-s-tools'
  },
  children: [
    {
      path: '/systemSet/campusManage',
      name: 'campusManage',
      auth: 0,
      meta: {
        title: '校区管理'
      },
      component: CampusManage
    },
    {
      path: '/systemSet/leadsChannelManage',
      name: 'leadsChannelManage',
      auth: 0,
      meta: {
        title: 'Leads渠道管理'
      },
      component: LeadsChannelManage
    },
    {
      path: '/systemSet/authManage',
      name: 'authManage',
      auth: 0,
      meta: {
        title: '账号权限管理'
      },
      component: AuthManage
    }
  ]
}