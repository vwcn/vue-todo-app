<template>
  <div class="container bg-gray-200 mt-2">
  <div v-if="!isEditing">
    <div class=" bg-gray-300 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4">
      <div class="col-span-1 md:col-span-1 lg:col-span-2">
        <input type="checkbox" id='done' @change="handleToggle(todo.id)" v-model="_todo.done" />
      </div>
      <div class="col-span-1 md:col-span-1 lg:col-span-2">
        <button @click="isEditing=true">{{ todo.id }}</button></div>
      <div class="col-span-1 md:col-span-4 lg:col-span-6" >
        <span :class="{completed: todo.done}">{{ todo.text }}</span>
      </div>
      <div class="col-span-1 md:col-span-2 lg:col-span-2"><button @click="handleRemove(_todo.id)">Remove</button></div>
    </div>
  </div>
  <div v-else>
    <div>
      <h3>we are editting the task: {{ todo.text }}</h3>
      <div>
        <label>task: <input type='text' name='task' id='task' v-model='_todo.text' /></label>
      </div>
      <div>
        mark it done?: <input type="checkbox" id='done'  v-model="_todo.done" />
      </div>
      <div>
        <button @click="handleEdit(_todo); isEditing=false">Save</button>
      </div>
      <button @click="isEditing=false">Cancel</button>
    </div>
  </div>
</div>
</template>
<style scoped>
.completed {
  text-decoration: line-through;
  text-transform: lowercase;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import {  useTodoStore } from '../../stores/todo'
import type { Todo } from '../../stores/todo'
const { state, edit, remove, toggle } = useTodoStore()
const props = defineProps<{ todo: Todo }>()
const isEditing = ref(false)
const _todo = state.todos.find(todo => todo.id === props.todo.id)
const handleToggle = (id: number) => {
  toggle(id)
}
const handleEdit = (todo: Todo) => {
  edit(todo)
}
const handleRemove = (id: number) => {
  remove(id)
}
</script>
