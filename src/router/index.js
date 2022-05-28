import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'

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
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
