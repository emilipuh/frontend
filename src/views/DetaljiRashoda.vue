<template>
  <div class="container" v-if="rashod">
    <h2>Detalji rashoda</h2>
    <div class="content">
      <p>ID: {{ rashod._id }}</p>
      <p>Kategorija: {{ rashod.kategorija }}</p>
      <p>Iznos: {{ rashod.iznos }}</p>
      <p>Datum: {{ rashod.datum }}</p>
      <p>Bilješka: {{ rashod.biljeska }}</p>
    </div>
  </div>
  <div v-else>
    <p>Rashod nije pronađen.</p>
  </div>
  <div class="buttons">
    <button class="btn" @click="natrag()">Natrag</button>
    <Obrisi @obrisiUpis="obrisiRashod(rashod._id)" />
  </div>
</template>

<script>
import Obrisi from "@/components/Obrisi.vue";
import { Rashod } from "@/services";

export default {
  name: "detaljiRashoda",
  props: ["id"],
  components: {
    Obrisi,
  },
  data() {
    return {
      rashod: {},
    };
  },
  mounted() {
    this.dohvati();
  },
  methods: {
    async dohvati() {
      this.rashod = await Rashod.dohvatiRashod(this.id);
    },
    async obrisiRashod(rashod) {
      await Rashod.obrisiRashod(rashod);
    },
    natrag() {
      this.$router.replace({ name: "pregledRashoda" });
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
