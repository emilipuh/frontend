import axios from "axios";
import $router from "@/router";

// glavna instanca pomoću koje ćemo komunicirati sa backendom
let Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 2000,
});

Service.interceptors.request.use((request) => {
  try {
    request.headers["Authorization"] = "Bearer " + Auth.getToken();
  } catch (e) {
    console.error(e);
  }
  return request;
});
// može se dogoditi da token istekne i da se vrati 401, tako da je dobra praksa napraviti još jedan interceptor

Service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
      Auth.logout();
      // razmisliti
      // $router.go();
    }
  }
);

// trenutno vrijeme
function dohvatiTrenutnoVrijeme() {
  const trenutnoVrijeme = Date.now();
  const datum = new Date(trenutnoVrijeme);

  const sati = String(datum.getHours()).padStart(2, "0");
  const minute = String(datum.getMinutes()).padStart(2, "0");
  const sekunde = String(datum.getSeconds()).padStart(2, "0");

  return `${sati}:${minute}:${sekunde}`;
}

let Stanje = {
  async dohvatiStanje(userId) {
    try {
      userId = Auth.getUserId();
      console.log("userId: ", userId);
      let response1 = await Service.get(`/${userId}`);
      let data = response1.data; // objekt
      // tu dobijem stanje iz baze koje je inicijalizirano na 0
      // moram dohvatiti podatke sa prihoda i svaki od iznosa pribrojiti stanju baze(koji je inicijaliziran na 0)
      let response2 = await Service.get(`/pregledPrihoda/${userId}`);
      let prihodi = response2.data;
      // moram proći kroz sve zapise i pribrojiti njihove iznose stanju
      for (let i = 0; i < prihodi.length; i++) {
        // tu moram napraviti da mi se od pojedinog prihoda iznos izračuna u stanje
        let prihod = prihodi[i];
        let iznosPrihoda = prihod.iznos;
        data.prihodi += iznosPrihoda;
        data.stanje = data.prihodi - data.rashodi;
      }
      let response3 = await Service.get(`/pregledRashoda/${userId}`);
      let rashodi = response3.data;
      for (let i = 0; i < rashodi.length; i++) {
        let rashod = rashodi[i];
        let iznosRashoda = rashod.iznos;
        data.rashodi += iznosRashoda;
        data.stanje = data.prihodi - data.rashodi;
      }
      let response4 = await Service.get(`/pregledStednji/${userId}`);
      let stednje = response4.data;
      for (let i = 0; i < stednje.length; i++) {
        let stednja = stednje[i];
        let iznosStednje = parseFloat(stednja.iznos);
        data.stednja += iznosStednje;
      }
      return data;
    } catch (error) {
      console.error("Greška prilikom dohvata stanja:", error);
      return;
    }
  },
};

// TU MORAMO OBLIKOVATI PODATKE ZA BACKEND!!!!!!
let Prihod = {
  async noviPrihod(podaciPrihod) {
    // prilagođavamo podatke backendu
    let userId = Auth.getUserId();
    let serverData = {
      userId: userId,
      kategorija: podaciPrihod.kategorija,
      iznos: parseFloat(podaciPrihod.iznos),
      datum: podaciPrihod.datum,
      vrijeme: dohvatiTrenutnoVrijeme(),
      biljeska: podaciPrihod.biljeska,
    };
    console.log("server data: ", serverData);
    // čekamo odgovor sa backenda
    await Service.post("/noviPrihod", serverData);
    // vraćamo se natrag
    return;
  },
  async pregledPrihoda(userId) {
    try {
      let response = await Service.get(`/pregledPrihoda/${userId}`); // Dodajte userId kao dio rute
      let data = response.data;
      return data;
    } catch (error) {
      console.error("Greška prilikom dohvata prihoda:", error);
      return;
    }
  },
  async dohvatiPrihod(id) {
    console.log("ID: ", id);
    let response = await Service.get(`/detaljiPrihoda/${id}`);
    let data = response.data;
    return data;
  },
  async obrisiPrihod(id) {
    try {
      await Service.delete(`/detaljiPrihoda/${id}`);
      console.log("Prihod uspješno obrisan");
    } catch (error) {
      console.error("Greška prilikom brisanja prihoda:", error);
    }
  },
};

let Rashod = {
  async noviRashod(podaciRashod) {
    let userId = Auth.getUserId();
    // prilagođavamo podatke backendu
    let serverData = {
      userId: userId,
      kategorija: podaciRashod.kategorija,
      iznos: parseFloat(podaciRashod.iznos),
      datum: podaciRashod.datum,
      vrijeme: dohvatiTrenutnoVrijeme(),
      biljeska: podaciRashod.biljeska,
    };
    // čekamo odgovor sa backenda
    await Service.post("/noviRashod", serverData);
    // vraćamo se natrag
    return;
  },
  async pregledRashoda(userId) {
    try {
      let response = await Service.get(`/pregledRashoda/${userId}`); // Dodajte userId kao dio rute
      let data = response.data;
      return data;
    } catch (error) {
      console.error("Greška prilikom dohvata rashoda:", error);
      return;
    }
  },
  async dohvatiRashod(id) {
    let response = await Service.get(`detaljiRashoda/${id}`);
    let data = response.data;
    return data;
  },
  async obrisiRashod(id) {
    try {
      await Service.delete(`/detaljiRashoda/${id}`);
      console.log("Rashod uspješno obrisan");
    } catch (error) {
      console.error("Greška prilikom brisanja rashoda:", error);
    }
  },
};

let Stednja = {
  async pregledStednji(userId) {
    try {
      let response = await Service.get(`/pregledStednji/${userId}`); // Dodajte userId kao dio rute
      let data = response.data;
      return data;
    } catch (error) {
      console.error("Greška prilikom dohvata štednji:", error);
      return;
    }
  },
  async novaStednja(podaciStednja) {
    let userId = Auth.getUserId();

    let serverData = {
      userId: userId,
      iznos: parseFloat(podaciStednja.iznos),
      datum: podaciStednja.datum,
      vrijeme: dohvatiTrenutnoVrijeme(),
      biljeska: podaciStednja.biljeska,
    };
    await Service.post("/novaStednja", serverData);
    return;
  },
  async dohvatiStednju(id) {
    let response = await Service.get(`detaljiStednje/${id}`);
    let data = response.data;
    return data;
  },
  async obrisiStednju(id) {
    try {
      await Service.delete(`/detaljiStednje/${id}`);
      console.log("Stednja uspješno obrisana");
    } catch (error) {
      console.error("Greška prilikom brisanja stednje:", error);
    }
  },
};

let Auth = {
  async registration(user_data) {
    let response = await Service.post("/korisnici", user_data);
    console.log("Rezultat registracije: ", response.data);
    return true;
  },
  async login(username, password) {
    let response = await Service.post("/auth", {
      username: username,
      password: password,
    });
    let user = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  },
  logout() {
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  getUserId() {
    let user = Auth.getUser();
    if (user && user.id) {
      return user.id;
    } else {
      return false;
    }
  },
  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  },
  state: {
    get username() {
      let user = Auth.getUser();
      if (user) {
        return user.username;
      }
    },
    get email() {
      let user = Auth.getUser();
      if (user) {
        return user.email;
      }
    },
  },
};

export { Service, Stanje, Prihod, Rashod, Stednja, Auth };
