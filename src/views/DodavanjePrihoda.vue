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
                name="kategorija"
                class="btn-check"
                :class="{ active: stanje.prihodi.kategorija === 'placa' }"
                @click="updateKategorija('placa')"
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
                name="kategorija"
                class="btn-check"
                :class="{
                  active: stanje.prihodi.kategorija === 'ostalo',
                }"
                @click="updateKategorija('ostalo')"
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
              v-model="stanje.prihodi.iznos"
              type=""
              name="iznos"
              placeholder="Iznos"
              class="form-control"
              id="iznos"
            />
          </div>
          <div class="col-12">
            <label for="datum" class="form-label">Datum</label>
            <input
              v-model="stanje.prihodi.datum"
              type="date"
              name="datum"
              class="form-control"
              placeholder="Datum"
              id="datum"
            />
          </div>
          <div class="col-12">
            <label for="biljeska" class="form-label">Bilješka</label>
            <input
              v-model="stanje.prihodi.biljeska"
              type="text"
              name="biljeska"
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
      <Potvrdi @potvrdiUpis="spremiPrihod" />
    </div>
  </div>
</template>

<script>
import Potvrdi from "@/components/Potvrdi.vue";
import Ponisti from "@/components/Ponisti.vue";
import stanje from "@/stanje";
import { Stanje, Prihod } from "@/services";

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
    updateKategorija(kategorija) {
      this.stanje.prihodi.kategorija = kategorija;
    },
    spremiPrihod() {
      let noviPrihodPodaci = {
        kategorija: this.stanje.prihodi.kategorija,
        iznos: this.stanje.prihodi.iznos,
        datum: this.stanje.prihodi.datum,
        biljeska: this.stanje.prihodi.biljeska
      }

      Prihod.noviPrihod(noviPrihodPodaci)
        .then(() => { // prazna callback funkcija jer u return u noviPrihod ne vraćamo ništa
          Stanje.dohvatiStanje()
            .then((noviPrihodPodaci) => {
              this.$emit('azurirajStanje', noviPrihodPodaci);
            })
          console.log("Spremljeno: ", noviPrihodPodaci)
        })
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
