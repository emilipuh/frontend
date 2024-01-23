<template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#ponisti"
  >
    Poništi
  </button>
  <div class="modal" id="ponisti">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="cancel">
            <!-- message confirmation -->
            <h6>Želite li poništiti upis?</h6>
          </div>
          <div class="buttons">
            <!-- neki router link -->
            <button class="btns">Ne</button>
            <button class="btns">
              <router-link to="/" class="modal-item">Da</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ponisti",
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

.btn {
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
}

.cancel {
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
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
}
</style>
