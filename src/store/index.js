import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasLogin: true
  },
  mutations: {
    'update-login-status' (state, status = false) {
      state.hasLogin = status
    }
  },
  actions: {

  }
})
