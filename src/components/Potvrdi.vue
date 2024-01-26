<template>
  <!-- modal -->
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#potvrdi"
  >
    Potvrdi
  </button>
  <div class="modal" tabindex="-1" id="potvrdi">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="confirm">
            <h6>Želite li spremiti upis?</h6>
          </div>
        </div>
        <div class="buttons">
          <button type="button" class="btns" data-bs-dismiss="modal">Ne</button>
          <router-link to="/" class="btns" @click="potvrdiUpis">Da</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Potvrdi",
  methods: {
    potvrdiUpis() {
      const podaci = {
        kategorija: this.$props.kategorija,
        iznos: this.$props.iznos,
        datum: this.$props.datum,
        biljeska: this.$props.biljeska,
      };
      console.log("Potvrdi.vue komponenta - podaci: ", podaci);
      this.$emit('potvrdiUpis', podaci);
    },
  },
  props: {
    kategorija: String,
    iznos: String,
    datum: String,
    biljeska: String,
  },
  emits: ["potvrdiUpis"],
};
</script>

<style scoped lang="scss">
.modal-dialog {
  max-width: 300px;
  margin: auto;
}

.modal-content {
  background-color: #066995;
  padding: 1vh;
}

.modal-body {
  border-radius: 3vh;
}

h5 {
  font-size: 18px;
}

p {
  font-size: 16px;
  margin: 6px;
}

.btn {
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
}

.confirm {
  border-radius: 2vh;
  padding: 3vh 2vh;
  background-color: white;
}

h6 {
  margin: 0;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}
.btns {
  border-radius: 12px;
  border: none;
  margin-top: 1vh;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
}
</style>
