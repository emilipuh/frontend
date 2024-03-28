<template>
  <div class="container">
    <div class="dodajPrihod">
      <form class="content">
        <h5 class="title">Novi prihod</h5>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Kategorija</label>
            <p
              v-if="!odabranaKategorija"
              class="error-message"
              style="text-align: start"
            >
              {{ errors.kategorijaError }}
            </p>
            <div class="d-flex">
              <input
                type="radio"
                name="kategorija"
                class="btn-check"
                :class="{ active: stanje.prihod.kategorija === 'Plaća' }"
                @click="updateKategorija('Plaća')"
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
                :class="{ active: stanje.prihod.kategorija === 'Ostalo' }"
                @click="updateKategorija('Ostalo')"
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
          <div class="col-12" style="padding-bottom: 4vh">
            <label for="iznos" class="form-label">Iznos</label>
            <input
              v-model="stanje.prihod.iznos"
              type=""
              name="iznos"
              placeholder="Iznos"
              class="form-control"
              id="iznos"
              @blur="validacijaIznosa"
            />
            <p v-if="errors.iznosError" class="error-message">
              <i class="fa-solid fa-triangle-exclamation"></i>
              {{ errors.iznosError }}
            </p>
          </div>

          <div class="col-12" style="padding-bottom: 4vh">
            <label for="datum" class="form-label">Datum</label>
            <input
              v-model="stanje.prihod.datum"
              type="date"
              name="datum"
              class="form-control"
              id="datum"
              @blur="provjeraDatuma"
            />
            <p v-if="errors.datumError" class="error-message">
              <i class="fa-solid fa-triangle-exclamation"></i>
              {{ errors.datumError }}
            </p>
          </div>

          <div class="col-12" style="padding-bottom: 4vh">
            <label for="biljeska" class="form-label">Bilješka</label>
            <input
              v-model="stanje.prihod.biljeska"
              type="text"
              name="biljeska"
              placeholder="Bilješka"
              class="form-control"
              id="biljeska"
            />
          </div>
        </div>
      </form>
    </div>
    <p v-if="errors.error" class="error-message">
      <i class="fa-solid fa-triangle-exclamation"></i>
      {{ errors.error }}
    </p>
    <div class="buttons">
      <Ponisti @ponistiUpis="ponistiPrihod" />
      <Potvrdi @potvrdiUpis="spremiPrihod" :postojiGreska="postojiGreska" />
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
  data() {
    return {
      stanje,
      errors: {
        error: "",
        kategorijaError: "Odaberite kategoriju",
        iznosError: "",
        datumError: "",
      },
      odabranaKategorija: false,
    };
  },
  computed: {
    postojiGreska() {
      return !!(
        this.errors.error ||
        this.errors.iznosError ||
        this.errors.datumError ||
        !this.isDataChanged
      );
    },
    isDataChanged() {
      return (
        this.stanje.prihod.kategorija !== "" &&
        this.odabranaKategorija == true &&
        this.stanje.prihod.iznos !== "" &&
        this.stanje.prihod.datum !== ""
      );
    },
  },
  methods: {
    updateKategorija(kategorija) {
      this.odabranaKategorija = true;
      this.stanje.prihod.kategorija = kategorija;
    },
    validacijaIznosa() {
      if (isNaN(this.stanje.prihod.iznos)) {
        this.errors.iznosError = "Iznos nije valjan";
      } else if (!this.stanje.prihod.iznos) {
        this.errors.iznosError = "Iznos nije unesen";
      } else {
        this.errors.iznosError = "";
      }
    },
    provjeraDatuma() {
      if (!this.stanje.prihod.datum) {
        this.errors.datumError = "Datum nije odabran";
      } else {
        this.errors.datumError = "";
      }
    },
    async spremiPrihod() {
      try {
        let noviPrihodPodaci = {
          kategorija: this.stanje.prihod.kategorija,
          iznos: this.stanje.prihod.iznos,
          datum: this.stanje.prihod.datum,
          biljeska: this.stanje.prihod.biljeska,
        };

        await Prihod.noviPrihod(noviPrihodPodaci);

        this.stanje.prihod.iznos = parseInt(noviPrihodPodaci.iznos);
        this.stanje.prihodi += parseInt(this.stanje.prihod.iznos);

        let data = await Stanje.dohvatiStanje();
        data.stanjeRacuna = this.stanje.prihodi - this.stanje.rashodi;

        this.stanje.prihod.kategorija = "";
        this.stanje.prihod.iznos = "";
        this.stanje.prihod.datum = "";
        this.stanje.prihod.biljeska = "";
      } catch (error) {
        console.error("Greška prilikom spremanja prihoda:", error);
      }
    },
    ponistiPrihod() {
      this.stanje.prihod.kategorija = "";
      this.stanje.prihod.iznos = "";
      this.stanje.prihod.datum = "";
      this.stanje.prihod.biljeska = "";
      this.odabranaKategorija = false;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100dvh;
  padding: 0vh;
  margin: 0vh;
  display: flex;
  justify-content: space-evenly;
}
.dodajPrihod {
  border-radius: 2vh;
  background-color: #066995;
  margin-left: 4vw;
  margin-right: 4vw;
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
  border-radius: 2vh;
  font-weight: bold;
  text-decoration: none;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vw;
}
.form-control {
  margin-top: 1vh !important;
  padding: 1.5vh;
  text-align: center;
  font-size: 16px;
}
.form-label {
  display: flex;
  color: black;
  font-size: 16px;
  font-weight: bold;
}
::placeholder {
  color: lightgrey;
}
#iznos {
  color: green;
}
.error-message {
  margin: 1.5vh 0.5vh;
  font-size: 14px;
  color: rgb(223, 223, 0);
}
</style>
