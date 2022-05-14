'use strict';

import { USER_INTERFACE_ID } from '../constants.js';
import { createClosingElement } from '../views/finalPageView.js';

export const initFinalPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const closingElement = createClosingElement();
  userInterface.appendChild(closingElement);

  closingElement.innerHTML = String.raw`
  <p> All done!<br> Your final score is : <span id='${CURRENT_SCORE_ID}'>${currentScore}</span> of ${quizData.questions.length} </p>
 `;
  localStorage.clear();
};
