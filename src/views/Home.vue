<template>
  <div class="container">
    <div id="stanje">
      <h5>STANJE RAČUNA:</h5>
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

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
.modal-backdrop {
  z-index: -1;
}

.container {
  padding: 50px;
}

#stanje {
  background-color: #066995;
  border-radius: 10px;
  padding: 35px 0px;
}

h5 {
  color: #ffbe53;
  font-weight: bold;
  font-size: 28px;
}

h6 {
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 30px;
}

.container-view {
  margin-top: 30px;
  padding-left: 30px;
  text-align: start;
}

#stednja {
  margin-top: 100px;
}
</style>
