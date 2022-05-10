'use strict';

import { } from '../constants.js';

/**
 * Create a score element
 * @returns {Element}
 */

export const createScoreElement = () => {
  const element = document.createElement('div');

  const correctAnswer = currentQuestion.correct;
  const selectedAnswer = document.getElementBy...('');
  if (selectedAnswer === correctAnswer) {
    score++;
  } else {
    score;
  }

  element.innerHTML = String.raw`
  score = ${score} of 10;
`;
return element;
};
