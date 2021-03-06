import { createRouter, createWebHistory } from '@ionic/vue-router';
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
    path: '/about',
    name: 'about',
    component: () => import('../pages/About')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../pages/Settings')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../pages/Me')
  },
  {
    path: '/tabs',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/status'
      },
      {
        path: 'status',
        name: 'status',
        component: () => import('../pages/Status')
      },
      {
        path: 'events',
        name: 'events',
        component: () => import('../pages/Events')
      },
      {
        path: 'consumption',
        name: 'consumption',
        component: () => import('../pages/Consumption')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
