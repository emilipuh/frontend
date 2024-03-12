<template>
  <nav class="navbar bg-body-tertiary fixed-bottom">
    <div class="container-fluid">
      <KorisnickiPodaci />
      <Dodaj />
      <button
        class="btn navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#izbornik"
        aria-controls="izbornik"
        aria-label="Toggle navigation"
      >
        <div class="navbar-icon">
          <i class="fa-solid fa-bars fa-xl"></i>
        </div>
        Izbornik
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="izbornik"
        aria-labelledby="izbornik"
      >
        <div class="offcanvas-header">
          <h5 style="color: #066995">Expense Track</h5>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <div
                class="nav-item dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Prihodi
              </div>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" @click="pregledPrihoda()">
                    Pregled prihoda
                  </button>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <div
                class="nav-item dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Rashodi
              </div>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" @click="pregledRashoda()">
                    Pregled rashoda
                  </button>
                </li>
              </ul>
            </li>
            <li class="mt-5">
              <button class="nav-item" @click="pregledStednji()">
                Štednja
              </button>
            </li>
          </ul>
        </div>
        <div class="offcanvas-footer">
          <i class="fa-solid fa-power-off"></i>
          <!-- router link -->
          <button style="margin-left: 1vh" class="nav-item" @click="odjava()">
            Odjava
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import KorisnickiPodaci from "./KorisnickiPodaci.vue";
import Dodaj from "./Dodaj.vue";
import { Auth } from "@/services";

export default {
  name: "Navbar",
  components: {
    KorisnickiPodaci,
    Dodaj,
  },
  methods: {
    pregledPrihoda() {
      this.$router.push({ name: "pregledPrihoda" });
    },
    pregledRashoda() {
      this.$router.push({ name: "pregledRashoda" });
    },
    pregledStednji() {
      this.$router.push({ name: "pregledStednji" });
    },
    odjava() {
      Auth.logout();
      this.$router.go();
    },
  },
};
</script>

<style scoped lang="scss">
.offcanvas {
  max-width: 300px;
}
.offcanvas-body {
  text-align: start;
  margin-top: 3vh;
}
.nav-item {
  padding-bottom: 10px;
  font-size: 20px;
  background-color: inherit;
  border: none;
  padding-left: 0;
}
.btn {
  border: none;
  font-size: 16px;
  color: black;
}
.navbar-icon {
  margin-bottom: 1vh;
}
.offcanvas-footer {
  text-align: start;
  font-size: 20px;
  padding: 16px;
}

.dropdown-menu {
  border: none;
}
</style>
