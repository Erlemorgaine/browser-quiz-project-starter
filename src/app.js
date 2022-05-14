'use strict';

import { quizData } from './data.js';
import { initQuestionPage } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initFinalPage } from './pages/finalPage.js';

const loadApp = () => {
  if (localStorage.getItem('selectedAnswersArray')) {
    const selectedAnswers = localStorage.getItem('selectedAnswersArray');
    const selectedAnswersArray = JSON.parse(selectedAnswers);
    const amountOfQuestionAnswered = selectedAnswersArray.length;

    if (amountOfQuestionAnswered === quizData.questions.length) {
      // const currentScore = quizData.questions.filter(
      //   (question) => question.correct === question.selected
      // );
      initFinalPage();
      return;
    } else {
      quizData.currentQuestionIndex = amountOfQuestionAnswered;
      for (let i = 0; i < amountOfQuestionAnswered; i++) {
        quizData.questions[i].selected = selectedAnswersArray[i];
      }
      initQuestionPage();
    }
  } else {
    quizData.currentQuestionIndex = 0;

    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
