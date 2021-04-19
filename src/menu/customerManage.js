export default {
  name: "customerManage",
  path: "/customerManage",
  auth: 0,
  redirect: "/customerManage/leadsInfo",
  meta: {
    title: "客户管理",
    icon: "el-icon-s-custom",
  },
  children: [
    {
      path: "/customerManage/leadsInfo",
      name: "leadsInfo",
      auth: 0,
      meta: {
        title: "leads信息",
      },
      component: () => import("../views/customerManage/leadsInfo/Index.vue"),
    },
    {
      path: "/customerManage/studentInfo",
      name: "studentInfo",
      auth: 0,
      meta: {
        title: "学员信息",
      },
      component: () => import("../views/customerManage/studentInfo/Index.vue"),
    },
    {
      path: "/customerManage/leadsDetails",
      name: "leadsDetails",
      meta: {
        title: "leads详情",
      },
      component: () => import("../views/customerManage/leadsDetails/Index.vue"),
    },
    {
      path: "/customerManage/classDetails",
      name: "classDetails",
      meta: {
        title: "班级详情",
      },
      component: () => import("../views/customerManage/classDetails/Index.vue"),
    },
  ],
};
