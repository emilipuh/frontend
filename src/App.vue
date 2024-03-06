<template>
  <router-view />
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style lang="scss">
@font-face {
  src: url("./BalooTammudu-Regular.ttf");
  font-family: BalooTammudu;
}

#app {
  background-image: url("@/assets/pozadina.png");
  background-size: cover;
  background-position: center;
  height: 100dvh;
  margin: 0;
  overflow: hidden;
  font-family: BalooTammudu;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 2vh;
  border-top-left-radius: 2vh;
  border-top-right-radius: 2vh;
}

h5 {
  color: #ffbe53;
  font-size: 22px;
  padding-top: 3vh;
  margin: 0;
}

h6 {
  font-size: 20px;
  margin-top: 2vh;
  margin-bottom: 3vh;
}

a {
  color: black;
  text-decoration: none;
  font-size: 18px;
}

p {
  margin: 0;
}

.modal-content {
  background-color: #066995;
}
</style>
