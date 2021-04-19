export default {
  name: 'orderManage',
  path: '/orderManage',
  auth: 0,
  redirect: '/orderManage/orderDetails',
  meta: {
    title: '订单管理',
    icon: 'el-icon-s-order'
  },
  children: [
    {
      path: '/orderManage/orderDetails',
      name: 'orderDetails',
      auth: 0,
      meta: {
        title: '订单详情'
      },
      component: () => import('../views/orderManage/orderDetails/Index.vue')
    },
    {
      path: '/orderManage/orderReview',
      name: 'orderReview',
      auth: 0,
      meta: {
        title: '订单审核'
      },
      component: () => import('../views/orderManage/orderReview/Index.vue')
    },
    // {
    //   path: '/orderManage/contractManage',
    //   name: 'contractManage',
    //   auth: 0,
    //   meta: {
    //     title: '合同管理'
    //   },
    //   component: () => import('../views/orderManage/contractManage/Index.vue')
    // },
    {
      path: '/orderManage/spikeManage',
      name: 'spikeManage',
      auth: 0,
      meta: {
        title: '秒杀管理'
      },
      component: () => import('../views/orderManage/spikeManage/Index.vue')
    },
    {
      path: '/orderManage/spikeCreate',
      name: 'spikeCreate',
      meta: {
        title: '新建秒杀活动'
      },
      component: () => import('../views/orderManage/spikeManage/SpikeCreate.vue')
    },
    {
      path: '/orderManage/spikeEdit',
      name: 'spikeEdit',
      meta: {
        title: '编辑秒杀活动'
      },
      component: () => import('../views/orderManage/spikeManage/SpikeEdit.vue')
    },
    {
      path: '/orderManage/spikeDetail',
      name: 'spikeDetail',
      meta: {
        title: '秒杀活动详情'
      },
      component: () => import('../views/orderManage/spikeManage/SpikeDetail.vue')
    },
    {
      path: '/orderManage/HelpOrder',
      name: 'HelpOrder',
      meta: {
        title: '人工下单'
      },
      component: () => import('../views/orderManage/orderDetails/components/HelpOrder.vue')
    },
    {
      path: '/orderManage/OrderInfo',
      name: 'OrderDetails',
      meta: {
        title: '订单详情'
      },
      component: () => import('../views/orderManage/orderDetails/OrderDetails.vue')
    },
    {
      path: '/orderManage/workOrderDetail',
      name: 'workOrderDetail',
      meta: {
        title: '工单详情'
      },
      component: () => import('../views/orderManage/orderReview/workOrderDetail/Index.vue')
    },
    {
      path: '/orderManage/giftDetails',
      name: 'giftDetails',
      meta: {
        title: '赠品详情'
      },
      component: () => import('../views/orderManage/orderDetails/GiftDetails.vue')
    }
    
  ]
}