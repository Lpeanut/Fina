import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes
})

/**
 * 假设用户是进行微信登陆，两种身份
 * 1.hasLogin
 * 2.tourist
 */

// const checkLoginState = () => {
// 从cookie中获取用户信息
// 写入store
// }

router.beforeEach((to, from, next) => {
  const hasLogin = store.state.hasLogin

  // ...
  next()
})

router.afterEach((to, from) => {
  // ...
})

// checkLoginState()

export default router
