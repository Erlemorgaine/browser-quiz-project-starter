'use strict';
import { ANSWER_BUTTON_ID } from '../constants.js';
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const answerBtnId = `${ANSWER_BUTTON_ID}-${key}`;
  const element = document.createElement('li');
  element.innerHTML = String.raw`
  <button id='${answerBtnId}' class="btn-answer button"> ${key}: ${answerText} </button>
  `;
  return element;
};
