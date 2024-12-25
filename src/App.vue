<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="container">
      <img alt="Vue logo" src="@/assets/logo.svg" width="64" height="124" />
      <HelloWorld msg="Welcome to Vue World!" />
    </div>
    <div class="main grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4">
      <div class="col-span-1 md:col-span-2 lg:col-span-3">
        <h1 class="text-2xl font-bold">Vue 3 + Vite + Tailwind CSS</h1>
        <nav class="flex flex-col space-y-2 mt-4">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/todo">Todo</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
    </div>
      <div class="right col-span-3 md:col-span-6 lg:col-span-9">
        <RouterView />
      </div>
    </div>
    <div class="footer absolute bottom-4">
      <div class="w-screen items-center justify-center">
          <span class="text-sm">&copy; Ruipu Software 2007-2024</span>
        </div>
    </div>
  </div>
</template>



