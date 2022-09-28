<template>
  <header>
    To-Do Application
  </header>
  <main>
    <Taskbuilder />
    <Task />
  </main>
</template>

<script>
import Taskbuilder from './components/Taskbuilder.vue';

export default {
  name: 'app',
  components: {
    Taskbuilder,
  },
  mounted() {
    document.title = 'To-Do applecation';
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, rgb(0, 200, 255), rgb(206, 181, 236));
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: rgb(249, 238, 225);
  width: auto;
  height: 50px;
  margin: 20px;
  padding: 20px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  border: 1px solid black;
  font-family: Arial, Helvetica, sans-serif;
}

</style>
