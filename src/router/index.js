import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DodavanjePrihoda from '@/views/DodavanjePrihoda';
import DodavanjeRashoda from '@/views/DodavanjeRashoda';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dodajPrihod',
    name: 'dodajPrihod',
    component: DodavanjePrihoda
  },
  {
    path: '/dodajRashod',
    name: 'dodajRashod',
    component: DodavanjeRashoda
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
