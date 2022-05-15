'use strict';

import { quizData } from './data.js';
import { initQuestionPage, updateScore } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initFinalPage } from './pages/finalPage.js';

const loadApp = () => {
  //If a selected answer is  stored in local data storage
  if (localStorage.getItem('selectedAnswersArray')) {
    const amountOfQuestions = quizData.questions.length;

    //Create a selectedAnswer string and assign the value of 'selectedAnswerArray' key in  local data storage.
    const selectedAnswers = localStorage.getItem('selectedAnswersArray');

    //Convert selected Answers string to an array .
    const selectedAnswersArray = JSON.parse(selectedAnswers);
    const amountOfQuestionAnswered = selectedAnswersArray.length;

    //If all questions are replied then load final page
    if (amountOfQuestionAnswered === amountOfQuestions) {
      const currentScore = updateScore(quizData.questions);
      initFinalPage(currentScore, amountOfQuestions);
    }

    //If all questions are not replied then load question page
    else {
      quizData.currentQuestionIndex = amountOfQuestionAnswered;
      for (let i = 0; i < amountOfQuestionAnswered; i++) {
        quizData.questions[i].selected = selectedAnswersArray[i];
      }

      initQuestionPage();
    }
  }

  //If no selected answer is stored in local data repository load welcome page
  else {
    quizData.currentQuestionIndex = 0;

    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
