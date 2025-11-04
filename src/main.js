import { createApp } from 'vue'
import { router } from './routes'
import 'vue3-carousel/carousel.css'
import './style.css'
import './scss/global.scss'
import App from './App.vue'

createApp(App).use(router).mount('#app')
