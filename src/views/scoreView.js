'use strict';
import { ANSWER_BUTTON_ID } from '../constants.js';
//import { } from '../constants.js';

/**
 * Create a score element
 * @returns {Element}
 */

export const createScoreElement = () => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
 // <p class = "score" > score =  of 10 </p>
`;
  return element;
};

function countScore() {
  let score = 0;
  const scoreElement = createScoreElement();
  const correctAnswer = currentQuestion.correct;
  const selectedAnswer = getElementById(ANSWER_BUTTON_ID);
  if (selectedAnswer === correctAnswer) {
    score++;
    scoreElement.innerHTML = +score;
  } else {
    score;
    scoreElement.innerHTML = score;
  }
  return countScore;
}
countScore();

// <p class = "score"> score = ${scoreCounter} of 10 </p>*/
