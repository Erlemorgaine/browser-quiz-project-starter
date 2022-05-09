'use strict';
import { ANSWER_BUTTON_ID } from '../constants.js';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
  <button id=' deneme' class="btn-answer">  ${key}: ${answerText};</button>
  
  `;
  return element;
};

// export const checkAnswer = (selectedBtn) => {
//   //key selected===correct than change the color of the button and add 1 to score
//   const selectedButton = document.getElementById(selectedBtn);
//   if (questionId.correct === selectedBtn) {
//     selectedButton.classList.add('btn-correct-answer');
//     return score++;
//   } else {
//     selectedButton.classList.add('btn-wrong-answer');
//     return score;
//   }
// };
