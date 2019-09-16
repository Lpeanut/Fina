import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes
})

const LOGIN_PAGE_NAME = 'home'
const HOME_NAME = 'hhome'

const canTurnTo = () => true

/**
 * 根据权限进行跳转
 * @param {*} to 将要跳转的route
 * @param {*} access 用户拥有的权限
 * @param {*} next 回调
 */
const turnTo = (to, access, next) => {
  const { name, meta: { white } = {} } = to
  if (white || canTurnTo(name, access, routes)) next() // 有权限，可访问
  else next({ replace: true, to: 'error_401' }) // 无权限，重定向到401页面
}

router.beforeEach((to, from, next) => {
  const hasLogin = store.state.hasLogin
  const { name } = to
  // 根据用户状态和权限控制路由跳转
  if (!hasLogin && name !== LOGIN_PAGE_NAME) {
    next({ name: LOGIN_PAGE_NAME })
  } else if (!hasLogin && name === LOGIN_PAGE_NAME) {
    next()
  } else if (hasLogin && name === LOGIN_PAGE_NAME) {
    next({ name: HOME_NAME })
  } else {
    const accessList = store.state.access || []
    turnTo(to, accessList, next)
  }
})

router.afterEach((to, from) => {
  const { meta: { docTitle } = {} } = to
  if (docTitle) document.title = to.meta.docTitle
})

export default router
