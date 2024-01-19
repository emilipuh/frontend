<template>
  <div class="container">
    <div id="stanje">
      <h5>STANJE RAČUNA:</h5>
      <h6 id="iznos"> {{ stanje.stanjeRacuna }} €</h6>
      <!-- tu ce mi se ispisivati stanje -->
    </div>
  </div>
  <div class="container-view">
    <div id="prihodi">
      <h6>
        PRIHODI:
        <!-- možda props za prikaz -->
      </h6>
    </div>
    <div id="rashodi">
      <h6>RASHODI:</h6>
    </div>
    <div id="stednja">
      <h6>ŠTEDNJA:</h6>
    </div>
  </div>
  <Navbar />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import stanje from "@/stanje";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data: function() {
    return {
      stanje
    }
  }
};
</script>

<style lang="scss">
.modal-backdrop {
  z-index: -1;
}

.container {
  padding: 40px;
}

#stanje {
  background-color: #066995;
  border-radius: 10px;
  padding: 30px 0px;
}

#iznos {
  margin: 30px 0px 10px 0px;
}


h5 {
  color: #ffbe53;
  font-weight: bold;
  font-size: 26px;
}

h6 {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
}

.container-view {
  margin-top: 20px;
  padding-left: 30px;
  text-align: start;
}

#stednja {
  margin-top: 120px;
}
</style>
