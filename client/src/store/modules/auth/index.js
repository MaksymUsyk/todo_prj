import { AuthAPI } from "@/api/auth";
import { DefaultAPIInstance } from "@/api"

export const AuthModule = {
  namespaced: true,

  state() {
    return {
      credentials: {
        token: localStorage.getItem('token') || null
      }
    }
  },

  mutations: {
    setToken(state, token) {
      state.credentials.token = token;
      localStorage.setItem('token', token);
    },
    deleteToken(state) {
      state.credentials.token = null;
      localStorage.removeItem('token');
    }
  },

  actions: {
    onLogin({ commit }, { login, password }) {
      return AuthAPI.login(login, password).then((res) => {
        commit('setToken', res.data.access_token);
        DefaultAPIInstance.defaults.headers['authorization'] = `Bearer ${res.data.access_token}`;
      })
    },

    onLogout({ commit }) {
      commit('deleteToken');
      delete DefaultAPIInstance.defaults.headers['authorization'];
    }
  }
}