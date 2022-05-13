'use strict';

import { quizData } from './data.js';
import { initQuestionPage } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

const reloadApp = (amountOfQuestionAnswered) => {
  quizData.currentQuestionIndex = amountOfQuestionAnswered;

  for (let key = 0; key < amountOfQuestionAnswered; key++) {
    quizData.questions[key].selected = localStorage.getItem(key);
  }

  initQuestionPage();
};
window.addEventListener('load', () => {
  const amountOfQuestionAnswered = localStorage.length;
  console.log();
  amountOfQuestionAnswered > 0
    ? reloadApp(amountOfQuestionAnswered)
    : loadApp();
});
