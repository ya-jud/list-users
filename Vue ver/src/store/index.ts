import { createStore } from 'vuex';
import axios from 'axios';

import IUser from '../types/user';

export default createStore({
  state: {
    users: [],
    isClear: true
  },
  mutations: {
    setUsers(state, payload) {
      let user: IUser
      for(user of payload) {
        state.users.push(user)
      }
      state.isClear = false
    }
  },
  actions: {
    async getUsersAction(state) {
      let list = [];
      await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // исключаем одного конкретного пользователя
          return list = response.data.filter((user) => user.username !== 'Delphine');
        });
      state.commit('setUsers', list);
    }
  }
});