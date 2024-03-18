<template>
  <div class="container">
    <h5>Prihodi</h5>
    <h6 style="text-align: start; margin: 4vh 2vh; color: black">
      Pregled upisa
    </h6>
    <div class="upisi" v-if="prihodi && prihodi.length > 0">
      <div class="upis" v-for="prihod in prihodi" :key="prihod._id">
        <div class="content">
          <p class="text">{{ prihod.datum }}: {{ prihod.biljeska }}</p>
          <p class="text" style="width: 25vh; text-align: center">
            <span style="color: #ffbe53">{{ prihod.iznos }} €</span>
          </p>
        </div>
        <button class="btn" @click="detaljiPrihoda(prihod)">
          <i class="fa-solid fa-circle-info"></i>
          Detalji
        </button>
      </div>
    </div>
    <div v-else>
      <p class="text">Nema podataka za prikaz</p>
    </div>
  </div>
</template>

<script>
import { Prihod, Auth } from "@/services";
import stanje from "@/stanje";

export default {
  name: "pregledPrihoda",
  data() {
    return {
      stanje,
      prihodi: [],
    };
  },
  mounted() {
    this.dohvatiPrihode();
  },
  methods: {
    async dohvatiPrihode() {
      try {
        let userId = Auth.getUserId();
        this.prihodi = await Prihod.pregledPrihoda(userId);
        this.prihodi.sort((a, b) => new Date(b.datum) - new Date(a.datum));
      } catch (err) {
        console.error("Greška prilikom dohvata prihoda:", err);
      }
    },
    detaljiPrihoda(prihod) {
      this.$router.push({ path: `detaljiPrihoda/${prihod._id}` });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  //min-height: 80dvh; => mijenja margine
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
.btn {
  padding: 0;
  min-width: 8vh;
}
.text {
  margin: 0.5vh 1vh;
  color: black;
}
</style>
