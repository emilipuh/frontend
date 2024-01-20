<template>
  <div class="container">
    <div class="dodajPrihod">
      <div class="content">
        <h5 class="title">Novi prihod</h5>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Kategorija</label>
            <div class="d-flex mb-2">
              <input
                type="checkbox"
                class="btn-check"
                id="btn-check"
                autocomplete="off"
              />
              <label class="btn" for="btn-check">Plaća</label>
              <input
                type="checkbox"
                class="btn-check"
                id="btn-check"
                autocomplete="off"
              />
              <label class="btn" for="btn-check">Ostalo</label>
            </div>
          </div>
          <div class="col-12">
            <label for="iznos" class="form-label">Iznos</label>
            <input
              type=""
              placeholder="Iznos"
              class="form-control"
              id="iznos"
            />
          </div>
          <div class="col-12">
            <label for="datum" class="form-label">Datum</label>
            <input type="date" class="form-control" placeholder="Datum" id="datum" />
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
    </div>
    <div class="buttons">
      <router-link to="/" class="button">Poništi</router-link>
      <button class="button">Potvrdi</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "dodavanjePrihoda",
};
</script>

<style scoped lang="scss">
.container {
  padding: 0px;
  border: 2px solid transparent;
  height: 100%;
}

.dodajPrihod {
  border-radius: 18px;
  background-color: #066995;
  height: 75%;
  margin: 3vh 3vh;
}

.title {
  font-size: 22px;
  padding: 3vh;
}

.row {
  margin: 0vh 2vh;
}

.btn {
  color: black;
  margin-right: 10px;
  // gornji padding viši radi ikonica
  padding: 50px 16px 8px 16px;
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
  color: lightgreen;
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
