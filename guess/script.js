'use strict';

// document.querySelector(".message").textContent="Correct number";

// document.querySelector(".number").textContent= 13
// document.querySelector(".score").textContent= 10
// document.querySelector(".guess").value=23;

// document.querySelector(".score").textContent= 10
let score = 20;
let highScore = 0;
let winBackground = '#60b347';

let secretNumber = Math.floor(Math.random() * 20) + 1;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number ❗';
    // When wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number 💥!!!';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = winBackground;
    document.querySelector('.number').style.color = 'gold';
    document.querySelector('.number').style.backgroundColor = 'black';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // document.querySelector('.number').style.width="30rem"
    // when too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 👇... ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game🎮 ';
      document.querySelector('.score').textContent = 0;
    }
    // when too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 🐱‍🏍...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game🎮 ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
const rest = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    // document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = 'rgb(107, 105, 105)';
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    //    highScore=0;
  });
