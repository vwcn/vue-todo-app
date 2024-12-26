<script lang="ts" setup>
import { ref } from 'vue'
import type { Todo } from '@/stores/todo'
import { useTodoStore } from '@/stores/todo'
const props = defineProps<{todo: Todo, isNew: boolean}>();

const task = ref(props.todo.text)
const done = ref(props.todo.done)
const todos = useTodoStore()

const handleSave = () => {
  if (props.isNew) {
    todos.add({ text: task.value, done: done.value })
  } else {
    todos.update({ ...props.todo, text: task.value, done: done.value })
  }
}

// shadcn
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>
<template>
      <Card>
    <CardHeader>
      <CardTitle>Edit the task</CardTitle>
      <CardDescription>editing the task.</CardDescription>
    </CardHeader>
    <CardContent>
      <div>
        <div>
          <label>task: <input type='text' name='task' id='task' v-model='task' /></label>
        </div>
        <div>
          mark it done?: <input type="checkbox" id='done'  v-model="done" />
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <div class="flex space-x-4 justify-end">
        <Button variant='default' @click="handleSave">
          <span v-if="isNew">Add</span>
          <span v-else>Save</span>
        </Button>
        <Button variant='outline' @click="$emit('eddited')">Cancel</Button>
      </div>
    </CardFooter>
  </Card>
</template>
