<template>
  <div class="container">
    <h5>Rashodi</h5>
    <h6 style="text-align: start; margin: 4vh 2vh">Pregled upisa</h6>
    <div class="upisi">
      <div class="upis" v-for="(rashod, index) in rashodi" :key="index">
        <div class="content mb-2">
          <p class="text">{{ rashod.datum }} - {{ rashod.iznos }} €</p>
          <p class="text" style="width: 25vh; text-align: center">
            {{ rashod.biljeska }}
          </p>
        </div>
        <button class="btn" @click="detaljiRashoda(rashod)">Pregled</button>
      </div>
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
  max-height: 100dvh;
  padding-top: 2vh;
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
// na cijelu stranicu???
.upisi {
  overflow: auto;
}

.text {
  font-weight: bold;
  margin: 1vh;
}
</style>
