<template>
  <div class="flex flex-1 justify-evenly">
    <h3>TodoList with filter</h3>
    <div class="flex text-sm text-slate-400 space-x-4">
      <button @click="todos.filter = 'all'">All</button>
      <button @click="todos.filter = 'done'">Done</button>
      <button @click="todos.filter = 'todo'">To Be Done</button>
    </div>
  </div>
  <div class="container w-full bg-gray-100 mx-auto p-4 scroll">
    <TodoItem v-for="todo in todos.filteredList" :key="todo.id" :todo="todo" />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useTodoStore } from '../../stores/todo'
import TodoItem from './TodoItem.vue'

const todos = useTodoStore()

onMounted(() => {
  console.log('TodoList mounted')
})
</script>
