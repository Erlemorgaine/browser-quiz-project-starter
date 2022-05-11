'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  ANSWER_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScoreElement } from '../views/scoreView.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const indexOfCorrectAnswer = () => {
    switch (currentQuestion.correct) {
      case 'a':
        return 0;
        break;
      case 'b':
        return 1;
        break;
      case 'c':
        return 2;
        break;
      case 'd':
        return 3;
        break;
    }
  };

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.addEventListener('click', (e) => {
      checkAnswer(e, key, indexOfCorrectAnswer());
      createScoreElement(e, key, currentQuestion.correct);
    });
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const checkAnswer = (e, answer, indexOfCorrectAnswer) => {
  const answerButtons = Array.from(document.querySelectorAll('.btn-answer'));
  console.log(answerButtons);
  console.log(`index of correctasnwer is ${indexOfCorrectAnswer}`);

  answerButtons.forEach((element) => {
    console.log(element);
    element.disabled = 'true';
    console.log(`indexof this is ${answerButtons.indexOf(element)}`);
    if (answerButtons.indexOf(element) === indexOfCorrectAnswer) {
      element.style.backgroundColor = 'green';
    } else {
      element.style.backgroundColor = 'red';
    }
  });
};
