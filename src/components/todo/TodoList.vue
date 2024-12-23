<template>
  <div class="grid grid-cols-3 gap-4">
    <TodoItem v-for="todo in state.todos" :key="todo.id" :todo="todo" />
  </div>
</template>
<script setup lang="ts">
import { useTodoStore } from '../../stores/todo'
import TodoItem from './TodoItem.vue'

const { state } = useTodoStore()
</script>
