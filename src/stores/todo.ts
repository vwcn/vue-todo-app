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

export const useTodoStore = defineStore('todoapp', {
  state: () => ({
    todos: [...initialTodos] as Todo[],
    filter: 'all' as 'all' | 'done' | 'todo',
    key: 'TODO_APP',
  }),
  getters: {
    filteredList(): Todo[] {
      switch (this.filter) {
        case 'done':
          return this.todos.filter((todo: Todo) => todo.done)
        case 'todo':
          return this.todos.filter((todo: Todo) => !todo.done)
        default:
          return this.todos
      }
    },
  },
  actions: {
    add(text: string) {
      console.log('add new todo: ', text)
      this.todos.push({
        id: this.todos.length,
        text,
        done: false,
      })
    },
    remove(id: number) {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id)
    },
    edit(_todo: Todo) {
      const todo: Todo = this.todos.find((todo: Todo) => todo.id === _todo.id)
      if (todo !== undefined) {
        todo.text = _todo.text
      }
    },
  },
})
