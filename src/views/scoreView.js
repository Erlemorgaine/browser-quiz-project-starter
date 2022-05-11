'use strict';

//import { SCORE_VIEW_ID } from '../constants.js';
import { initQuestionPage} from '../pages/questionPage.js';

/**
 * Create a score element
 * @returns {Element}
 */

export const createScoreElement = (score) => {
  const element = document.createElement('div');
  element.className = 'score';

  element.innerHTML = String.raw`
 <p>${score}</p>
`;

  return element;
};


