import { createRouter, createWebHistory } from '@ionic/vue-router';
import Status from '@/pages/Status.vue'
import Login from '@/pages/Login.vue'
import Tabs from '@/components/base/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/status'
      },
      {
        path: 'status',
        name: 'status',
        component: Status
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
