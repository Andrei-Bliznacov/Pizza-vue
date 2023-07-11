import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue"
import Restaurant from "@/pages/Restaurant.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/restaurant', component: Restaurant },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
