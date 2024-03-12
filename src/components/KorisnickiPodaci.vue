<template>
  <!-- Button trigger modal => pokrece se klikom na korisnika-->
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#korisnik"
  >
    <div class="navbar-icon">
      <i class="fa-regular fa-circle-user fa-xl"></i>
    </div>
    Korisnik
  </button>
  <div class="modal fade" id="korisnik">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <!-- ovdje idu učitani korisnički podaci iz baze -->
          <p style="color: #0585bc; font-weight: bold">Korisničko ime:</p>
          <p>{{ auth.username }}</p>
          <p style="color: #0585bc; font-weight: bold">Email:</p>
          <p>{{ auth.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from '@/services';

export default {
  name: "KorisnickiPodaci",
  data() {
    return {
      auth: Auth.state
    }
  }
};
</script>

<style scoped lang="scss">
.modal-dialog {
  max-width: 300px;
  margin: auto;
}

.modal-body {
  padding: 20px;
  margin: 30px;
  border-radius: 8px;
  background-color: white;
}
</style>
