<template>
  <div class="container">
    <h1 class="title" :class="{ centered: !showButtons }">EXPENSE TRACK</h1>
    <Transition name="fade-in">
      <div class="buttons" v-show="showButtons">
        <button @click="prijava()" class="btn-login">PRIJAVA</button>
        <button @click="registracija()" class="btn-signup">REGISTRACIJA</button>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "pocetna",
  data() {
    return {
      showButtons: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showButtons = true;
    }, 2000); 
  },
  methods: {
    prijava() {
      this.$router.replace({ name: "prijava" });
    },
    registracija() {
      this.$router.replace({ name: "registracija" });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100dvh;
}
.title {
  margin-top: 10vh; 
  transition: margin-top 1s;
  font-size: 40px;
  color: #ffbe53;
}
.centered {
  margin-top: 40vh;
}
.buttons {
  margin-top: 60vh;
  margin-bottom: 15vh;
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.btn-login, .btn-signup {
  border-radius: 1vh;
  border: none;
  color: black;
  background-color: rgb(223, 223, 19);
  font-size: 18px;
}
.btn-login {
  padding: 2vh 5vh;
}
.btn-signup {
  padding: 2vh 4vh;
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 2s;
}
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
