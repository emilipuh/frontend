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
                :class="{ active: inputKategorija === 'placa' }"
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
                :class="{ active: inputKategorija === 'ostalo' }"
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
              v-model="inputIznos"
              type=""
              placeholder="Iznos"
              class="form-control"
              id="iznos"
            />
          </div>
          <div class="col-12">
            <label for="datum" class="form-label">Datum</label>
            <input
              v-model="inputDatum"
              type="date"
              class="form-control"
              placeholder="Datum"
              id="datum"
            />
          </div>
          <div class="col-12">
            <label for="biljeska" class="form-label">Bilješka</label>
            <input
              v-model="inputBiljeska"
              type=""
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
      <Potvrdi
        :kategorija="inputKategorija"
        :iznos="inputIznos"
        :datum="inputDatum"
        :biljeska="inputBiljeska"
        @potvrdiUpis="spremiPrihod"
      />
    </div>
  </div>
</template>

<script>
import Potvrdi from "@/components/Potvrdi.vue";
import Ponisti from "@/components/Ponisti.vue";
import stanje from "@/stanje";

export default {
  name: "dodavanjePrihoda",
  components: {
    Potvrdi,
    Ponisti,
  },
  data: function () {
    return {
      inputKategorija: null, // spremanje i pamcenje odabrane kategorije
      inputIznos: "", // citanje iznosa
      inputDatum: "",
      inputBiljeska: "",
      stanje,
    };
  },
  methods: {
    updateKategorija(kategorija) {
      this.inputKategorija = kategorija;
    },
    stanjeRacuna() {
      this.stanje.stanjeRacuna =
        this.stanje.prihodi - this.stanje.rashodi + this.stanje.stednja;
    },
    spremiPrihod(podaci) {
      let iznos = parseInt(this.inputIznos) || 0;
      this.stanje.prihodi += iznos;
      this.$emit("potvrdiUpis", podaci);
      this.stanjeRacuna();
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
