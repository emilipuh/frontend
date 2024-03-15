<template>
  <div class="container">
    <div class="dodajRashod">
      <div class="content">
        <h5 class="title">Novi rashod</h5>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Kategorija</label>
            <div class="kategorije">
              <input
                type="radio"
                class="btn-check"
                :class="{
                  active: stanje.rashod.kategorija === 'kupovina',
                }"
                @click="updateKategorija('kupovina')"
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
                  active: stanje.rashod.kategorija === 'racuni',
                }"
                @click="updateKategorija('racuni')"
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
                  <label class="btn" for="zdravlje">
                    <i class="fa-solid fa-heart-pulse"></i>
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
                  <label class="btn" for="edukacija">
                    <i class="fa-solid fa-book"></i>
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
                  <label class="btn" for="vozilo">
                    <i class="fa-solid fa-car"></i>
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
                  <label class="btn" for="kucniLjubimci">
                    <i class="fa-solid fa-dog"></i>
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
                  <label class="btn" for="ostalo"> Ostalo </label>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <label for="iznos" class="form-label">Iznos</label>
          <input
            v-model="stanje.rashod.iznos"
            type=""
            placeholder="Iznos"
            class="form-control"
            id="iznos"
          />
        </div>
        <div class="col-12">
          <label for="datum" class="form-label">Datum</label>
          <input
            v-model="stanje.rashod.datum"
            type="date"
            class="form-control"
            placeholder="Datum"
            id="datum"
          />
        </div>
        <div class="col-12">
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
      <Ponisti />
      <Potvrdi @potvrdiUpis="spremiRashod" />
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
      selectedDropdownCategory: null,
    };
  },
  methods: {
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
        this.stanje.rashod.dropdownKategorija = kategorija;
        this.selectedDropdownCategory = kategorija;
      } else {
        this.stanje.rashod.dropdownKategorija = "Više";
        this.stanje.rashod.kategorija = kategorija;
        this.selectedDropdownCategory = null;
      }
    },
    async spremiRashod() {
      try {
        let noviRashodPodaci = {
          kategorija:
            this.stanje.rashod.kategorija || this.stanje.rashod.dropdownKategorija,
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

.dodajRashod {
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

.kategorije {
  display: flex;
  justify-content: space-around;
}

.dropdown-btn.active {
  background-color: yellow;
  border: none;
}

.btn {
  color: black;
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
  color: red;
}
</style>
