import axios from 'axios';

// glavna instanca pomoću koje ćemo komunicirati sa backendom
let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
}) //metoda koja instancira novu varijablu za komunikaciju sa određenim backendom

// sve metode koje su vezane za dohvat stanja
let Stanje = {
    async dohvatiStanje() {
        let response = await Service.get('/');
        let data = response.data;
        console.log("Podaci s backenda: ", data);
        return data;
    },
    async noviPrihod(data) { // prima nove podatke koji se trebaju spremiti
        console.log("Spremam prihod podatke na backend...", data)
    },
    async noviRashod(data) { // prima nove podatke koji se trebaju spremiti
        console.log("Spremam rashod podatke na backend...", data)
    },

}

export { Service, Stanje }