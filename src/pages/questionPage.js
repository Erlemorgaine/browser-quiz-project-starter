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
  const correctAnswer = currentQuestion.correct;

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.addEventListener('click', (e) => {
      checkAnswer(e, key, correctAnswer);
      createScoreElement(e, key, correctAnswer);
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

const checkAnswer = (e, answer, correctAnswer) => {
  const answerButtons = document.querySelectorAll('.btn-answer');
  console.log(answerButtons);

  console.log(`correct answer is ${correctAnswer}`);

  answerButtons.forEach((element) => {
    element.disabled = 'true';
    element.style.backgroundColor = 'red';
  });
  if (answer === correctAnswer) {
    e.target.style.backgroundColor = 'green';
  }
};
