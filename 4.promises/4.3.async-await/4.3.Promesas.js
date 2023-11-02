const countriesContainer = document.querySelector('.countries-container');

const setCountryHTML = function (data, className = '') {
    const country = document.createElement('div');
    const languages = Object.keys(data.languages);
    const mainLanguage = languages[0];
    const currencies = Object.keys(data.currencies);
    const mainCurrency = currencies[0];

    country.innerHTML = `
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

    country.classList = `country ${className}`;
    countriesContainer.appendChild(country);
}
/* 
const getCountryData = async function (countryName) {
    const response = await fetch(`https://resties.com/v3.1/name/${countryName}`);
    const data = await response.json();
    const jsonData = data[0];
    setCountryHTML(jsonData);

    const neighbor = jsonData.borders[0];
    if(!neighbor) return;

    const response2 = await fetch(`https://restcountries.com/v3.1/name/${neighbor}`);
    const data2 = await response2.json();
    const jsonData2 = data2[0];
    setCountryHTML(jsonData2, 'neighbor');
    // console.log('fin de mi promesa')
} */


//! TRY - CATCH - FINALLY 
/* const getCountryData = async function (countryName) {
    try {
        const response = await fetch(`https://restcies.com/v3.1/name/${countryName}`);
        const data = await response.json();
        const jsonData = data[0];
        setCountryHTML(jsonData);

        const neighbor = jsonData.borders[0];
        if(!neighbor) return;

        const response2 = await fetch(`https://restcountries.com/v3.1/name/${neighbor}`);
        const data2 = await response2.json();
        const jsonData2 = data2[0];
        setCountryHTML(jsonData2, 'neighbor');
    } catch (err){
        console.error(err);
        // window.location.replace("http://www.w3schools.com");
    } finally {
        console.log('finally ejecutado!');
    }
} */


const getCountryData = async function (countryName) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if(!response.ok) {
            throw new Error('No pudimos obter la info de ese país');
        }

        const data = await response.json();
        const jsonData = data[0];
        setCountryHTML(jsonData);

        const neighbor = jsonData.borders[0];
        if(!neighbor) {
            throw new Error('Este país no tiene vecinos');
        } 

        const response2 = await fetch(`https://restcountries.com/v3.1/name/${neighbor}`);
        if(!response.ok) {
            throw new Error('No pudimos obtener la info de este vecino');
        }
        const data2 = await response2.json();
        const jsonData2 = data2[0];
        setCountryHTML(jsonData2, 'neighbor');
    } catch (err){
        console.error(`Error: ${err}`);
        // window.location.replace("http://www.w3schools.com");
    } /*finally {
        console.log('finally ejecutado!');
    }*/
}


// getCountryData('mexico');
getCountryData('australia');