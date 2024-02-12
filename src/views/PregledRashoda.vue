<template>
  <div class="container">
    <h5>Rashodi</h5>
    <h6 style="text-align: start; margin: 4vh 2vh">Pregled upisa</h6>
    <div class="upisi">
      <!-- morati će biti neki v-for koji vuce iz baze -->
      <!-- jedan hard coded za primjer -->
      <div class="upis">
        <div class="content mb-2"> 
          <p class="text">15/10/2023 - 150 €</p>
          <p class="text" style="width: 25vh; text-align: center">
            Mjesečna rata za kredit
          </p>
        </div>
        <div class="obrisi">
          <Obrisi />
        </div>
      </div>
    </div>
  </div>
  <!-- <router-link to="/" id="icon">
    <i class="fa-solid fa-caret-left fa-2xl" id="icon"></i
  ></router-link> -->
</template>

<script>
import Obrisi from "@/components/Obrisi.vue";

export default {
  name: "pregledRashoda",
  components: {
    Obrisi,
  },
};
</script>

<style scoped lang="scss">
.container {
  max-height: 100dvh;
  padding-top: 2vh;
}
.upis {
  border-radius: 2vh;
  background-color: #188abb;
  text-align: start;
  padding: 0.5vh 1vh 0vh 1vh;
  margin-bottom: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.text {
  font-weight: bold;
  margin: 1vh;
}

.obrisi {
  padding-right: 1vh;
  margin-bottom: 1vh;
}
</style>
