"use strict";

// const dice = Math.floor(Math.random()*6)+1;
const rolldice = document.querySelector(".img-dice");
// rolldice.setAttribute("src","/image/dice-"+dice+".png")

const player0 = document.querySelector(".p--0");

const player1 = document.querySelector(".p--1");

const btnRoll = document.querySelector(".btn-roll");
const score0 = document.querySelector(".player-score-0");
const score1 = document.querySelector(".player-score-1");
const totalScore0 = document.querySelector(".player--total-1");
const totalScore1 = document.querySelector(".player--total-0");
const btnHold = document.querySelector(".btn-hold");

const reset = document.querySelector(".btn-restart");
// console.log(btnHold);

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let game = true;

btnRoll.addEventListener("click", function () {
  if (game) {
    const dice = Math.floor(Math.random() * 6) + 1;
    rolldice.setAttribute("src", "../image/dice-" + dice + ".png");
    console.log(btnRoll, dice);
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(
        `.player-score-${activePlayer}`
      ).textContent = currentScore;
    } else {
      document.querySelector(`.player-score-${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      player0.classList.toggle("active");
      player1.classList.toggle("active");
    }
  }
});

btnHold.addEventListener("click", function () {
  if (game) {
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.querySelector(`.player--total-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      game = false;
      rolldice.setAttribute("src", "../image/win.jpg");
      document.querySelector(`.p--${activePlayer}`).textContent = "ПОБЕДА";
      document.querySelector(`.player--total-${activePlayer}`).textContent =
        "🏆";
      document.querySelector(`.p--${activePlayer}`).classList.remove("active");
    } else {
      document.querySelector(`.player-score-${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      player0.classList.toggle("active");
      player1.classList.toggle("active");
    }
  }
});
reset.addEventListener("click", function () {
  game = true;
  currentScore = 0;
  scores = [0, 0];
  document.querySelector(".player-score-0").textContent = 0;
  document.querySelector(".player-score-1").textContent = 0;
  document.querySelector(".player--total-1").textContent = 0;
  document.querySelector(".player--total-0").textContent = 0;
  rolldice.setAttribute("src", "../image/dice-6.png");
  player0.classList.add("active");
});
