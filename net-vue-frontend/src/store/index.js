import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    globalNumber: 42,
    error: {
      loadUsers: ""
    },
    users: []
  },
  mutations: {
    loadUsersSucces(state, data){
      console.log(data);
      state.users = data;
    },
    loadUsersError(state, error){
      state.error.loadUsers = error;
      state.globalNumber = -42;
    }
  },
  actions: {
    LoadUsers({ commit }) {
      axios
        .get("/api/user")
        .then(
          (response => commit("loadUsersSucces", response.data)),
          (error => commit("loadUsersError", error))
        );
    }
  },
  getters: {
    users: state => {
      return state.users;
    }
  },
  modules: {
  }
})
