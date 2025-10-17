import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Sector from './pages/Sector.vue'
import Services from './pages/Services.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/sector', component: Sector },
  { path: '/services', component: Services },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})