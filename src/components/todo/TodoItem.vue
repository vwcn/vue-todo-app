<template>
  <div><input type="checkbox" id="done" @change="handleToggle" v-model="_todo.done" /></div>
  <div>{{ _todo.id }}</div>
  <div>{{ _todo.text }}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../../stores/todo'

const { toggle } = useTodoStore()
const props = defineProps<{ todo: Todo }>()
const _todo = ref(props.todo)

function handleToggle() {
  toggle(props.todo.id)
}
</script>
