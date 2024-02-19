import axios from "axios";

// glavna instanca pomoću koje ćemo komunicirati sa backendom
let Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 2000,
});

let Stanje = {
  async dohvatiStanje() {
    let response = await Service.get("/");
    let data = response.data;
    let stanje = {
      iznos: null,
      prihodi: null,
      rashodi: null,
    };
    stanje.prihodi += data[0].prihodi;
    console.log("Ukupni prihodi: ", stanje.prihodi);
    stanje.rashodi += data[0].rashodi;
    console.log("Ukupni rashodi: ", stanje.rashodi);
    stanje.iznos = stanje.prihodi - stanje.rashodi;
    console.log("Ukupno stanje računa: ", stanje.iznos);
    console.log("Podaci sa backenda: ", stanje);

    return stanje;
  },
};

// TU MORAMO OBLIKOVATI PODATKE ZA BACKEND!!!!!!
let Prihod = {
  async noviPrihod(data) {
    // prilagođavamo podatke backendu
    let serverData = {
      // ovako mi se podaci spremaju na backend...
      // za pojednostaviti, kopiram podatke koji mi se "vuču" sa frontenda
      kategorija: data.kategorija,
      iznos: data.iznos,
      datum: data.datum,
      biljeska: data.biljeska
    };

    // napravimo logiku za ažuriranje prihoda i stanja
    let prihod = 0;
    prihod += parseInt(serverData.iznos);
    console.log("Prihod: ", prihod)

    // čekamo odgovor sa backenda
    await Service.post("/noviPrihod", serverData)

    // vraćamo se natrag
    return 
  },
  async pregledPrihoda() {
    console.log("Opet OK");
    let response = await Service.get("/pregledPrihoda");
    let data = response.data;
    console.log("Prihodi sa backenda: ", data);
    return data;
  },
};

let Rashod = {
  async noviRashod(data) {
    // prima nove podatke koji se trebaju spremiti
    console.log("Spremam rashod podatke na backend...", data);
  },
};

export { Service, Stanje, Prihod, Rashod };
