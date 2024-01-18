<template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#dodaj"
  >
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
        <div class="modal-body d-flex flex-column align-items-center">
          <!-- ovo će biti router linkovi -->
          <button class="dodaj mb-3">+ Prihod</button>
          <button class="dodaj">- Rashod</button>
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
@media screen and (max-width: 600px) {
  .modal-dialog {
    max-width: 240px;
    margin: auto;
  }

  .modal-content {
    background-color: #006995;
  }
  .modal-body {
    padding: 0;
    margin: 25px;
  }

  .dodaj {
    padding: 12px 60px;
    border: none;
    border-radius: 8px;
    background-color: white;
  }
}
</style>
