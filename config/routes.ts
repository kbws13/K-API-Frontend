export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', icon: 'smile', component: './Welcome', name: "欢迎页" },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: "管理页",
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin', name: "管理子页" },
      { icon: 'table', path: '/admin/user', component: './Admin/User', name: "用户管理" },
    ],
  },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
