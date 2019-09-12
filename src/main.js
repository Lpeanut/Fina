import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from './libs/axios'
// import register from './import'  // iview按需引入
// register(Vue)

// axios({
//   url: 'sales/api/v1/sellerUser/user?pageNo=1&pageSize=10&be_valid=1',
//   params: { time: 1 }
// })

// setTimeout(() => {
//   axios({
//     url: 'sales/api/v1/sellerUser/user?pageNo=1&pageSize=10&be_valid=1',
//     params: { time: 2 }
//   })
// }, 500)

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
