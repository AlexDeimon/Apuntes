import { createRouter, createWebHashHistory } from 'vue-router'
import { useEditorStore } from '@/stores/editor'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/js/fundamentos',
      name: 'js-fundamentos',
      component: () => import('@/views/JavaScript/FundamentosJS.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const store = useEditorStore()

  if (to.path === '/') {
    store.clearActiveTab()
    next()
  } else {
    // Check if the route corresponds to an open tab
    if (store.syncTabFromRoute(to.path)) {
      next()
    } else {
      // If not open, redirect to home structure
      next('/')
    }
  }
})

export default router
