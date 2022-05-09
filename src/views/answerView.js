'use strict';
import { ANSWER_BUTTON_ID } from '../constants.js';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
  <button id="{ ANSWER_BUTTON_ID }" class="btn-answer">  ${key}: ${answerText};</button>
  
  `;
  return element;
};
