<template>
  <div class="container" v-if="prihod">
    <h2>Detalji prihoda</h2>
    <div class="content">
      <p>ID: {{ prihod._id }}</p>
      <p>Kategorija: {{ prihod.kategorija }}</p>
      <p>Iznos: {{ prihod.iznos }}</p>
      <p>Datum: {{ prihod.datum }}</p>
      <p>Bilješka: {{ prihod.biljeska }}</p>
    </div>
  </div>
  <div v-else>
    <p>Prihod nije pronađen.</p>
  </div>
  <div class="buttons">
    <button class="btn" @click="natrag()">Natrag</button>
    <Obrisi @obrisiUpis="obrisiPrihod(prihod._id)" />
  </div>
</template>

<script>
import Obrisi from "@/components/Obrisi.vue";
import { Prihod } from "@/services";

export default {
  name: "detaljiPrihoda",
  props: ["id"],
  components: {
    Obrisi,
  },
  data() {
    return {
      prihod: {},
    };
  },
  mounted() {
    this.dohvati();
  },
  methods: {
    async dohvati() {
      this.prihod = await Prihod.dohvatiPrihod(this.id);
      console.log("Prihod: ", this.prihod);
    },
    async obrisiPrihod(id) {
      console.log("Id od prihoda za brisanje: ", id); // dohvaća dobar id
      await Prihod.obrisiPrihod(id);
    },
    natrag() {
      this.$router.replace({ name: "pregledPrihoda" });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-height: 100dvh;
  padding-top: 2vh;
}

.content {
  margin: 5vh 0vh;
  padding: 5vh;
  border-radius: 2vh;
  text-align: start;
  background-color: #188abb;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
}
.btn {
  border-radius: 12px;
  border: none;
  margin-top: 1vh;
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
}
</style>
