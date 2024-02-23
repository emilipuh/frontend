import axios from "axios";

// glavna instanca pomoću koje ćemo komunicirati sa backendom
let Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 2000,
});

let Stanje = {
  async dohvatiStanje() {
    try {
      let response1 = await Service.get("/");
      let data = response1.data; // objekt
      data = {
        stanjeRacuna: null,
        prihodi: data[0].prihodi,
        rashodi: data[0].rashodi,
      };
      // tu dobijem stanje iz baze koje je inicijalizirano na 0
      // moram dohvatiti podatke sa prihoda i svaki od iznosa pribrojiti stanju baze(koji je inicijaliziran na 0)
      let response2 = await Service.get("/pregledPrihoda");
      let prihodi = response2.data;
      console.log("Dohvaćeni prihodi: ", prihodi);
      // moram proći kroz sve zapise i pribrojiti njihove iznose stanju
      for (let i = 0; i < prihodi.length; i++) {
        // tu moram napraviti da mi se od pojedinog prihoda iznos izračuna u stanje
        let prihod = prihodi[i];
        let iznosPrihoda = prihod.iznos;
        data.prihodi += iznosPrihoda;
        data.stanjeRacuna = data.prihodi - data.rashodi;
      }
      let response3 = await Service.get("/pregledRashoda");
      let rashodi = response3.data;
      console.log("Dohvaćeni rashodi: ", rashodi);
      for (let i = 0; i < rashodi.length; i++) {
        let rashod = rashodi[i];
        let iznosRashoda = rashod.iznos;
        data.rashodi += iznosRashoda;
        data.stanjeRacuna = data.prihodi - data.rashodi;
      }
      return data;
    } catch (error) {
      console.error("Greška prilikom dohvata stanja:", error);
      throw error;
    }
  },
};

// TU MORAMO OBLIKOVATI PODATKE ZA BACKEND!!!!!!
let Prihod = {
  async noviPrihod(podaciPrihod) {
    // prilagođavamo podatke backendu
    let serverData = {
      kategorija: podaciPrihod.kategorija,
      iznos: parseFloat(podaciPrihod.iznos),
      datum: podaciPrihod.datum,
      biljeska: podaciPrihod.biljeska,
    };

    // čekamo odgovor sa backenda
    let response = await Service.post("/noviPrihod", serverData);
    let prihod = response.data;
    console.log("Data iz prihoda sa service.post: ", prihod.iznos); // vraća mi upisani iznos u obliku floata
    // vraćamo se natrag
    return;
  },
  async pregledPrihoda() {
    let response = await Service.get("/pregledPrihoda");
    let data = response.data;
    console.log("Prihodi sa backenda: ", data);
    return data;
  },
  async dohvatiPrihod(id) {
    console.log("ID: ", id)
    let response = await Service.get(`detaljiPrihoda/${id}`)
    let data = response.data
    console.log("Detalji prihoda: ", data)
    return data;
  },
  async obrisiPrihod(id) {
    try {
      await Service.delete(`/detaljiPrihoda/${id}`);
      console.log("Prihod uspješno obrisan");
    } catch (error) {
      console.error("Greška prilikom brisanja prihoda:", error);
    }
  }
};

let Rashod = {
  async noviRashod(podaciRashod) {
    // prilagođavamo podatke backendu
    let serverData = {
      kategorija: podaciRashod.kategorija,
      iznos: parseFloat(podaciRashod.iznos),
      datum: podaciRashod.datum,
      biljeska: podaciRashod.biljeska,
    };
    console.log("Server data: ", serverData);
    // čekamo odgovor sa backenda
    let response = await Service.post("/noviRashod", serverData);
    let rashod = response.data;
    console.log("Data iz rashoda sa service.post: ", rashod.iznos); // vraća mi upisani iznos u obliku floata
    // vraćamo se natrag
    return;
  },
  async pregledRashoda() {
    let response = await Service.get("/pregledRashoda");
    let data = response.data;
    console.log("Rashodi sa backenda: ", data);
    return data;
  },
};

export { Service, Stanje, Prihod, Rashod };
