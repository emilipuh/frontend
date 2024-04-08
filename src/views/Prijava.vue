<template>
  <div class="container">
    <h1>PRIJAVA</h1>
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
    <button type="button" @click="login()" class="btn">PRIJAVA</button>
  </div>
  <div class="icon" @click="natrag()">
    <i class="fa-solid fa-angle-left"></i>
    <span style="margin-left: 1vw; font-size: 18px">Natrag</span>
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  name: "prijava",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async login() {
      try {
        if (!this.username || !this.password) {
          this.error = "Korisničko ime i lozinka su obavezni";
          return;
        }
        let success = await Auth.login(this.username, this.password);
        if (success == true) {
          this.$router.replace({ name: "home" });
        }
      } catch (error) {
        this.error = "Korisnik ne postoji ili je lozinka neispravna!";
        console.error("Greška prilikom prijave: ", error);
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
h1 {
  color: black;
  margin-bottom: 3vh;
  align-self: start;
  margin-left: 12vw;
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
label {
  margin-bottom: 0.5vh;
}
.username,
.password {
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
