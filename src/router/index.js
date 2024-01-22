import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DodavanjePrihoda from '@/views/DodavanjePrihoda';
import DodavanjeRashoda from '@/views/DodavanjeRashoda';
import PregledPrihoda from '@/views/PregledPrihoda';
import PregledRashoda from '@/views/PregledRashoda';

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
  },
  {
    path: '/pregledPrihoda',
    name: 'pregledPrihoda',
    component: PregledPrihoda
  }, 
  {
    path: '/pregledRashoda',
    name: 'pregledRashoda',
    component: PregledRashoda
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
