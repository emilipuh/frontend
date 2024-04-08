<template>
  <div class="container">
    <div class="dodajRashod">
      <div class="content">
        <h5 class="title">Novi rashod</h5>
        <div class="row">
          <div class="col-12" style="padding-bottom: 3vh">
            <label class="form-label">Odaberite kategoriju</label>
            <div class="kategorije">
              <input
                type="radio"
                class="btn-check"
                :class="{
                  active: stanje.rashod.kategorija === 'Kupovina',
                }"
                @click="updateKategorija('Kupovina')"
                name="btnradio"
                id="kupovina"
                autocomplete="off"
              />
              <label class="btn" for="kupovina">
                <div>
                  <i class="fa-solid fa-cart-shopping fa-lg"></i>
                </div>
                Kupovina
              </label>
              <input
                type="radio"
                class="btn-check"
                :class="{
                  active: stanje.rashod.kategorija === 'Računi',
                }"
                @click="updateKategorija('Računi')"
                name="btnradio"
                id="racuni"
                autocomplete="off"
              />
              <label class="btn" for="racuni">
                <div>
                  <i class="fa-solid fa-receipt fa-lg"></i>
                </div>
                Računi
              </label>
              <div class="dropdown">
                <button
                  class="btn dropdown-btn"
                  type="radio"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  v-bind:class="{ active: selectedDropdownCategory !== null }"
                >
                  <div>
                    <i class="fa-solid fa-ellipsis fa-lg"></i>
                  </div>
                  {{ stanje.rashod.dropdownKategorija }}
                </button>
                <ul class="dropdown-menu">
                  <input
                    type="radio"
                    class="btn-check"
                    :class="{
                      active: stanje.rashod.dropdownKategorija === 'Zdravlje',
                    }"
                    @click="updateKategorija('Zdravlje')"
                    name="btnradio"
                    id="zdravlje"
                    autocomplete="off"
                  />
                  <label class="btn-dropdown" for="zdravlje">
                    <i
                      class="fa-solid fa-heart-pulse"
                      style="margin-right: 0.5vw"
                    ></i>
                    Zdravlje
                  </label>
                  <input
                    type="radio"
                    class="btn-check"
                    :class="{
                      active: stanje.rashod.dropdownKategorija === 'Edukacija',
                    }"
                    @click="updateKategorija('Edukacija')"
                    name="btnradio"
                    id="edukacija"
                    autocomplete="off"
                  />
                  <label class="btn-dropdown" for="edukacija">
                    <i class="fa-solid fa-book" style="margin-right: 0.5vw"></i>
                    Edukacija
                  </label>
                  <input
                    type="radio"
                    class="btn-check"
                    :class="{
                      active: stanje.rashod.dropdownKategorija === 'Vozilo',
                    }"
                    @click="updateKategorija('Vozilo')"
                    name="btnradio"
                    id="vozilo"
                    autocomplete="off"
                  />
                  <label class="btn-dropdown" for="vozilo">
                    <i class="fa-solid fa-car" style="margin-right: 0.5vw"></i>
                    Vozilo
                  </label>
                  <input
                    type="radio"
                    class="btn-check"
                    :class="{
                      active:
                        stanje.rashod.dropdownKategorija === 'Kućni ljubimci',
                    }"
                    @click="updateKategorija('Kućni ljubimci')"
                    name="btnradio"
                    id="kucniLjubimci"
                    autocomplete="off"
                  />
                  <label class="btn-dropdown" for="kucniLjubimci">
                    <i class="fa-solid fa-dog" style="margin-right: 0.5vw"></i>
                    Kućni ljubimci
                  </label>
                  <input
                    type="radio"
                    class="btn-check"
                    :class="{
                      active: stanje.rashod.dropdownKategorija === 'Ostalo',
                    }"
                    @click="updateKategorija('Ostalo')"
                    name="btnradio"
                    id="ostalo"
                    autocomplete="off"
                  />
                  <label class="btn-dropdown" for="ostalo"> Ostalo </label>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" style="padding-bottom: 3vh">
          <label for="iznos" class="form-label">Iznos</label>
          <input
            v-model="stanje.rashod.iznos"
            type=""
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
        <div class="col-12" style="padding-bottom: 3vh">
          <label for="datum" class="form-label">Datum</label>
          <input
            v-model="stanje.rashod.datum"
            type="date"
            class="form-control"
            placeholder="Datum"
            id="datum"
            @blur="provjeraDatuma"
          />
          <p v-if="errors.datumError" class="error-message">
            <i class="fa-solid fa-triangle-exclamation"></i>
            {{ errors.datumError }}
          </p>
        </div>
        <div class="col-12" style="padding-bottom: 3vh">
          <label for="biljeska" class="form-label">Bilješka</label>
          <input
            v-model="stanje.rashod.biljeska"
            type=""
            placeholder="Bilješka"
            class="form-control"
            id="biljeska"
          />
        </div>
      </div>
    </div>
    <div class="buttons">
      <Ponisti @ponistiUpis="ponistiRashod" />
      <Potvrdi @potvrdiUpis="spremiRashod" :postojiGreska="postojiGreska" />
    </div>
  </div>
</template>

<script>
import Potvrdi from "@/components/Potvrdi.vue";
import Ponisti from "@/components/Ponisti.vue";
import stanje from "@/stanje";
import { Stanje, Rashod } from "@/services";

export default {
  name: "dodavanjeRashoda",
  components: {
    Potvrdi,
    Ponisti,
  },
  data() {
    return {
      stanje,
      errors: {
        error: "",
        iznosError: "",
        datumError: "",
      },
      odabranaKategorija: false,
      selectedDropdownCategory: null,
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
        this.stanje.rashod.kategorija !== "" ||
        (this.odabranaKategorija == true &&
          this.selectedDropdownCategory !== null &&
          this.stanje.rashod.iznos !== "" &&
          this.stanje.rashod.datum !== "")
      );
    },
  },
  methods: {
    validacijaIznosa() {
      if (isNaN(this.stanje.rashod.iznos)) {
        this.errors.iznosError = "Iznos nije valjan";
      } else if (!this.stanje.rashod.iznos) {
        this.errors.iznosError = "Iznos nije unesen";
      } else {
        this.errors.iznosError = "";
      }
    },
    provjeraDatuma() {
      if (!this.stanje.rashod.datum) {
        this.errors.datumError = "Datum nije odabran";
      } else {
        this.errors.datumError = "";
      }
    },
    updateKategorija(kategorija) {
      if (
        [
          "Zdravlje",
          "Edukacija",
          "Vozilo",
          "Kućni ljubimci",
          "Ostalo",
        ].includes(kategorija)
      ) {
        this.odabranaKategorija = true;
        this.stanje.rashod.dropdownKategorija = kategorija;
        this.selectedDropdownCategory = kategorija;
      } else {
        this.odabranaKategorija = true;
        this.stanje.rashod.dropdownKategorija = "Više";
        this.stanje.rashod.kategorija = kategorija;
        this.selectedDropdownCategory = null;
      }
    },
    async spremiRashod() {
      try {
        let noviRashodPodaci = {
          kategorija:
            this.stanje.rashod.kategorija ||
            this.stanje.rashod.dropdownKategorija,
          iznos: this.stanje.rashod.iznos,
          datum: this.stanje.rashod.datum,
          biljeska: this.stanje.rashod.biljeska,
        };
        await Rashod.noviRashod(noviRashodPodaci);
        this.stanje.rashod.iznos = parseInt(noviRashodPodaci.iznos);

        this.stanje.rashodi += parseInt(this.stanje.rashod.iznos);
        let data = await Stanje.dohvatiStanje();
        data.stanjeRacuna = this.stanje.prihodi - this.stanje.rashodi;

        this.stanje.rashod.kategorija = "";
        this.stanje.rashod.dropdownKategorija = "Više";
        this.stanje.rashod.iznos = "";
        this.stanje.rashod.datum = "";
        this.stanje.rashod.biljeska = "";
      } catch (error) {
        console.error("Greška pri spremanju rashoda: ", error);
      }
    },
    ponistiRashod() {
      this.stanje.rashod.kategorija = "";
      this.stanje.rashod.dropdownKategorija = "Više";
      this.stanje.rashod.iznos = "";
      this.stanje.rashod.datum = "";
      this.stanje.rashod.biljeska = "";
      this.odabranaKategorija = false;
      this.selectedDropdownCategory = null;
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
.dodajRashod {
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
.kategorije {
  display: flex;
  justify-content: space-around;
}
.dropdown-btn.active {
  background-color: yellow;
  border: none;
}
.btn-dropdown {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1vh 3vw;
}
.btn {
  color: black;
  border: 2px solid #79b2cb;
  padding: 1vh 3vw;
}
.btn-check:checked + .btn {
  background-color: yellow;
  border: none;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
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
  color: red;
}
.error-message {
  margin: 1vh 0.5vh;
  font-size: 14px;
  color: rgb(223, 223, 0);
}
</style>
