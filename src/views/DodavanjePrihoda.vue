<template>
  <div class="container">
    <div class="dodajPrihod">
      <div class="content">
        <h5 class="title">Novi prihod</h5>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Kategorija</label>
            <div class="d-flex">
              <input
                type="radio"
                class="btn-check"
                :class="{ active: this.stanje.uneseniPodaci.kategorija === 'placa' }"
                @click="updateKategorija('placa')"
                name="btnradio"
                id="placa"
                autocomplete="off"
              />
              <label class="btn" for="placa">
                <div>
                  <i class="fa-solid fa-briefcase fa-lg"></i>
                </div>
                Plaća
              </label>
              <input
                type="radio"
                class="btn-check"
                :class="{
                  active: this.stanje.uneseniPodaci.kategorija === 'ostalo',
                }"
                @click="updateKategorija('ostalo')"
                name="btnradio"
                id="ostalo"
                autocomplete="off"
              />
              <label class="btn" for="ostalo">
                <div>
                  <i class="fa-solid fa-hand-holding-dollar fa-lg"></i>
                </div>
                Ostalo
              </label>
            </div>
          </div>

          <div class="col-12">
            <label for="iznos" class="form-label">Iznos</label>
            <input
              v-model="stanje.uneseniPodaci.iznos"
              type=""
              placeholder="Iznos"
              class="form-control"
              id="iznos"
            />
          </div>
          <div class="col-12">
            <label for="datum" class="form-label">Datum</label>
            <input
              v-model="stanje.uneseniPodaci.datum"
              type="date"
              class="form-control"
              placeholder="Datum"
              id="datum"
            />
          </div>
          <div class="col-12">
            <label for="biljeska" class="form-label">Bilješka</label>
            <input
              v-model="stanje.uneseniPodaci.biljeska"
              type="text"
              placeholder="Bilješka"
              class="form-control"
              id="biljeska"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <Ponisti />
      <!-- spremljeni podaci radi pregleda -->
      <Potvrdi @potvrdiUpis="spremiPrihod" />
    </div>
  </div>
</template>

<script>
import Potvrdi from "@/components/Potvrdi.vue";
import Ponisti from "@/components/Ponisti.vue";
import stanje from "@/stanje";
import { Stanje } from "@/services";

export default {
  name: "dodavanjePrihoda",
  components: {
    Potvrdi,
    Ponisti,
  },
  data: function () {
    return {
      stanje,
    };
  },
  methods: {
    // treba postici to da mi se nakon upisa prihoda v-model isprazni
    updateKategorija(kategorija) {
      this.stanje.uneseniPodaci.kategorija = kategorija;
    },
    stanjeRacuna() {
      this.stanje.stanjeRacuna = this.stanje.prihodi - this.stanje.rashodi;
      console.log("Stanje računa: ", this.stanje.stanjeRacuna)
    },
    // ovdje ću nekako pozivati async metodu za spremanje novih upisanih podataka
    // vjerojatno će ova metoda biti u index.js / services
    spremiPrihod() {
      // još uvijek sprema na lokalni store u frontend, pod stanje
      let podaci = {
        kategorija: this.stanje.uneseniPodaci.kategorija,
        iznos: this.stanje.uneseniPodaci.iznos,
        datum: this.stanje.uneseniPodaci.datum,
        biljeska: this.stanje.uneseniPodaci.biljeska,
      };
      this.stanje.prihodi += parseInt(podaci.iznos);
      console.log("Ukupni prihodi: ", this.stanje.prihodi);
      console.log("Upisani prihod: ", podaci.iznos);
      this.$emit("potvrdiUpis", podaci);
      this.stanjeRacuna();
      // poziv async, spremamo generirane podatke, dodati then
      Stanje.noviPrihod(podaci);
      // isprazniti sva polja za novi upis
      this.stanje.uneseniPodaci.kategorija = '';
      this.stanje.uneseniPodaci.iznos = '';
      this.stanje.uneseniPodaci.datum = '';
      this.stanje.uneseniPodaci.biljeska = '';
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100dvh;
  padding: 0px;
  display: flex;
  justify-content: space-evenly;
}

.dodajPrihod {
  border-radius: 18px;
  background-color: #066995;
  margin-left: 2vh;
  margin-right: 2vh;
}

.content {
  margin: 4vh;
}

.title {
  font-size: 22px;
  margin-bottom: 3vh;
  padding: 0;
}

.btn {
  color: black;
  margin-right: 2vh;
}

.btn-check:checked + .btn {
  background-color: yellow;
  border: none;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}
.button {
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
}

.form-control {
  margin-top: 1vh !important;
  margin-bottom: 4vh !important;
  padding: 1.5vh;
  text-align: center;
  font-size: 16px;
}

.form-label {
  display: flex;
  color: black;
  font-size: 18px;
  font-weight: bold;
}

::placeholder {
  color: lightgrey;
}
#iznos {
  color: green;
}
</style>
