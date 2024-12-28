import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { persist } from '@/stores/persist-pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// Create the Pinia store
const pinia = createPinia()
pinia.use(persist())
app.use(pinia)

//router
app.use(router)

app.mount('#app')
