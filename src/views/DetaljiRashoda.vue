<template>
  <div class="container">
    <h2>Detalji rashoda</h2>
    <div v-if="rashod">
      <div class="content">
        <p>
          Kategorija:
          <span style="font-weight: bold">{{ rashod.kategorija }}</span>
        </p>
        <p>
          Iznos: <span style="font-weight: bold">{{ rashod.iznos }}</span>
        </p>
        <p>
          Datum: <span style="font-weight: bold">{{ rashod.datum }}</span>
        </p>
        <p>
          Upisano: <span style="font-weight: bold">{{ rashod.upisano }}</span>
        </p>
        <p>
          Bilješka: <span style="font-weight: bold">{{ rashod.biljeska }}</span>
        </p>
      </div>
    </div>
    <div v-else>
      <p>Rashod nije pronađen.</p>
    </div>
    <div class="buttons">
      <button class="btn" @click="natrag()">Natrag</button>
      <Obrisi @obrisiUpis="obrisiRashod(rashod._id)" />
    </div>
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
    async obrisiRashod(id) {
      await Rashod.obrisiRashod(id);
    },
    natrag() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  color: black;
  min-height: 80dvh;
  max-height: 100dvh;
  display: flex;
  justify-content: space-evenly;
}

.content {
  margin: 4vh 2vh;
  padding: 4vh 4vh;
  border-radius: 2vh;
  text-align: start;
  background-color: #188abb;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
}
.btn {
  border-radius: 1.5vh;
  border: none;
  margin-top: 1vh;
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
}
</style>
