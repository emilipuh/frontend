<template>
  <div class="container">
    <h3>Uredi korisničke podatke</h3>
    <div class="content">
      <form>
        <div class="username">
          <label for="username">Korisničko ime:</label>
          <div>
            <input
              type="username"
              class="form-control"
              id="username"
              v-model="kopijaAuth.username"
              @blur="checkUsernameLength"
            />
          </div>
          <p v-if="errors.errorUsername" class="error-message">
            <i class="fa-solid fa-triangle-exclamation"></i>
            {{ errors.errorUsername }}
          </p>
        </div>
        <div class="email">
          <label for="email">Email:</label>
          <div>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="kopijaAuth.email"
              @blur="checkEmail"
            />
          </div>
          <p v-if="errors.errorEmail" class="error-message">
            <i class="fa-solid fa-triangle-exclamation"></i>
            {{ errors.errorEmail }}
          </p>
        </div>
        <button
          v-if="!promijeniLozinku"
          class="btn"
          @click="
            {
              promijeniLozinku = true;
            }
          "
        >
          Promijeni lozinku
        </button>
        <div v-if="promijeniLozinku" class="oldPass">
          <label for="oldPass">Stara lozinka:</label>
          <div>
            <input
              placeholder="Lozinka"
              type="password"
              class="form-control"
              id="oldPass"
              v-model="stara_lozinka"
              @blur="checkOldPassword"
            />
          </div>
          <p v-if="errors.errorOldPassword" class="error-message">
            <i class="fa-solid fa-triangle-exclamation"></i>
            {{ errors.errorOldPassword }}
          </p>
        </div>
        <div v-if="promijeniLozinku" class="password">
          <label for="password">Nova lozinka:</label>
          <div>
            <input
              placeholder="Lozinka"
              type="password"
              class="form-control"
              id="password"
              v-model="nova_lozinka"
              @blur="checkPassword"
            />
          </div>
          <p v-if="errors.errorPassword" class="error-message">
            <i class="fa-solid fa-triangle-exclamation"></i>
            {{ errors.errorPassword }}
          </p>
        </div>
      </form>
      <p v-if="errors.error" class="error-message">
        <i class="fa-solid fa-triangle-exclamation"></i>
        {{ errors.error }}
      </p>
    </div>
    <div class="buttons">
      <Ponisti />
      <Potvrdi @potvrdiUpis="azurirajPodatke" :postojiGreska="postojiGreska" />
    </div>
  </div>
</template>
<script>
import { Auth, Promjene } from "@/services";
import Potvrdi from "@/components/Potvrdi.vue";
import Ponisti from "@/components/Ponisti.vue";

export default {
  name: "urediKorisnika",
  components: {
    Potvrdi,
    Ponisti,
  },
  computed: {
    postojiGreska() {
      return !!(
        this.errors.error ||
        this.errors.errorUsername ||
        this.errors.errorEmail ||
        this.errors.errorPassword ||
        this.errors.errorOldPassword ||
        !this.isDataChanged
      );
    },
    isDataChanged() {
      return (
        JSON.stringify(this.kopijaAuth) !== JSON.stringify(Auth.state) ||
        this.stara_lozinka !== "" ||
        this.nova_lozinka !== ""
      );
    },
  },
  data() {
    return {
      kopijaAuth: { ...Auth.state },
      stara_lozinka: "",
      nova_lozinka: "",
      errors: {
        error: "",
        errorUsername: "",
        errorEmail: "",
        errorOldPassword: "",
        errorPassword: "",
      },
      promijeniLozinku: false,
    };
  },
  methods: {
    checkPassword() {
      if (this.stara_lozinka === this.nova_lozinka) {
        this.errors.errorPassword =
          "Nova lozinka mora biti različita od stare lozinke.";
        return;
      } else if (this.nova_lozinka.length < 6) {
        this.errors.errorPassword = "Lozinka mora sadržavati barem 6 znakova";
      } else {
        this.errors.errorPassword = "";
      }
    },
    checkOldPassword() {
      if (this.stara_lozinka.length < 6) {
        // zato jer inicijativno lozinka mora sadržavati barem 6 znakova
        this.errors.errorOldPassword = "Unesite staru lozinku";
      } else {
        this.errors.errorOldPassword = "";
      }
    },
    checkUsernameLength() {
      if (this.kopijaAuth.username.length < 4) {
        this.errors.errorUsername = "Korisničko ime mora imati barem 4 znaka";
        return;
      } else {
        this.errors.errorUsername = "";
      }
    },
    checkEmail() {
      const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

      if (!regx.test(this.kopijaAuth.email)) {
        this.errors.errorEmail = "Neispravan format email adrese";
        return false;
      } else {
        this.errors.errorEmail = "";
        return true;
      }
    },
    async azurirajPodatke() {
      try {
        let azuriraniPodaci = {};
        let userId = Auth.getUserId();
        azuriraniPodaci.userId = userId;
        if (this.kopijaAuth.username != Auth.state.username) {
          azuriraniPodaci.username = this.kopijaAuth.username;
        }
        if (this.kopijaAuth.email != Auth.state.email) {
          azuriraniPodaci.email = this.kopijaAuth.email;
        }
        if (this.promijeniLozinku) {
          azuriraniPodaci.stara_lozinka = this.stara_lozinka;
          azuriraniPodaci.nova_lozinka = this.nova_lozinka;
        }
        let response = await Promjene.promijenaPodataka(azuriraniPodaci);
        console.log("Response: ", response.data.message);
        // mijenjanje username ili emaila
        if (response.status === 200) {
          let user = Auth.getUser();
          if (user) {
            if (azuriraniPodaci.username) {
              user.username = azuriraniPodaci.username;
            }
            if (azuriraniPodaci.email) {
              user.email = azuriraniPodaci.email;
            }
            localStorage.setItem("user", JSON.stringify(user));
            //this.$router.go(); // jer mi se inače ne prikazuju odmah korisnički podaci
          }
        } else {
          console.error("Greška prilikom ažuriranja podataka.");
        }
      } catch (error) {
        console.error("Greška prilikom ažuriranja podataka:", error); // tu mi se ispisuje error
        const error1 = error.response.data.error.split(":");
        const error3 = error1[1].trim();

        alert(error3);
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
  padding: 4vh 0vh 6vh 0vh;
  width: 90%;
  margin: 3vh 0vh 6vh 0vh;
}
h3 {
  color: black;
  align-self: start;
  margin-left: 10%;
}
label {
  margin-bottom: 0.5vh;
}
.username,
.email,
.oldPass,
.password,
.repeatPass {
  text-align: start;
  font-size: 18px;
  margin: 1vh 3vh 0vh 3vh;
}
.oldPass {
  margin: 6vh 3vh 0vh 3vh;
}
form {
  width: 100%;
}
.form-control {
  border-radius: 1vh;
  padding: 1.7vh;
}
.btn {
  background-color: whitesmoke;
  color: black;
  display: flex;
  justify-content: flex-start;
  margin-left: 3vh;
  margin-top: 4vh;
  font-size: 16px;
}
.buttons {
  min-width: 80%;
  display: flex;
  justify-content: space-evenly;
}
.error-message {
  margin: 1vh 0.5vh;
  font-size: 14px;
  color: rgb(223, 223, 0);
}
</style>
