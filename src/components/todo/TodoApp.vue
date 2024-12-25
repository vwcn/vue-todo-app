<template>
  <div>
    <h1>Todo Example</h1>
    <AddTodo />
    <TodoList />
  </div>
</template>
<script setup lang="ts">
import { onUnmounted } from 'vue'
import TodoList from './TodoList.vue'
import AddTodo from './AddTodo.vue'
import { useTodoStore } from '../../stores/todo'
import type { Todo } from '../../stores/todo'
const todos = useTodoStore()
// load todos from localStorage
todos.todos = (JSON.parse(localStorage.getItem(todos.key)) as Todo[]) || []

onUnmounted(() => {
  console.log('TodoApp unmounted')
  localStorage.setItem(todos.key, JSON.stringify(todos.todos))
})
</script>

<style></style>
