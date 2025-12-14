<template>
  <div class="min-h-screen flex items-center justify-center text-center px-4">
    <div>
      <h1 class="text-7xl font-bold">404</h1>
      <p class="mt-3 text-xl text-gray-500">Page not found</p>
      <router-link
        to="/"
        class="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Go Home
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: '404 — Page Not Found',
  meta: [
    {
      name: 'robots',
      content: 'noindex, follow'
    }
  ]
})
</script>
