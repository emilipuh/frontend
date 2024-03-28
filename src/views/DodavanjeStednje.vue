<template>
  <div class="container">
    <div class="dodajStednju">
      <div class="content">
        <h5 class="title">Nova štednja</h5>
        <div class="row">
          <div class="col-12" style="padding-bottom: 4vh">
            <label for="iznos" class="form-label">Iznos</label>
            <input
              v-model="stanje.stednja.iznos"
              type=""
              placeholder="Iznos"
              class="form-control"
              id="iznos"
              @blur="validacijaIznosa"
            />
            <p v-if="errors.errorIznos" class="error-message">
              <i class="fa-solid fa-triangle-exclamation"></i>
              {{ errors.errorIznos }}
            </p>
          </div>
          <div class="col-12" style="padding-bottom: 4vh">
            <label for="datum" class="form-label">Datum</label>
            <input
              v-model="stanje.stednja.datum"
              type="date"
              class="form-control"
              placeholder="Datum"
              id="datum"
              @blur="provjeraDatuma"
            />
            <p v-if="errors.errorDatum" class="error-message">
              <i class="fa-solid fa-triangle-exclamation"></i>
              {{ errors.errorDatum }}
            </p>
          </div>
          <div class="col-12" style="padding-bottom: 4vh">
            <label for="biljeska" class="form-label">Bilješka</label>
            <input
              v-model="stanje.stednja.biljeska"
              type=""
              placeholder="Bilješka"
              class="form-control"
              id="biljeska"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <Ponisti @ponistiUpis="ponistiStednju" />
      <Potvrdi @potvrdiUpis="spremiStednju()" :postojiGreska="postojiGreska" />
    </div>
  </div>
</template>

<script>
import Potvrdi from "@/components/Potvrdi.vue";
import Ponisti from "@/components/Ponisti.vue";
import stanje from "@/stanje";
import { Stednja } from "@/services";

export default {
  name: "dodajStednju",
  components: {
    Potvrdi,
    Ponisti,
  },
  data() {
    return {
      stanje,
      errors: {
        errorIznos: "",
        errorDatum: "",
      },
    };
  },
  computed: {
    postojiGreska() {
      return !!(
        this.errors.errorIznos ||
        this.errors.errorDatum ||
        !this.isDataChanged
      );
    },
    isDataChanged() {
      return (
        this.stanje.stednja.iznos !== "" && this.stanje.stednja.datum !== ""
      );
    },
  },
  methods: {
    validacijaIznosa() {
      if (isNaN(this.stanje.stednja.iznos)) {
        this.errors.errorIznos = "Iznos nije valjan";
      } else if (!this.stanje.stednja.iznos) {
        this.errors.errorIznos = "Iznos nije unesen";
      } else {
        this.errors.errorIznos = "";
      }
    },
    provjeraDatuma() {
      if (!this.stanje.stednja.datum) {
        this.errors.errorDatum = "Datum nije odabran";
      } else {
        this.errors.errorDatum = "";
      }
    },
    async spremiStednju() {
      try {
        let novaStednjaPodaci = {
          iznos: this.stanje.stednja.iznos,
          datum: this.stanje.stednja.datum,
          biljeska: this.stanje.stednja.biljeska,
        };
        await Stednja.novaStednja(novaStednjaPodaci);
        this.stanje.stednja.iznos = parseInt(novaStednjaPodaci.iznos);
        this.stanje.stednje += this.stanje.stednja.iznos;

        this.stanje.stednja.iznos = "";
        this.stanje.stednja.datum = "";
        this.stanje.stednja.biljeska = "";
      } catch (error) {
        console.error("Greška prilikom spremanja štednje: ", error);
      }
    },
    ponistiStednju() {
      this.stanje.stednja.iznos = "";
      this.stanje.stednja.datum = "";
      this.stanje.stednja.biljeska = "";
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100dvh;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
}
.dodajStednju {
  border-radius: 18px;
  background-color: #066995;
  margin-left: 2vh;
  margin-right: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  margin: 4vh;
}
.title {
  font-size: 22px;
  margin-bottom: 3vh;
  padding: 0;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
}
.form-control {
  margin-top: 1vh !important;
  padding: 1.5vh;
  text-align: center;
  font-size: 16px;
}
.form-label {
  display: flex;
  color: black;
  font-size: 16px;
  font-weight: bold;
}
::placeholder {
  color: lightgrey;
}
.error-message {
  margin: 1vh 0.5vh;
  font-size: 14px;
  color: rgb(223, 223, 0);
}
</style>
