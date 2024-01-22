<template>
  <div class="container">
    <div class="dodajPrihod">
      <div class="content">
        <h5 class="title">Novi prihod</h5>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Kategorija</label>
            <div class="d-flex mb-2">
              <p class="d-inline-flex gap-1">
                <button type="button" class="btn" data-bs-toggle="button">
                  <i class="fa-solid fa-briefcase"></i>
                  Plaća
                </button>
                <button type="button" class="btn" data-bs-toggle="button">
                  <i class="fa-solid fa-hand-holding-dollar"></i>
                  Ostalo
                </button>
              </p>
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
  data: function () {
    return {
      placa: "",
      ostalo: "",
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100dvh;
  padding: 0px;
  display: flex;
  justify-content: space-evenly;
}

.dodajPrihod {
  border-radius: 18px;
  background-color: #066995;
  margin-left: 2vh;
  margin-right: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  margin: 4vh;
}
.title {
  font-size: 22px;
  margin-bottom: 3vh;
  padding: 0;
}

.btn {
  color: black;
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
  margin-bottom: 4vh !important;
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
