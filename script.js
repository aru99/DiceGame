'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//
btnRoll.addEventListener('click', function () {
  /*todo:
    1. Generate a random dice roll
    2.display the dice 
    3. check for rolled 1: if true, switch to ext player 
    */

  //1.Generating a random doce roll
  const diceNum = Math.trunc(Math.random() * 6) + 1;

  //2.Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNum}.png`;
  console.log(diceNum);

  //3. Check for 1 : if true, switch to next player
  if (diceNum === 1 && player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else if (diceNum === 1 && player1.classList.contains('player--active')) {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
});
