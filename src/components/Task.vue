<template>
<div>
    <li>
        <div v-if="!edit">
          <button class="btn"
          @click="$emit('delete')">Remove</button>
          <button class="btn"
          @click="$emit('changeStatus')">Completed</button>
          <button
          @click="startEditing()"
          class="btn">Edit</button>
          <span class="descriptionlist" :class="{ descriptionlistcompleted: completed }">
          {{description}}</span>
        </div>
        <form v-if="edit" class="editform" @submit.prevent="finishEditing()">
          <input
            type="text"
            class="edittext"
            v-model="newTodoDescription"
            @blur="finishEditing()"
            ref="newTodo"
          />
        </form>
    </li>
</div>
</template>

<script>
export default {
  props: ['description', 'completed'],
  data() {
    return {
      edit: false,
      newTodoDescription: '',
    };
  },
  methods: {
    startEditing() {
      if (this.edit) {
        this.finishEditing();
      } else {
        this.newTodoDescription = this.description;
        this.edit = true;
        this.$nextTick(() => this.$refs.newTodo.focus());
      }
    },
    finishEditing() {
      this.edit = false;
      this.$emit('on-edit', this.newTodoDescription);
    },
  },
};
</script>
<style scoped>
  li {
    list-style: none;
  }
  .btn {
      position: relative;
      left: 780px;
      background-color: bisque;
      font-size: 20px;
  }
  .edittext{
    width: 700px;
    height: 30px;
    font-size: 20px;
  }
  .descriptionlist{
    position: relative;
    right: 250px;
    font-size: 40px;
    color: rgba(255, 0, 0, 0.741);
  }
  .descriptionlistcompleted{
    position: relative;
    right: 250px;
    font-size: 40px;
    color: rgba(12, 224, 12, 0.64);
    text-decoration :line-through;
  }
</style>
