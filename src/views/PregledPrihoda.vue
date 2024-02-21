<template>
  <div class="container">
    <h5>Prihodi</h5>
    <h6 style="text-align: start; margin: 4vh 2vh">Pregled upisa</h6>
    <div class="upisi">
      <div class="upis" v-for="(prihod, index) in prihodi" :key="index">
        <div class="content mb-2">
          <p class="text">{{ prihod.datum }} - {{ prihod.iznos }} €</p>
          <p class="text" style="width: 25vh; text-align: center">
            {{ prihod.biljeska }}
          </p>
        </div>
        <div class="obrisi">
          <Obrisi />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Obrisi from "@/components/Obrisi.vue";
import { Prihod } from "@/services";
import stanje from "@/stanje";

export default {
  name: "pregledPrihoda",
  components: {
    Obrisi,
  },
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
        this.prihodi = await Prihod.pregledPrihoda();
      } catch (err) {
        console.error("Greška prilikom dohvata prihoda:", err);
      }
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

.obrisi {
  padding-right: 1vh;
  margin-bottom: 1vh;
}
</style>
