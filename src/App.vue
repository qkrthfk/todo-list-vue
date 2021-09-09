<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      // store.js로 로직 이동
    }
  },
  created() {
    // store.js로 로직 이동
  },
  methods: {
    // store.js mutations로 이동
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

body {
  text-align: center;
  background-color: #f6f6f6;
  font-family: 'Jua', sans-serif;
}

input {
  border: none;
  outline: none;
}

button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
