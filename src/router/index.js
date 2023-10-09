import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/Home.vue'
import СontactsPage from '@/pages/Сontacts.vue'
import NotFoundPage from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: СontactsPage
  },
  // будет отобраться страница по иным маршрутам, кроме существующих
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
