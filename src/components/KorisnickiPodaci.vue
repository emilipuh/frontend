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
        <div class="modal-footer">
          <div class="uredi-korisnika">
            <i class="fa-solid fa-user-pen icon"></i>
            <button class="button" @click="korisnik()">Uredi korisnika</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  name: "KorisnickiPodaci",
  data() {
    return {
      auth: Auth.state,
    };
  },
  methods: {
    korisnik() {
      this.$router.push({ name: "urediKorisnika" });
    },
  },
};
</script>

<style scoped lang="scss">
.modal-dialog {
  max-width: 300px;
  margin: auto;
}
.modal-body {
  padding: 3vh;
  margin: 4vh 4vh 1vh 4vh;
  border-radius: 8px;
  background-color: white;
}
.modal-footer {
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.uredi-korisnika {
  background-color: whitesmoke;
  margin: 1vh 0 2vh 0;
  padding: 0.5vh;
  border-radius: 1vh;
  max-width: 22vh;
}
.button {
  background-color: inherit;
  border: none;
}
.icon {
  padding-left: 0.5vh;
}
</style>
