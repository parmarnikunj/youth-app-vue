import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YouthView from '../views/YouthsView.vue'
import SabhaView from '../views/SabhasView.vue'
import YouthFormView from '@/views/YouthFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/youths',
      name: 'youths',
      component: YouthView,
    },{
      path: '/addYouth',
      name: 'addYouth',
      component: YouthFormView,
    },
    {
      path: '/sabhas',
      name: 'sabhas',
      component: SabhaView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
