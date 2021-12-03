'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
//current score
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let scores, currentScore, activePlayer, playing;
//resetting the game function
const init = function () {
  //starting conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  //
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  //
  diceEl.classList.add('hidden');
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//functions

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//Event listener for roll button
btnRoll.addEventListener('click', function () {
  /*todo:
    1. Generate a random dice roll
    2.display the dice 
    3. keep adding score to current player, check for rolled 1: if true, switch to next player 
    */

  if (playing) {
    //1.Generating a random doce roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    //2.Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;
    console.log(diceNum);

    //3. Check for 1 : if true, switch to next player

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//HOLD button eventlistner
btnHold.addEventListener('click', function () {
  /**
   *  todo:
   * 1. Add current score to active player's score
   * 2. check if player score is >=100
   * finish the game, else switch to the next player
   */

  if (playing) {
    //1
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2check if the score is >=100
    if (scores[activePlayer] >= 30) {
      //finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');

      diceEl.classList.add('hidden');
    } else {
      //3.switch the player
      switchPlayer();
    }
  }
});

// New game button Event listener
/**
 * todo: reset current scores, active class to player 0, dice should be visible again
 */

btnNew.addEventListener(
  'click',
  init
  //   player0El.classList.add('player--active');
  //   player1El.classList.remove('player--active');
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.remove('player--winner');
  //   currentScore = 0;
  //   (currentScore0El.textContent = currentScore),
  //     (currentScore1El.textContent = currentScore);
  //   document.querySelector(`#score--0`).textContent = currentScore;
  //   document.querySelector(`#score--1`).textContent = currentScore;
  //   (scores[0] = currentScore), (scores[1] = currentScore);
  //   console.log(scores);
);
/