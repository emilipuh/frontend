<template>
  <nav class="navbar bg-body-tertiary fixed-bottom">
    <div class="container-fluid">
      <KorisnickiPodaci />
      <Dodaj />
      <button
        class="btn navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars"></i>
        Izbornik
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasNavbarLabel">
            Expense Track
          </h3>
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
          <a style="margin-left: 1vh;">Odjava</a>
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
.container-fluid {
  justify-content: space-around;
}

.offcanvas {
  max-width: 300px;
}

.offcanvas-title {
  margin: 15px 0px 25px 0px;
  color: #066995;
  font-weight: bold;
}

.offcanvas-body {
  text-align: start;
}
.nav-item {
  text-decoration: none;
  padding-bottom: 10px;
  font-size: 20px;
  color: black;
}

.btn {
  border: none;
  font-size: 16px;
}

.offcanvas-footer {
  text-align: start;
  font-size: 20px;
  padding: 16px;
}

.dropdown-menu {
  border: none;
  font-size: 18px;
}
</style>
