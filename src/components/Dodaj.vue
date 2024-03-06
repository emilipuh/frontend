<template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#dodaj"
  >
    <div class="navbar-icon">
      <i class="fa-regular fa-square-plus fa-xl"></i>
    </div>
    Dodaj
  </button>
  <div
    class="modal fade"
    id="dodaj"
    tabindex="-1"
    aria-labelledby="modalDodaj"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body d-flex flex-column">
          <button class="btnPrihod bg-light" @click="noviPrihod()">
            + Prihod
          </button>
          <button class="btnRashod bg-light" @click="noviRashod()">
            - Rashod
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount } from "vue";

export default {
  name: "Dodaj",
  mounted() {
    this.closeModalOnRouteChange();
  },
  methods: {
    noviPrihod() {
      this.$router.push({ name: "dodajPrihod" });
    },
    noviRashod() {
      this.$router.push({ name: "dodajRashod" });
    },
    closeModalOnRouteChange() {
      const closeModal = () => {
        const modal = document.getElementById("dodaj");
        if (modal) {
          const modalInstance = new bootstrap.Modal(modal);
          modalInstance.hide();
          const backdrop = document.getElementsByClassName("modal-backdrop")[0];
          if (backdrop) {
            backdrop.remove();
          }
        }
      };

      this.$router.beforeEach((to, from, next) => {
        closeModal();
        next(); 
      });

      onBeforeUnmount(() => {
        this.$router.beforeEach((to, from, next) => {
          next();
        });
      });
    },
  },
};
</script>

<style scoped lang="scss">
.modal-dialog {
  max-width: 240px;
  margin: auto;
}

.btnPrihod,
.btnRashod {
  font-size: 18px;
  padding: 12px 0px;
  border-radius: 10px;
  border: none;
}

.btnPrihod {
  margin-bottom: 15px;
}
</style>
