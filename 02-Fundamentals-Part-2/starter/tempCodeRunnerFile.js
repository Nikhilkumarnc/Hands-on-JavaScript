"use strict";

// #15---Strict Mode---

/* let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive: D");

// const interface = 'Audio'  // error
// const private = 534  // error
// x = 10; // error
// let x = 10;  // ok */

// #16---Functions---

/* function logger(){
console.log('My name is Jonas');
}

// invoking / calling / running the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
console.log(apples, oranges);
const juice = `Juice with ${apples} apples and ${oranges} oranges.`
return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice); */

// #16.1-Fucntion Declaration-

/* const age = calcAge(1991);

function calcAge(birthYear){
return 2037 - birthYear;
}

console.log(age);

// #16.2-Function Expression-

const calcAge2 = function (birthYear){
return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

console.log(typeof calcAge2); */

// #17---Arrow Functions---

/* const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
const age = 2037 - birthYear;
const retirement = 65 - age;
return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob')); */

// #18--Functions calling other functions---

/* function cutFruitPieces(fruit){
return fruit * 4;
}

function fruitProcessor(apples, oranges){
const applePieces = cutFruitPieces(apples)
const orangePieces = cutFruitPieces(oranges)
const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
return juice;
}
console.log(fruitProcessor(2,3)); */

/* const yearsUntilRetirement = (birthYear, firstName) => {
const age = 2037 - birthYear;
const retirement = 65 - age;
if(retirement > 0){
  console.log(`${firstName} retires in ${retirement} years`)
  return retirement
}
else{
  console.log(`${firstName} has already retired`);
  return -1;
}
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Bob')); */

// Excercise

/* const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphis, avgKoalas) {
  if (avgDolphis >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphis} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphis) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphis})`);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas); */

//#19---Arrays---

/* const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends.length - 1); // last index of an array

console.log(friends[friends.length - 1]); // gets the last(Peter) element of an arrat

friends[2] = "Jay";

console.log(friends);

// Note: Only primitive values are immutable which are declared with const keyword but array is not a primitive type. we can change mutate elements in an array but we can't replace an entire array

// friends = ["Bob", "Aliace"]; // Uncaught TypeError: Assignment to constant variable.

const firstName = "Jonas";
const jonas = [firstName, "Schmedtman", 2037 - 1991, "Teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const years2 = [1991, 1967, 2002, 2018];

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge2(years[0]),
  calcAge2(years[1]),
  calcAge2(years[years.length - 1]),
];

console.log(ages); */

// #20---Basic Array Operations---

// Add elements
/* const friends = ["Michael", "Steven", "Peter"];
// #20.1 push(): add element to the end of the array. Returns length of an array
const pushReturned = friends.push("Jay");
console.log(pushReturned);
console.log(friends);

// #20.2 unshift(): add element to the beginning of an array. Retrurns length of an array
friends.unshift("John");
console.log(friends);

// Remove elements
// #20.3 pop(): Removes last element from an array. Retrurns reomoved element
const poppedElement = friends.pop();
console.log(poppedElement);
console.log(friends);
friends.pop();
console.log(friends);

// #20.4 shift(): Removes the first element from an array. Returns reomoved element
friends.shift();
console.log(friends);

// #20.5 indexOf()
console.log(friends.indexOf("Steven"));

//#20.6 includes()
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log(`You have a friend called Steven`);
}

// #Excercise

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals); */

// #---21 Objects---
// Note: Arrays we should use for more order data, and objects use for more unstructured data

/* onst jonas = {
  firstName: "Jonas",
  lastName: "Scmedtman",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log("last" + nameKey);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// #21.1 Inserting new property in the Object
// #21.2 Reading data by evaluating from the objects
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
); */

// #---20 Object Methods---

/* const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Micheal, Peter", "Steven"],
  hasDriverLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's liense.`;
  },
};

// console.log(jonas["calcAge"](jonas["birthYear"]));

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Excercise
console.log(jonas.getSummary()); */

// Excercise

const mark = {
  fullName: "Mark Miller",
  mass: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

const john = {
  fullName: "John Smith",
  mass: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);
