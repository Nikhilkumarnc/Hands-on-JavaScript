'use strict';

// #25. JS: JavaScript is a high level, object oriented, multipardigm programming language. JS used to make website interactive.

// #26. JS Engine and Runtime

// #26.1 JS Engine: Program that executes JS code

// #26.2 How JS engine works: Refer Image-> 1 JS Engine.jpeg

// #26.3 Just-In-Time(JIT) compilation:JIT is combination of both compilation and interpretation. JS engine starts by interpreting the code line by line. If it detects the hot code - such as loops or frequently called functions-it compiles that code into optimized machine code and reuses it to improve performance

// 26.4 How JIT works?(\Diagrams\2 JIT compilation work flow.jpeg)

// 26.5 JS runtime in the browser. (Diagrams\3 JS Runtime in the browser.jpeg)

// #26.6 What is execution context?(4 Diagrams/Execution Context.jpeg)

// #26.7 What is inside Executiion Context?(Diagrams\5 Execution Context in detail.png)

// #27 Scope and the scope chain
// #27.1 Scoping: How our program's variables are organized and accessed. "where do variables live",or "where can we access a certain variable, and where not"

// #27.2 Lexical Scoping: defines the rules of how scopes are determined based on where variables and functions are written while writing the code.

// #27.3 Scope chain -> global scope, function scope, block scope
// Note: only let and cost variables will be blocked scope not with var variables, variables with var are fucntion scope

// #27.4 Scope chain vs. call stack

// #28 Scoping in practice

// Outer function scope
/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // Inner function scope
  function printAge() {
    let output = `${firstName} your are ${age}, born in ${birthYear}`;
    console.log(output);

    // Block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Re-assigning out scope's variable
      output = 'NEW OUTPUT';
      const str = `oh, and yo're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        // fucntion are block scope only in strict mode
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3)); // Note: fucntion are block scope only in strict mode
    console.log(output);
  }
  printAge();
  return age;
}

// Global scope
const firstName = 'Jonas';

const age = calcAge(1991);*/

// 29. Hoisting:

// 29.1 Hoisting concept understanding with variables
/* console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991; */

// 29.2 Hoisting concept understanding with functions

/*console.log(addDecl(2, 3));

console.log(funExp);

console.log(funExp());

console.log(funArr);

function addDecl(a, b) {
  return a + b;
}

var funExp = function (a, b) {
  return a + b;
};

var funArr = (a, b) => a + b; */

// e.g.

/* if (!numProducts) deleteShopppingCart(); // at this point numProducts variable is not holding value 10, at this point it is 'undefined' and 'undefined' is faly value(that is why this statement will executed), that is why the fucntion declaration is executed that means all the products are deleted

var numProducts = 10;

function deleteShopppingCart() {
  console.log('All products deleted!');
}

// 30. window object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

// 30.1 difference between var, let, and const(Diagrams\7 difference between var let and const.png) */

// 31. 'this' keyword(Diagrams\8 How the this keyword works.jpeg)
// 31.0 this keyword refers to the object it belongs to. And it may have different values based on where it is used.
// *1. Alone this keyword in the global scope referes to the global object(window in the cntext of browser)
// *2. In a method this keyword refers to the owner object.
// *3. In a function this keyword refers to undefined
// *4. If we use thie keyword in an arraow function, it refers to its surrounding(lexical) scope or parent's scope
// *5. In an event 'this' refers to the element that is fired the event
// *6. without strict mode in a function this keyword refers to the global object

// 31.1 'this' keyword in practice
/*console.log(this); // 'this' keyword in the global scope is the window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log('in a function: ', this);
};

calcAge(1991);

// #31.2 'this' keyword with arrow functions
const calcAgeArrow = birthYear => {
  console.log(2037 - 1991);
  console.log('in a arrow function: ', this); // arrow function does not get its own 'this' keyword. So instead the arrow function simply uses the lexical(uses the 'this' keyword of its parent function or its parent's scope) 'this' keyword. And in this case what is the lexical 'this' keyword, it is window
};

calcAgeArrow(1991);*/

/*const fun = function () {
  console.log('this without strict mode in regular function: ', this);
};

fun();*/

// #31.3 'this' keyword with the methods(fucntions from the objects)

/*const jonas = {
  year: 1991,
  calcAge: function () {
    console.log('in a method: ', this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();*/

//

/*const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // method borrowing(borrowed method from one object ot another object)

matilda.calcAge();*/

/*const f = jonas.calcAge;
f();*/

// #32 Pitfalls of this keyword related to regular functions and arrow functions, this way we can learn when we should use and avoid each of them

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log('in a method: ', this);
    console.log('jonas.here: ', 2037 - this.year);

    // solution 1
    // const self = this; // self or that. this === jonas
    // const isMillenial = function () {
    //   console.log('self: ', self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solutin 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(1991);
  },
  greet: () => {
    console.log('this in arrow', this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge(1991);

// #32.1 Never ever use an arrow function as a method, that is even true if u are not using this in the particular method

// #33. arguments keyword are only available in regular function

const addExpr = function (a, b) {
  console.log('Arguments:', arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

// 33.1 arguments object e.g.

const addExp = function (...values) {
  console.log(values);
};
addExp(9, 10);

// #34. Object references in practice
console.log(`----------Objec references in practice----------`);

const jessica = {
  firstName: 'Jessia',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; // when we tried to copy the original jessica object, it did not actually create a new object in the heap. Instead this 'marriedJessica' is simply the exact same reference as jessica. Now 'marriedJessica' and 'jessica' are two variables that point to the exact same object in the heap. They are two different names for same thing.
marriedJessica.lastName = 'Davis'; // ofcourse it makes total sense that if we change a property here on 'marriedJessica', then that change will also get reflected in the variable 'jessica'.

console.log('Before: ', jessica); // Davis
console.log('After: ', marriedJessica); // Davis

// 1. Somethin new I have with ojbect with let and const objects
/*console.log('Before with let: ', jessica);
jessica = { x: 'Assiged enter new object with different properties' };
console.log('After with let re-assigned enter object', jessica);*/

console.log(
  `// #34.1 Passing object's reference to the function and modifying its property inside a function.`
);

const jessica2 = {
  firstName: 'Jessia',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica2 = marryPerson(jessica, 'Davis');

console.log('Before: ', jessica); // Davis
console.log('After: ', marriedJessica); // Davis

console.log(`// #35.1 Shallow Copy`);
const jessicaOriginal = {
  firstName: 'Jessia',
  lastName: 'Williams',
  age: 27,
  family: ['Alica', 'Bob'],
};

const jessicaCopy = { ...jessicaOriginal };
jessicaCopy.lastName = 'Davis';
console.log('jessicaOriginal: ', jessicaOriginal);
console.log('jessicaCopy: ', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(
  `\n Even after copying, modifying the 'family'(array object) property only in jessicaCopy object also affected jessicaOriginal object, because the array was still shared between both objects. `,
  jessicaOriginal
);
console.log(
  'jessicaCopy after adding 2 more property in family property of an array : ',
  jessicaCopy
);
/*console.log(
  `Explaination: both jessicaOriginal and jessicaCopy objects are going update, even if only update the jessicaCopy object or any one of them.
  Note: Because the 'family' actually an object, so it is essentially just like variable insid the 'jessica' object, which means this object is in the heap and just holds a reference to this other object(arrays or family: ['Aliace', 'Bob'])`
); */

console.log(`\n-----// #35.2 Deep Copy/Clone-----`);
const jessicaClone = structuredClone(jessicaOriginal);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Before clone: ', jessica);
console.log('After clone: ', jessicaClone);
