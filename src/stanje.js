// samo varijabla u koju će se puniti stanje
// globalna datoteka

let stanje = {
  stanjeRacuna: 0,
  prihodi: 0,
  rashodi: 0,
  stednja: 0,
  uneseniPodaci: {
    kategorija: '',
    iznos: null,
    datum: '',
    biljeska: ''
  }
};

export default stanje;