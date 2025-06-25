'use strict';

//#23---DOM Manipulation---

/* document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

//#24---Handling Events---

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generating Random number
let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  return `${message}`;
};

// Adding click event to check button with guess vale trigger(capture)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // If number empty or falsy
    displayMessage('No Number! ');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber; // Setting secretNumber Number to '?'
    // if number correct
    const winMessage = displayMessage('You won the game');
    // if number is greater than secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    console.log('winMessage: ', winMessage);

    if (winMessage === 'You won the game') {
      document.querySelector('.check').addEventListener('click', function () {
        displayMessage('You won the game. Please play again');
      });
    }
  }

  //with DRY
  else if (guess !== secretNumber) {
    // if score is above zero then decrease the score
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      // decrease score if guess is wrong
      score--;
      // displaying the score
      document.querySelector('.score').textContent = score;
      // if score is 0. lost the game
    } else {
      const lostMessage = displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;

      if (lostMessage === 'You lost the game') {
        document.querySelector('.check').addEventListener('click', function () {
          displayMessage('You lost the game. Please play again');
        });
      }
    }

    // without DRY
    /* else if (guess > secretNumber) {
    // if score is above zero then decrease the score
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      // decrease score if guess is wrong
      score--;
      // displaying the score
      document.querySelector('.score').textContent = score;
      // if score is 0. lost the game
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // if number is lessthan secretNumber
  } else if (guess < secretNumber) {
    // if score is above zero then decrease the sco re
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      // decrease score if guess is wrong
      score--;
      // displaying the score
      document.querySelector('.score').textContent = score;
      // if score is 0. lost the game
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }*/
  }
});

// reset
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
