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
      done: false,
    })
  }
  const remove = (id: number) => {
    state.todos = state.todos.filter((todo) => todo.id !== id)
  }
  const toggle = (id: number) => {
    const todo = state.todos.find((todo) => todo.id === id)
    if (todo) {
      todo.done = !todo.done
    }
  }
  const edit = (id: number, text: string) => {
    const todo = state.todos.find((todo) => todo.id === id)
    if (todo) {
      todo.text = text
    }
  }

  return { state, add, edit, remove, toggle }
})
