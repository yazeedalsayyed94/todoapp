import Vue from 'vue';
import Vuex from 'vuex';
import todoitemsmod from './modules/Todoitems';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    todoitems: todoitemsmod,
  },
  getters: {
  },
});
