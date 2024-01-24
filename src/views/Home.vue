<template>
  <div class="container">
    <div id="stanje">
      <h5>STANJE RAČUNA:</h5>
      <h6 id="iznos">{{ stanje.stanjeRacuna }} €</h6>
      <!-- tu ce mi se ispisivati stanje -->
    </div>
    <div class="container-view">
      <div id="prihodi">
        <h6>PRIHODI: {{ stanje.prihodi }} €</h6>
      </div>
      <div id="rashodi">
        <h6>RASHODI: {{ stanje.rashodi }} €</h6>
      </div>
      <div id="stednja">
        <h6>ŠTEDNJA: {{ stanje.stednja }} €</h6>
      </div>
    </div>
  </div>

  <Navbar />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import stanje from "@/stanje.js";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data: function () {
    return {
      stanje,
    };
  },
  methods: {
    stanjeRacuna() {
      this.stanje.stanjeRacuna = this.stanje.prihodi + this.stanje.rashodi + this.stanje.stednja;
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#stanje {
  background-color: #066995;
  border-radius: 15px;
  margin: 5vh 3vh;
}

.container-view {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2vh;
}

#stednja {
  margin-top: 10%;
}
</style>
