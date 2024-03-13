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
import Login from "@/views/Login";
import SignUp from "@/views/SignUp";
import { Auth } from "@/services/index.js";
import Pocetna from "@/views/Pocetna.vue";

const routes = [
  {
    path: "/pocetna",
    name: "pocetna",
    component: Pocetna,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
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

router.beforeEach((to, from, next) => {
  const javneStranice = ["/pocetna", "/login", "/signup"]; //stranice na koje možemo doći bez logina
  const potrebanLogin = !javneStranice.includes(to.path); //to => objekt, path => "url, putanja" stranice na koju želimo doći => url trenutne stranice
  // login je potreban kada stranica na koju želimo doći(to.path) nije u javnim stranicama
  const user = Auth.getUser();
  if (potrebanLogin && !user) {
    // ako je login potreban i ne postoji korisnik uvijek me vrati na login ili signup
    next("/pocetna");    
    return;
  }
  next();
});

export default router;
