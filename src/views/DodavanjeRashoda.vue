<template>
    <div class="container">
      <div class="dodajRashod">
        <h5 class="title">Novi rashod</h5>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Kategorija</label>
            <div class="d-flex mb-2 kategorija">
              <input
                type="checkbox"
                class="btn-check"
                id="btn-check"
                autocomplete="off"
              />
              <label class="btn" for="btn-check">Računi</label>
              <input
                type="checkbox"
                class="btn-check"
                id="btn-check"
                autocomplete="off"
              />
              <label class="btn" for="btn-check">Vozilo</label>
              <input
                type="checkbox"
                class="btn-check"
                id="btn-check"
                autocomplete="off"
              />
              <select class="form-select" aria-label="Default select example">
                <option selected>Ostalo</option>
                <option value="1">Računi</option>
                <option value="2">Putovanja</option>
                <option value="3">Zdravlje</option>
                <option value="4">Kućni ljubimci</option>
                <option value="5">Osobno</option>
                <option value="6">Edukacija</option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <label for="iznos" class="form-label">Iznos</label>
            <input type="" placeholder="Iznos" class="form-control" id="iznos" />
          </div>
          <div class="col-12">
            <label for="datum" class="form-label">Datum</label>
            <input
              type="date"
              class="form-control"
              placeholder="Datum"
              id="datum"
            />
          </div>
          <div class="col-12">
            <label for="biljeska" class="form-label">Bilješka</label>
            <input
              type=""
              placeholder="Bilješka"
              class="form-control"
              id="biljeska"
            />
          </div>
        </div>
      </div>
      <div class="buttons">
        <router-link to="/" class="button">Poništi</router-link>
        <button class="button">Potvrdi</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "dodavanjeRashoda",
  };
  </script>
  
  <style scoped lang="scss">
  .container {
    padding: 0px;
    border: 2px solid transparent;
    height: 100%;
  }
  
  .dodajRashod {
    border-radius: 18px;
    background-color: #066995;
    height: 75%;
    margin: 3vh 3vh;
  }
  
  .title {
    font-size: 22px;
    padding: 3vh;
  }
  
  .kategorija {
      align-items: end;
  }
  
  .form-select {
    background-color: inherit;
    border: none;
    padding-bottom: 8px;
    margin: 0px;
  }
  
  .row {
    margin: 0vh 2vh;
  }
  
  .btn {
    color: black;
    // gornji padding viši radi ikonica
    //   border: none;
  }
  // ubaciti da mi button bude žut kad kliknem
  
  .buttons {
    display: flex;
    justify-content: space-evenly;
  }
  
  .button {
    border-radius: 12px;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: black;
    background-color: whitesmoke;
    padding: 1.5vh 5vh;
  }
  
  .form-control {
    margin-top: 1vh !important;
    margin-bottom: 5vh !important;
    padding: 1.5vh;
    text-align: center;
    font-size: 16px;
  }
  
  #iznos {
    color: red;
  }
  
  .form-label {
    display: flex;
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
  
  ::placeholder {
    color: lightgrey;
  }
  </style>
  