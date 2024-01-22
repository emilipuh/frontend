<template>
    <div class="container">
      <h5>Prihodi</h5>
      <h6 style="text-align: start; margin: 4vh 2vh">Pregled upisa</h6>
      <div class="upisi">
        <!-- morati će biti neki v-for koji vuce iz baze -->
        <!-- jedan hard coded za primjer -->
        <div class="upis mb-2">
          <p class="text">15/10/2023 - 1000 €</p>
          <p class="text" style="width: 25vh; text-align: center">
            Plaća za rujan
          </p>
  
          <i class="fa-solid fa-trash-can"></i>
        </div>
        <div class="upis mb-2">
          <p class="text">16/10/2023 - 100 €</p>
          <p class="text" style="width: 25vh; text-align: center">
            Pasivni prihod
          </p>
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </div>
    <!-- <router-link to="/" id="icon">
      <i class="fa-solid fa-caret-left fa-2xl" id="icon"></i
    ></router-link> -->
  </template>
  
  <script>
  export default {
    name: "pregledPrihoda",
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
  
  i {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1vh;
    margin-bottom: 1vh;
  }
  .text {
    font-weight: bold;
    margin: 1vh;
  }
  
  // #icon {
  //   color: black;
  //   text-decoration: none;
  // }
  </style>
  