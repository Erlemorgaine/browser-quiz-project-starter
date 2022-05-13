'use strict';


import { quizData } from '../data.js';

/**
 * Create a score element
 * @returns {Element}
 */

export const createTimerElement = (sec) => {
  const element = document.createElement('div');

 

  element.innerHTML = String.raw`
 <p> Time : <span id='${}'> ${sec}</span> </p>
`;

  return element;
};
