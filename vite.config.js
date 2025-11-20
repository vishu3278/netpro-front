import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // process.env = {...process.env, ...loadEnv(mode, process.cwd())},
  base: process.env.VITE_APP_BASE_URL || '/',
  plugins: [vue(), tailwindcss()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/scss/variables" as *;
          @use "sass:color";
          @use "@/scss/mixins" as *;
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
