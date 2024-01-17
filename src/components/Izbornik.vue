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
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Expense Track</h5>
    </div>
    <div class="offcanvas-body d-flex flex-column">
      <!-- ubačen collapse -->
      <p class="d-inline-flex gap-1">
        <button
          class="btn dropdown-toggle"
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
          class="btn dropdown-toggle"
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
    name: 'Izbornik'
}
</script>