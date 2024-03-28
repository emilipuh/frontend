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
      this.$router.push({ name: "login" });
    },
    registracija() {
      this.$router.push({ name: "signup" });
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
  margin-top: 5vh; 
  transition: margin-top 1s;
  font-size: 40px;
  color: #ffbe53;
}
.centered {
  margin-top: 80%;
}
.buttons {
  margin-top: 65vh;
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
  padding: 4% 14%;
}
.btn-signup {
  padding: 4% 8%;
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
