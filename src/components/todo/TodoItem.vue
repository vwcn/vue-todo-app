<template>
  <div class=" bg-gray-300 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4">
    <div class="col-span-1 md:col-span-1 lg:col-span-2">
      <input type="checkbox" id='done' @change="handleToggle(_todo.id)" v-model="_todo.done" />
    </div>
    <div class="col-span-1 md:col-span-1 lg:col-span-2">{{ _todo.id }}</div>
    <div class="col-span-1 md:col-span-4 lg:col-span-6" >
      <span :class="{completed: _todo.done}">{{ _todo.text }}</span>
    </div>
    <div class="col-span-1 md:col-span-2 lg:col-span-2"><button @click="handleRemove(_todo.id)">Remove</button></div>
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
import { useTodoStore } from '../../stores/todo'
import type { Todo } from '../../stores/todo'
const { state, remove, toggle } = useTodoStore()
const props = defineProps<{ todo: Todo }>()
const _todo: Todo = state.todos.find(todo => todo.id === props.todo.id)

const handleToggle = (id: number) => {
  console.log('handleToggle: the id = ', id)
  toggle(id)
}
const handleRemove = (id: number) => {
  remove(id)
}
</script>
