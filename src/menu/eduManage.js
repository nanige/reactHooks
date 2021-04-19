export default {
  name: 'eduManage',
  path: '/eduManage',
  auth: 0,
  redirect: '/eduManage/classScheduleCard',
  meta: {
    title: '教务管理',
    icon: 'el-icon-s-management'
  },
  children: [
    {
      path: '/eduManage/classScheduleCard',
      name: 'classScheduleCard',
      auth: 0,
      meta: {
        title: '课程表'
      },
      component: () => import('../views/eduManage/classScheduleCard/Index.vue')
    },
    {
      path: '/eduManage/auditionClass',
      name: 'auditionClass',
      auth: 0,
      meta: {
        title: '试听课排课池'
      },
      component: () => import('../views/eduManage/auditionClass/Index.vue')
    },
    {
      path: '/eduManage/formalClass',
      name: 'formalClass',
      auth: 0,
      meta: {
        title: '正式课排课池'
      },
      component: () => import('../views/eduManage/formalClass/Index.vue')
    },
    {
      path: '/eduManage/WaitClassInfo',
      name: 'WaitClassInfo',
      meta: {
        title: '开班信息'
      },
      component: () => import('../views/eduManage/formalClass/WaitClassInfo.vue')
    },
  ]
}