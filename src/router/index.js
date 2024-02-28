import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DodavanjePrihoda from "@/views/DodavanjePrihoda";
import DodavanjeRashoda from "@/views/DodavanjeRashoda";
import PregledPrihoda from "@/views/PregledPrihoda";
import DetaljiPrihoda from "@/views/DetaljiPrihoda";
import PregledRashoda from "@/views/PregledRashoda";
import DetaljiRashoda from "@/views/DetaljiRashoda";
import PregledStednji from "@/views/PregledStednji";
import DodavanjeStednje from "@/views/DodavanjeStednje";
import DetaljiStednje from "@/views/DetaljiStednje";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/dodajPrihod",
    name: "dodajPrihod",
    component: DodavanjePrihoda,
  },
  {
    path: "/dodajRashod",
    name: "dodajRashod",
    component: DodavanjeRashoda,
  },
  {
    path: "/pregledPrihoda",
    name: "pregledPrihoda",
    component: PregledPrihoda,
  },
  {
    path: "/detaljiPrihoda/:id",
    name: "detaljiPrihoda",
    component: DetaljiPrihoda,
    props: true,
  },
  {
    path: "/detaljiRashoda/:id",
    name: "detaljiRashoda",
    component: DetaljiRashoda,
    props: true,
  },
  {
    path: "/detaljiStednje/:id",
    name: "detaljiStednje",
    component: DetaljiStednje,
    props: true,
  },
  {
    path: "/pregledRashoda",
    name: "pregledRashoda",
    component: PregledRashoda,
  },
  {
    path: "/pregledStednji",
    name: "pregledStednji",
    component: PregledStednji,
  },
  {
    path: "/dodavanjeStednje",
    name: "dodavanjeStednje",
    component: DodavanjeStednje,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
