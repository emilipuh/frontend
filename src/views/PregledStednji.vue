<template>
  <div class="container">
    <div class="content">
      <h5>Štednja</h5>
      <h6 style="text-align: start; margin: 4vh 2vh">Pregled upisa</h6>
      <div class="upisi" v-if="stednje && stednje.length > 0">
        <div class="upis" v-for="(stednja, index) in stednje" :key="index">
          <div class="content mb-2">
            <p class="text">{{ stednja.datum }} - {{ stednja.iznos }} €</p>
            <p class="text" style="width: 25vh; text-align: center">
              {{ stednja.biljeska }}
            </p>
          </div>
          <button class="button" @click="detaljiStednje(stednja._id)">Pregled</button>
        </div>
      </div>
      <div v-else>
        <p class="text">Nema upisa u štednju</p>
      </div>
    </div>
    <button class="btn" @click="dodajStednju()">Dodaj</button>
  </div>
</template>

<script>
import { Stednja, Service } from "@/services";
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
        this.stednje = await Stednja.dohvatiStednje();
      } catch (err) {
        console.error("Greška: ", err);
      }
    },
    dodajStednju() {
      this.$router.push({ name: "dodavanjeStednje" });
    },
    detaljiStednje(id) {
      this.$router.push({ path: `/detaljiStednje/${id}` })
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100dvh;
  padding-top: 2vh;
}
.upisi {
  overflow: auto;
}

.upis {
  border-radius: 2vh;
  background-color: #188abb;
  text-align: start;
  padding: 0.5vh 1vh 0vh 1vh;
  margin-bottom: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.text {
  font-weight: bold;
  margin: 1vh;
}

.btn {
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
  margin: 0vh 12vh 15vh 12vh;
}

.button {
  border: none;
  background-color: inherit;
}
</style>
