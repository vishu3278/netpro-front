import { createApp } from 'vue'
import { router } from './routes'
// import { createHead } from '@unhead/vue'
import { createHead } from '@unhead/vue/client'
import 'vue3-carousel/carousel.css'
import './style.css'
import './scss/global.scss'
import App from './App.vue'

createApp(App).use(router).use(createHead()).mount('#app')
