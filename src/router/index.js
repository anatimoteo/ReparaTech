import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import ClientsPage from '../views/ClientsPage.vue'
import PecasPage from '../views/PecasPage.vue'
import FinanceiroPage from '../views/FinanceiroPage.vue'
import RelatoriosPage from '@/views/RelatoriosPage.vue'
import EquipamentosPage from '@/views/EquipamentosPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },

    {
      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path: '/services',
      name: 'services',
      component: ServicesPage
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsPage
    },

    {
      path: '/pecas',
      name: 'pecas',
      component: PecasPage
    },
    {
      path: '/financeiro',
      name: 'financeiro',
      component: FinanceiroPage
    },

    {
      path: '/relatorios',
      name: 'relatorios',
      component: RelatoriosPage
    },
    {
      path: '/equipamentos',
      name: 'equipamentos',
      component: EquipamentosPage
    },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomePage.vue')
    }
  ]
})

export default router
