<template>
  <div class="container">
    <div class="dodajRashod">
      <div class="content">
        <h5 class="title">Novi rashod</h5>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Kategorija</label>
            <div class="kategorija">
              <button type="button" class="btn" data-bs-toggle="button">
                Kupovina
              </button>
              <button type="button" class="btn" data-bs-toggle="button">
                Računi
              </button>
              <button type="button" class="btn" data-bs-toggle="button">
                Zdravlje
              </button>
              <button type="button" class="btn" data-bs-toggle="button">
                Edukacija
              </button>
              <button type="button" class="btn" data-bs-toggle="button">
                Vozilo
              </button>
              <button type="button" class="btn" data-bs-toggle="button">
                Kućni ljubimci
              </button>
              <button type="button" class="btn" data-bs-toggle="button">
                Ostalo
              </button>
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
  name: "dodavanjeRashoda",
};
</script>

<style scoped lang="scss">
.container {
  min-height: 90%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.dodajRashod {
  border-radius: 18px;
  background-color: #066995;
  margin-left: 2vh;
  margin-right: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  margin: 4vh 2vh 2vh 2vh;
}

.kategorija {
  text-align: start;
}
.title {
  font-size: 22px;
  margin-bottom: 3vh;
  padding: 0;
}

.btn {
  color: black;
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
