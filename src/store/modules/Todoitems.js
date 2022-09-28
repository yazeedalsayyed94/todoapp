export default {
  state: {
    todoitems: [],
  },
  mutations: {
    add_todo: (state, onetask) => {
      const newTask = {
        id: onetask.newId,
        task: onetask.task,
        completed: false,
      };
      state.todoitems.unshift(newTask);
    },
    toggle_todo: (state, onetask) => {
      const item = state.todoitems.find((todo) => todo.id === onetask);
      item.completed = !item.completed;
    },
    delete_todo: (state, onetask) => {
      const index = state.todoitems.findIndex((todo) => todo.id === onetask);
      state.todoitems.splice(index, 1);
    },
  },
  actions: {
    addTodo: (context, onetask) => {
      context.commit('add_todo', onetask);
    },
    toggleTodo: (context, onetask) => {
      context.commit('toggle_todo', onetask);
    },
    deleteTodo: (context, onetask) => {
      context.commit('delete_todo', onetask);
    },
  },
  getters: {
    getTodos: (state) => (state.todoitems),
  },
};
