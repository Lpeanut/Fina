import Home from '@c/layout'

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/dashboard',
    meta: {
      icon: 'md-baseball',
      docTitle: 'Home',
      hideOnSider: true,
      white: true // 白名单，即登录的用户都可以访问该路由
    },
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          icon: 'md-baseball',
          docTitle: 'Dashboard',
          hideOnSider: true
        },
        component: () => import('@v/dashboard')
      },
      {
        path: '/user/list',
        name: 'user_list',
        meta: {
          icon: 'md-baseball',
          docTitle: '用户列表',
          hideOnSider: true
        },
        component: () => import('@v/user-list')
      }
    ]
  },
  {
    path: '/home',
    name: 'hhome',
    meta: {
      icon: 'md-baseball',
      docTitle: 'Home',
      hideOnSider: true
    },
    component: Home
  }
]

export default routes
