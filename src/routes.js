import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Sector from './pages/Sector.vue'
import SectorDetail from './pages/SectorDetail.vue'
import Service from './pages/Services.vue'
import ServiceDetail from './pages/ServiceDetail.vue'
import Blog from './pages/Blog.vue'
import BlogDetail from './pages/BlogDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', name: "about", component: About },
  { path: '/contact', name: "contact", component: Contact },
  { path: '/sector', name: "sector", component: () => import('@/pages/Sector.vue'), },
  { path: '/sector/:id', name: "sector-detail", component: () => import('@/pages/SectorDetail.vue') },
  { path: '/service', name: "service", component: () => import('@/pages/Services.vue'), },
  { path: '/service/:id', name: "service-detail", component: () => import('@/pages/ServiceDetail.vue'), },
  { path: '/blog', component: Blog },
  { path: '/blogdetail', component: BlogDetail },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
})