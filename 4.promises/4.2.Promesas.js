const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/mexico');
request.send();

const countriesContainer = document.querySelector('.countries-container');

request.addEventListener('load', function () {
    // console.log(request.responseText);
    //AJAX de México
    const [data] = JSON.parse(request.responseText);
    const country = document.createElement('div');
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
                <span>${data.languages.spa}</span>
            </p>
            <p>
                <span>💵</span>
                <span>${data.currencies.MXN.name}</span>
            </p>
    `;
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
        console.log(data2);
        const country = document.createElement('div');
        country.innerHTML = `
            <div class="flag">
                <img src="${data2.flags.png}" alt="${data2.flags.alt}">
            </div>
            <h2>${data2.name.common}</h2>
            <h3>${data2.region}</h3>
            <div class="country-info">
                <p>
                    <span>👨‍👨‍👧‍👦</span>
                    <span>${(Number(data2.population)/1000000).toFixed(1)}M people</span>
                </p>
                <p>
                    <span>💬</span>
                    <span>${data2.languages.spa}</span>
                </p>
                <p>
                    <span>💵</span>
                    <span>${data2.currencies.BZD.name}</span>
                </p>
        `;
        country.classList = 'country neighbour';
        countriesContainer.appendChild(country);

        
    })
});

