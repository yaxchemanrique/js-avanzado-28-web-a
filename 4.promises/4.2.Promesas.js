const countriesContainer = document.querySelector('.countries-container');

const request = new XMLHttpRequest();
// const TOKEN = 'sdxhbashxbdhsba823y2ye';
// request.open('GET', 'https://restcountries.com/v3.1/name/mexico?access_key=${TOKEN}');
// Archivo .env

const setCountryHTML = function (data, element) {
    const currencies = Object.keys(data.currencies);
    const mainCurrency = currencies[0];
    const languages = Object.keys(data.languages);
    const mainLanguage = languages[0];

    element.innerHTML = `
        <div class="flag">
            <img src="${data.flags.png}" alt="${data.flags.alt}">
        </div>
        <h2>${data.name.common}</h2>
        <h3>${data.region}</h3>
        <div class="country-info">
            <p>
                <span>👨‍👨‍👧‍👦</span>
                <span>${(Number(data.population)/1000000).toFixed(1)}M people</span>
            </p>
            <p>
                <span>💬</span>
                <span>${data.languages[mainLanguage]}</span>
            </p>
            <p>
                <span>💵</span>
                <span>${data.currencies[mainCurrency].name}</span>
            </p>
    `;
}

/*
const getCountryAndNeighbour = function(countryName) {
    request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
    request.send();

    request.addEventListener('load', function () {
        // console.log(request.responseText);
        //AJAX de México
        const [data] = JSON.parse(request.responseText);
        const country = document.createElement('div');
        setCountryHTML(data, country);
        country.classList = 'country';
        countriesContainer.appendChild(country);
        
        //AJAX de Vecino
        const neighbour = data.borders[0];
        if(!neighbour) return;

        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(request2.responseText);
            // console.log(data2);
            const country = document.createElement('div');
            setCountryHTML(data2, country);
            country.classList = 'country neighbour';
            countriesContainer.appendChild(country);
        })
    });
}

// getCountryAndNeighbour('mexico');
// getCountryAndNeighbour('usa');
getCountryAndNeighbour('spain');
*/

const setCountry = function (data) {
    const JsonData = data[0];
    const country = document.createElement('div');
    setCountryHTML(JsonData, country);
    country.classList = 'country';
    countriesContainer.appendChild(country);
}
/*
const getCountryData = function (countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then( function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (data) {
            const JsonData = data[0];
            const country = document.createElement('div');
            setCountryHTML(JsonData, country);
            country.classList = 'country';
            countriesContainer.appendChild(country);

            const neighbour = JsonData.borders[0];
            if(!neighbour) return;

            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data2) {
            const JsonData = data2[0];
            const country = document.createElement('div');
            setCountryHTML(JsonData, country);
            country.classList = 'country neighbour';
            countriesContainer.appendChild(country);
        })
}*/

const getCountryData = function (countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then((data) => {
            const jsonData = data[0];
            const country = document.createElement('div');
            setCountryHTML(jsonData, country);
            country.classList = 'country';
            countriesContainer.appendChild(country);

            const neighbour = jsonData.borders[0];
            if(!neighbour) return;

            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        })
        .then(response => response.json())
        .then(function (data2) {
            const jsonData = data2[0];
            const country = document.createElement('div');
            setCountryHTML(jsonData, country);
            country.classList = 'country neighbour';
            countriesContainer.appendChild(country);
        })
}

// getCountryData('mexico')
getCountryData('usa');