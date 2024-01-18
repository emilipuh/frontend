<template>
  <nav class="fixed-bottom bg-body-tertiary">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <KorisnickiPodaci />
        </li>
        <li class="nav-item">
          <Dodaj />
        </li>
        <li class="nav-item">
          <Izbornik />
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
import Izbornik from "./components/Izbornik.vue";
import KorisnickiPodaci from "./components/KorisnickiPodaci.vue";
import Dodaj from "./components/Dodaj.vue";

export default {
  name: 'app',
  components: {
    Izbornik,
    KorisnickiPodaci,
    Dodaj,
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 600px) {
  #app {
    background-image: url("@/assets/pozadina.png");
    background-size: cover;
    background-position: center;
    height: 100vh;
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif; //promijeniti font family
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 25px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    a {
      font-weight: bold;
      color: #2c3e50;
    }
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .btn {
    font-weight: bold;
    color: #2c3e50;
    border: none;
    padding: 0;
  }

  .modal-backdrop {
    z-index: -1;
  }
}
</style>
