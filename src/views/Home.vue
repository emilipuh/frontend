<template>
  <div class="container">
    <div id="stanje">
      <h5 style="padding: 0">STANJE RAČUNA:</h5>
      <h5
        style="margin-bottom: 0; text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);"
        :class="{ pozitivno: stanjeRacuna > 0, negativno: stanjeRacuna < 0, nula: stanjeRacuna == 0 }"
      >
        {{ stanjeRacuna }} €
      </h5>
    </div>
    <div class="container-view">
      <div id="prihodi">
        <h6>PRIHODI: {{ prihodi }} €</h6>
        <!-- čitamo sa backenda -->
      </div>
      <div id="rashodi">
        <h6>RASHODI: {{ rashodi }} €</h6>
      </div>
      <div id="stednja">
        <h6>
          ŠTEDNJA:
          <span :class="{ zeleno: stednje > 0 }"> {{ stednje }} € </span>
        </h6>
      </div>
    </div>
  </div>

  <NavbarIzbornik />
</template>

<script>
import NavbarIzbornik from "@/components/NavbarIzbornik.vue";
import stanje from "@/stanje.js";
import { Stanje, Auth } from "@/services";

export default {
  name: "Home",
  components: {
    NavbarIzbornik,
  },
  data: function () {
    return stanje;
  },
  mounted() {
    this.azuriranjeStanja();
  },
  methods: {
    azuriranjeStanja() {
      let userId = Auth.getUserId();
      Stanje.dohvatiStanje(userId)
        .then((data) => {
          this.stanjeRacuna = data.stanje;
          this.prihodi = data.prihodi;
          this.rashodi = data.rashodi;
          this.stednje = data.stednja;
        })
        .catch((error) => {
          console.error(
            "Dogodila se greška prilikom dohvata podataka: " + error
          );
        });
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5vh;
}
#stanje {
  background-color: #066995;
  border-radius: 2vh;
  padding: 4vh;
  margin-left: 5vw;
  margin-right: 5vw;
}
.container-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4vh;
  padding-left: 6vw;
}
#stednja {
  margin-top: 5vh;
  border-radius: 1vh;
  padding: 1vh 8vw 0vh 8vw;
  background-color: #ffbe53;
}
.zeleno {
  color: green;
}
.pozitivno {
  color: yellowgreen;
}
.negativno {
  color: red;
}
.nula {
  color: rgb(49, 49, 49);
}
.modal-backdrop {
  z-index: 1000;
}
</style>
