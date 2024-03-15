<template>
  <div class="container">
    <h5>Rashodi</h5>
    <h6 style="text-align: start; margin: 4vh 2vh; color: black">
      Pregled upisa
    </h6>
    <div class="upisi" v-if="rashodi && rashodi.length > 0">
      <div class="upis" v-for="(rashod, index) in rashodi" :key="index">
        <div class="content">
          <p class="text">{{ rashod.datum }}: {{ rashod.biljeska }}</p>
          <p class="text" style="width: 25vh; text-align: center">
            <span style="color: #ffbe53">{{ rashod.iznos }} €</span>
          </p>
        </div>
        <button class="btn" @click="detaljiRashoda(rashod)">
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
import Obrisi from "@/components/Obrisi.vue";
import stanje from "@/stanje";
import { Rashod, Auth } from "@/services";

export default {
  name: "pregledRashoda",
  components: {
    Obrisi,
  },
  data() {
    return {
      stanje,
      rashodi: [],
    };
  },
  mounted() {
    this.dohvatiRashode();
  },
  methods: {
    async dohvatiRashode() {
      let userId = Auth.getUserId();
      try {
        this.rashodi = await Rashod.pregledRashoda(userId);
      } catch (err) {
        console.error("Greška prilikom dohvata: ", err);
      }
    },
    detaljiRashoda(rashod) {
      this.$router.push({ path: `detaljiRashoda/${rashod._id}` });
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
  padding: 0.5vh 1vh 0vh 1vh;
  margin-bottom: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.text {
  margin: 0.5vh 1vh;
  color: black;
}
</style>
