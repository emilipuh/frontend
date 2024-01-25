<template>
  <div class="container">
    <div class="dodajStednju">
      <div class="content">
        <h5 class="title">Nova štednja</h5>
        <div class="row">
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
      <Potvrdi @potvrdiUpis="spremiStednju"/>
    </div>
  </div>
</template>

<script>
import Potvrdi from "@/components/Potvrdi.vue";
import Ponisti from "@/components/Ponisti.vue";
import stanje from "@/stanje";

export default {
  name: "dodajStednju",
  components: {
    Potvrdi,
    Ponisti,
  },
  data: function () {
    return {
      inputIznos: "",
      inputDatum: "",
      inputBiljeska: "",
      stanje
    };
  },
  methods: {
    spremiStednju(podaci) {
      //console.log("spremljeno: ", podaci); // tu mi se poziva samo ispis podataka na konzoli
      let iznos = parseInt(this.inputIznos) || 0;
      this.stanje.stednja += iznos;
      console.log("Stanje: ", stanje);
      this.$emit("potvrdiUpis", podaci);
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

.dodajStednju {
  border-radius: 18px;
  background-color: #066995;
  margin-left: 2vh;
  margin-right: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  // gornji padding viši radi ikonica
  padding: 50px 16px 8px 16px;
  //   border: none;
}
// ubaciti da mi button bude žut kad kliknem

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
</style>
