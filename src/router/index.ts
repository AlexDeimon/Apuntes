import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainView.vue'),
    },
    {
      path: '/html/titulosParrafos',
      name: 'html-titulosParrafos',
      component: () => import('@/views/HTML/TitulosParrafos.vue'),
    },
    {
      path: '/css/fundamentos',
      name: 'css-fundamentos',
      component: () => import('@/views/CSS/FundamentosCSS.vue'),
    }
  ],
})

export default router
