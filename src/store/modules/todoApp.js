const storage = {
  fetch() {
    const itemArr = [];
    if(localStorage.length < 0) return;

    for(let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        const itemObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        itemArr.push(itemObj);
      }
    }

    return itemArr;
  }
}

const state = {
  todoItems: storage.fetch(),
}
const getters = {
  getTodoItems(state) {
    console.log(state.todoItems)
    return state.todoItems;
  }
}
const mutations = {
  addNewTodoItem(state, item) {
    const obj = { completed: false, item: item };
    localStorage.setItem(item, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeTodoItem(state, index) {
    localStorage.removeItem(state.todoItems[index].item);
    state.todoItems.splice(index, 1);
  },
  toggleCompletedItem(state, index){
    state.todoItems[index].completed = !state.todoItems[index].completed;
    
    localStorage.removeItem(state.todoItems[index].item);
    localStorage.setItem(state.todoItems[index].item, JSON.stringify(state.todoItems[index]));
  },
  clearAllTodoItem(state) {
    localStorage.clear();
    state.todoItems = [];
  }
}

export default {
  state,
  getters,
  mutations
}