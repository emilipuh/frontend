<template>
  <div class="container">
    <div class="content">
      <button @click="prijava()" class="btn">PRIJAVA</button>
      <button @click="registracija()" class="btn">REGISTRACIJA</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pocetna",
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
// centriranje u sredinu prikaza
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-height: 100vh;
}

.content {
  border-radius: 2vh;
  background-color: #066995;
  display: flex;
  flex-direction: column;
  padding: 5vh 5vh 3vh 5vh;
}
.btn {
  background-color: yellow;
  padding: 1vh 3vh;
  font-size: 18px;
  margin-bottom: 2vh;
}
</style>
