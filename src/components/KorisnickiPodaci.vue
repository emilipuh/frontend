<template>
  <!-- Button trigger modal => pokrece se klikom na korisnika-->
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#korisnik"
  >
    Korisnik
  </button>
  <div class="modal fade" id="korisnik">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <!-- ovdje idu učitani korisnički podaci iz baze -->
          <h5 style="color: #0585bc; font-weight: bold;">Korisničko ime:</h5>
          <p>user123</p>
          <h5 style="color: #0585bc; font-weight: bold;">Email:</h5>
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
//@media screen and (max-width: 600px) {
  .modal-dialog {
    max-width: 300px;
    margin: auto;
  }

  .modal-content {
    background-color: #066995;
  }

  .modal-body {
    padding: 20px;
    margin: 30px;
    border-radius: 8px;
    background-color: white;
  }

  h5 {
    font-size: 18px;
  }

  p {
    font-size: 16px;
    margin: 6px;
  }
//}
</style>
