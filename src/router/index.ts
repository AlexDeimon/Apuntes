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
      path: '/html/bloqueLinea',
      name: 'html-bloqueLinea',
      component: () => import('@/views/HTML/BloqueLinea.vue'),
    },
    {
      path: '/html/secciones',
      name: 'html-secciones',
      component: () => import('@/views/HTML/SeccionContenido.vue'),
    },
    {
      path: '/html/enlaces',
      name: 'html-enlaces',
      component: () => import('@/views/HTML/EnlacesHTML.vue'),
    },
    {
      path: '/html/listas',
      name: 'html-listas',
      component: () => import('@/views/HTML/ListasHTML.vue'),
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
      path: '/css/boxalignment',
      name: 'css-boxalignment',
      component: () => import('@/views/CSS/BoxAlignmentCSS.vue'),
    },
    {
      path: '/css/position',
      name: 'css-position',
      component: () => import('@/views/CSS/PositionCSS.vue'),
    },
    {
      path: '/css/texto',
      name: 'css-texto',
      component: () => import('@/views/CSS/TextoCSS.vue'),
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
      path: '/js/condicionales',
      name: 'js-condicionales',
      component: () => import('@/views/JavaScript/CondicionalesJS.vue'),
    },
    {
      path: '/js/bucles',
      name: 'js-bucles',
      component: () => import('@/views/JavaScript/BuclesJS.vue'),
    },
    {
      path: '/js/arrays',
      name: 'js-arrays',
      component: () => import('@/views/JavaScript/ArraysJS.vue'),
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
      path: '/bootstrap/tablas',
      name: 'bootstrap-tablas',
      component: () => import('@/views/Bootstrap/TablasBootstrap.vue'),
    },
    {
      path: '/bootstrap/botones',
      name: 'bootstrap-botones',
      component: () => import('@/views/Bootstrap/BotonesBootstrap.vue'),
    },
    {
      path: '/bootstrap/listgroup',
      name: 'bootstrap-listgroup',
      component: () => import('@/views/Bootstrap/ListGroupBootstrap.vue'),
    },
    {
      path: '/bootstrap/cards',
      name: 'bootstrap-cards',
      component: () => import('@/views/Bootstrap/CardsBootstrap.vue'),
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
      path: '/typescript/tipos',
      name: 'typescript-tipos',
      component: () => import('@/views/TypeScript/TiposDatosTS.vue'),
    },
    {
      path: '/typescript/funciones',
      name: 'typescript-funciones',
      component: () => import('@/views/TypeScript/FuncionesTS.vue'),
    },
    {
      path: '/typescript/arrays',
      name: 'typescript-arrays',
      component: () => import('@/views/TypeScript/ArraysTS.vue'),
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
    {
      path: '/nodejs/path',
      name: 'nodejs-path',
      component: () => import('@/views/Node/PathNode.vue'),
    },
    {
      path: '/nodejs/process',
      name: 'nodejs-process',
      component: () => import('@/views/Node/ProcessNode.vue'),
    },
    {
      path: '/nodejs/npm',
      name: 'nodejs-npm',
      component: () => import('@/views/Node/NPMNode.vue'),
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
