import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Mision from '../views/Mision.vue'
import Vision from '../views/Vision.vue'
import cuarto from '../views/cuarto.vue'
import Instalaciones from '../views/Instalaciones.vue'
import Integrantes from '../views/Integrantes.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/mision',
      name: 'mision',
      component: Mision
    },
    {
      path: '/vision',
      name: 'vision',
      component: Vision
    },
    {
      path: '/cuarto',
      name: 'cuarto',
      component: cuarto
    },
    {
      path: '/instalaciones',
      name: 'instalaciones',
      component: Instalaciones
    },
    {
      path: '/integrantes',
      name: 'integrantes',
      component: Integrantes
    }
  ]
})

export default router
