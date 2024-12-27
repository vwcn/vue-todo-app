<template>
  <div class="container bg-gray-200 mt-2">
  <div v-if="!isEditing">
    <div class=" bg-gray-300 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4">
      <div class="col-span-1 md:col-span-1 lg:col-span-2">
        <input type="checkbox" id='done' />
      </div>
      <div class="col-span-1 md:col-span-1 lg:col-span-2">
        <button @click="isEditing=true">{{ todo.id }}</button></div>
      <div class="col-span-1 md:col-span-4 lg:col-span-6" >
        <span :class="{completed: todo.done}">{{ todo.text }}</span>
      </div>
      <div class="col-span-1 md:col-span-2 lg:col-span-2">
        <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button variant="destructive" size="sm">
        remove
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure to remove todo: {{todo.text}}?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete the todo from the list
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="todos.remove(todo.id)">
          Confirm
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
      </div>
    </div>
  </div>
  <div v-else>
    <div>
      <EditTodo :todo="todo" :isNew="false" @editted="handleEddited"/>
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
const todos = useTodoStore()
defineProps<{ todo: Todo }>()
const isEditing = ref(false)

const handleEddited = () => {
  isEditing.value = false
}
import EditTodo from './EditTodo.vue'
// shadcn
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'


</script>
