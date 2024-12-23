<template>
  <div class="todo">
    <TodoApp />
  </div>
</template>
<script lang="ts" setup>
import TodoApp from '../components/todo/TodoApp.vue'
</script>
<style scoped>
@media (min-width: 1024px) {
  .todo {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
