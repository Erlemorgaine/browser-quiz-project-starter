'use strict';

//import { SCORE_VIEW_ID } from '../constants.js';
import { initQuestionPage} from '../pages/questionPage.js';

/**
 * Create a score element
 * @returns {Element}
 */

export const createScoreElement = () => {
  const element = document.createElement('div');

// TODO: wrap the currentScore in a span element with the SCORE_VIEW_ID as id
  // and use document.getElementById(SCORE_VIEW_ID) in the addEventListener on answerElement
  // in the questionPage to set the new currentScore  element.className = 'score';

  element.innerHTML = String.raw`
 <p> </p>
`;

  return element;
};


