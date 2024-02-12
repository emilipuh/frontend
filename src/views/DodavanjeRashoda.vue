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
                :class="{ active: inputKategorija === 'kupovina' }"
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
                :class="{ active: inputKategorija === 'racuni' }"
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
                  class="btn"
                  type="radio"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div>
                    <i class="fa-solid fa-ellipsis fa-lg"></i>
                  </div>
                  {{ inputKategorija }}
                </button>
                <ul class="dropdown-menu">
                  <input
                    type="radio"
                    class="btn-check"
                    :class="{ active: inputKategorija === 'Zdravlje' }"
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
                    :class="{ active: inputKategorija === 'Edukacija' }"
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
                    :class="{ active: inputKategorija === 'Vozilo' }"
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
                    :class="{ active: inputKategorija === 'Kućni ljubimci' }"
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
                    :class="{ active: inputKategorija === 'Ostalo' }"
                    @click="inputKategorija('Ostalo')"
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
    <div class="buttons">
      <Ponisti />
      <Potvrdi
        :kategorija="inputKategorija"
        :iznos="inputIznos"
        :datum="inputDatum"
        :biljeska="inputBiljeska"
        @potvrdiUpis="spremiRashod"
      />
    </div>
  </div>
</template>

<script>
import Potvrdi from "@/components/Potvrdi.vue";
import Ponisti from "@/components/Ponisti.vue";
import stanje from "@/stanje";

export default {
  name: "dodavanjeRashoda",
  components: {
    Potvrdi,
    Ponisti,
  },
  data: function () {
    return {
      inputKategorija: "Više",
      inputIznos: "",
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
    spremiRashod(podaci) {
      //console.log("spremljeno: ", podaci); // tu mi se poziva samo ispis podataka na konzoli
      let iznos = parseInt(this.inputIznos) || 0;
      this.stanje.rashodi += iznos;
      console.log("Stanje: ", stanje);
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
  color: red;
}
</style>
