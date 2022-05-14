'use strict';

import { quizData } from './data.js';
import { initQuestionPage } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initFinalPage } from './pages/finalPage.js';

const loadApp = () => {
  // TODO: try to put all logic of loading / reloading the app in this function
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
  // TODO: This can go wrong if also other applications put things in localstorage
  const amountOfQuestionAnswered = localStorage.length;

  // TODO: remove log
  console.log();
  amountOfQuestionAnswered > 0
    ? reloadApp(amountOfQuestionAnswered)
    : loadApp();
});
