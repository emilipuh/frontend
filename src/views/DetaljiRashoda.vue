<template>
  <div class="container" v-if="prihod">
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
    <button class="btn">Uredi</button>
    <Obrisi @obrisiUpis="obrisiRashod(rashod._id)" />
  </div>
</template>

<script>
import Obrisi from "@/components/Obrisi.vue";
import { Rashod } from "@/services";

export default {
  name: "detaljiRashoda",
  components: {
    Obrisi,
  },
  data() {
    return {
      rashod: {},
    };
  },
  mounted() {
    console.log();
  },
  methods: {
    obrisiRashod() {
      console.log("upit za brisanje...");
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
