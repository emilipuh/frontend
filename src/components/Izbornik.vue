<template>
  <button
    class="btn"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    Izbornik
  </button>

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="offcanvasRightLabel">Expense Track</h2>
    </div>
    <div class="offcanvas-body d-flex flex-column">
      <!-- ubačen collapse -->
      <p class="d-inline-flex gap-1">
        <button
          class="offcanvas-item dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePrihodi"
          aria-expanded="false"
          aria-controls="collapsePrihodi"
        >
          Prihodi
        </button>
      </p>
      <div class="collapse" id="collapsePrihodi">
        <div class="card">
          <!-- ovdje ubacujem router link za preglede -->
          <router-link to="/pregledprihoda" class="dropdown-item"
            >Pregled prihoda</router-link
          >
        </div>
      </div>
      <p class="d-inline-flex gap-1">
        <button
          class="offcanvas-item dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseRashodi"
          aria-expanded="false"
          aria-controls="collapseRashodi"
        >
          Rashodi
        </button>
      </p>
      <div class="collapse" id="collapseRashodi">
        <div class="card">
          <!-- ovdje ubacujem router link za preglede -->
          <router-link to="/pregledrashoda" class="dropdown-item"
            >Pregled rashoda</router-link
          >
        </div>
      </div>
      <div class="d-inline-flex mt-auto">
        <router-link to="/stednja" class="offcanvas-item">Štednja</router-link>
      </div>
      <div class="d-inline-flex mt-auto">
        <router-link to="/odjava" class="offcanvas-item">Odjava</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Izbornik",
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 600px) {
  .offcanvas {
    max-width: 260px;
  }

  .offcanvas-title {
    padding: 15px 25px;
    color: #0585bc;
    font-weight: bold;
  }

  .offcanvas-body {
    padding: 20px 30px;
  }
  .offcanvas-item {
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #2c3e50;
    background-color: white;
    border: none;
    padding: 10px;
  }
  .card {
    border: none;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
  }
}
</style>
