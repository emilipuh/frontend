<template>
  <div class="container">
    <h1>LOGIN</h1>
    <div class="content">
      <form>
        <div class="email">
          <label for="email">Email:</label>
          <div>
            <input
              placeholder="Email"
              type="email"
              class="form-control"
              id="email"
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
            />
          </div>
        </div>
      </form>
    </div>
    <button type="submit" class="btn">LOGIN</button>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style scoped lang="scss">
.container {
  min-height: 70dvh;
  max-height: 100dvh;
  display: flex;
  justify-content: center;
  color: black;
}

h1 {
  color: black;
  text-align: start;
  margin: 0vh 0vh 2vh 4vh;
}
.content {
  background-color: #066995;
  border-radius: 2vh;
  margin: 0vh 4vh 3vh 4vh;
  min-height: 30dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  margin-bottom: 1vh;
}

.email,
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
  padding: 2vh;
  margin: 0vh 10vh;
  border-radius: 1.5vh;
}
</style>
