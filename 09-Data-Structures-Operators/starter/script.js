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

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //#37.5 receiving objects into the fucntions, function will immediately destructure the object`. And setting default values to the properties of an object
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
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
