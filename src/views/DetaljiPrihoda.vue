<template>
  <div class="container">
    <h2>Detalji prihoda</h2>
    <div v-if="prihod">
      <div class="content">
        <p>
          Kategorija:
          <span style="font-weight: bold">{{ prihod.kategorija }}</span>
        </p>
        <p>
          Iznos: <span style="font-weight: bold">{{ prihod.iznos }}</span>
        </p>
        <p>
          Datum: <span style="font-weight: bold">{{ prihod.datum }}</span>
        </p>
        <p>
          Upisano: <span style="font-weight: bold">{{ prihod.upisano }}</span>
        </p>
        <p>
          Bilješka: <span style="font-weight: bold">{{ prihod.biljeska }}</span>
        </p>
      </div>
    </div>
    <div v-else>
      <p>Prihod nije pronađen.</p>
    </div>
    <div class="buttons">
      <button class="btn" @click="natrag()">Natrag</button>
      <Obrisi @obrisiUpis="obrisiPrihod(prihod._id)" />
    </div>
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
