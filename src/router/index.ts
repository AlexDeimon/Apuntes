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
      // If not open, redirect to home (or stay, but requirements say if tab is closed, content should not be accessible via back/forward)
      // Navigating to a module directly without opening it via sidebar is not supported in this "IDE-like" logic
      next('/')
    }
  }
})

export default router
