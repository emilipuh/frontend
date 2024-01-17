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
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex flex-column align-items-center">
            <button class="dodaj mb-2">Prihod +</button>
            <button class="dodaj mb-2">Rashod -</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<!-- Button trigger modal -->

<script>
export default {
  name: "Dodaj",
};
</script>

<style scoped lang="scss">
.modal-header {
    border-bottom: none;
}

.modal-body {
    padding: 0;
}

.dodaj {
    border: none;
    background-color: white;
}
</style>
