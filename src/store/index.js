import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorized: false,
    user_list: []
  },
  mutations: {
    set_auth(state, status) {
      state.authorized = status
    },
    set_users(state, data) {
      state.user_list = data
    }
  },
  actions: {
    login({commit}) {
      return new Promise((resolve) => {
        commit('set_auth', true)
        resolve()
      })
    },
    getUserList({commit}) {
      return new Promise((resolve, reject) => {
        let url = 'https://api.github.com/users'
				axios({url: url, method: 'GET'})
					.then(resp => {
						commit('set_users', resp.data)
						resolve(resp)
					})
					.catch(err => {
						reject(err)
					})
				})
    }
  },
  modules: {
  }
})
