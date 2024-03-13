<template>
  <div class="container">
    <h1>LOGIN</h1>
    <div class="content">
      <form>
        <div class="username">
          <label for="username">Korisničko ime:</label>
          <div>
            <input
              placeholder="Korisničko ime"
              type="username"
              class="form-control"
              id="username"
              v-model="username"
            />
          </div>
        </div>
        <div class="password">
          <label for="password">Lozinka:</label>
          <div>
            <input
              placeholder="Lozinka"
              type="password"
              class="form-control"
              id="password"
              v-model="password"
            />
          </div>
        </div>
      </form>
      <p v-if="error" class="error-message">
        <i class="fa-solid fa-triangle-exclamation"></i>
        {{ error }}
      </p>
    </div>
    <button type="button" @click="login()" class="btn">LOGIN</button>
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async login() {
      if (!this.username || !this.password) {
        this.error = "Korisničko ime i lozinka su obavezni";
        return;
      }
      let success = await Auth.login(this.username, this.password);
      console.log("Rezultat prijave: ", success);
      if (success == true) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  min-height: 100dvh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: black;
  margin-bottom: 3vh;
  align-self: start;
  margin-left: 10vh;
}
.content {
  background-color: #066995;
  border-radius: 2vh;
  margin: 0vh 4vh 3vh 4vh;
  padding: 0vh 2vh;
  min-height: 30dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  margin-bottom: 0.5vh;
}

.username,
.password {
  text-align: start;
  font-size: 18px;
  margin: 2vh;
}

.form-control {
  border-radius: 1vh;
  padding: 1.5vh;
}

.btn {
  background-color: yellow;
  color: black;
  font-size: 18px;
  padding: 2vh 8vh;
  border-radius: 1.5vh;
}
</style>
