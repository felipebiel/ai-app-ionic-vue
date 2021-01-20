import { createRouter, createWebHistory } from '@ionic/vue-router';
import Events from '@/pages/Events.vue'
import Login from '@/pages/Login.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
