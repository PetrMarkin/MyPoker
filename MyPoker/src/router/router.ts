import { createRouter, createWebHashHistory } from 'vue-router'
import ErrorPage from '@/pages/ErrorPage/ErrorPage.vue'
import MainPage from '@/pages/MainPage/MainPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
