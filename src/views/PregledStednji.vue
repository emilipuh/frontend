<template>
  <div class="container">
    <div class="content">
      <h5>Štednja</h5>
      <h6 style="text-align: start; margin: 4vh 2vh; color: black">
        Pregled upisa
      </h6>
      <div class="upisi" v-if="stednje && stednje.length > 0">
        <div class="upis" v-for="(stednja, index) in stednje" :key="index">
          <div class="content">
            <p class="text">{{ stednja.datum }}: {{ stednja.biljeska }}</p>
            <p class="text" style="width: 25vh; text-align: center">
              <span style="font-weight: bold;">{{ stednja.iznos }} €</span>
            </p>
          </div>
          <button class="button" @click="detaljiStednje(stednja._id)">
            <i class="fa-solid fa-circle-info"></i>
            Detalji
          </button>
        </div>
      </div>
      <div v-else>
        <p class="text">Nema upisa u štednju</p>
      </div>
    </div>
  </div>
  <button class="btn" @click="dodajStednju()">Dodaj</button>
</template>

<script>
import { Stednja, Auth } from "@/services";
import stanje from "@/stanje";

export default {
  name: "pregledStednji",
  data() {
    return {
      stanje,
      stednje: [],
    };
  },
  mounted() {
    this.dohvatiStednje();
  },
  methods: {
    async dohvatiStednje() {
      try {
        let userId = Auth.getUserId();
        this.stednje = await Stednja.pregledStednji(userId);
      } catch (err) {
        console.error("Greška prilikom dohvata štednji: ", err);
      }
    },
    dodajStednju() {
      this.$router.push({ name: "dodavanjeStednje" });
    },
    detaljiStednje(id) {
      this.$router.push({ path: `/detaljiStednje/${id}` });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  min-height: 80dvh;
  max-height: 100dvh;
}
.upisi {
  overflow: auto;
  margin-bottom: 6vh;
}

.upis {
  border-radius: 2vh;
  background-color: #188abb;
  text-align: start;
  padding: 0.5vh 1vh 0.5vh 1vh;
  margin-bottom: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.text {
  margin: 0.5vh 1vh;
  color: black;
}
.button {
  border: none;
  background-color: inherit;
}
.btn {
  border-radius: 2vh;
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
  margin: 0vh 12vh 15vh 12vh;
}
</style>
