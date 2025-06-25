
/* let js = "amazing";
// if(js === "amazing") alert("JavaScript is FUN!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

// console.log("Jonas");

let firstName = "Matilda"
let first = "Jonas"

// console.log(firstName)
console.log(firstName)
console.log(firstName)

// variables names can contain only digits, '_', '$' 

// Reserved keywords 'name' some times creates a problem

const PI =3.1414; 

let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher'

let job1 = 'Programmer'
let job2 = 'Teacher'

// #1---Data Types---
// #1.1 Undefined: Value taken by a variable that is not yet defined('empyt value)
// #1.2 Null: Also means 'empty value'
// #1.3 Symbol: Value that is unique and cannot be changed
// #1.4 Bigint: Larger integers than the Number can hold


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// #2---Dynamic Typing---

javaScriptIsFun = 'YES';
console.log(typeof javaScriptIsFun);
// #1-Undefined: variable declated without assigning value to it. (empty value)
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// #2-Null: both the value and typeof of the value is null
console.log(typeof null);   // object, but it should return null */

// #1---Playwright---: Variables & Scoping: var, let, const. let is block scope and var is function scoped. learn in later section
// #3---Variables & Scoping: var, let and const---

// #3.1-let: we use the let keyword to declare variables that can change later so basically during the execution of the program
/* let age = 30;
age = 31; // re-assigned or mutated

// #3.2-const. Const variables are immutable. Use always const variables to avoid the errors. Use let variables only if you are sure the value is going to change during execution of the program

const birthYear = 1991;
// birthYear = 1990; // TypeError: Assignment to constant variable.

// const job; // SyntaxError: Missing initializer in const declaration. We cannot declare const variables without assigning values to it

var job = 'programmer'
job='teacher'

lastName = 'Schmedtman'
console.log(lastName); */

// #2---Playwright---: Operators(Arithmetic,Comparison,Logical, Ternary)
// #4---Basic Operators---
 
// Arithmetic Operators(+, -, *, /, %)
/* const now = 2037;
const ageJonas = now - 1991
const ageSarah = now - 2020
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); 

const firstName = 'Jonas'
const lastName = 'Schmedtman'
console.log(firstName + ' ' + lastName);

// Assigment Operators
let x = 10 + 5;   // 15
x += 10;  // x = x + 10 =>  15 + 10 = 25
x *= 4  // x = x * 4 => 25 * 4 = 100
x++;  // x = x + 1 => 100 + 1 = 101
x--;  // x = x -1 => 101 - 1 = 100
console.log(x);   // 100

// #3---Playwright---: Comparision Operators
// Comparision Operators(Comparision(===, !== , >, <, >=, <=)): are used to produce boolean values
console.log(ageJonas > ageSarah);    
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2010);

// #5---Operator Precedence--- */

/* const now = 2037;
const ageJonas = now - 1991
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2010);

let x, y;

x = y = 25 - 10 -5;
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 10;
console.log(ageJonas, ageSarah, averageAge);


// #1-Excercise-

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJon = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJon = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJon * heightJon);
const markHigherBMI = BMIMark > BMIJohn

console.log(BMIMark, BMIJohn, markHigherBMI); */

// #17---Playwright(ES6+ Modern features)---: Template Literals
// #6---Template Literals---

/* const firstName = 'Jonas'
const job = 'Teacher'
const birthYear = 1991
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years of old ' + job + '!'
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(jonasNew);

// String in multilines
console.log(`String 
multiple
lines`); */

// #4---Playwright--- Conditionals: if, else, switch
// #7---Conditionals(if/else)---

/* const age = 15;
if( age >= 18)
{
  console.log('Sarah can start driving license');
}else{
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;

let century
if(birthYear <= 2000)
{
  century = 20;
}else{
  century = 21;
}
console.log(century); */


// #2-Excercise

/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJon = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJon = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJon * heightJon);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
  console.log(`Mark's BMI is (${BMIMark}) higher than John's (${BMIJohn})`);
}else{
  console.log(`John's BMI is (${BMIJohn}) higher than Mark's (${BMIMark})`);
} */


// #8---Type Conversion and Coercion---
// #8.1-Type Conversion: When we manually(Explicitly) convert from one type to another

/* const inputYear = '1991'
console.log(Number(inputYear))   // still intputYear value is in string only
console.log(Number(inputYear), inputYear)   // still intputYear value is in string. o/p: 1991 '1991' 
console.log(Number(inputYear) + 18);  // 2009

console.log(Number('Jonas'));   // NaN
console.log(typeof NaN);  // number

console.log(String(23), 23);


// #8.2-Tye Coercion: When JS automaticllay(Implicitly) converts types behind the scences for us

// #8.2.1 Whenever there is an operation between a String and a Number with the '+' operator, the number will be converted to the String.
// Note: only '+' operator with String and Number will convert to a String, all other mathematical(-,*,/) operators always try to work with numbers.
console.log('I am ' +  23 + ' years old');

console.log('23' - '10' - 3);

console.log('23' * '2');

console.log('24'/'2');

let n = '1' + 1
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + '5'); // 2+3+4 = 9 => 9 + '5' = 95

console.log('10' - '4' - '3' - 2 + '5');  // 10-4-3-2 = 1 => 1 + '5' = 15

console.log('10' + '10' + 10 + 10 + '10');  // 1010101010 */ 


// #9---Truthy and Falsy Values---
// Falsy values are not exactly false, but will become false when we try to convert them into a boolean. In JS there are five falsy values: 0, '', undefined, null, NaN. All of these five values will be converted to false when we attempt to convert them to a boolean.

/* console.log(Boolean(0));  // false
console.log(Boolean(null));  // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));  // flase
console.log(Boolean(''));   // flase
console.log(Boolean('Jonas'));  // true
console.log(Boolean({}));   // true

const money = 0;
if(money)   // 0 = flasy value
{
  console.log("Don't spend it all!");
}else{
  console.log('You should get a job!');   // Executes else block becuase 0 is falsy value
}

let height;
if(height){   // undefined is a falsy value
console.log('YAY! Height is defined');
}else{
  console.log('Height is UNDEFINED');   // executed
} */


// #2---Playwright---: Operators. Comparison(===, !==)
// #10---Equlity Operators---(===(Strict Equlity operator))

/* const age = 18
if(age === 18) console.log('You just became an adult');

console.log('18' == 18);  // true. Loose Equlity 
console.log('18' === 18);   // false. Strict Equlity
console.log(18 === 18);   // true. Strict Equlity

const favourite = Number(prompt("What's your Favourite number"))
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){ 
  console.log('23 is an amazing number');
}else if(favourite === 7){
  console.log('The entered number is 7'); 
}else{
  console.log('Number is not 23 or 7');
}

if(favourite !== 23){
  console.log('Why not 23'); 
} */

// #11---Boolean Logic---
/* const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision){
//   console.log('Sarah is able to drive!');
// }else{
//   console.log('Someone else should drive...');
// }

const isTired = false;   // c 
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
  console.log('Sarah is able to drive!');
}else{
  console.log('Someone else should drive...');
} */

//#3-Excercise
/* const scoreDoplphins = (96 + 108 + 90) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDoplphins, scoreKoalas);

if(scoreDoplphins > scoreKoalas && scoreDoplphins >= 100){
  console.log('Dolopins win the tropy');
}else if(scoreKoalas > scoreDoplphins && scoreKoalas >= 100){
  console.log('Koalas win the trophy');
}else{
  console.log('Both win the trophy');
} */

// #12---switch Statement---

/* const day = 'monday';

switch(day){
  case 'monday':  // day === monday
    console.log('Plan course Structure');
    console.log('Got to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednsday':
  case 'thursday':
    console.log('Write a code examples');
    break;
  case 'friday':
    console.log('Record Videos');
    break;
  case 'saturday':
  case 'Sund':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day');
} */

// #13---Expression and Statements---(skipped, very confusing)

// #7---Playwright---Ternary (? :)
// #14--The Conditional(Ternery) Operator

/* const age = 23
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')

const drink = age >= 18 ? 'Wine' : 'Water'
console.log(drink); 

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`); */

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip} & the total value ${bill+tip} `);

