<template>
  <div class="container w-full h-screen bg-gray-100 mx-auto p-4 scroll">
    <TodoItem v-for="todo in state.todos" :key="todo.id" :todo="todo" />
  </div>
</template>
<script setup lang="ts">

import { onMounted } from 'vue';
import { useTodoStore } from '../../stores/todo'
import TodoItem from './TodoItem.vue'

const { state } = useTodoStore()

onMounted(() => {
  console.log('TodoList mounted')
  console.log(state.todos)
})
</script>
