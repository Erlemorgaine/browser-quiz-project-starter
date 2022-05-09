'use strict';
import { ANSWER_BUTTON_ID } from '../constants.js';



const checkAnswer = (e, answerId) => {

  //key selected===correct than change the color of the button and add 1 to score
  const selectedButton = document.getElementById(selectedBtn);
  if (questionId.correct === selectedBtn) {
    selectedButton.classList.add('btn-correct-answer');
    return score++;
  } else {
    selectedButton.classList.add('btn-wrong-answer');
    return score;
  }
};


/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  const answerElementId = `${ANSWER_BUTTON_ID}-${key}`;

  element.innerHTML = String.raw`
  <button id='${answerElementId}' class="btn-answer">  ${key}: ${answerText};</button>
  
  `;

  element.addEventListener('click', (event) => checkAnswer(event, answerElementId));
  
  return element;
};

