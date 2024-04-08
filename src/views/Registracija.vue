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
  <div class="icon" @click="natrag()">
    <i class="fa-solid fa-angle-left"></i>
    <span style="margin-left: 1vw; font-size: 18px">Natrag</span>
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  name: "registracija",
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
    checkUsernameLength() {
      if (this.username.length < 4) {
        this.errorUsername = "Korisničko ime mora imati barem 4 znaka";
        return;
      } else {
        this.errorUsername = "";
      }
    },
    checkEmail() {
      const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

      if (!regx.test(this.email)) {
        this.errorEmail = "Neispravan format email adrese";
        return false;
      } else {
        this.errorEmail = "";
        return true;
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
        if (registerSuccess === true) {
          console.log("Registracija je uspješna i token je dobiven");
          await Auth.login(user.username, user.password);
          this.$router.replace({ name: "home" });
        }
      }
    },
    natrag() {
      this.$router.replace({ name: "pocetna" });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  min-height: 95dvh;
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
  margin-left: 12vw;
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
  margin: 2vh 5vw 2.5vh 5vw;
}
form {
  width: 100%;
}
.form-control {
  border-radius: 1vh;
  padding: 2vh;
  margin-bottom: 0.5vh;
}
.btn {
  background-color: yellow;
  color: black;
  font-size: 16px;
  padding: 2vh 14vw;
  border-radius: 1.5vh;
}
.error-message {
  margin-bottom: 1vh;
  font-size: 14px;
  color: rgb(223, 223, 0);
}
.icon {
  color: black;
  text-align: end;
  margin-right: 4vw;
}
</style>
