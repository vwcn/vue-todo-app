import { reactive } from 'vue'
import { defineStore } from 'pinia'

export interface Todo {
  id: number
  text: string
  done: boolean
}

const initialTodos: Todo[] = [
  { id: 0, text: 'Learn Vue 3', done: true },
  { id: 1, text: 'Learn Pinia', done: false },
]

export const useTodoStore = defineStore('todoapp', () => {
  const state = reactive({
    todos: [...initialTodos] as Todo[],
  })
  const add = (text: string) => {
    state.todos.push({
      id: state.todos.length,
      text,
      done: true,
    })
  }
  const remove = (id: number) => {
    state.todos = state.todos.filter((todo:Todo) => todo.id !== id)
  }
  const toggle = (id: number) => {
    const todo:Todo = state.todos.find((todo:Todo) => todo.id === id)
    if (todo !== undefined) {
      todo.done = !todo.done
    }
    }
  const edit = (_todo: Todo) => {
    const todo: Todo = state.todos.find((todo:Todo) => todo.id === _todo.id)
    if (todo !== undefined) {
      todo.text = _todo.text
    }
  }

  return { state, add, remove, toggle, edit }
})
