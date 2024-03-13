<template>
  <div class="container">
    <h1>REGISTRACIJA</h1>
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
        <div class="email">
          <label for="email">Email:</label>
          <div>
            <input
              placeholder="Email"
              type="email"
              class="form-control"
              id="email"
              v-model="email"
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
        <div class="repeatPass">
          <label for="repeatPass">Ponovite lozinku:</label>
          <div>
            <input
              placeholder="Lozinka"
              type="password"
              class="form-control"
              id="repeatPass"
              v-model="repeatPass"
            />
          </div>
        </div>
      </form>
      <p v-if="error" class="error-message">
        <i class="fa-solid fa-triangle-exclamation"></i>
        {{ error }}
      </p>
    </div>
    <button type="submit" class="btn" @click="signup()">REGISTRACIJA</button>
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  name: "signup",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      repeatPass: "",
      error: "",
    };
  },
  methods: {
    async signup() {
      if (!this.username || !this.email || !this.password || !this.repeatPass) {
        this.error = "Sva polja moraju biti ispunjena";
        return;
      }

      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        repeatPass: this.repeatPass,
      };
      // ako se lozinke ne podudaraju onda nema registracije
      if (user.password !== user.repeatPass) {
        this.error = "Lozinke se ne podudaraju";
        return;
      } else {
        this.error = "";
        let registerSuccess = await Auth.registration(user);
        console.log("Uspješna registracija ", registerSuccess);
        if (registerSuccess === true) {
          console.log("Registracija je uspješna i token je dobiven");
          await Auth.login(user.username, user.password);
          this.$router.push({ name: "home" });
        }
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

h1 {
  color: black;
  margin-bottom: 3vh;
  align-self: start;
  margin-left: 10vh;
}
label {
  margin-bottom: 0.5vh;
}

.username,
.email,
.password,
.repeatPass {
  text-align: start;
  font-size: 18px;
  margin: 2vh;
}

.repeatPass {
  margin-bottom: 3vh;
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
.error-message {
  margin-bottom: 2vh;
}
</style>
