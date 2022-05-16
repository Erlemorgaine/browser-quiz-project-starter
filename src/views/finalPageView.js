'use strict';
import { CURRENT_SCORE_ID } from '../constants.js';
/**
 * Create a closing element
 * @returns {Element}
 */

export const createClosingElement = (currentScore, amountOfQuestions) => {
  const element = document.createElement('div');
  element.classList.add('final-page');
  element.classList.add('scrollable');

  element.innerHTML = String.raw`
  <h1> All done!<br> Your final score is : <span id='${CURRENT_SCORE_ID}'>${currentScore}</span> of ${amountOfQuestions} </h1>
 `;

  return element;
};
