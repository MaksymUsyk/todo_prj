import { AuthAPI } from "@/api/auth";
import { DefaultAPIInstance } from "@/api"
import { UserRoles } from "@/types/Auth"

export const AuthModule = {
  namespaced: true,

  state() {
    return {
      credentials: {
        token: localStorage.getItem('token') || null,
        userRole: localStorage.getItem('userRole') || UserRoles.Guest
      }
    }
  },

  mutations: {
    setToken(state, token) {
      state.credentials.token = token;
      localStorage.setItem('token', token);
    },

    setUserRole(state, userRole) {
      state.credentials.userRole = userRole;
      localStorage.setItem('userRole', userRole);
    },

    deleteToken(state) {
      state.credentials.token = null;
      localStorage.removeItem('token');
    },

    deleteUserRole(state) {
      state.credentials.userRole = null;
      localStorage.removeItem('userRole');
    }
  },

  actions: {
    onLogin({ commit }, { login, password }) {
      return AuthAPI.login(login, password).then((res) => {
        commit('setToken', res.token);
        commit('setUserRole', res.userRole);
        DefaultAPIInstance.defaults.headers['authorization'] = `Bearer ${res.token}`;
      })
    },

    onLogout({ commit }) {
      commit('deleteToken');
      commit('deleteUserRole');
      delete DefaultAPIInstance.defaults.headers['authorization'];
    }
  }
}