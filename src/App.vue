<template>
  <nav class="fixed-bottom bg-body-tertiary">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          Korisnik
        </li>
        <li class="nav-item">
          Dodaj
        </li>
        <li class="nav-item">
          <izbornik />
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
import Izbornik from './components/Izbornik.vue';

export default {
  components: {
    Izbornik,
}
}
</script>

<style lang="scss">
#app {
  background-image: url('@/assets/pozadina.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

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

.offcanvas-item {
  text-decoration: none;
}

.btn {
  font-weight: bold;
  color: #2c3e50;
  border: none;
  padding: 0;
}

.offcanvas-title {
  color: #0585bc;
  font-weight: bold;
}

.card {
  border: none;
  padding-bottom: 1vh;
  text-align: left;
}
</style>
