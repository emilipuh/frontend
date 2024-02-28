<template>
  <div class="container">
    <div id="stanje">
      <h5 style="padding: 0">STANJE RAČUNA:</h5>
      <h6 style="margin-bottom: 0">{{ stanjeRacuna }} €</h6>
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
        <h6>ŠTEDNJA: {{ stednje }} €</h6>
      </div>
    </div>
  </div>

  <NavbarIzbornik />
</template>

<script>
import NavbarIzbornik from "@/components/NavbarIzbornik.vue";
import stanje from "@/stanje.js";
import { Stanje } from "@/services";

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
      Stanje.dohvatiStanje()
        .then((data) => {
          this.stanjeRacuna = data.stanjeRacuna;
          this.prihodi = data.prihodi;
          this.rashodi = data.rashodi;
          this.stednje = data.stednja;
          console.log("Ukupno stanje: ", this.stanjeRacuna);
          console.log("Ukupni prihodi: ", this.prihodi);
          console.log("Ukupni rashodi: ", this.rashodi);
          console.log("Ukupna stednja: ", this.stednje);
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
  border-radius: 15px;
  padding: 3vh;
  margin-left: 3vh;
  margin-right: 3vh;
}

.container-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4vh;
  padding-left: 2vh;
}

#stednja {
  margin-top: 10%;
}
</style>
