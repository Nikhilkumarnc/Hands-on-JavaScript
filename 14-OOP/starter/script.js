'use strict';

/* console.log(`// #90 construction function`);
const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person);

console.log(`// #91 Prototypes*`);

console.log('Person.prototype: ', Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log('Person.prototype: ', Person.prototype);
jonas.calcAge();

console.log('jonas.__proto__: ', jonas.__proto__);

console.log(typeof jonas);
console.log(typeof Person);

Person.prototype.species = 'Homo Spaiens';
console.log('jonas.species, matilda.species: ', jonas.species, matilda.species);

console.log(
  `jonas.hasOwnProperty('firstName'): ${jonas.hasOwnProperty('firstName')}`
);

console.log(
  `jonas.hasOwnProperty('species'): ${jonas.hasOwnProperty('species')}`
);

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); // null

console.log('Person.prototype.constructor: ', Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(`//#92 Classes`);

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

console.log(`#93 static methods`);

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};

Person.hey();

PersonCl.hey();

console.log(`//#94 Object.create`);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);

console.log(steven);

steven.name = 'Steve';
steven.birthYear = '2002';
steven.calcAge(); */

console.log(`//#95 Inheritance between classes`);
console.log(`//#95.1 Inheritance using constructor function`);

const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'CS');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(Student.prototype.constructor);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}
