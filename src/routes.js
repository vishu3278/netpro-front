import { createWebHistory, createWebHashHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Sector from './pages/Sector.vue'
import SectorDetail from './pages/SectorDetail.vue'
import Service from './pages/Services.vue'
import ServiceDetail from './pages/ServiceDetail.vue'
import Blog from './pages/Blog.vue'
import BlogDetail from './pages/BlogDetail.vue'
import Static from './pages/Static.vue'
import NotFound from './pages/NotFound.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/about-us', name: "about", component: () => import('@/pages/About.vue') },
  { path: '/contact', name: "contact", component: Contact },
  { path: '/sector', name: "sector", component: () => import('@/pages/Sector.vue'), },
  { path: '/sector/:id', name: "sector-detail", component: () => import('@/pages/SectorDetail.vue') },
  { path: '/service', name: "service", component: () => import('@/pages/Services.vue'), },
  { path: '/service/:id', name: "service-detail", component: () => import('@/pages/ServiceDetail.vue'), },
  // { path: '/blog', component: Blog },
  // { path: '/blogdetail', component: BlogDetail },
  { path: "/privacy-policy", name: "privacy-policy", component: Static },
  { path: "/terms-conditions", name: "terms-conditions", component: Static },
  { path: "/posh-policy", name: "posh-policy", component: Static },
  { path: "/it-policy", name: "it-policy", component: Static },
  {
    path: '/admin/:pathMatch(.*)*',
    name: 'AdminPassThrough',
    beforeEnter() {
      // allow backend to handle admin pages
      window.location.href = window.location.pathname
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: {
      title: '404 — Page Not Found',
      description: 'The page you are looking for does not exist.'
    }
  }

]

const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  history: createWebHistory(), //createWebHashHistory(),
  routes,
})

/*router.beforeEach((to, from, next) => {
  if (to.path !== '/' && to.path.endsWith('/')) {
    next(to.path.replace(/\/+$/, '')) // remove trailing slash
  } else {
    next()
  }
})*/

export {router}
