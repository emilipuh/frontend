<template>
  <div class="container">
    <div class="content">
      <h5>Štednja</h5>
      <h6 style="text-align: start; margin: 4vh 2vh">Pregled upisa</h6>
      <div class="upisi">
        <!-- morati će biti neki v-for koji vuce iz baze -->
        <!-- jedan hard coded za primjer -->
        <div class="upis">
          <p>Nema upisa u štednju</p>
        </div>
      </div>
    </div>
    <router-link to="/dodajStednju" class="btn">Dodaj</router-link>
  </div>
</template>

<script>
export default {
  name: "stednja",
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100dvh;
  padding-top: 2vh;
}

.upis {
  margin: 10vh 0vh;
  font-size: 16px;
}

.text {
  font-weight: bold;
  margin: 1vh;
}

.btn {
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
  margin: 0vh 12vh 15vh 12vh;
}
</style>
