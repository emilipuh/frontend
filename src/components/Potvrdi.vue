<template>
  <button
    :disabled="isDisabled"
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#potvrdi"
  >
    Potvrdi
  </button>
  <div class="modal" tabindex="-1" id="potvrdi">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="confirm">
            <h6>Spremiti?</h6>
          </div>
        </div>
        <div class="buttons">
          <button type="button" class="btns" data-bs-dismiss="modal">Ne</button>
          <button class="btns" @click="handleClick()">Da</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount } from "vue";
import stanje from "@/stanje";

export default {
  name: "Potvrdi",
  data() {
    return {
      stanje,
    };
  },
  props: {
    postojiGreska: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isDisabled() {
      return this.postojiGreska; 
    },
  },
  mounted() {
    this.closeModalOnRouteChange();
  },
  methods: {
    handleClick() {
      this.$emit("potvrdiUpis");
      this.$router.push({ name: "home" });
    },
    closeModalOnRouteChange() {
      const closeModal = () => {
        const modal = document.getElementById("potvrdi");
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
  emits: ["potvrdiUpis"],
};
</script>

<style scoped lang="scss">
.modal-dialog {
  max-width: 300px;
  margin: auto;
}

.modal-content {
  background-color: #066995;
  padding: 1vh;
}

.modal-body {
  border-radius: 3vh;
}

h5 {
  font-size: 18px;
}

p {
  font-size: 16px;
  margin: 6px;
}

.btn {
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
}

.confirm {
  border-radius: 2vh;
  padding: 3vh 2vh;
  background-color: white;
}

h6 {
  margin: 0;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1vh;
}
.btns {
  border-radius: 12px;
  border: none;
  margin-top: 1vh;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  background-color: whitesmoke;
  padding: 1.5vh 5vh;
}
</style>