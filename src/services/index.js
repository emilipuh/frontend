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
        console.log("Odgovor sa backenda: ", response);
        let data = response.data;
        console.log("Podaci s backenda: ", data);
        return data;
    }
}

export { Service, Stanje }