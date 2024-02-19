<template>
  <div class="container">
    <div id="stanje" v-if="stanje">
      <!-- ako postoji stanje -->
      <h5 style="padding: 0">STANJE RAČUNA:</h5>
      <h6 style="margin-bottom: 0">{{ stanje.iznos }} €</h6>
    </div>
    <div class="container-view">
      <div id="prihodi" v-if="stanje">
        <h6>PRIHODI: {{ stanje.prihodi }} €</h6>
        <!-- čitamo sa backenda -->
      </div>
      <div id="rashodi" v-if="stanje">
        <h6>RASHODI: {{ stanje.rashodi }} €</h6>
      </div>
      <div id="stednja" v-if="stanje">
        <h6>ŠTEDNJA: {{ stanje.stednja }} €</h6>
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
    return {
      stanje,
    };
  },
  mounted() {
    // pomocu axiosa
    Stanje.dohvatiStanje() // ovo mi vraća promise...
      .then((data) => {
        this.stanje = data;
      })
      .catch((err) => {
        console.error("Dogodila se greška prilikom dohvata podataka: " + err);
      });
  },
  methods: {
    azurirajStanje(novoStanje) {
      this.stanje = novoStanje;
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
