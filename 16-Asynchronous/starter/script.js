'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

console.log(`//#110 e.g. of asynchronous code`);

/*const p = document.querySelector('.p');
setTimeout(function () {
  console.log('My name is Jonas');
}, 5000);
p.style.color = 'red'; */

console.log(`//#111 AJAX `);
console.log(`//#111.2 AJAX call`);

const renderCountry = function (data, className = '') {
  const html = `
   <article class="country" ${className}>
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
           <h3 class="country__name">${data.name.common}</h3>
           <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.EUR?.name || data.currencies.USD?.name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

/*const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log('request.responseText: ', request.responseText);

  console.log(typeof request);

  // request.addEventListener.apply('load');
  request.addEventListener('load', function () {
    console.log(`//#111.3 converting response string data to JSON format`);
    const [data] = JSON.parse(this.responseText);
    console.log('data: ', data);

    // render country
    renderCountry(data);

    // get neighbor country
    const [neighbour] = data.borders;
    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    console.log(`//#112 callback hhell`);
    request2.addEventListener('load', function () {
      // console.log(JSON.parse(this.responseText));
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};
// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa'); */

/*console.log(`//#113 Promises and and Fetch API`);

const request = fetch('https://restcountries.com/v3.1/name/japan');
console.log(request); */

/*console.log(`//#114 Consuming Promises`);

// consuming promise using function expression with understand by seeing console
const getCountryData = function (country) {
  const fetchPromise = fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log('fetchPromise: ', fetchPromise);
  const firtsThen = fetchPromise.then(response => response.json());
  console.log('firtsThen: ', firtsThen);

  const secondThen = firtsThen.then(data => renderCountry(data[0]));
  console.log('secondThen: ', secondThen);
};*/

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (!response.ok) throw Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      console.log(`//#115. chaining Promises
      // The '.then()' method always returns a promise, no matter if we actually return anything or not. But if we do return a value then that value will become the fulfillment value of the return promise `);

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0], 'neighbour'))

        .catch(err => console.error(`${err}`));
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
