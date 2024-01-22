<template>
  <div class="container">
    <h5>Prihodi</h5>
    <h6 style="text-align: start; margin: 4vh 2vh">Pregled upisa</h6>
    <div class="upisi">
      <!-- morati će biti neki v-for koji vuce iz baze -->
      <!-- jedan hard coded za primjer -->
      <div class="upis mb-2">
        <p class="text">15/10/2023 - 1000 €</p>
        <p class="text">Plaća za rujan</p>
      </div>
      <div class="upis mb-2">
        <p class="text">16/10/2023 - 100 €</p>
        <p class="text">Pasivni prihod</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pregledPrihoda",
};
</script>

<style scoped lang="scss">
.container {
  max-height: 100%;
  padding: 6vh 2vh 0vh 2vh;
}
.upis {
  border-radius: 2vh;
  background-color: #188abb;
  text-align: start;
  padding: 1vh;
}

.text {
  font-weight: bold;
  margin: 1vh;
}
</style>
