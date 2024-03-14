<template>
  <div class="container">
    <h1>REGISTRACIJA</h1>
    <div class="content">
      <form>
        <div class="username">
          <label for="username">Korisničko ime:</label>
          <div>
            <input
              placeholder="npr. user123"
              type="username"
              class="form-control"
              id="username"
              v-model="username"
              @blur="checkUsernameLength"
            />
          </div>
          <p v-if="errorUsername" class="error-message">
            <i class="fa-solid fa-triangle-exclamation"></i>
            {{ errorUsername }}
          </p>
        </div>
        <div class="email">
          <label for="email">Email:</label>
          <div>
            <input
              placeholder="npr. me@example.com"
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              @blur="checkEmail"
            />
          </div>
          <p v-if="errorEmail" class="error-message">
            <i class="fa-solid fa-triangle-exclamation"></i>
            {{ errorEmail }}
          </p>
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
              @blur="checkPassword"
            />
          </div>
          <p v-if="errorPassword" class="error-message">
            <i class="fa-solid fa-triangle-exclamation"></i>
            {{ errorPassword }}
          </p>
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
    <button type="button" class="btn" @click="signup()">REGISTRACIJA</button>
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
      errorUsername: "",
      errorEmail: "",
      errorPassword: "",
    };
  },
  methods: {
    validateEmail() {
      const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
      if (regx.test(this.email)) {
        return true;
      } else {
        return false;
      }
    },
    checkUsernameLength() {
      // ako je korisničko ime kraće od šest znakova
      if (this.username.length < 4) {
        this.errorUsername = "Korisničko ime mora imati barem 4 znaka";
        return;
      } else {
        this.errorUsername = "";
      }
    },
    checkEmail() {
      // ako email nije uobičajen
      if (!this.validateEmail()) {
        this.errorEmail = "Neispravan format email adrese";
        return;
      } else {
        this.errorEmail = "";
      }
    },
    checkPassword() {
      if (this.password.length <= 6) {
        this.errorPassword = "Lozinka mora imati barem 6 znakova";
        return;
      } else {
        this.errorPassword = "";
      }
    },
    async signup() {
      // ako polja nisu ispunjena
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
  margin-bottom: 3vh;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  color: black;
  margin-bottom: 3vh;
  align-self: start;
  margin-left: 15%;
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
  margin: 1vh 3vh 0vh 3vh;
}

.repeatPass {
  margin-bottom: 2vh;
}

form {
  width: 100%;
}

.form-control {
  border-radius: 1vh;
  padding: 1.7vh;
}

.btn {
  background-color: yellow;
  color: black;
  font-size: 18px;
  padding: 2vh 8vh;
  border-radius: 1.5vh;
}
.error-message {
  margin: 1vh 0.5vh;
  font-size: 14px;
  color: rgb(223, 223, 0);
}
</style>
