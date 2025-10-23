import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Sector from './pages/Sector.vue'
import SectorDetail from './pages/SectorDetail.vue'
import Service from './pages/Service.vue'
import ServiceDetail from './pages/ServiceDetail.vue'
import Blog from './pages/Blog.vue'
import BlogDetail from './pages/BlogDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/sector', component: Sector },
  { path: '/sectordetail', component: SectorDetail },
  { path: '/service', component: Service },
  { path: '/service/:id', component: ServiceDetail },
  { path: '/blog', component: Blog },
  { path: '/blog/:id', component: BlogDetail },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})