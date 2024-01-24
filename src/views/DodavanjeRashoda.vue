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
                <i class="fa-solid fa-cart-shopping"></i> Kupovina</label
              >
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
                <i class="fa-solid fa-receipt"></i> Računi</label
              >
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="radio"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ dropdownKategorija }}
                </button>
                <ul class="dropdown-menu">
                  <input
                    type="radio"
                    class="btn-check"
                    :class="{ active: dropdownKategorija === 'Zdravlje' }"
                    @click="updateDropdownKategorija('Zdravlje')"
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
                    :class="{ active: dropdownKategorija === 'Edukacija' }"
                    @click="updateDropdownKategorija('Edukacija')"
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
                    :class="{ active: dropdownKategorija === 'Vozilo' }"
                    @click="updateDropdownKategorija('Vozilo')"
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
                    :class="{ active: dropdownKategorija === 'Kućni ljubimci' }"
                    @click="updateDropdownKategorija('Kućni ljubimci')"
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
                    :class="{ active: dropdownKategorija === 'Ostalo' }"
                    @click="updateDropdownKategorija('Ostalo')"
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
      <Potvrdi @spremiUpis="spremi"/>
    </div>
  </div>
</template>

<script>
import Potvrdi from "@/components/Potvrdi.vue";
import Ponisti from "@/components/Ponisti.vue";

export default {
  name: "dodavanjeRashoda",
  components: {
    Potvrdi,
    Ponisti,
  },
  data: function () {
    return {
      inputKategorija: "",
      dropdownKategorija: "Više",
      inputIznos: "",
      inputDatum: "",
      inputBiljeska: "",
    };
  },
  methods: {
    updateKategorija(kategorija) {
      this.inputKategorija = kategorija;
    },
    // nekako drugacije da su mi sve kategorije u jednom
    updateDropdownKategorija(kategorija) {
      this.dropdownKategorija = kategorija;
    },
    spremi(podaci) {
      console.log("spremljeno: ", podaci);
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
