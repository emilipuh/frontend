<template>
  <div class="container">
    <div class="dodajPrihod">
      <h5 class="title">Novi prihod</h5>
      <form>
        <div class="mb-4">
          <label for="kategorija" class="form-label">Kategorija</label>
          <div class="d-flex">
            <!-- dodati ikonice -->
            <button class="btn-kategorija" type="button">Plaća</button>
            <button class="btn-kategorija" type="button">Ostalo</button>
          </div>
        </div>
        <div class="mb-3">
          <label for="iznos" class="form-label">Iznos</label>
          <input type="" placeholder="Iznos" class="form-control" id="iznos" />
        </div>
        <div class="mb-3">
          <label for="datum" class="form-label">Datum</label>
          <input
            type="date"
            class="form-control"
            id="datum"
          />
        </div>
        <div class="mb-3">
          <label for="biljeska" class="form-label">Bilješka</label>
          <input
            type=""
            placeholder="Bilješka"
            class="form-control"
            id="biljeska"
          />
        </div>
      </form>
    </div>
    <div class="buttons">
      <router-link to="/" class="btn">Poništi</router-link>
      <button class="btn">Potvrdi</button>
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

.title {
  padding: 50px 0px;
  font-size: 24px;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}

.btn {
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: whitesmoke;
  padding: 12px 54px;
}

.btn:active {
    background-color: yellow;
}
.btn-kategorija {
  color: black;
  background-color: inherit;
  margin-right: 10px;
  // gornji padding viši radi ikonica
  padding: 50px 16px 8px 16px;
//   border: none;
}

.dodajPrihod {
  border-radius: 18px;
  background-color: #066995;
  height: 80%;
  margin: 60px 25px 25px 25px;
}

form {
  margin: 0px 28px;
}

.form-control {
  margin-top: 5px !important;
  margin-bottom: 50px !important;
  padding: 20px 15px;
  text-align: center;
  font-size: 18px;
}

#iznos {
    color: lightgreen;
}

.form-label {
  margin-bottom: 15px;
  display: flex;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

::placeholder {
  color: lightgrey;
}
</style>
