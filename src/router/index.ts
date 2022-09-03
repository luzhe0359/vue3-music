import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: () => import('@/views/Pinia.vue')
  },
  {
    path: '/tailwindcss',
    name: 'Tailwindcss',
    component: () => import('@/views/Tailwindcss.vue')
  },
  {
    path: '/vueuse',
    name: 'VueUse',
    component: () => import('@/views/VueUse.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
