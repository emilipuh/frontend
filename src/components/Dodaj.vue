<template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#dodaj"
  >
    <i class="fa-regular fa-square-plus"></i>
    Dodaj
  </button>
  <div
    class="modal fade"
    id="dodaj"
    tabindex="-1"
    aria-labelledby="modalDodaj"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body d-flex flex-column">
          <button class="btnPrihod bg-light">
            <router-link to="/dodajPrihod" class="modal-item"
              >+ Prihod</router-link
            >
          </button>
          <button class="btnRashod bg-light">
            <router-link to="/dodajRashod" class="modal-item"
              >- Rashod</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dodaj",
};
</script>

<style scoped lang="scss">
//@media screen and (max-width: 600px) {
.modal-dialog {
  max-width: 240px;
  margin: auto;
}

.modal-content {
  background-color: #006995;
}
.modal-body {
  padding: 0;
  margin: 20px;
}

.modal-item {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}

.btnPrihod,
.btnRashod {
  padding: 12px 0px;
  border-radius: 10px;
  border: none;
}

.btnPrihod {
  margin-bottom: 15px;
}
//}
</style>
