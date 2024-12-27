<script lang="ts" setup>
import { ref } from 'vue'
import type { Todo } from '@/stores/todo'
import { useTodoStore } from '@/stores/todo'
const props = defineProps<{todo: Todo, isNew: boolean}>();
const todos = useTodoStore()
const text = ref(props.todo.text)
const done = ref(props.todo.done)
// shadcn form
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// form validation
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';



const { handleSubmit } = useForm({ validationSchema: toTypedSchema(z.object({
  text: z.string().min(4)
})) });

const onSubmit = handleSubmit(async (formData) => {
  console.log(formData)
  if (props.isNew) {
    todos.add(formData.text)
  } else {
    todos.update(props.todo.id,formData.text)
  }
})

// shadcn@/components/ui/button'

</script>
<template>
        <form @submit="onSubmit">
        <FormField v-slot="{componentField }" name="text">
            <FormItem>
              <FormLabel for="task">New Task</FormLabel>
              <FormControl>
                <Input
                  v-bind="componentField"
                  type="text"
                  placeholder="Enter new task"
                  id="text"
                  :defaultValue="todo.text"
                />
              </FormControl>
              <FormDescription>
          What do you want to do?
        </FormDescription>
        <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit" variant="default" size="sm">Save</Button>

          <Button variant="secondary" @click.prevent="$emit('editted')" size="sm">Cancel</Button>
        </form>

</template>
