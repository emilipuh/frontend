import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DodavanjePrihoda from '@/views/DodavanjePrihoda';
import DodavanjeRashoda from '@/views/DodavanjeRashoda';
import PregledPrihoda from '@/views/PregledPrihoda';
import PregledRashoda from '@/views/PregledRashoda';
import Stednja from '@/views/Stednja';
import DodajStednju from '@/views/DodajStednju';

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
  },
  {
    path: '/stednja',
    name: 'stednja',
    component: Stednja
  },
  {
    path: '/dodajStednju', 
    name: 'dodajStednju',
    component: DodajStednju
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
