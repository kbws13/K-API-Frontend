export default [
  { path: '/welcome', icon: 'smile', component: './Welcome', name: "主页" },
  { path: '/interface_info/:id', name: '接口信息', icon: 'smile', component: './InterfaceInfo', hideInMenu: true },
  { 
    path: '/user', 
    layout: false, 
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
    ] 
  },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: "管理页",
    routes: [
      { path: '/admin', redirect: '/admin/interface' },
      { path: '/admin/interface', component: './Admin/InterfaceInfo', name: "接口管理" },
      { path: '/admin/interface_analysis', component: './Admin/InterfaceAnalysis', name: "接口分析" },
      { path: '/admin/user', component: './Admin/User', name: "用户管理" },
    ],
  },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
