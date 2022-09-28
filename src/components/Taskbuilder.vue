<template>
    <div>
        <div>
            <input v-model="newItem" class="input" type="text"
            placeholder="Input Your Task" @keyup.enter="addTodo()">
        </div>
        <div class="basicbtns">
            <button class="add" @click="addTodo()">Add</button>
            <button class="undo" @click="undo()">Undo</button>
        </div>
        <div class="listbtns">
            <button class="clearall" @click="clearAllList()">Clear All Tasks</button>
            <button class="clearcompleted"
            @click="clearCompleted()">Clear Completed Tasks</button>
        </div>
    </div>
    <h1>Tasks <small class="listlength">{{Length}}</small> </h1>
    <div class="tasklist">
    <Task v-for="(item, i) in todoList" :key="i"
    :description="item.description"
    :completed="item.completed"
    :tempTodo="tempTodo"
    :edit="edit"
    @delete="deletetask(i)"
    @changeStatus="changeStatus(i)"
    @on-edit="editTodo(i, $event)"/>
</div>
</template>

<script>
import Task from './Task.vue';

export default {
  name: 'Taskbuilder',
  components: { Task },
  data() {
    return {
      newItem: '',
      todoList: [],
      Length: 0,
    };
  },
  methods: {
    addTodo() {
      if (!this.newItem.trim()) return;
      if (this.todoList.length < 20) {
        this.todoList.push({ description: this.newItem, completed: false });
        this.newItem = '';
        this.Length = this.todoList.length;
      } else {
        alert('You have exceeded the number of tasks');
      }
    },
    clearAllList() {
      if (this.todoList < 1) return;
      if (window.confirm('Do you want to clear all Todo List?')) {
        this.todoList = [];
        this.Length = this.todoList.length;
      }
    },
    deletetask(i) {
      this.todoList.splice(i, 1);
      this.Length = this.todoList.length;
    },
    changeStatus(i) {
      this.todoList[i].completed = !this.todoList[i].completed;
    },
    editTodo(i, newTodoDescription) {
      this.todoList[i].description = newTodoDescription;
    },
    clearCompleted() {
      this.todoList = this.todoList.filter(this.notcompleted);
      this.Length = this.todoList.length;
    },
    notcompleted(item) {
      return !item.completed;
    },
    undo() {
      this.todoList.pop();
      this.Length = this.todoList.length;
    },
  },
};
</script>

<style>
    .input{
        width: 80%;
        height: 50px;
        font-size: 30px;
    }
    .input::placeholder{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        font-size: 25px;
    }
    .basicbtns {
        position: relative;
        bottom: 56px;
        left: 840px;
    }
    .add, .undo {
        width: 10%;
        height: 56px;
        font-size: 30px;
        background-color: rgba(0, 81, 255, 0.411);
    }
    .listbtns{
        position: relative;
        left: 200px;
    }
    .clearall, .clearcompleted{
        width: 300px;
        height: 30px;
        font-family:Georgia, 'Times New Roman', Times, serif;
        font-size:20px
    }
    .clearall{
        background-color: rgba(255, 0, 0, 0.418);
    }
    .clearcompleted{
        background-color: rgba(250, 250, 0, 0.378);
    }
    .tasklist{
        background-color: azure;
        width: 1024px;
        min-height: 300px;
        padding: 10px;
        margin-top: 10px;
    }
    h1 {
        font-size: 50px;
        text-align: center;
    }
    .listlength {
      font-size: 30px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      color:rgba(195, 92, 92, 0.396);
    }
</style>
