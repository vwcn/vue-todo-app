<script lang="ts" setup>
// import { ref } from 'vue'
import type { Todo } from '@/stores/todo'
import { useTodoStore } from '@/stores/todo'
defineProps<{todo: Todo, isNew: boolean}>();
const todos = useTodoStore()

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
  task: z.string().min(4)
})) });

const onSubmit = handleSubmit(async (values) => {
  console.log(values)
})

// shadcn@/components/ui/button'

</script>
<template>
        <form @submit="onSubmit">
        <FormField v-slot="{componentField }" name="task" :initialValue="'test2s'">
            <FormItem>
              <FormLabel for="task">New Task</FormLabel>
              <FormControl>
                <Input
                  v-bind="componentField"
                  type="text"
                  placeholder="Enter new task"
                />
              </FormControl>
              <FormDescription>
          What do you want to do?
        </FormDescription>
        <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit" variant="default" size="sm">Save</Button>
        </form>

</template>
