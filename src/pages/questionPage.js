'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SCORE_VIEW_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScoreElement } from '../views/scoreView.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const scoreElement = createScoreElement(5);
  userInterface.appendChild(scoreElement);

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
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


/*
 const userScore = () =>{
  let score = 0;

  const correctAnswer = currentQuestion.correct;
  const selectedAnswer = e.target;
  if (selectedAnswer === correctAnswer) {
    return score++;
  } else {
    return score;
  }
}
  userScore(e, selectedAnswer, correctAnswer);


/*const scoreViewElement = document.getElementById(SCORE_VIEW_ID);
const scoreElement = createScoreElement();
scoreViewElement.appendChild(scoreElement); */