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
        <div class="navbar-icon" style="margin-bottom: 1vh">
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
          <h2 style="color: #066995; margin-top: 3vh">Expense Track</h2>
        </div>
        <div class="offcanvas-body">
          <div class="collapse-btns">
            <button
              class="btns dropdown-toggle"
              data-bs-toggle="collapse"
              href="#pregledPrihoda"
              role="button"
              aria-expanded="false"
              aria-controls="pregledPrihoda"
            >
              Prihodi
            </button>
            <div class="collapse multi-collapse" id="pregledPrihoda">
              <div class="card card-body">
                <button class="dropdown-item" @click="pregledPrihoda()">
                  Pregled prihoda
                </button>
              </div>
            </div>
            <button
              class="btns dropdown-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#pregledRashoda"
              aria-expanded="false"
              aria-controls="pregledRashoda"
              style="margin-top: 2vh"
            >
              Rashodi
            </button>
            <div class="collapse multi-collapse" id="pregledRashoda">
              <div class="card card-body">
                <button class="dropdown-item" @click="pregledRashoda()">
                  Pregled rashoda
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="offcanvas-footer">
          <div>
            <button
              class="btns"
              style="margin-bottom: 30vh"
              @click="pregledStednji()"
            >
              Štednja
            </button>
          </div>
          <div>
            <i class="fa-solid fa-power-off"></i>
            <button style="margin-left: 1vh" class="btns" @click="odjava()">
              Odjava
            </button>
          </div>
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
  data() {
    return {
      prihodiCollapse: false,
      rashodiCollapse: false,
    };
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
.btn {
  font-size: 16px;
  border: none;
  color: black;
}
.offcanvas {
  max-width: 300px;
}
.offcanvas-body {
  text-align: start;
  margin-top: 3vh;
}
.collapse-btns {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.card-body {
  border: none;
  padding: 1vh 0vh 2vh 3vh;
}
.btns {
  padding-bottom: 1vh;
  font-size: 20px;
  background-color: inherit;
  border: none;
  padding-left: 0;
  color: black;
}
.offcanvas-footer {
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: 20px;
  padding: 16px;
}
.btn:focus {
  box-shadow: none;
}
</style>
