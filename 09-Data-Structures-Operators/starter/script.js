'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

const [l, m, ...others] = [1, 2, 3, 4, 5];
console.log(l, m, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
