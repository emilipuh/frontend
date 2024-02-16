import axios from "axios";

// glavna instanca pomoću koje ćemo komunicirati sa backendom
let Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 2000,
}); //metoda koja instancira novu varijablu za komunikaciju sa određenim backendom

// sve metode koje su vezane za dohvat stanja sa backenda
let Stanje = {
  // ovom metodom dohvaćam podatke iz monga i prikazujem ih u konzoli
  async dohvatiStanje() {
    let response = await Service.get("/");
    let data = response.data;
    console.log("Podaci s backenda: ", data);
    return data;
  },
};

// metode koje se odnose na prihode
let Prihod = {
  async noviPrihod(podaci) {
    let response = await Service.post("/noviPrihod", podaci);
    let spremljeniPodaci = response.data;
    return spremljeniPodaci;
  },
  async pregledPrihoda() {
    console.log("Opet OK");
    let response = await Service.get("/pregledPrihoda");
    let data = response.data;
    console.log("Prihodi sa backenda: ", data);
    return data;
  }
};

// metode koje se odnose na rashode
let Rashod = {
  async noviRashod(data) {
    // prima nove podatke koji se trebaju spremiti
    console.log("Spremam rashod podatke na backend...", data);
  },
};

export { Service, Stanje, Prihod, Rashod };
