<template>
    <div class="container">
      <h5>Rashodi</h5>
      <h6 style="text-align: start; margin: 4vh 2vh">Pregled upisa</h6>
      <div class="upisi">
        <!-- morati će biti neki v-for koji vuce iz baze -->
        <!-- jedan hard coded za primjer -->
        <div class="upis mb-2">
          <p class="text">15/10/2023 - 150 €</p>
          <p class="text">Mjesečna rata za kredit</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "pregledRashoda",
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
    padding: 1vh;
  }
  
  .text {
    font-weight: bold;
    margin: 1vh;
  }
  </style>
  