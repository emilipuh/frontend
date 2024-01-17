<template>
  <!--Button trigger modal => pokrece se klikom na korisnika-->
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#korisnik"
  >
    Korisnik
  </button> 
  <div
    class="modal fade"
    id="korisnik"
    tabindex="-1"
    aria-labelledby="modalKorisnik"
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
        <div class="modal-body">
           <!--ovdje idu učitani korisnički podaci iz baze--> 
          <p style="color: #0585bc">Korisničko ime:</p>
          <p>user123</p>
          <p style="color: #0585bc">Email:</p>
          <p>user123@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KorisnickiPodaci",
};
</script>

<style scoped lang="scss">
.modal-header {
  border-bottom: none;
}
</style>
