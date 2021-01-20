import { createRouter, createWebHistory } from '@ionic/vue-router';
import Status from '@/pages/Status.vue'
import Login from '@/pages/Login.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/status',
    name: 'status',
    component: Status
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
