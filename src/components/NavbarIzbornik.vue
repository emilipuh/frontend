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
                  <router-link to="/pregledPrihoda" class="dropdown-item"
                    >Pregled prihoda</router-link
                  >
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
                  <router-link to="/pregledRashoda" class="dropdown-item"
                    >Pregled rashoda</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="mt-5">
              <router-link to="/stednja" class="nav-item">Štednja</router-link>
            </li>
          </ul>
        </div>
        <div class="offcanvas-footer">
          <i class="fa-solid fa-power-off"></i>
          <!-- router link -->
          <a style="margin-left: 1vh;" class="nav-item" >Odjava</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import KorisnickiPodaci from "./KorisnickiPodaci.vue";
import Dodaj from "./Dodaj.vue";

export default {
  name: "Navbar",
  components: {
    KorisnickiPodaci,
    Dodaj,
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
