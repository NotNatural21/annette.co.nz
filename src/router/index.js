import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('../views/PortfolioView.vue')
    },
    {
        path: '/software',
        name: 'software',
        component: () => import('../views/SoftwareView.vue')
    },
    {
        path: '/software/releases',
        name: 'releases',
        component: () => import('../views/ReleasesView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
