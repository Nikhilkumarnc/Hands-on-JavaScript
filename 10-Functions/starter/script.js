'use strict';

console.log(`\n//#50. Default arguments`);
console.log(
  `\n//#50.1 Note: efault values only work when the argument is undefined, not null, 0, or false. `
);

const bookings = [];

const createBookings = function (
  flightNum = 'AAA',
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookings();
createBookings('LH123', 2);
createBookings('LH123', 2, 800);
createBookings('LH123', 5);
createBookings('LH123', 0, false);
createBookings('LH123', null, true);

console.log(bookings);

const flight = 'LH234';

const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2473947982,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  // console.log('flightNum: ', flightNum);
  passenger.name = 'Mr. ' + passenger.name;
  // prompt disturbing commented
  // if (passenger.passport === 2473947982) alert('Checked In');
  // else alert('Wrong passport!');
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

console.log(`\n//#51 First-Class and Higher-Order functions`);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  console.log(`first:  ${first}, others: ${others}`);
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`original str: ${str}`);
  console.log(`Transferred str: ${fn(str)}`);
  console.log(`Tranferred by: ${fn.name}`);
};

transformer('JS is the best', upperFirstWord);
transformer('JS is the best', oneWord);

/* const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5); 

['Jonas', 'Martha', 'Adam'].forEach(high5); */

console.log(`\n//#51.2 Fucntions returning functions`);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Nikhil');

console.log(`\n//#51.3 Fucntions returning functions(arraow function)`);

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hey')('David');

console.log(`\n//#52 call and apply methods`);

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}, ${name}`,
    });
  },
};

lufthansa.book(239, 'Jonas Shmedtman');
lufthansa.book(635, 'John Smith');

console.log('bookings: ', lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'WE',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
console.log(eurowings.bookings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa.bookings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss.bookings);

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss.bookings);

book.call(swiss, ...flightData); //m
console.log(swiss.bookings);

console.log(`\n//#53 bind()`);
const bookEW = book.bind(eurowings);
// console.log('bookWE: ', bookEW);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);

console.log(`\n//#53.3 bind() is useful to set partial application`);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtman');
bookEW23('Martha Cooper');

// const bookTest = book.bind(eurowings, 25, 'Nikhil');
// bookTest();

console.log(`\n//#53.3 bind() very useful in event handler`);
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  // console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

console.log(`\n//#53.4 bind(); another e.g. of partial application`);

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

/*const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JS', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answer);
  },
};

poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));*/

console.log(`\n//#54 IIFE`);
console.log(
  `IIFE is a function that runs immediately afterit is defined and it also keep its variables private`
);

(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})();

(() => console.log(`This will also never run again`))();

console.log(`\n//#55 Clousers`);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    let total = passengerCount++;
    console.log(
      `${passengerCount} ${passengerCount < 2 ? 'Passenger' : 'Passengers'}`
    );
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

console.log(`\n//#54.2 more e.g. for closure`);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are boarding all ${n} passenger`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
