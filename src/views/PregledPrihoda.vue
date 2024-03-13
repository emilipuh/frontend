<template>
  <div class="container">
    <h5>Prihodi</h5>
    <h6 style="text-align: start; margin: 4vh 2vh">Pregled upisa</h6>
    <div class="upisi" v-if="prihodi && prihodi.length > 0">
      <div class="upis" v-for="prihod in prihodi" :key="prihod._id">
        <div class="content mb-2">
          <p class="text">{{ prihod.datum }} - {{ prihod.iznos }} €</p>
          <p class="text" style="width: 25vh; text-align: center">
            {{ prihod.biljeska }}
          </p>
        </div>
        <button class="btn" @click="detaljiPrihoda(prihod)">Pregled</button>
      </div>
    </div>
    <div v-else>
      <p class="text">Nema podataka za prikaz</p>
      <!-- <button class="btn" @click="dohvatiPrihode()">Dohvati ponovno</button> -->
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
  max-height: 100dvh;
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
</style>
