import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage/MainPage.vue'
import ErrorPage from '@/pages/ErrorPage/ErrorPage.vue'
import ProfilePage from '@/pages/ProfilePage/ProfilePage.vue'
import StartPage from '@/pages/StartPage/StartPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'main'
  },
  {
    path: '/start',
    component: StartPage,
    name: 'start'
  },
  {
    path: '/profile',
    component: ProfilePage,
    name: 'profile'
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
    name: 'error'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
