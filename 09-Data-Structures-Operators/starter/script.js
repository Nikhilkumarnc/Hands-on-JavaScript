'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //#37.5 receiving objects into the fucntions, function will immediately destructure the object`. And setting default values to the properties of an object
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  openingHours,
};

//#37.5 passing objects into the fucntions, function will immediately destructure the object`
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

console.log(`//#36 Destructuring arrays`);
const arr = [2, 3, 4];

const [x, y, z] = arr;

console.log(x, y, z);

console.log(
  `\n//#36.1 destructuring and accessing desired values(skipping values) from the object/array`
);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

console.log(
  `\n// #36.2 switching variables without third variables with destructing`
);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(
  `\n// #36.3 Returning array elements from an object method and destructuring the returned values`
);

const [starter, mains] = restaurant.order(2, 0); // passing desired indexes
console.log(`${starter},  ${mains}`);

console.log(`\n//#36.4 nested array and nested destructuring`);
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

console.log(
  `\n //#36.5 we can set default values to variables while destructuring`
);
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // here r will will print default value that is 1(we have set while declaring destructure variables)

console.log(`\n //#37 Destructuring Objects`);

console.log(
  `\n //#37.1 Destructuring Objects by changing desired property name it is useful when dealing with third party data`
);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

console.log(
  `\n //#37.2 Default Vlues: when we are dealing with third party data, like an object that we get from somewhere else/API call it is very useful having default values for the case that we are trying to read a property that doesn't exist on the object`
);

const {
  mainMenu,
  name: rname,
  starterMenu: starters,
  menu = [],
  n = 'null',
} = restaurant;

console.log(mainMenu, rname, starters, menu, n);

console.log(`//#37.3 mutating variables while destructuring objects`);
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
console.log(a, b); // not updated

({ a, b } = obj);
console.log(a, b); // updated

console.log(`//#37.4 nested objects`);
// const { fri } = hours;
// console.log(fri);
const {
  fri: { open: o, close: c },
} = hours;

console.log(o, c);

console.log(`//#38 Spread Operator`);

const oldArr = [7, 8, 9];
const newArr = [5, 6, ...oldArr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log('newMenu: ', newMenu);
console.log(restaurant.mainMenu);

console.log(`//#38.2 copying from another to new array`);
const mainMenuCopy = [...restaurant.mainMenu];
console.log('mainMenuCopy: ', mainMenuCopy);

console.log(`//#38.3 merging two arrays`);
const mergedMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log('mergedMenu: ', mergedMenu);

console.log(
  `//38.4 spread operator with strings. Note: spread operatore doesn't work with template literals`
);
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log('letters: ', letters);
console.log('...letters:', ...letters);

console.log('//#38.5 spread operator with functions');

// const ingrdiants = [
//   prompt('Ingrediant 1?'),
//   prompt('Ingrediant 2?'),
//   prompt('Ingrediant 3?'),
// ];
// console.log(ingrdiants);

// restaurant.orderPasta(...ingrdiants);

console.log(`\n//#38.6 spread operator with objects`);

const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);

console.log(`//#39. short circuit(|| and &&)`);
console.log(`//#39.2 OR(||)`);

// falsy values('', undefined, null, 0, false)
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
console.log(restaurant.numGuests);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log(`\n//#39.2 AND(&&)`);

console.log(0 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

restaurant.orderPasta && restaurant.orderPasta('mushroom', 'Cheese', 'Onion');

// nullish(null, undefined)
const nullishNull = null;
console.log('nullishNull: ', nullishNull ?? 10);

const nullishUndefined = undefined;
console.log('nullishUndefined: ', nullishUndefined ?? 20);

const nuliish0 = 0;
console.log('nuliish0: ', nuliish0 ?? 'so it returns 0 only');

const nullishEmptyString = '';
console.log('nullishEmptyString: ', nullishEmptyString ?? 'returns empty');

const nullishFalse = false;
console.log('nullishFalse: ', nullishFalse ?? 'returnse false only');

console.log(
  `Note: nullish coalescing set defaul values only to those variables which values are null and undefined and for all other falsy values it returns what false(false, 0, '') value it holds`
);

console.log(`//#39.3 ??= and &&=`);
const rest1 = {
  rname: 'a',
  numGuests: 20,
  city: false,
  and: true,
};

const rest2 = {
  rname: 'b',
  owner: 'x',
};

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

rest2.owner = rest2.owner && '<ANANYMOUS>';
console.log(rest2.owner);

rest1.owner = rest1.owner && '<ANANYMOUS>';
console.log(rest1.owner);

rest1.address = rest1.location ?? '<VIJAYANAGAR>';
console.log('rest1.address: ', rest1.address);

rest1.city ??= 'Bangalore';
console.log('rest1.city: ', rest1.city);

// rest1.and = rest1.and && false;
// console.log('rest1.and: ', rest1.and);

rest1.and &&= false;
console.log('rest1.and: ', rest1.and);

console.log(`\n//#40. Looping with array with 'for of' loop`);

const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);

console.log(`\n//#40.1 for of`);
for (const item of menus) console.log(item);

for (const [i, el] of menus.entries()) console.log(`${i}: ${el}`);

console.log(`//#41 Enhanced Object literals`);
console.log('restaurant: ', restaurant);

console.log(`//#42 Optional Chaining`);
console.log(`//42.1 
object?.property
object?.[key]
object?.method?.()
`);

console.log(
  `\n//#42.2 'for of', opetional chaining and nullish coalescing operator in practice`
);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? `Method doesn't exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method doesn't exist`);

console.log(`\n//#42.3 Optional chaining with arrays`);

const users = [{ uname: 'Jonas', email: 'Jonas@io.com' }];

console.log(users[0]?.uname ?? 'users array is empty');

console.log(`\n//#43, rest pattern and parameters `);

console.log(`\n #43.2 rest with arrays`);
const [l, m, ...others] = [1, 2, 3, 4, 5];
console.log(l, m, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

console.log(`\n #43.3 rest with objects`);

const { fri, ...weekdays2 } = restaurant.openingHours;
console.log(fri);
console.log(weekdays2);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 5);
add(2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6);
const x1 = [2, 4, 5];
add(...x1);

const test = function (x, y, z) {
  console.log('test: ', x, y, z);
};

const x3 = [1, 2, 3];
test(...x3);

console.log(`\n//#44 Looping with objects`);
console.log(`\n//#44.2 Object.keys() + for...of (for keys)`);

const properties = Object.keys(openingHours);
console.log('properties: ', properties);

let openStr = `We are open on ${properties.length} ${
  properties.length < 2 ? 'day: ' : 'days: '
}`;
// console.log('openStr: ', openStr);

for (const day of properties) {
  openStr += `${day} `;
}

console.log('openStr: ', openStr);

console.log(`\n//#44.3 Object.values() + for...of (for values only)`);
const values = Object.values(openingHours);
console.log('values: ', values);

console.log(`\n//#44.4 Object.entries() + for...of (for [key, value] pairs)`);
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

console.log(`\n//#45 sets`);

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log('orderSet: ', orderSet);
console.log('orderSet Size: ', orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log('orderSet add :', orderSet);
orderSet.delete('Risotto');
console.log('orderSet delete: ', orderSet);
console.log(new Set('Jonas'));
// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) console.log('Looping a set: ', order);

console.log(`\n//#45.2 Converting Set() to Array`);
const set = new Set(['Banana', 'Apple', 'Banana', 'Apple', 'Orange']);
console.log(set);
const setToArray = [...set];
console.log('setToArray: ', setToArray);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log('staffUnique: ', staffUnique);

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

console.log(`\n//#45.3 7 more new methos in Set
// 1. interSection(): returns common valus of two sets
// 2. union(): returns returns values from both sets
// 3. differnce(): returns first Set values excluding common values of two sets
// 4. symmetricDifference: Returns values from both the Sets excluding common values`);

// const commonFoods = italianFoods.interSection(mexicanFoods);
// console.log(commonFoods);

const italianFoodsMexicanFusion = italianFoods.union(mexicanFoods);
console.log('italianFoodsMexicanFusion: ', italianFoodsMexicanFusion);
// or
console.log('complex spread: ', [
  ...new Set([...italianFoods, ...mexicanFoods]),
]);
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('difference: ', uniqueItalianFoods);

const uniqueItalianAndMexicaFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log('symmetricDifference: ', uniqueItalianAndMexicaFoods);

console.log(`\n//#46 Maps`);

const rest = new Map();
rest.set('name', 'Classico Italino');
rest.set(1, 'Firenze, Itally');
console.log('rest Map: ', rest);

rest
  .set('categories', ['Italina', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open: D')
  .set(false, 'We are closed :(');

console.log('get name:', rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
// rest.clear();
// console.log('clear: ', rest);

rest.set([1, 2], 'Test');
console.log(rest);

console.log(rest.get([1, 2]));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log(`\n//#47 Maps Iteration`);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(`\n//#47.2 converting object to map`);
const hoursMap = new Map(Object.entries(openingHours));
console.log('Object to Map: ', hoursMap);

console.log('created Map using array instead of set() funtn: ', question);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

console.log(`\n//#47.3 convert map to array`);
console.log([...question]);

console.log(`\n //48 Which Data Structure to use`);
console.log(
  'Note: Arrays and Sets are list only values, but Objects and Maps are list of keys and values. In Maps insertion order is maintained'
);

console.log(`\n//#49 Working with Strings`);

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(`\n//#49.2 slice() method`);

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(
  'last word of a String:',
  airline.slice(airline.lastIndexOf(' ') + 1)
);
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got middle');
  else console.log('You are lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(`\n//#49.3 toLowerCase() and toUpperCase()`);

const passenger = 'jOnAs';
const passengerLower = passenger.toLocaleLowerCase();
console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@jonas.io';

const loginEmail = ' Hello@Jonas.IO \n';

// const lowerEmail = loginEmail.toLowerCase();
// console.log('lowerEmail:', lowerEmail);

// const trimmedEmail = lowerEmail.trim();
// console.log('trimmedEmail:', trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log('normalizedEmail: ', normalizedEmail);

console.log(email === normalizedEmail);

console.log(`\n//#49.4 replace()`);

const priceGB = '288,97£';
console.log(priceGB);
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Borading door 23!';

console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

console.log(`\n//#49.5 boolean: includes()`);

const plane1 = 'Airbus A320ne0';
console.log('includes: ', plane1.includes('A320'));
console.log('includes: ', plane1.includes('Boeing'));
console.log('startsWith: ', plane1.startsWith('Air'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome to aboard!');
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log(`\n//#49.6 split()`);

console.log('split: ', 'a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');

console.log(`\n//#49.7 join()`);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log('join(): ', newName);

const capitalize = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log('without join: ', namesUpper);
  console.log(namesUpper.join(' '));
};

capitalize('jessica ann smith davis');
capitalize('jonas schmedtman');

console.log(`\n//#49.8 padding: padStart()`);

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(50493890));
console.log(maskCreditCard('333467890987908'));

const message2 = 'Bad weather... All Departures Delayed... \n';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`there are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInline(5);
planesInline(12);
