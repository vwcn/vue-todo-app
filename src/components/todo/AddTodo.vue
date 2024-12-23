<template>
  <div>
    <h1>What's the new task</h1>
    <div>
      <label htmlFor="task">New Task:</label>
      <input

        class="mx-4 p-2 border border-gray-300 rounded-lg"
        v-model="task"
        name="task"
        id="task"
        @keypress.enter="addTodo"
        placeholder="new task"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../../stores/todo'

const task = ref('new task')

function addTodo() {
  useTodoStore().add(task.value)
  task.value = 'test task'
}
</script>

<style></style>
