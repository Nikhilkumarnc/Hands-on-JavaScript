'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

console.log(`//#56 slice() with arrays`);

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

const shallowCopyUsingSlice = arr.slice();
console.log('shallowCopyUsingSlice: ', shallowCopyUsingSlice);

const [...shallowCopyUSingSpread] = arr;
console.log('[...shallowCopyUSingSpread]: ', shallowCopyUSingSpread);

console.log(
  `//#56.2 splice() with array. Note: splice() mutates original array`
);

// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);

console.log(
  `//#56.3 reverse() with array. Note: reverse() mutates original array`
);

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

const letters = arr.concat(arr2);
console.log('letters: ', letters);

console.log(
  `//#56.4 concat() with array. Note: concat() mutates original array`
);
console.log(arr.concat(arr2));

console.log([...arr, ...arr2]);

console.log(letters.join(' - ')); // returning string

console.log(`//#56.5 at()`);

const arr3 = [23, 11, 64];
console.log('arr3: ', arr3);
console.log('arr3[arr3.length - 1]: ', arr3[arr3.length - 1]);
console.log('arr3.slice(-1): ', arr3.slice(-1));
console.log('arr3.at(-1): ', arr3.at(-1));
console.log('arr3.at(-2): ', arr3.at(-2));
console.log('arr3.at(0): ', arr3.at(0));
console.log('Jonas'.at(0));
console.log('Jonas'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(
  `\n//#56.6 forEach() method Note: Continue and break statements will not work for forEach()`
);

movements.forEach(function (mov, i, arr) {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
  else console.log(`Movement ${i + 1}: You withdrew ${mov}`);
});

console.log(`\n//#56.7 forEach() with maps() and sets()`);

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(`Syntax: 
  mapName.forEach(function(value, key, map) {
  // Code using value and key
});
`);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log(`Syntax: 
  setName.forEach(function(value, valueAgain, set) {
  // Use the value
});
`);

const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR']);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});

console.log(`\n//#57 creating DOM elements`);

console.log(`\n//#57.1 Inserting HTML code dynamically trhough JavaScript`);
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'; // lowercase for class to match CSS

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalances = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.movements);

console.log(`\n//#58 Data transformation: map(), filter() and reduce()`);

console.log(`\n//#58.1 Syntax of map()
  const newArray = originalArray.map(function(currentElement, index, array) {
  return transformedValue;
});
`);

const euroToUSD = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUSD;
});
console.log(movementsUSD);

// arrow
const movementsUSDArrow = movements.map(mov => mov * euroToUSD);
console.log('movementsUSDArrow: ', movementsUSDArrow);

// using for

const movementsUSDFor = [];
for (const mov of movements) movementsUSDFor.push(mov * euroToUSD);
console.log(movementsUSDFor);

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalances(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

createUserNames(accounts);
console.log(accounts);

console.log(`\n//#58.2 Syntax of filter()
  const filteredArray = originalArray.filter(function(currentElement, index, array) {
  return condition; // should return true or false
});
`);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log('deposits: ', deposits);

const depositsFor = [];

for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log('depositsFor: ', depositsFor);

const withdrawls = movements.filter(mov => mov < 0);
console.log('withdrawls: ', withdrawls);

console.log(`\n //#58.3 Syntax of reduce()
  const singleValue = array.reduce(function(accumulator, currentElement, index, array) {
  return updatedAccumulator;
}, initialValue);
`);

const balances = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log('balances: ', balances);

const balancesArrow = movements.reduce((acc, cur) => acc + cur, 0);
console.log('balancesArrow: ', balancesArrow);

let balances2 = 0;
for (const mov of movements) balances2 = balances2 + mov;
console.log('balances2: ', balances2);

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log('max: ', max);

console.log(`\n//#59 Chaining methods or pipeline`);

const totalDepositUSD = movements
  .filter((mov, i, arr) => {
    // console.log('arr of movements: ', arr);
    return mov > 0;
  })
  .map((mov, i, arr) => {
    // console.log('arr of filter: ', arr);
    return mov * euroToUSD;
  })
  .reduce((acc, mov, i, arr) => {
    // console.log('arr of  map: ', arr);
    return acc + mov;
  }, 0);
console.log('totalDepositUSD or recuceced() result: ', totalDepositUSD);

console.log(`\n//#60 find() 
// Note: find() method returns the first element that satisfies a condition. It returns the first matching element — not the index, not all matches — just the first one, or undefined if nothing matches.`);

const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawl);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// btnLogin.addEventListener('click', function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   console.log('Login');
// });

console.log(`\n//#61 Implement login`);

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log('currentAccount: ', currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and messages
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //
    updateUI(currentAccount);

    console.log('LOGIN');
  }
});

console.log(`\n//#62 Implement Amount Transfer`);

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    inputTransferAmount.value = inputTransferTo.value = '';
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

console.log(`\n//#63 findIndex() `);

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // delete accounts
    accounts.splice(index, 2);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin = '';
});

console.log(`\n//#67. Implementing sort`);

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

console.log(`\n//#63 findLast(), findLastIndex()`);

console.log(`\n//#64 some()`);

const anyDeiposits = movements.some(mov => mov > 5000);
console.log(anyDeiposits);

console.log(movements.some(mov => mov === -130));

const deposit = mov => mov < 0;
console.log(deposit);
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log('overalBalance: ', overalBalance);

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);
console.log('overalBalance2: ', overalBalance2);

console.log(`// Challenge 4`);

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1.
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2.

const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('fetch') && breed.activities.includes('running')
).breed;

console.log(dogBothActivities);

const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

console.log(`\n//#65. logic/complex. lecture 171, time 10.28`);
const swimmingAdjacents = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities)
      .filter(activity => activity !== 'swimming')
  ),
];
console.log(swimmingAdjacents);

console.log(breeds.every(breed => breed.averageWeight > 10));

console.log(breeds.some(breed => breed.activities.length >= 3));

const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(breed => breed.averageWeight);
console.log(fetchWeights);

const heviestWeightFetchBreed = Math.max(...fetchWeights);
console.log(heviestWeightFetchBreed);

console.log(`\n//#66 sorting arrays`);

const numbers = [100, 22, 5, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 22, 100] ✅

console.log('before sort(): ', movements);

/*movements.sort((a, b) => {
  // 🔁 Compare each pair: 'a' is current, 'b' is next
  if (a > b) return 1; // 🔄 If 'a' is greater, swap → bring 'b' before 'a'
  if (a < b) return -1; // ✅ If 'a' is smaller, keep 'a' first → no swap
  return 0; // 🔚 Optional: equal values, keep original order
});*/
movements.sort((a, b) => a - b);
console.log('after sort() in ascending: ', movements);

/*movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});*/

movements.sort((a, b) => b - a);

console.log('after sort() in descending: ', movements);

console.log(`\n//#68 arry grouping`);

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawls'
);

console.log(groupedMovements);

const groupedByAcitivity = Object.groupBy(accounts, account => {
  const movementsCount = account.movements.length;
  if (movementsCount >= 8) return 'very active';
  if (movementsCount >= 4) return 'active';
  if (movementsCount >= 1) return 'moderate';
  return 'inactive';
});

console.log(groupedByAcitivity);

const x = new Array(7);
x.fill(1, 3, 5);
console.log(x);

console.log(`\n//#69 `);

// console.log(movements);
// const reversedMov = toReversed();
// console.log(reversedMov);
// console.log(movements);

const bankDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log('bankDepositsSum: ', bankDepositsSum);

const deposit1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

console.log('deposit1000: ', deposit1000);

const countDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log('countDeposit1000: ', countDeposit1000);

console.log(`\n/#69 Converting string to number`);
console.log(Number(23));
console.log(+'23');

console.log(`\n//#70 Parsing`);

console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('e23')); // NaN
console.log(Number.parseInt('23e'));
console.log(Number.parseInt('5n6'));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem '));

console.log(Math.sqrt(25));
console.log(Math.max(1, 2, 23, 55, 4, 0, 1));
console.log(Math.max(1, 2, 23, '55', 4, 0, 1));

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log('randomInt: ', randomInt(10, 20));

console.log(`\n//#70.2 operations with date`);

const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time). in string format

// converting that time in miliseconds
console.log(+future);

const calcDaysPassed = (date2, date1) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 10, 24), new Date(2037, 10, 14));
console.log('days1: ', days1);

console.log(`\n//#71 Internationalizing dates`);

const now = new Date();
const local = navigator.language;
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekday: 'long',
};
console.log(now);
const IST = new Intl.DateTimeFormat(local, options).format(now);
console.log('IST: ', IST);

console.log(`\n//#72 Internationalizing numbers`);

const num = 4756789.898;
const localForINS = navigator.language === 'en-IN' ? 'en-IN' : 'en-IN';
const INSOptins = {
  style: 'currency',
  // unit: 'kilometer',
  currency: 'INR',
};
const INS = new Intl.NumberFormat(localForINS, INSOptins).format(num);
console.log('INS: ', INS);
const USNS = new Intl.NumberFormat('en-US').format(num);
console.log('USNS: ', USNS);

console.log(`\n//#73 setTimeout()`);

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

console.log(`\n//#74 setInterval()`);

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
