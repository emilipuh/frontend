<template>
  <div class="container">
    <div class="dodajRashod">
      <div class="content">
        <h5 class="title">Novi rashod</h5>
        <div class="row">
          <div class="col-12">
            <label class="form-label">Kategorija</label>
            <!-- radio buttoni -->
            <div class="kategorije">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                />
                <label class="btn" for="btnradio1">
                  <i class="fa-solid fa-cart-shopping"></i>Kupovina</label
                >
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                />
                <label class="btn" for="btnradio2">
                  <i class="fa-solid fa-receipt"></i> Računi</label
                >
                <select class="form-select" aria-label="Default select example">
                  <option selected>
                    <label class="btn" for="btnradio3">Više</label>
                  </option>
                  <option value="1">
                    <button type="button" class="btn" data-bs-toggle="button">
                      <i class="fa-solid fa-heart-pulse"></i>
                      Zdravlje
                    </button>
                  </option>
                  <option value="2">
                    <button type="button" class="btn" data-bs-toggle="button">
                      <i class="fa-solid fa-book"></i>
                      Edukacija
                    </button>
                  </option>
                  <option value="3">
                    <button type="button" class="btn" data-bs-toggle="button">
                      <i class="fa-solid fa-car"></i>
                      Vozilo
                    </button>
                  </option>
                  <option value="4">
                    <button type="button" class="btn" data-bs-toggle="button">
                      <i class="fa-solid fa-dog"></i>
                      Kućni ljubimci
                    </button>
                  </option>
                  <option value="5">
                    <button type="button" class="btn" data-bs-toggle="button">
                      Ostalo
                    </button>
                  </option>
                </select>
              </div>
            </div>
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
      <Poništi />
      <Potvrdi />
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
import Potvrdi from "@/components/Potvrdi.vue";
import Poništi from "@/components/Poništi.vue";

export default {
  name: "dodavanjeRashoda",
  components: {
    Potvrdi,
    Poništi,
  },
  data: function () {},
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100dvh;
  padding: 0px;
  display: flex;
  justify-content: space-evenly;
}

.dodajRashod {
  border-radius: 18px;
  background-color: #066995;
  margin-left: 2vh;
  margin-right: 2vh;
}

.kategorije {
  margin: 0;
  padding: 0;
  display: flex;
}

.content {
  margin: 4vh;
}

.title {
  font-size: 22px;
  margin-bottom: 3vh;
  padding: 0;
}

.form-select {
  max-width: auto;
  background-color: #066995;
  border: none;
}
.btn {
  color: black;
}

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

.form-label {
  display: flex;
  color: black;
  font-size: 18px;
  font-weight: bold;
}

::placeholder {
  color: lightgrey;
}

#iznos {
  color: red;
}
</style>
