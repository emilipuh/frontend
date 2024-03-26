<template>
  <div class="container">
    <h2>Detalji štednje</h2>
    <div v-if="stednja">
      <div class="content">
        <p>
          Iznos: <span style="font-weight: bold">{{ stednja.iznos }}</span>
        </p>
        <p>
          Datum: <span style="font-weight: bold">{{ stednja.datum }}</span>
        </p>
        <p>
          Upisano: <span style="font-weight: bold">{{ stednja.upisano }}</span>
        </p>
        <p>
          Bilješka:
          <span style="font-weight: bold">{{ stednja.biljeska }}</span>
        </p>
      </div>
    </div>
    <div v-else>
      <p>Štednja nije pronađena.</p>
    </div>
    <div class="buttons" v-if="stednja">
      <button class="btn" @click="natrag()">Natrag</button>
      <Obrisi @obrisiUpis="obrisiStednju(stednja._id)" />
    </div>
  </div>
</template>

<script>
import Obrisi from "@/components/Obrisi.vue";
import { Stednja } from "@/services";

export default {
  name: "detaljiStednje",
  props: ["id"],
  components: {
    Obrisi,
  },
  data() {
    return {
      stednja: {},
    };
  },
  mounted() {
    this.dohvati();
  },
  methods: {
    async dohvati() {
      this.stednja = await Stednja.dohvatiStednju(this.id);
    },
    async obrisiStednju(id) {
      await Stednja.obrisiStednju(id);
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
