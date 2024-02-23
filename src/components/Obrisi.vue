<template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#obrisi"
  >
    Obriši
  </button>
  <div class="modal" tabindex="-1" id="obrisi">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="delete">
            <h6>Želite li obrisati upis?</h6>
          </div>
        </div>
        <div class="buttons">
          <button type="button" class="btns" data-bs-dismiss="modal">Ne</button>
          <button class="btns" @click="handleClick()">Da</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Obrisi",
  methods: {
    handleClick() {
      this.$emit("obrisiUpis");
      this.$router.push({ name: "home" });
    },
  },
  emits: ["obrisiUpis"],
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

.modal-item {
  text-decoration: none;
  color: black;
}

h5 {
  font-size: 18px;
}

p {
  font-size: 16px;
  margin: 6px;
}

.delete {
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
.btn, .btns {
  border-radius: 12px;
  border: none;
  margin-top: 1vh;
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
}

.btns {
  margin-bottom: 1vh;
}
</style>
