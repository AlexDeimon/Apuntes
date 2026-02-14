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
      path: '/html/inicio',
      name: 'html-inicio',
      component: () => import('@/views/HTML/InicioHTML.vue'),
    },
    {
      path: '/html/titulosParrafos',
      name: 'html-titulosParrafos',
      component: () => import('@/views/HTML/TitulosParrafos.vue'),
    },
    {
      path: '/html/secciones',
      name: 'html-secciones',
      component: () => import('@/views/HTML/SeccionContenido.vue'),
    },
    {
      path: '/css/fundamentos',
      name: 'css-fundamentos',
      component: () => import('@/views/CSS/FundamentosCSS.vue'),
    },
    {
      path: '/css/medidas',
      name: 'css-medidas',
      component: () => import('@/views/CSS/MedidasCSS.vue'),
    },
    {
      path: '/css/boxmodel',
      name: 'css-boxmodel',
      component: () => import('@/views/CSS/BoxModelCSS.vue'),
    },
    {
      path: '/js/fundamentos',
      name: 'js-fundamentos',
      component: () => import('@/views/JavaScript/FundamentosJS.vue'),
    },
    {
      path: '/js/strings',
      name: 'js-strings',
      component: () => import('@/views/JavaScript/StringsJS.vue'),
    },
    {
      path: '/js/math',
      name: 'js-math',
      component: () => import('@/views/JavaScript/MathJS.vue'),
    },
    {
      path: '/bootstrap/inicio',
      name: 'bootstrap-inicio',
      component: () => import('@/views/Bootstrap/InicioBootstrap.vue'),
    },
    {
      path: '/bootstrap/imagenes',
      name: 'bootstrap-imagenes',
      component: () => import('@/views/Bootstrap/ImagenesBootstrap.vue'),
    },
    {
      path: '/typescript/inicio',
      name: 'typescript-inicio',
      component: () => import('@/views/TypeScript/InicioTS.vue'),
    },
    {
      path: '/typescript/inferencia',
      name: 'typescript-inferencia',
      component: () => import('@/views/TypeScript/InferenciaTS.vue'),
    },
    {
      path: '/nodejs/inicio',
      name: 'nodejs-inicio',
      component: () => import('@/views/Node/InicioNode.vue'),
    },
    {
      path: '/nodejs/filesystem',
      name: 'nodejs-filesystem',
      component: () => import('@/views/Node/FileSystemNode.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const store = useEditorStore()

  if (to.path === '/') {
    store.syncTabFromRoute(to.path)
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
