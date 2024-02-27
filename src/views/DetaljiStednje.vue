<template>
  <div class="container" v-if="stednja">
    <h2>Detalji štednje</h2>
    <div class="content">
      <p>ID: {{ stednja._id }}</p>
      <p>Iznos: {{ stednja.iznos }}</p>
      <p>Datum: {{ stednja.datum }}</p>
      <p>Bilješka: {{ stednja.biljeska }}</p>
    </div>
  </div>
  <div v-else>
    <p>Štednja nije pronađena.</p>
  </div>
</template>

<script>
import { Stednja } from "@/services";

export default {
  name: "detaljiStednje",
  props: ["id"],
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
  },
};
</script>

<style lang="scss">
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
