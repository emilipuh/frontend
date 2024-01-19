<template>
  <router-view />
</template>

<script>
export default {
  name: 'app',
  components: {
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 600px) {
  #app {
    background-image: url("@/assets/pozadina.png");
    background-size: cover;
    background-position: center;
    height: 100vh;
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif; //promijeniti font family
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
}
</style>
