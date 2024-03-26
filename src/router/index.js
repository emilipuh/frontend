import { createRouter, createWebHistory } from "vue-router";
import { Auth } from "@/services/index.js";

const routes = [
  {
    path: "/pocetna",
    name: "pocetna",
    component: () => import("@/views/Pocetna.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignUp.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/urediKorisnika",
    name: "urediKorisnika",
    component: () => import("@/views/UrediKorisnika.vue"),
  },
  {
    path: "/dodajPrihod",
    name: "dodajPrihod",
    component: () => import("@/views/DodavanjePrihoda.vue"),
  },
  {
    path: "/dodajRashod",
    name: "dodajRashod",
    component: () => import("@/views/DodavanjeRashoda.vue"),
  },
  {
    path: "/dodavanjeStednje",
    name: "dodavanjeStednje",
    component: () => import("@/views/DodavanjeStednje.vue"),
  },
  {
    path: "/pregledPrihoda",
    name: "pregledPrihoda",
    component: () => import("@/views/PregledPrihoda.vue"),
  },
  {
    path: "/pregledRashoda",
    name: "pregledRashoda",
    component: () => import("@/views/PregledRashoda.vue"),
  },
  {
    path: "/pregledStednji",
    name: "pregledStednji",
    component: () => import("@/views/PregledStednji.vue"),
  },
  {
    path: "/detaljiPrihoda/:id",
    name: "detaljiPrihoda",
    component: () => import("@/views/DetaljiPrihoda.vue"),
    props: true,
  },
  {
    path: "/detaljiRashoda/:id",
    name: "detaljiRashoda",
    component: () => import("@/views/DetaljiRashoda.vue"),
    props: true,
  },
  {
    path: "/detaljiStednje/:id",
    name: "detaljiStednje",
    component: () => import("@/views/DetaljiStednje.vue"),
    props: true,
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
